/**
 * Site Configuration
 * Centralized content management for easy updates
 */

const SITE_CONFIG = {
  // Theme Settings
  theme: {
    default: "dark", // "dark" or "light"
    storageKey: "growth-team-theme",
  },

  // WhatsApp Settings
  whatsapp: {
    enabled: true,
    number: "919135086955", // Without + sign
    message: "Hi! I'm interested in learning more about your Business Operating Systems.",
  },

  // Contact Form Settings (Web3Forms - FREE, no backend needed)
  // Get your access key at: https://web3forms.com (free tier: 250 submissions/month)
  contactForm: {
    enabled: true,
    accessKey: "71a17c66-76e0-4520-9d5e-cf9e3f0dd867", // Replace with your Web3Forms access key
    successMessage: "Thank you! We'll get back to you within 24 hours.",
    errorMessage: "Oops! Something went wrong. Please try again or email us directly.",
  },

  // Brand
  brand: {
    name: "Growth Team",
    tagline: "Business Operating Systems",
    subtitle: "Mobile-First. Multi-Role. Built for Real Operations.",
    email: "kumod353@gmail.com",
    phone: "+91 9135086955",
  },

  // Navigation
  nav: [
    { label: "Problem", href: "#problem" },
    { label: "Solutions", href: "#solutions" },
    { label: "Architecture", href: "#architecture" },
    { label: "Products", href: "#products" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    headline: "Business Operating Systems",
    subheadline: "Mobile-First. Multi-Role. Built for Real Operations.",
    description: "We design and build custom business operating systems for companies where day-to-day execution actually matters.",
    ctaPrimary: "Let's Talk",
    ctaSecondary: "See How It Works",
  },

  // Problems We Solve
  problems: {
    title: "The Business Reality We Fix",
    subtitle: "Most operational businesses struggle with:",
    items: [
      {
        icon: "💬",
        title: "WhatsApp Coordination",
        description: "Critical business data scattered across chat groups",
      },
      {
        icon: "📊",
        title: "Excel & Spreadsheets",
        description: "Manual tracking that breaks at scale",
      },
      {
        icon: "🔌",
        title: "Disconnected CRMs",
        description: "Tools that don't talk to each other",
      },
      {
        icon: "⏰",
        title: "Manual Follow-ups",
        description: "Revenue leaking through the cracks",
      },
      {
        icon: "🧩",
        title: "Fragmented Tools",
        description: "No single source of truth",
      },
      {
        icon: "👤",
        title: "People Dependency",
        description: "Business stops when key people are unavailable",
      },
    ],
    result: {
      title: "This results in:",
      items: [
        "Revenue leakage and missed opportunities",
        "Inefficiency at scale",
        "Poor accountability",
        "Growth that creates chaos instead of leverage",
      ],
    },
  },

  // Who This Is For
  industries: {
    title: "Who This Is For",
    subtitle: "Built for businesses that operate with people + processes",
    items: [
      { icon: "🚛", name: "Fleet & Logistics" },
      { icon: "📦", name: "Delivery & Last-Mile" },
      { icon: "🍽️", name: "Restaurants & Food Chains" },
      { icon: "🏢", name: "Real Estate & Brokerages" },
      { icon: "🎓", name: "Coaching & Training Centers" },
      { icon: "🏥", name: "Clinics & Healthcare" },
      { icon: "🔧", name: "Service-Based Businesses" },
      { icon: "📈", name: "CRM-Heavy Organizations" },
      { icon: "🏪", name: "Multi-Branch Companies" },
    ],
    idealClient: {
      title: "Ideal Client Fit",
      traits: [
        "Values structure over shortcuts",
        "Thinks long-term, not quick fixes",
        "Prefers quality over cheapest option",
        "Thinks in systems, not patches",
      ],
    },
  },

  // Philosophy
  philosophy: {
    title: "Our Philosophy",
    quote: "We don't build apps.",
    emphasis: "We build business operating systems.",
    pillars: [
      { icon: "🏗️", title: "Create Structure", description: "Organized workflows that scale" },
      { icon: "✅", title: "Enforce Accountability", description: "Clear ownership at every step" },
      { icon: "🔗", title: "Connect Sales & Operations", description: "One unified system" },
      { icon: "👁️", title: "Real-Time Visibility", description: "See everything as it happens" },
      { icon: "🎯", title: "Support Better Decisions", description: "Data-driven insights" },
    ],
    footer: "The system adapts to how your business actually works—not the other way around.",
  },

  // System Architecture
  architecture: {
    title: "System Architecture",
    subtitle: "Proven & Repeatable. Customized to Your Workflows.",
    layers: [
      {
        id: "core",
        badge: "MANDATORY",
        badgeColor: "cyan",
        title: "Core Operational Layer",
        description: "This is the foundation. It runs sales, operations, and execution in one system.",
        features: [
          "Role-based access (Admin / Staff / Agent / User)",
          "Lead, booking, order, task lifecycle management",
          "Clear ownership and status tracking",
          "Follow-ups, reminders, and escalations",
          "File uploads (documents, proofs, receipts)",
          "Notifications and alerts",
          "Secure authentication and permissions",
        ],
        replaces: ["Standalone CRMs", "Manual follow-ups", "Spreadsheets and chat coordination"],
      },
      {
        id: "analytics",
        badge: "DEFAULT",
        badgeColor: "green",
        title: "Analytics & Visibility Layer",
        description: "This layer turns activity into clarity.",
        features: [
          "Real-time dashboards",
          "Key performance indicators (KPIs)",
          "Custom reports",
          "Trend analysis",
          "Rule-based alerts",
        ],
        examples: [
          "Performance by staff, agent, branch, or location",
          "Lead-to-conversion visibility",
          "Cost vs output comparisons",
          "Delay and inefficiency patterns",
        ],
      },
      {
        id: "intelligence",
        badge: "OPTIONAL",
        badgeColor: "purple",
        title: "Intelligence Layer",
        description: "Added once meaningful data exists. A strong competitive advantage.",
        features: [
          "Anomaly detection",
          "Early warning signals",
          "Demand or workload forecasting",
          "Risk and performance indicators",
        ],
        purpose: [
          "Highlight what needs attention",
          "Predict issues before they escalate",
          "Support faster, smarter decisions",
        ],
      },
    ],
  },

  // Devices
  devices: {
    title: "Mobile-First, Device-Everywhere",
    subtitle: "Operations happen on the ground. That's why everything is mobile-first by design.",
    platforms: [
      { icon: "📱", name: "Mobile" },
      { icon: "📱", name: "Tablet" },
      { icon: "💻", name: "Web" },
      { icon: "🖥️", name: "Desktop" },
      { icon: "📱", name: "iOS" },
      { icon: "📱", name: "Android" },
    ],
    tagline: "One system. All devices. No duplication. No fragmentation.",
  },

  // Process
  process: {
    title: "End-to-End Delivery",
    subtitle: "Zero Client Burden",
    steps: [
      {
        number: "01",
        title: "You Explain",
        description: "Share your business, pain points, and workflows",
        side: "you",
      },
      {
        number: "02",
        title: "We Analyze",
        description: "Deep dive into your operations and requirements",
        side: "we",
      },
      {
        number: "03",
        title: "We Design",
        description: "Create the system architecture tailored to you",
        side: "we",
      },
      {
        number: "04",
        title: "We Build",
        description: "Develop all applications, backend, and infrastructure",
        side: "we",
      },
      {
        number: "05",
        title: "We Deploy",
        description: "Launch and provide ongoing support",
        side: "we",
      },
    ],
    footer: "You never need to manage technology.",
  },

  // Products
  products: {
    title: "Built & Deployed",
    subtitle: "Systems we've already delivered",
    items: [
      {
        name: "POS SAAS",
        tagline: "Point of Sale System",
        description: "Complete retail operations platform with inventory, billing, and multi-branch management.",
        color: "cyan",
        image: "assets/pos-saas.png", // Replace with your screenshot
      },
      {
        name: "FarmToHome",
        tagline: "Farm-to-Consumer Platform",
        description: "End-to-end solution connecting farmers directly to consumers with logistics and ordering.",
        color: "green",
        image: "assets/farm-to-home.png", // Replace with your screenshot
      },
      {
        name: "Fleet360",
        tagline: "Fleet Management Solution",
        description: "Real-time tracking, driver management, and operational analytics for fleet businesses.",
        color: "purple",
        image: "assets/fleet360.png", // Replace with your screenshot
      },
    ],
  },

  // Pricing
  pricing: {
    title: "Delivery Model",
    subtitle: "Clear. Predictable. Balanced.",
    timeline: {
      title: "Timeline",
      items: [
        { label: "Core System", value: "30–45 days" },
        { label: "Enhancements", value: "Phased" },
      ],
    },
    payment: {
      title: "Payment Structure",
      items: [
        { percentage: 40, label: "At project initiation" },
        { percentage: 40, label: "After core delivery" },
        { percentage: 20, label: "At launch" },
      ],
    },
    ranges: {
      title: "Investment",
      items: [
        { label: "Core System", range: "$10,000 – $20,000" },
        { label: "Intelligence Layer", range: "$3,000 – $7,000" },
      ],
      note: "Pricing depends on workflow complexity, number of roles, and operational scale. We price on business value, not hours.",
    },
  },

  // Competitive Reality
  competitive: {
    title: "Competitive Reality",
    subtitle: "Your competitors are already moving",
    theyDo: [
      "Automating execution",
      "Centralizing sales and operations",
      "Reducing dependency on people",
      "Making faster, data-backed decisions",
    ],
    youRisk: [
      "Leak revenue",
      "Lose control as teams grow",
      "React instead of lead",
    ],
    youGain: [
      "Scale without chaos",
      "Compete with larger players",
      "Operate with confidence",
    ],
  },

  // Technology
  technology: {
    title: "Technology Assurance",
    principles: [
      { icon: "🛡️", title: "Stability over trends" },
      { icon: "📈", title: "Scalability over shortcuts" },
      { icon: "🔧", title: "Maintainability over complexity" },
    ],
    ensures: [
      "Long-term reliability",
      "Easy future upgrades",
      "No forced rewrites",
      "Secure, scalable systems",
    ],
    footer: "Technology will never become a liability.",
  },

  // Contact / CTA
  contact: {
    title: "Let's Build Your System",
    subtitle: "We take care of technology, architecture, and execution. You focus on decisions and growth.",
    cta: "Start the Conversation",
    footer: "Together, we build systems that scale.",
  },

  // Footer
  footer: {
    copyright: "© 2026 Growth Partner. All rights reserved.",
    tagline: "Building systems that scale.",
  },
};

// Export for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
