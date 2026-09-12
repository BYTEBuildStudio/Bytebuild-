export interface ServiceDetail {
  slug: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSubhead: string;
  whoItIsFor: string[];
  whatWeBuild: {
    title: string;
    description: string;
  }[];
  whatsIncluded: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    badge: "ENGINEERED FOR SCALE & CONVERSIONS",
    heroHeadline: "Websites that work as hard as",
    heroHighlight: "your business.",
    heroSubhead: "We engineer bespoke, lightning-fast websites and web applications tailored to your business model. No clunky templates, no bloated page builders—pure performance and design craftsmanship.",
    whoItIsFor: [
      "Growing companies that need to establish immediate market authority",
      "Businesses losing customers to slow or outdated legacy websites",
      "Founders needing custom web applications, client portals, or internal dashboards",
      "Brands requiring rock-solid SEO architecture to win organic search traffic"
    ],
    whatWeBuild: [
      {
        title: "Corporate & Business Platforms",
        description: "Authoritative digital headquarters designed to convert prospective high-ticket clients and communicate brand excellence."
      },
      {
        title: "Interactive Web Applications",
        description: "Fast, state-driven client portals, calculators, booking flows, and SaaS dashboards built with React and TypeScript."
      },
      {
        title: "High-Intent Campaign Landing Pages",
        description: "Focused single-page funnels engineered specifically to maximize return on ad spend (ROAS) from paid campaigns."
      },
      {
        title: "Technical SEO & Speed Optimization",
        description: "Zero-bloat architecture achieving 95+ Core Web Vitals scores, instant page loads, and structured Schema markup."
      }
    ],
    whatsIncluded: [
      "100% custom UI/UX design (Figma prototype to code)",
      "Mobile-first responsive architecture tested on 15+ screen sizes",
      "Semantic HTML5, Schema.org microdata, and dynamic sitemaps",
      "Interactive micro-animations and smooth layout transitions",
      "Secure hosting setup with Cloudflare CDN & automated SSL certificates",
      "Integrations with Google Analytics 4, Tag Manager, and Search Console"
    ],
    process: [
      {
        step: "01",
        title: "Business Scope & Tech Architecture",
        description: "We analyze your business model, customer journey, and conversion targets to plan the optimal tech stack and wireframe hierarchy."
      },
      {
        step: "02",
        title: "High-Fidelity Interface Design",
        description: "We craft custom visual layouts with balanced typography, subtle depth, and purposeful interactions reflecting your brand."
      },
      {
        step: "03",
        title: "Full-Stack Development & QA",
        description: "We build using modern React, Vite, and Tailwind CSS, subjecting the code to rigorous device testing and speed audits."
      },
      {
        step: "04",
        title: "Global CDN Launch & Handover",
        description: "We link your domain, test forms and analytics end-to-end, and provide full ownership documentation."
      }
    ],
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Vite", "Motion", "Node.js", "Cloudflare"],
    faqs: [
      {
        question: "How long does a typical web development project take?",
        answer: "Most custom business websites and landing pages are completed within 7 to 14 days, depending on scope and feature complexity. We work in sprint cycles to deliver functional iterations quickly."
      },
      {
        question: "Will my website look good on mobile phones?",
        answer: "Mobile is our primary design canvas. Over 70% of business visitors arrive on mobile, so every component is designed from 360px upwards to ensure thumb-friendly navigation and lightning speed."
      },
      {
        question: "Do you use WordPress or generic site builders?",
        answer: "No. We build custom frontends using clean React, TypeScript, and Tailwind CSS. This guarantees near-instant loading, zero plugin security vulnerabilities, and unlimited flexibility as your business grows."
      },
      {
        question: "Do I own the website code once complete?",
        answer: "Yes, absolutely. You receive 100% intellectual property ownership of the codebase, assets, and design files upon project completion."
      }
    ]
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Automation",
    badge: "INTELLIGENT WORKFLOWS & CUSTOM COPILOTS",
    heroHeadline: "Intelligent automation tailored to",
    heroHighlight: "your business workflow.",
    heroSubhead: "Automate repetitive customer queries, streamline lead intake, and deploy contextual AI assistants that work around the clock to capture inquiries and deliver real business value.",
    whoItIsFor: [
      "Businesses spending excessive time answering identical customer questions",
      "Coaching institutes, consultants, and agencies managing high inquiry volumes",
      "Teams seeking to automate lead qualification, intake routing, and follow-ups",
      "Companies wanting to integrate custom AI assistants trained on their knowledge base"
    ],
    whatWeBuild: [
      {
        title: "24/7 Contextual AI Customer Agents",
        description: "Smart chat companions embedded directly in your website that understand your services, qualify leads, and schedule consultations."
      },
      {
        title: "Automated Lead Qualification Funnels",
        description: "Interactive smart questionnaires that categorize prospects by budget, timeline, and requirements before notifying your team."
      },
      {
        title: "Knowledge Base AI Search & Retrieval",
        description: "Fast semantic search and answering engines trained on your internal documentation, FAQs, and product catalogs."
      },
      {
        title: "CRM & Notification Webhook Automations",
        description: "Instant data pipelines routing new leads to WhatsApp, Slack, Gmail, or your CRM in real time without manual copy-pasting."
      }
    ],
    whatsIncluded: [
      "Custom system prompts tuned specifically to your brand tone",
      "Gemini AI integration with server-side proxy security",
      "Fallback routing to human staff (WhatsApp / Email) when needed",
      "Session context memory and conversation analytics",
      "Mobile-friendly chat interfaces with zero layout shift",
      "Complete testing against edge cases and prompt injection"
    ],
    process: [
      {
        step: "01",
        title: "Workflow & Data Audit",
        description: "We identify repetitive bottlenecks, catalog your knowledge documents, and define the exact role of the AI agent."
      },
      {
        step: "02",
        title: "Agent Architecture & Prompt Engineering",
        description: "We configure the underlying LLM logic, boundary guardrails, and knowledge context for accurate, hallucination-free replies."
      },
      {
        step: "03",
        title: "UI Integration & Integration Hooks",
        description: "We embed the chat interface seamlessly into your website with real-time streaming responses."
      },
      {
        step: "04",
        title: "Validation & Continuous Tuning",
        description: "We test against real customer conversations, refine the system prompt, and establish logging monitors."
      }
    ],
    techStack: ["Google Gemini API", "React", "TypeScript", "Serverless Functions", "Node.js", "Webhooks"],
    faqs: [
      {
        question: "Can the AI hallucinate or give wrong answers?",
        answer: "We implement strict retrieval guardrails and system prompt constraints. If a user asks something outside your verified business knowledge, the AI politely offers to route them to your direct WhatsApp or email instead of guessing."
      },
      {
        question: "How does the AI assistant connect to my team?",
        answer: "Whenever a user provides their contact information or requests human assistance, the system can instantly push a formatted notification to your WhatsApp or email inbox."
      },
      {
        question: "What AI models do you support?",
        answer: "We primarily utilize Google Gemini models for fast latency, high reasoning quality, and cost efficiency. We also build custom integrations for specialized workflows."
      }
    ]
  },

  "ecommerce": {
    slug: "ecommerce",
    title: "E-commerce & Ordering",
    badge: "FRICTIONLESS CHECKOUT & DIGITAL MENUS",
    heroHeadline: "High-converting online storefronts and",
    heroHighlight: "digital ordering systems.",
    heroSubhead: "From bespoke retail storefronts to contactless tableside QR dining systems, we create sleek shopping experiences designed to increase average order values and eliminate transaction friction.",
    whoItIsFor: [
      "Retail brands launching direct-to-consumer (D2C) online stores",
      "Restaurants, cafes, and lounges needing contactless tableside QR menus",
      "Brands wanting custom product configurators and high-converting checkout funnels",
      "Businesses moving away from sluggish templates to bespoke, fast commerce"
    ],
    whatWeBuild: [
      {
        title: "Bespoke D2C Storefronts",
        description: "Fast-loading retail catalogs with high-res product visualizers, instant filtering, and streamlined cart experiences."
      },
      {
        title: "Tableside Contactless QR Menus",
        description: "Interactive digital menus accessible via QR scan with zero app install required. Easily update prices and dish availability."
      },
      {
        title: "Personalized Product Calculators",
        description: "Interactive discovery tools (e.g., supplement dose estimators, sizing assistants) that guide buyers to the right product."
      },
      {
        title: "Direct WhatsApp Ordering & Checkout",
        description: "Single-tap checkout pipelines generating pre-filled WhatsApp order summaries for direct customer fulfillment."
      }
    ],
    whatsIncluded: [
      "Custom product catalog layouts and high-speed search",
      "Dietary or category filters (Veg/Non-Veg, sizes, pricing)",
      "Secure payment gateway integration readiness or WhatsApp ordering",
      "Mobile-optimized cart drawers and frictionless checkout UX",
      "High-res image compression for instant page speeds",
      "Tableside reservation and customer inquiry modules"
    ],
    process: [
      {
        step: "01",
        title: "Catalog Structuring & User Journey",
        description: "We map your inventory categories, pricing variations, and determine whether direct checkout or WhatsApp ordering fits your customer base."
      },
      {
        step: "02",
        title: "Visual Commerce Design",
        description: "We design product cards, dietary indicators, cart drawers, and category tabs focused entirely on clarity and appetizing visuals."
      },
      {
        step: "03",
        title: "Cart & State Engine Development",
        description: "We build responsive state management for item additions, price calculations, and checkout routing."
      },
      {
        step: "04",
        title: "Testing & Menu Onboarding",
        description: "We verify ordering on multiple mobile devices, generate high-resolution QR codes for print standees, and deploy."
      }
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion", "Payment Gateways", "WhatsApp Business API"],
    faqs: [
      {
        question: "Can I update food items or prices myself?",
        answer: "Yes. We configure simple structured data files or lightweight admin portals so you can adjust prices, add dishes, or toggle items as 'Sold Out' within seconds."
      },
      {
        question: "Do customers need to download an app for the QR menu?",
        answer: "No app download is ever required. Guests simply open their smartphone camera, point it at the tableside QR standee, and the menu opens instantly in their browser within 1 second."
      },
      {
        question: "Can we collect orders directly over WhatsApp?",
        answer: "Yes! Direct WhatsApp checkout is one of our most popular setups for emerging brands and local restaurants. The customer builds their cart, clicks 'Order via WhatsApp', and sends a formatted order slip directly to your staff."
      }
    ]
  }
};
