export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'web-apps' | 'ecommerce' | 'hospitality' | 'ai';
  categoryLabel: string;
  client: string;
  businessGoal: string;
  challenge: string;
  solution: string;
  impact: string;
  description: string;
  features: string[];
  techStack: string[];
  duration: string;
  liveDemoUrl: string;
  mockupKey: 'fitfuel' | 'gharkharch' | 'khubkhao' | 'eduflow';
  accentColor: string;
  badgeColor: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "fitfuel",
    title: "FitFuel Nutrition",
    subtitle: "High-Performance Supplement & Fitness Web Platform",
    category: "ecommerce",
    categoryLabel: "E-commerce & Fitness Platform",
    client: "FitFuel Co. (Gurugram)",
    businessGoal: "Transform local offline gym supplement sales into an authoritative, digital-first subscription and product catalog channel.",
    challenge: "Fitness enthusiasts faced analysis paralysis with generic supplements and lacked a personalized way to gauge their protein requirements before buying.",
    solution: "We engineered a high-intensity dark-mode web application featuring an interactive BMI & protein calculator, structured supplement categories, and responsive mobile-first checkout navigation.",
    impact: "Captured 300+ subscriptions in the first 14 days and decreased sales cycle bounce rates by 45%.",
    description: "A modern, high-intensity platform constructed for a nutrition brand, featuring customized supplement catalog displays, fitness nutrition plans, an embedded BMI interactive calculator, and full mobile optimization.",
    features: [
      "Interactive BMI & Daily Protein Calculator tailored to body type",
      "Dynamic supplement catalog with quick filtering and nutritional breakdowns",
      "Optimized dark aesthetic engineered for gym-floor legibility",
      "Instant checkout pathways with frictionless lead capture"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
    duration: "10 Days",
    liveDemoUrl: "https://fit-fuel-nutrition--maliv7511.replit.app/",
    mockupKey: "fitfuel",
    accentColor: "from-orange-500/20 to-amber-500/5 hover:border-orange-500/40",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  {
    id: "gharkharch",
    title: "GharKharch Ledger",
    subtitle: "Household Budgeting & Personal Finance Web Application",
    category: "web-apps",
    categoryLabel: "Personal Finance & Web App",
    client: "GharKharch Open Ledger Initiative",
    businessGoal: "Simplify daily household expense tracking with an instant, private, client-side budgeting interface that eliminates spreadsheet friction.",
    challenge: "Standard budgeting tools require invasive bank logins, load slowly over mobile connections, and overwhelm non-technical family members with clutter.",
    solution: "Designed and built a distraction-free, privacy-preserving financial ledger. Users can log daily transactions in seconds, review categorical breakdowns, and balance their budgets with zero latency.",
    impact: "Enables users to input monthly expense sheets in under 3 minutes with zero network delays.",
    description: "A fully local budgeting web application built to help households log income, record multi-category expenditures, review ledger logs, and study budgets through real-time chart widgets.",
    features: [
      "Instant transaction logger with category tagging (Food, Fitness, Leisure)",
      "Dynamic expense tallies and real-time cash balance calculator",
      "Private, client-side persistence requiring no sign-up or tracking",
      "Responsive touch-first interface for effortless grocery line entry"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vite"],
    duration: "7 Days",
    liveDemoUrl: "https://gharkharchapp.netlify.app/",
    mockupKey: "gharkharch",
    accentColor: "from-teal-500/20 to-emerald-500/5 hover:border-teal-500/40",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20"
  },
  {
    id: "khubkhao",
    title: "KhubKhao Fine Dining",
    subtitle: "Digital Hospitality Showcase & Contactless QR Menu",
    category: "hospitality",
    categoryLabel: "Restaurant Website & QR Menu",
    client: "KhubKhao Fine Dining Restaurant",
    businessGoal: "Modernize tableside menu discovery and eliminate physical menu reprint overhead when seasonal pricing changes.",
    challenge: "Physical paper menus deteriorated quickly, cost money to reprint on every ingredient price change, and lacked visual appetite appeal.",
    solution: "Constructed an inviting digital dining portal with high-resolution food presentation, instant tableside QR menu scanning, veg/non-veg toggle filters, and direct table reservation booking.",
    impact: "Increased average order value by 22% through high-resolution dish showcasing and reduced tableside bottlenecks.",
    description: "A luxurious digital dining companion including dynamic organic banners, full food menu categories, tableside QR code mockups, and client table reservation modals that streamline booking queues.",
    features: [
      "Contactless QR code menu optimized for instantaneous phone scanning",
      "Dietary filtering (Vegetarian / Non-Vegetarian / Chef's Specialties)",
      "Integrated table reservation request system with real-time confirmation",
      "Warm ambient color palette engineered to enhance appetite appeal"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
    duration: "12 Days",
    liveDemoUrl: "https://premium-indian-resta-ba1f.bolt.host",
    mockupKey: "khubkhao",
    accentColor: "from-amber-500/20 to-yellow-500/5 hover:border-amber-500/40",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  {
    id: "eduflow",
    title: "EduFlow Academy",
    subtitle: "Institutional Education Hub & Contextual AI Companion",
    category: "ai",
    categoryLabel: "Education Portal & AI Companion",
    client: "EduFlow Tutorials (Jaipur)",
    businessGoal: "Automate student admissions inquiries and provide homework guidance outside standard tutoring hours.",
    challenge: "Administrative staff were overwhelmed answering the same admission inquiries on WhatsApp, and students struggled with study doubts late in the evening.",
    solution: "Created an authoritative academic portal featuring student batch schedules, curriculum overviews, fee calculators, and an embedded AI study companion trained to answer student queries.",
    impact: "Boosted admission inquiry signups by 60% and automated student homework questions outside teaching hours.",
    description: "A sophisticated coaching portal designed to centralize student registrations, batch calendars, fee statistics, and feature an intelligent, context-aware AI Tutor Companion widget for homework questions.",
    features: [
      "Context-aware AI tutor companion answering curriculum questions 24/7",
      "Interactive batch schedule calendar and instructor profile directory",
      "Seamless admissions inquiry form with automated counselor routing",
      "Trust-building academic achievements and student score showcases"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini AI API", "Vite"],
    duration: "14 Days",
    liveDemoUrl: "https://lovable.dev/preview/25Jfm2svowRwtCsgSyyzvuEuQgKn2Rnj",
    mockupKey: "eduflow",
    accentColor: "from-indigo-500/20 to-blue-500/5 hover:border-indigo-500/40",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  }
];

export const getProjectById = (id: string): ProjectItem | undefined => {
  return PROJECTS.find(p => p.id === id);
};
