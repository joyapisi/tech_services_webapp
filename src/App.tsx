import React, { useState } from 'react';
import { PageTab } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { WorkshopRegisterModal } from './components/WorkshopRegisterModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [scrollSection, setScrollSection] = useState<string | undefined>(undefined);
  const [workshopRegisterModalOpen, setWorkshopRegisterModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const handleSetActiveTab = (tab: PageTab, sectionId?: string) => {
    setActiveTab(tab);
    setScrollSection(sectionId);
    if (sectionId && tab === 'home') {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const handleBookConsultation = () => {
    handleSetActiveTab('home', 'contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 relative">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        onOpenWorkshopRegister={() => setWorkshopRegisterModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab !== 'blog' ? (
          <HomePage
            setActiveTab={handleSetActiveTab}
            initialScrollSection={scrollSection}
            onOpenWorkshopRegister={() => setWorkshopRegisterModalOpen(true)}
            selectedProjectId={selectedProjectId}
          />
        ) : (
          <BlogPage
            setActiveTab={handleSetActiveTab}
            selectedArticleId={selectedArticleId}
            onSelectArticle={(id) => setSelectedArticleId(id)}
          />
        )}
      </main>

      {/* Global Sticky / Floating Contact & WhatsApp Actions */}
      <FloatingActions
        onBookConsultation={handleBookConsultation}
      />

      {/* Global Footer */}
      <Footer
        setActiveTab={handleSetActiveTab}
        onOpenWorkshopRegister={() => setWorkshopRegisterModalOpen(true)}
      />

      {/* 4-Day Teen Challenge Workshop Registration Modal */}
      <WorkshopRegisterModal
        isOpen={workshopRegisterModalOpen}
        onClose={() => setWorkshopRegisterModalOpen(false)}
      />

    </div>
  );
}
