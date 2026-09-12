import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  MessageCircle, 
  Instagram, 
  Send, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Restaurant & Dining',
    budget: 'Under ₹25,000',
    description: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const businessTypes = [
    'Restaurant & Dining',
    'Gym & Fitness',
    'Coaching & Academy',
    'E-commerce & Retail',
    'Web Application / Dashboard',
    'Professional Services',
    'Other'
  ];

  const budgetTiers = [
    'Under ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000+'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please describe your project requirements';
    } else if (formData.description.trim().length < 15) {
      errs.description = 'Please provide a bit more detail (at least 15 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const emailRecipient = 'thebytebuildofficial@gmail.com';
    const emailSubject = `ByteBuild Project Intake - ${formData.businessName || formData.fullName}`;
    
    const emailBody = `BYTEBUILD OFFICIAL PROJECT INTAKE SHEET
----------------------------------------
Full Name: ${formData.fullName}
Business / Company Name: ${formData.businessName || 'Not Provided'}
Email Address: ${formData.email}
Phone / WhatsApp: ${formData.phone || 'Not Provided'}
Business Sector: ${formData.businessType}
Estimated Budget: ${formData.budget}

PROJECT REQUIREMENTS & OBJECTIVES:
${formData.description}
----------------------------------------
Submitted via ByteBuild 2.0 Official Intake Desk.`;

    const mailtoUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Simulate swift network verification then launch mail client
    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          businessName: '',
          email: '',
          phone: '',
          businessType: 'Restaurant & Dining',
          budget: 'Under ₹25,000',
          description: ''
        });
      }, 5000);
    }, 600);
  };

  const generateWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello ByteBuild team, I'm interested in starting a project for ${formData.businessName || 'my business'}. My name is ${formData.fullName || 'there'}.`
    );
    return `https://wa.me/916367207775?text=${text}`;
  };

  return (
    <div className="bg-[#05070c] text-white pt-32 pb-24 overflow-hidden" id="contact-page">
      {/* Background Ambience */}
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-purple-600/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Heading */}
        <div className="text-left space-y-4 max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
            Let's build something<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              meaningful.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 font-sans font-light leading-relaxed">
            Tell us about your business, idea, or problem. We'll figure out the next step together.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Guarantees (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-5">
              <h3 className="text-lg font-display font-bold text-white">
                Direct Communication
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Prefer an immediate conversation? Reach out directly to our engineering team on WhatsApp or send us an email.
              </p>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/916367207775"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/20 hover:border-emerald-500/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block">
                    WHATSAPP FAST RESPONSE
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    +91 6367207775
                  </span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Replies typically in &lt; 2 hours
                  </span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:thebytebuildofficial@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/15 transition-all group"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                    DIRECT EMAIL
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    thebytebuildofficial@gmail.com
                  </span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Send RFP, scopes, or questions
                  </span>
                </div>
              </a>

              {/* Instagram Community */}
              <a
                href="https://instagram.com/official.bytebuild"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/15 transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block">
                    INSTAGRAM
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    @official.bytebuild
                  </span>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    Agency updates & behind-the-scenes
                  </span>
                </div>
              </a>
            </div>

            {/* Guarantees Box */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-4">
              <span className="text-xs font-mono tracking-widest uppercase text-gray-400 font-semibold block">
                WHAT TO EXPECT
              </span>

              <div className="space-y-3 text-sm text-gray-300 font-sans">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>No high-pressure sales pitch. Only clear technical guidance.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Transparent quote with milestone deliverables.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Full NDA and code confidentiality assured.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Project Intake Form (7 Cols) */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090d16]/90 border border-white/10 shadow-2xl backdrop-blur-xl relative text-left">
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-6 mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-2"
                  >
                    <div className="flex items-center gap-2 font-bold text-emerald-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Intake Sheet Drafted Successfully</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans">
                      Your default mail client has been opened with your pre-formatted project inquiry. We will review your requirements and respond within 2 hours.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-medium">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                        errors.fullName ? 'border-red-500/80' : 'border-white/10'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-medium">
                      Business or Company Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. FitPulse Gyms"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-medium">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@business.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all ${
                        errors.email ? 'border-red-500/80' : 'border-white/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-medium">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Business Sector and Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-medium">
                      Business Sector
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    >
                      {businessTypes.map((type, idx) => (
                        <option key={idx} value={type} className="bg-[#090d16] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-medium">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                    >
                      {budgetTiers.map((tier, idx) => (
                        <option key={idx} value={tier} className="bg-[#090d16] text-white">
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Project Description */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-gray-300 font-medium">
                    Project Requirements & Goals <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us what you're building, what problems you're trying to solve, and any timelines you're working toward..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none ${
                      errors.description ? 'border-red-500/80' : 'border-white/10'
                    }`}
                  />
                  {errors.description && (
                    <p className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit Action Button */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-xl shadow-blue-500/20 hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    id="submit-project-inquiry"
                  >
                    {isSubmitting ? (
                      <span>Drafting Correspondence...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] font-mono text-gray-500">
                    🔒 Secure submission. Your information is strictly confidential.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
