/**
 * Growth Teams — Site Configuration
 * All website content is managed here.
 * Brand: Growth Teams | Domain: growthteams.in
 */

const SITE_CONFIG = {

  // ── Brand ─────────────────────────────────────────────
  brand: {
    name: "Growth Teams",
    tagline: "Custom Software. International Standards.",
    domain: "growthteams.in",
    email: "hello@growthteams.in",
    phone: "+91 9135086955",
    location: "India",
    founded: "2026",
  },

  // ── WhatsApp ───────────────────────────────────────────
  whatsapp: {
    enabled: true,
    number: "919135086955",
    message: "Hi! I'd like to discuss a software project with Growth Teams.",
  },

  // ── Contact Form (Web3Forms) ───────────────────────────
  contactForm: {
    enabled: true,
    accessKey: "71a17c66-76e0-4520-9d5e-cf9e3f0dd867",
    successMessage: "Thank you. We will respond within one business day.",
    errorMessage: "Something went wrong. Please email us at hello@growthteams.in",
  },

  // ── Navigation ─────────────────────────────────────────
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ],

  // ── Hero ───────────────────────────────────────────────
  hero: {
    eyebrow: "Software Development Studio — India",
    headline: "We build software\nthat scales your business.",
    subheadline: "Growth Teams partners with operational companies in the US, Europe, Australia, and the Middle East to deliver custom software — on time, to spec, every time.",
    ctaPrimary: "Start a Project",
    ctaSecondary: "See Our Work",
    stats: [
      { value: "3+", label: "Systems Delivered" },
      { value: "2", label: "Countries Served" },
      { value: "45", label: "Day Core Delivery" },
    ],
  },

  // ── Services ───────────────────────────────────────────
  services: {
    eyebrow: "What We Build",
    headline: "End-to-end software for operational businesses.",
    subtitle: "We build systems that replace manual processes, reduce people-dependency, and give your business real-time visibility.",
    items: [
      {
        number: "01",
        title: "Mobile Applications",
        description: "Native iOS and Android apps built with Flutter. One codebase, two platforms, no compromise on performance or offline capability.",
        tags: ["Flutter", "iOS", "Android", "Offline-first"],
      },
      {
        number: "02",
        title: "Business Software Systems",
        description: "Custom web platforms and internal tools — CRMs, booking systems, ERP, POS, and operational dashboards built exactly to your workflows.",
        tags: ["React", "Django", "FastAPI", "PostgreSQL"],
      },
      {
        number: "03",
        title: "Backend & Cloud Infrastructure",
        description: "Scalable APIs, databases, and cloud deployments. Your system stays online, secure, and fast as you grow from 10 users to 10,000.",
        tags: ["AWS", "GCP", "REST APIs", "Docker"],
      },
      {
        number: "04",
        title: "AI-Enhanced Features",
        description: "Intelligent automation, document processing, and AI-powered insights integrated directly into your existing or new software system.",
        tags: ["OpenAI", "Computer Vision", "NLP", "Automation"],
      },
      {
        number: "05",
        title: "Workflow Automation",
        description: "Eliminate the manual, repetitive work that drains your team's time. We identify the bottlenecks in your operations and automate them — approvals, notifications, scheduling, data sync, and reporting — so your team focuses on work that actually requires a human.",
        tags: ["Zapier-level logic", "Triggered workflows", "Multi-step pipelines", "Scheduled tasks"],
        useCases: [],
      },
      {
        number: "06",
        title: "AI Agents",
        description: "Purpose-built AI agents that work inside your business operations — not generic chatbots, but trained, context-aware agents that take real actions on your behalf.",
        tags: ["LLM-powered", "Tool-use", "Context-aware", "Multi-agent systems"],
        useCases: [
          {
            label: "Sales Follow-up Agent",
            detail: "Reads your CRM, identifies leads with no activity in 5+ days, drafts personalised follow-up emails, and flags high-priority deals for human review.",
          },
          {
            label: "Document Processing Agent",
            detail: "Extracts structured data from invoices, contracts, or delivery receipts — feeds it directly into your system without manual data entry.",
          },
          {
            label: "Support Triage Agent",
            detail: "Classifies inbound support requests by urgency and category, auto-resolves common queries, and routes the rest to the right team member.",
          },
          {
            label: "Operations Monitor Agent",
            detail: "Watches your dashboards for anomalies — late deliveries, low stock, missed targets — and sends actionable alerts before problems escalate.",
          },
          {
            label: "Onboarding Agent",
            detail: "Guides new staff through onboarding steps, answers process questions from your SOPs, and confirms task completion without manager involvement.",
          },
        ],
      },
    ],
  },

  // ── About / Story ──────────────────────────────────────
  about: {
    eyebrow: "Our Story",
    headline: "Built from rural India.\nTrusted internationally.",
    paragraphs: [
      "Growth Teams was founded on a clear belief: exceptional software does not require an expensive city office. It requires discipline, clear processes, and a team that takes quality personally.",
      "We are based in rural India, which keeps our costs lean without compromising our standards. Our developers are trained to international benchmarks — clear communication, documented processes, and delivery that matches what was promised.",
      "Every system we build is designed to last. Not a prototype, not a quick fix — a production-grade platform your business can grow on for years.",
    ],
    values: [
      {
        title: "Delivery over promises",
        description: "We commit to timelines and hold ourselves accountable to them.",
      },
      {
        title: "Systems thinking",
        description: "We build lasting structure, not short-term workarounds.",
      },
      {
        title: "Long-term relationships",
        description: "Most clients return for Phase 2. That is how we measure success.",
      },
      {
        title: "The rural advantage",
        description: "Lower overhead. Higher quality. The same international standards.",
      },
    ],
  },

  // ── Process ────────────────────────────────────────────
  process: {
    eyebrow: "How We Work",
    headline: "A structured process. Zero surprises.",
    subtitle: "You explain your business once. We handle everything from there.",
    steps: [
      {
        number: "01",
        title: "Discovery",
        description: "One focused call. We understand your business, workflows, pain points, and goals. No generic questionnaires.",
        owner: "Together",
      },
      {
        number: "02",
        title: "Proposal",
        description: "A detailed scope document with a fixed price, milestone plan, and delivery timeline — delivered within 48 hours.",
        owner: "Growth Teams",
      },
      {
        number: "03",
        title: "Build",
        description: "Fortnightly demos, direct communication, and version-controlled delivery. You see the system being built in real time.",
        owner: "Growth Teams",
      },
      {
        number: "04",
        title: "Launch & Support",
        description: "Full deployment, staff training, and 30 days of post-launch support included in every engagement.",
        owner: "Growth Teams",
      },
    ],
  },

  // ── Work / Case Studies ────────────────────────────────
  work: {
    eyebrow: "Case Studies",
    headline: "Systems we have built and deployed.",
    items: [
      {
        id: "pos-saas",
        category: "Retail Operations",
        name: "POS SAAS",
        description: "A complete point-of-sale and inventory management platform for multi-branch retail businesses. Handles billing, stock tracking, staff roles, and real-time analytics across locations.",
        outcome: "Replaced spreadsheets and manual billing for 3 retail businesses.",
        color: "navy",
        image: "assets/pos-saas.png",
      },
      {
        id: "farm-to-home",
        category: "Agriculture & Logistics",
        name: "FarmToHome",
        description: "An end-to-end platform connecting farmers directly to consumers. Handles ordering, logistics coordination, driver tracking, and payment processing.",
        outcome: "Reduced farm-to-door delivery coordination time by 40%.",
        color: "forest",
        image: "assets/farm-to-home.png",
      },
      {
        id: "fleet360",
        category: "Fleet Management",
        name: "Fleet360",
        description: "Real-time fleet tracking and driver management system with operational analytics, maintenance scheduling, and client-facing status dashboards.",
        outcome: "Manages 50+ vehicles across 2 logistics companies.",
        color: "slate",
        image: "assets/fleet360.png",
      },
    ],
  },

  // ── Pricing ────────────────────────────────────────────
  pricing: {
    eyebrow: "Investment",
    headline: "Clear pricing. No surprises.",
    subtitle: "We price on business value and project scope — not hours. Every engagement starts with a fixed-price proposal before any work begins.",
    tiers: [
      {
        name: "Core System",
        range: "$15,000 – $40,000",
        timeline: "30 – 45 days",
        description: "A complete, production-ready software system built to your exact requirements.",
        includes: [
          "Requirements analysis and architecture design",
          "Role-based access and user management",
          "Core workflow and process automation",
          "Admin dashboard and reporting",
          "Deployment on your infrastructure",
          "30-day post-launch support",
        ],
        highlight: false,
      },
      {
        name: "Enterprise System",
        range: "$40,000 – $80,000",
        timeline: "60 – 90 days",
        description: "Multi-module platforms with complex integrations, multi-role workflows, and AI-enhanced features.",
        includes: [
          "Everything in Core System",
          "Advanced analytics and KPI dashboards",
          "Third-party integrations (payment, ERP, CRM)",
          "AI and automation feature integration",
          "Dedicated project manager",
          "90-day post-launch support",
        ],
        highlight: true,
      },
    ],
    payment: {
      title: "Payment Structure",
      subtitle: "Split across three milestones — aligned to delivery, not just time.",
      items: [
        { percentage: 40, label: "At project initiation" },
        { percentage: 40, label: "At core delivery milestone" },
        { percentage: 20, label: "At final launch" },
      ],
    },
    note: "Not sure which tier fits? Book a free 30-minute discovery call. We will give you an honest scope assessment before any commitment.",
  },

  // ── Contact ────────────────────────────────────────────
  contact: {
    eyebrow: "Get In Touch",
    headline: "Let's build something together.",
    subtitle: "Tell us about your project. We respond to every inquiry within one business day.",
    cta: "Send Message",
    footer: "Prefer a call? Reach us via WhatsApp.",
  },

  // ── Footer ─────────────────────────────────────────────
  footer: {
    tagline: "Custom software for operational businesses.",
    copyright: "© 2026 Growth Teams. All rights reserved.",
    location: "Built from rural India.",
  },
};

// Node.js export (for any tooling/tests)
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
