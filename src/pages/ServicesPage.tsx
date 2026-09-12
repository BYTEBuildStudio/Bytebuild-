import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Cpu, 
  ShoppingBag, 
  Layers, 
  Server, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Zap
} from 'lucide-react';
import { CTASection } from '../components/common/CTASection';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const offerings = [
    {
      title: "Web Development",
      category: "CORE CAPABILITY",
      slug: "/services/web-development",
      headline: "High-performance websites built for market authority.",
      description: "Custom corporate platforms and web experiences built with modern React & TypeScript. Zero clunky WordPress templates. Pure speed and responsive excellence.",
      deliverables: [
        "Custom UI/UX & design prototype",
        "Mobile-first responsive architecture",
        "95+ Google Core Web Vitals score",
        "SEO schema markup and fast CDN delivery"
      ],
      icon: Globe,
      color: "from-blue-500/20 to-indigo-500/5 hover:border-blue-500/40 text-blue-400"
    },
    {
      title: "AI & Automation",
      category: "INTELLIGENT SYSTEMS",
      slug: "/services/ai-automation",
      headline: "Contextual AI assistants and automated lead routing.",
      description: "Automate repetitive inquiries, qualify prospective clients 24/7, and deploy intelligent chat companions trained directly on your business knowledge.",
      deliverables: [
        "Context-aware AI customer agent",
        "WhatsApp & email inquiry webhook pipelines",
        "Strict anti-hallucination business guardrails",
        "Automated questionnaire qualification"
      ],
      icon: Cpu,
      color: "from-purple-500/20 to-indigo-500/5 hover:border-purple-500/40 text-purple-400"
    },
    {
      title: "E-commerce & QR Menus",
      category: "DIGITAL COMMERCE",
      slug: "/services/ecommerce",
      headline: "Frictionless storefronts and contactless dining menus.",
      description: "Launch sleek shopping experiences and instant tableside QR ordering systems that eliminate printing costs, speed up orders, and raise average order values.",
      deliverables: [
        "Instant tableside QR menu scanner",
        "Direct WhatsApp ordering pipeline",
        "Dietary tagging (Veg / Non-Veg)",
        "Mobile-optimized cart drawer"
      ],
      icon: ShoppingBag,
      color: "from-emerald-500/20 to-teal-500/5 hover:border-emerald-500/40 text-emerald-400"
    },
    {
      title: "High-Conversion Landing Pages",
      category: "GROWTH MARKETING",
      slug: "/services/web-development",
      headline: "Focused campaign pages designed to maximize ad ROI.",
      description: "Distraction-free single-page funnels engineered to convert cold traffic from Google, Instagram, and Meta ads into qualified consultations.",
      deliverables: [
        "Laser-focused single CTA architecture",
        "Sub-second load times on mobile 4G/5G",
        "High-contrast trust & credential hierarchy",
        "Form submission analytics integration"
      ],
      icon: Layers,
      color: "from-amber-500/20 to-orange-500/5 hover:border-amber-500/40 text-amber-400"
    },
    {
      title: "Business Systems & Portals",
      category: "INTERNAL TOOLS",
      slug: "/services/web-development",
      headline: "Secure client hubs, dashboards, and operational portals.",
      description: "Centralize customer data, manage scheduling, log ledgers, and automate operational workflows with custom web applications tailored to your business.",
      deliverables: [
        "Client registration & dashboard portals",
        "Real-time expense & financial trackers",
        "Role-based view controllers",
        "Zero-latency state persistence"
      ],
      icon: Server,
      color: "from-teal-500/20 to-cyan-500/5 hover:border-teal-500/40 text-teal-400"
    },
    {
      title: "Custom Software Engineering",
      category: "TAILORED CODE",
      slug: "/services/web-development",
      headline: "Bespoke digital products designed from the ground up.",
      description: "When off-the-shelf tools fail to fit your exact business logic, we architect custom full-stack solutions built to scale without vendor lock-in.",
      deliverables: [
        "Custom API integrations & Webhooks",
        "Specialized interactive calculators",
        "Modular TypeScript architecture",
        "100% intellectual property ownership"
      ],
      icon: Code2,
      color: "from-rose-500/20 to-pink-500/5 hover:border-rose-500/40 text-rose-400"
    }
  ];

  return (
    <div className="bg-[#05070c] text-white pt-32 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLUTIONS CATALOG</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Technology that solves<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              real business problems.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed">
            Every service we deliver is designed around business outcomes: acquiring customers, automating routine tasks, and establishing modern authority.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-gradient-to-b ${service.color} border border-white/[0.08] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400 font-semibold">
                      {service.category}
                    </span>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400 mb-3">
                      {service.headline}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[11px] font-mono text-gray-400 block uppercase tracking-wider">
                      Included Capabilities:
                    </span>
                    {service.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNavigate(service.slug)}
                    className="w-full py-3 px-4 rounded-xl text-xs font-mono font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};
