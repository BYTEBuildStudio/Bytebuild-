import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, Instagram, Send, CheckCircle, Smartphone, Clock, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Restaurant',
    budget: 'Under ₹25,000',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.description) return;

    // Prefill details for standard Mailto and Gmail link redirection
    const emailRecipient = 'thebytebuildofficial@gmail.com';
    const emailSubject = `ByteBuild Project Inquiry - ${formData.businessName || formData.fullName}`;
    
    const emailBody = `BYTEBUILD OFFICIAL INQUIRY SHEET
----------------------------------------
Full Name: ${formData.fullName}
Business / Company Name: ${formData.businessName || 'Not Provided'}
Email Address: ${formData.email}
Phone Number: ${formData.phone || 'Not Provided'}
Business Sector: ${formData.businessType}
Estimated Budget: ${formData.budget}

PROJECT REQUIRMENTS DESCRIPTION:
${formData.description}
----------------------------------------
Sent via ByteBuild Serverless Portal.`;

    // Construct standard mailto link
    const mailtoUrl = `mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Attempt to open in a new tab to prevent disrupting current navigation
    window.open(mailtoUrl, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        businessType: 'Restaurant',
        budget: 'Under ₹25,000',
        description: ''
      });
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative bg-[#050505] overflow-hidden"
    >
      {/* Decorative Glow elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Contact Information & Channels */}
          <div className="lg:col-span-5 text-left space-y-8" id="contact-left-details">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-blue-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white leading-tight">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Completely Amazing
                </span>
              </h2>
              <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">
                Have an active project in mind? Or need help auditing your current webpage's conversion speed? Talk to our architects today. We answer all emails and WhatsApp texts in under 2 hours.
              </p>
            </div>

            {/* Structured Info cards */}
            <div className="space-y-4" id="contact-info-cards">
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a]/60 border border-white/5 hover:border-white/10 transition-colors">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block uppercase tracking-wider">OFFICIAL CORRESPONDENCE</span>
                  <a href="mailto:thebytebuildofficial@gmail.com" className="text-sm font-sans font-bold text-gray-200 hover:text-blue-400 transition-colors">
                    thebytebuildofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a]/60 border border-white/5 hover:border-white/10 transition-colors">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block uppercase tracking-wider">WHATSAPP CHAT CHANNEL</span>
                  <a 
                    href="https://wa.me/916367207775" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm font-sans font-bold text-gray-200 hover:text-emerald-400 transition-colors"
                  >
                    +91 6367207775
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a]/60 border border-white/5 hover:border-white/10 transition-colors">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 block uppercase tracking-wider">INSTAGRAM COMMUNITY</span>
                  <a 
                    href="https://instagram.com/official.bytebuild" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm font-sans font-bold text-gray-200 hover:text-purple-400 transition-colors"
                  >
                    @official.bytebuild
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Button blocks */}
            <div className="grid grid-cols-3 gap-3" id="contact-social-triggers">
              <a 
                href="mailto:thebytebuildofficial@gmail.com"
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-gray-300 hover:text-white transition-all text-xs font-semibold gap-1.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Email Us</span>
              </a>
              <a 
                href="https://wa.me/916367207775"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-gray-300 hover:text-white transition-all text-xs font-semibold gap-1.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="https://instagram.com/official.bytebuild"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-gray-300 hover:text-white transition-all text-xs font-semibold gap-1.5 cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-purple-400" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Fast Service banner */}
            <div className="flex gap-3 items-start p-4 bg-white/5 border border-white/5 rounded-2xl">
              <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5 animate-pulse" />
              <div className="space-y-0.5 text-xs">
                <h4 className="text-gray-200 font-bold font-sans">Active Consultation slots open</h4>
                <p className="text-gray-400 font-sans font-light">We can initiate planning grids for new project blueprints within 24 hours of form submission.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-7" id="contact-right-form-panel">
            <div className="bg-[#0a0a0a]/60 border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="border-b border-white/5 pb-4 mb-6">
                <h3 className="text-lg font-display font-black text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-400" /> Tell us about your project
                </h3>
                <p className="text-xs text-gray-400 font-sans mt-1">
                  Fill in your coordinates and requirements. Submitting will prefill your details inside Gmail.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" id="project-inquiry-form">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Your Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Business Name</label>
                    <input 
                      type="text" 
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. FitFuel Gym"
                      className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@business.com"
                      className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 99999 99999"
                      className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Business Sector</label>
                    <select 
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                    >
                      <option value="Restaurant" className="bg-[#0a0a0a]">Restaurant / QR Menu</option>
                      <option value="Gym & Fitness" className="bg-[#0a0a0a]">Gym & Fitness</option>
                      <option value="Coaching Institute" className="bg-[#0a0a0a]">Coaching Institute</option>
                      <option value="Startup / Tech" className="bg-[#0a0a0a]">Startup / SaaS</option>
                      <option value="Local Business" className="bg-[#0a0a0a]">Local Retail / Shop</option>
                      <option value="Personal Brand" className="bg-[#0a0a0a]">Personal Portfolio</option>
                      <option value="E-commerce Store" className="bg-[#0a0a0a]">E-commerce Store</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Project Budget (Optional)</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans"
                    >
                      <option value="Under ₹25,000" className="bg-[#0a0a0a]">Under ₹25,000</option>
                      <option value="₹25,000 - ₹50,000" className="bg-[#0a0a0a]">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000" className="bg-[#0a0a0a]">₹50,000 - ₹1,00,000</option>
                      <option value="Above ₹1,00,000" className="bg-[#0a0a0a]">Above ₹1,00,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono tracking-wider text-gray-400 uppercase">Tell us about your objectives *</label>
                  <textarea 
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your goals. What pages do you need? Who are your main competitors? What is your current website (if any)?"
                    className="w-full bg-[#050505] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all font-sans resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-white text-black font-bold py-4 px-6 rounded-xl hover:bg-gray-200 cursor-pointer active:scale-95 transition-all text-sm font-mono tracking-wider uppercase"
                >
                  <Send className="w-4 h-4 text-black" /> SEND INQUIRY MESSAGE
                </button>

              </form>

              {/* Status Feedback popup */}
              <AnimatePresence>
                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-[#050505]/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
                    id="contact-form-success"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                    <h4 className="text-xl font-display font-black text-white">Opening Gmail Portal...</h4>
                    <p className="text-xs text-gray-400 font-sans max-w-sm mt-1 leading-relaxed">
                      We have formulated your project specifications into a prefilled email drafts file. Please click "Send" in the Gmail panel that popped up.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>

      {/* PERSISTENT FLOATING WHATSAPP CHAT BUTTON */}
      <a 
        href="https://wa.me/916367207775" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-45 flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white rounded-full shadow-[0_4px_30px_rgba(16,185,129,0.5)] hover:shadow-[0_4px_45px_rgba(16,185,129,0.75)] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
        aria-label="Chat on WhatsApp"
        id="whatsapp-floating-trigger"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
        {/* Unread badge pulse */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 text-[9px] font-bold items-center justify-center text-white leading-none">1</span>
        </span>
      </a>
    </section>
  );
};
