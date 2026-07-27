import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  CheckCircle2, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  Loader2,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Building2,
  Lock,
  Copy,
  Check
} from 'lucide-react';

interface WorkshopRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkshopRegisterModal: React.FC<WorkshopRegisterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    gradeLevel: 'Senior High (Grades 10-12)',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    holidaySession: 'April 2026 (Spring Holiday)',
    trackPreference: 'All 3 Pillars (UI/UX + Data + AI)',
    paymentMethod: 'mpesa' as 'mpesa' | 'paybill' | 'card',
    mpesaPhone: '',
    mpesaTransactionRef: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const [loading, setLoading] = useState(false);
  const [registeredResult, setRegisteredResult] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.parentEmail || !formData.parentPhone) {
      setErrorMessage('Please fill in student name and parent contact details.');
      return;
    }

    if (formData.paymentMethod === 'mpesa' && !formData.mpesaPhone && !formData.parentPhone) {
      setErrorMessage('Please provide an M-Pesa phone number for the payment prompt.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const mpesaNumToUse = formData.mpesaPhone || formData.parentPhone;

    try {
      const response = await fetch('/api/workshop/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          mpesaPhone: mpesaNumToUse
        })
      });

      const data = await response.json();
      if (response.ok) {
        setRegisteredResult(data.registration);
      } else {
        setErrorMessage(data.error || 'Failed to complete registration.');
      }
    } catch (err) {
      setErrorMessage('Network error during registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="bg-slate-900 border border-amber-500/50 rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 soft-glow-mustard relative">
        
        {/* Close Modal */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {registeredResult ? (
          /* Confirmation Ticket Card */
          <div className="space-y-6 animate-in fade-in text-center">
            <div className="w-16 h-16 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center mx-auto text-amber-300">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Registration Confirmed
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-100 mt-2">
                Spot Reserved Successfully!
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Confirmation sent to <strong className="text-amber-300">{registeredResult.parentEmail}</strong>
              </p>
            </div>

            {/* Printable Pass Ticket */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/40 text-left space-y-4 font-mono text-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-400 text-[10px]">SOLVED BY TECH • TEEN PASS</span>
                <span className="text-amber-300 font-bold">{registeredResult.registrationCode}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div>
                  <span className="text-slate-400 block text-[9px]">STUDENT NAME</span>
                  <span className="text-slate-100 font-bold">{registeredResult.studentName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px]">GRADE LEVEL</span>
                  <span className="text-slate-100">{registeredResult.gradeLevel}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px]">HOLIDAY SESSION</span>
                  <span className="text-amber-300 font-bold">{registeredResult.holidaySession}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px]">TUITION FEE</span>
                  <span className="text-emerald-400 font-bold">{registeredResult.amountPaid}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-900/40 space-y-1">
                <span className="text-[9px] text-slate-400 uppercase">Payment Status</span>
                <div className="text-xs text-slate-200 font-sans flex items-center justify-between">
                  <span>Method: <strong className="text-amber-300 uppercase">{registeredResult.paymentMethod}</strong></span>
                  <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {registeredResult.status}
                  </span>
                </div>
                {registeredResult.paymentMethod === 'paybill' && (
                  <div className="text-[10px] text-slate-400 pt-1 font-mono">
                    Paybill: <strong className="text-amber-300">542542</strong> • A/C: <strong className="text-amber-300">00104816683050</strong>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                <span>STATUS: CONFIRMED</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  SEAT RESERVED
                </span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-mustard-gradient hover:bg-mustard-hover transition-all"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <div className="space-y-6">
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Holiday Challenge Registration</span>
              </div>
              <h2 className="font-heading text-2xl font-bold text-slate-100">
                Register for 4-Day Teen Workshop
              </h2>
              
              {/* Requested Top Description */}
              <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-medium italic">
                "Don't let the holiday slip away through scrolling social media."
              </div>

              <p className="text-xs text-slate-300 font-light pt-1">
                Held every holiday in April, August, and December for Junior and Senior High Schoolers.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-200 text-xs">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Student Name & Grade */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="e.g. Jordan Lee"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Grade Level *</label>
                  <select
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Junior High (Grades 7-9)">Junior High (Grades 7-9)</option>
                    <option value="Senior High (Grades 10-12)">Senior High (Grades 10-12)</option>
                  </select>
                </div>
              </div>

              {/* Holiday Session Choice */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Select Holiday Session *</span>
                </label>
                <select
                  value={formData.holidaySession}
                  onChange={(e) => setFormData({ ...formData, holidaySession: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                >
                  <option value="April 2026 (Spring Holiday)">April 2026 (Spring Holiday)</option>
                  <option value="August 2026 (Summer Break)">August 2026 (Summer Break)</option>
                  <option value="December 2026 (Winter Holiday)">December 2026 (Winter Holiday)</option>
                </select>
              </div>

              {/* Parent Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="e.g. Robert Lee"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Parent Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    placeholder="e.g. robert@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold">Parent Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.parentPhone}
                  onChange={(e) => {
                    const phone = e.target.value;
                    setFormData(prev => ({
                      ...prev,
                      parentPhone: phone,
                      mpesaPhone: prev.mpesaPhone ? prev.mpesaPhone : phone
                    }));
                  }}
                  placeholder="e.g. 0712345678 or +254 712 345 678"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* PAYMENT SECTION AT BOTTOM OF FORM */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-bold uppercase text-slate-200">Workshop Tuition Fee</span>
                  </div>
                  <div className="px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-extrabold text-sm">
                    KES 5,000
                  </div>
                </div>

                <label className="text-[11px] font-mono text-slate-300 uppercase font-semibold block">Select Payment Method *</label>
                
                {/* Method Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'mpesa' })}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-1 ${
                      formData.paymentMethod === 'mpesa'
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>M-Pesa STK</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'paybill' })}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-1 ${
                      formData.paymentMethod === 'paybill'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span>Paybill / Bank</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all flex flex-col items-center gap-1 ${
                      formData.paymentMethod === 'card'
                        ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-400" />
                    <span>Debit / Card</span>
                  </button>
                </div>

                {/* M-Pesa Input Block */}
                {formData.paymentMethod === 'mpesa' && (
                  <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-2.5 animate-in fade-in">
                    <div className="flex items-center justify-between text-xs text-emerald-300 font-mono">
                      <span>M-Pesa Express Payment</span>
                      <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded font-bold">Instant STK Push</span>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-300 uppercase">M-Pesa Phone Number to Prompt *</label>
                      <input
                        type="tel"
                        value={formData.mpesaPhone || formData.parentPhone}
                        onChange={(e) => setFormData({ ...formData, mpesaPhone: e.target.value })}
                        placeholder="e.g. 0712345678 or 254712345678"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-emerald-500/40 text-slate-100 text-xs focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                    <p className="text-[10px] text-slate-300 leading-normal font-light">
                      Upon clicking register, an M-Pesa popup prompt for <strong className="text-emerald-300">KES 5,000</strong> will be pushed directly to this phone number. Enter your PIN to finalize.
                    </p>
                  </div>
                )}

                {/* Paybill / Bank Details Block */}
                {formData.paymentMethod === 'paybill' && (
                  <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 space-y-3 animate-in fade-in">
                    <div className="text-xs text-amber-300 font-mono font-bold flex items-center justify-between">
                      <span>Bank / Paybill Transfer</span>
                      <span className="text-[10px] text-slate-400">Tuition: KES 5,000</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-950 p-3 rounded-xl border border-amber-500/30">
                      <div>
                        <span className="text-[9px] text-slate-400 block uppercase">PAYBILL NUMBER</span>
                        <div className="flex items-center justify-between pt-0.5">
                          <strong className="text-amber-300 text-sm font-bold">542542</strong>
                          <button
                            type="button"
                            onClick={() => handleCopy('542542', 'paybill')}
                            className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                            title="Copy Paybill"
                          >
                            {copiedField === 'paybill' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <span className="text-[9px] text-slate-400 block uppercase">A/C NO</span>
                        <div className="flex items-center justify-between pt-0.5">
                          <strong className="text-amber-300 text-xs font-bold tracking-tight">00104816683050</strong>
                          <button
                            type="button"
                            onClick={() => handleCopy('00104816683050', 'ac')}
                            className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                            title="Copy Account Number"
                          >
                            {copiedField === 'ac' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-300 uppercase">Transaction Reference Code (Optional)</label>
                      <input
                        type="text"
                        value={formData.mpesaTransactionRef}
                        onChange={(e) => setFormData({ ...formData, mpesaTransactionRef: e.target.value })}
                        placeholder="e.g. QX729KLM8"
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Card Payment Block */}
                {formData.paymentMethod === 'card' && (
                  <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/40 space-y-2.5 animate-in fade-in">
                    <div className="flex items-center justify-between text-xs text-blue-300 font-mono">
                      <span>Debit / Credit Card Payment</span>
                      <span className="text-[10px] text-slate-400">256-bit SSL Secure</span>
                    </div>

                    <div className="space-y-2">
                      <input
                        type="text"
                        value={formData.cardName}
                        onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                        placeholder="Cardholder Name"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-blue-400 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        placeholder="Card Number (4532 •••• •••• ••••)"
                        className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-blue-400 focus:outline-none font-mono"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          value={formData.cardExpiry}
                          onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                          placeholder="MM / YY"
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-blue-400 focus:outline-none text-center font-mono"
                        />
                        <input
                          type="password"
                          maxLength={4}
                          value={formData.cardCvc}
                          onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                          placeholder="CVC"
                          className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:border-blue-400 focus:outline-none text-center font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-mustard-gradient hover:bg-mustard-hover transition-all text-xs flex items-center justify-center gap-2 soft-glow-mustard mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Processing KES 5,000 Payment & Registration...</span>
                  </>
                ) : (
                  <>
                    <GraduationCap className="w-4 h-4" />
                    <span>Pay KES 5,000 & Confirm Student Workshop Spot</span>
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
