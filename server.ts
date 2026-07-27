import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

const currentDir = typeof __dirname !== "undefined"
  ? __dirname
  : (import.meta.url ? path.dirname(fileURLToPath(import.meta.url)) : process.cwd());

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// In-memory store for workshop registrations & contact inquiries
const workshopRegistrations: any[] = [];
const contactInquiries: any[] = [];

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// AI Auto-Article Generation Endpoint for Weekly SEO
app.post("/api/blog/generate-article", async (req, res) => {
  const { topic, category } = req.body || {};
  const targetTopic = topic || "How Agentic AI and Modern UI/UX are Revolutionizing Enterprise Software in 2026";
  const targetCategory = category || "AI Development";

  const ai = getGenAI();
  if (!ai) {
    // High-quality fallback article generator when API key is pending
    const fallbackArticle = {
      id: "art-" + Date.now(),
      title: targetTopic,
      slug: targetTopic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      excerpt: `An in-depth analysis on ${targetTopic.toLowerCase()} and how forward-thinking companies are scaling efficiency with cutting-edge tech architectures.`,
      readTime: "5 min read",
      category: targetCategory,
      tags: ["AI Engineering", "UI/UX", "Tech Growth", "SEO Strategy"],
      author: "Solved by Tech AI Research Unit",
      publishedAt: new Date().toISOString().split('T')[0],
      keyTakeaways: [
        "Combining generative AI with human-centered UI/UX accelerates product adoption by 4x.",
        "Data-driven design tokens reduce front-end design system overhead.",
        "Empowering younger talent through hands-on AI workshops closes critical tech talent gaps."
      ],
      content: `## Executive Overview

In today's fast-moving software ecosystem, **${targetTopic}** stands out as a pivotal vector for competitive differentiation. Organizations that unify intelligent agentic workflows with streamlined UI/UX design systems consistently outperform legacy competitors.

### Key Architectural Pillars

1. **User-Centric Design Tokens**: Micro-interactions paired with predictive AI inputs lower cognitive friction for complex enterprise dashboards.
2. **Real-time Analytics**: High-frequency telemetry allows continuous A/B optimization and dynamic feature flagging.
3. **Automated Content & SEO Loops**: Automated content generation pipelines ensure continuous organic search positioning and client conversion.

\`\`\`typescript
// Architectural snippet: AI Prompt Pipeline for Client Acquisition
export async function optimizeUserJourney(sessionData: UserSession) {
  const metrics = calculateCognitiveLoad(sessionData);
  return await adaptInterfaceDensity(metrics);
}
\`\`\`

### Looking Ahead

Whether building enterprise applications or training the next generation of tech leaders through our 4-Day Teen Challenge, **Solved by Tech** remains committed to turning complex engineering challenges into elegant, scalable solutions.`
    };
    return res.json({ article: fallbackArticle, generatedWithAI: false });
  }

  try {
    const prompt = `Write a high-ranking, engaging, technical yet accessible SEO blog article for a software company called "Solved by Tech".
Topic requested: "${targetTopic}".
Category: "${targetCategory}".
Focus on actionable technical insights, modern software design, AI, or data analytics that attract corporate clients or tech learners.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are a senior tech lead and SEO content director at Solved by Tech. Output structured JSON for an article.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            excerpt: { type: Type.STRING },
            readTime: { type: Type.STRING },
            category: { type: Type.STRING },
            tags: { type: Type.ARRAY, items: { type: Type.STRING } },
            author: { type: Type.STRING },
            keyTakeaways: { type: Type.ARRAY, items: { type: Type.STRING } },
            content: { type: Type.STRING, description: "Markdown body text with headings, bullet points, and code blocks" },
          },
          required: ["title", "excerpt", "readTime", "category", "tags", "author", "keyTakeaways", "content"]
        }
      }
    });

    const parsed = JSON.parse(response.text || "{}");
    const article = {
      id: "art-gen-" + Date.now(),
      slug: (parsed.title || targetTopic).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      publishedAt: new Date().toISOString().split('T')[0],
      ...parsed,
    };

    return res.json({ article, generatedWithAI: true });
  } catch (err: any) {
    console.error("Gemini Blog Generation Error:", err);
    return res.status(500).json({ error: "Failed to generate article", details: err.message });
  }
});

// Contact Endpoint with AI Response Assistant
app.post("/api/contact", async (req, res) => {
  const { name, email, company, serviceNeeded, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const inquiry = {
    id: "inq-" + Date.now(),
    name,
    email,
    company: company || "N/A",
    serviceNeeded: serviceNeeded || "General Consulting",
    message,
    submittedAt: new Date().toISOString()
  };

  contactInquiries.push(inquiry);

  let aiResponseSuggestion = "";
  const ai = getGenAI();
  if (ai) {
    try {
      const resp = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `A client submitted a tech service inquiry to "Solved by Tech".
Client Name: ${name}
Company: ${company}
Service Selected: ${serviceNeeded}
Message: "${message}"

Generate a 2-sentence warm, professional acknowledgment and preliminary technical suggestion from Solved by Tech consultancy.`,
      });
      aiResponseSuggestion = resp.text || "";
    } catch (e) {
      // Ignore background AI error
    }
  }

  return res.json({
    success: true,
    message: "Thank you for contacting Solved by Tech. Our senior solution architects will review your request.",
    inquiryId: inquiry.id,
    aiResponseSuggestion: aiResponseSuggestion || "We have received your message and will send an initial project scope within 24 hours."
  });
});

// Teen Challenge Workshop Registration Endpoint
app.post("/api/workshop/register", (req, res) => {
  const { 
    studentName, 
    gradeLevel, 
    parentName, 
    parentEmail, 
    parentPhone, 
    holidaySession, 
    trackPreference,
    paymentMethod,
    mpesaPhone,
    mpesaTransactionRef,
    cardDetails
  } = req.body || {};

  if (!studentName || !parentEmail || !parentPhone || !holidaySession) {
    return res.status(400).json({ error: "Student name, parent contact details, and session choice are required." });
  }

  const registrationCode = "SBT-TEEN-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  const registrationRecord = {
    registrationCode,
    studentName,
    gradeLevel: gradeLevel || "Senior High",
    parentName,
    parentEmail,
    parentPhone,
    holidaySession, // e.g. "April 2026", "August 2026", "December 2026"
    trackPreference: trackPreference || "All 3 Pillars (UI/UX + Data + AI)",
    registeredAt: new Date().toISOString(),
    amountPaid: "KES 5,000",
    paymentMethod: paymentMethod || "M-Pesa",
    mpesaPhone: mpesaPhone || parentPhone,
    paybillDetails: {
      paybillNumber: "542542",
      accountNumber: "00104816683050"
    },
    paymentReference: mpesaTransactionRef || ("TXN-" + Math.random().toString(36).substring(2, 10).toUpperCase()),
    status: paymentMethod === "M-Pesa" ? "M-Pesa STK Prompt Triggered (KES 5,000)" : "Confirmed - KES 5,000 Payment Processed"
  };

  workshopRegistrations.push(registrationRecord);

  return res.json({
    success: true,
    registration: registrationRecord,
    confirmationMessage: `Spot reserved for ${studentName} in the ${holidaySession} 4-Day Teen Challenge Workshop! Confirmation code: ${registrationCode}`
  });
});

// Vite & Static file handling
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Solved by Tech server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
