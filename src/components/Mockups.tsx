import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Dumbbell, 
  TrendingUp, 
  Calculator, 
  Wallet, 
  Plus, 
  Trash2, 
  Utensils, 
  QrCode, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  Send,
  CheckCircle
} from 'lucide-react';

interface MockupProps {
  type: 'fitfuel' | 'gharkharch' | 'khubkhao' | 'eduflow';
  interactive?: boolean;
}

export const Mockup: React.FC<MockupProps> = ({ type, interactive = true }) => {
  // --- STATE FOR INTERACTIVE DEMOS ---
  // FitFuel Nutrition state
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('175');
  const [bmi, setBmi] = useState<number | null>(22.9);
  const [bmiCategory, setBmiCategory] = useState('Normal');

  const calculateBMI = (w: string, h: string) => {
    const weightNum = parseFloat(w);
    const heightNum = parseFloat(h) / 100;
    if (weightNum > 0 && heightNum > 0) {
      const calculated = parseFloat((weightNum / (heightNum * heightNum)).toFixed(1));
      setBmi(calculated);
      if (calculated < 18.5) setBmiCategory('Underweight');
      else if (calculated < 25) setBmiCategory('Normal');
      else if (calculated < 30) setBmiCategory('Overweight');
      else setBmiCategory('Obese');
    } else {
      setBmi(null);
    }
  };

  // GharKharch state
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', amount: 1200, category: 'Food', date: 'Today' },
    { id: 2, name: 'Gym Membership', amount: 1500, category: 'Fitness', date: 'Yesterday' },
    { id: 3, name: 'Coffee', amount: 150, category: 'Leisure', date: 'Yesterday' }
  ]);
  const [newExpName, setNewExpName] = useState('');
  const [newExpAmount, setNewExpAmount] = useState('');
  const [newExpCategory, setNewExpCategory] = useState('Food');

  const addExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpName || !newExpAmount) return;
    const amount = parseFloat(newExpAmount);
    if (isNaN(amount)) return;
    setExpenses([
      { id: Date.now(), name: newExpName, amount, category: newExpCategory, date: 'Today' },
      ...expenses
    ]);
    setNewExpName('');
    setNewExpAmount('');
  };

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const totalExpense = expenses.reduce((acc, exp) => acc + exp.amount, 0);

  // KhubKhao State
  const [cartCount, setCartCount] = useState(0);
  const [showReservation, setShowReservation] = useState(false);
  const [reservationName, setReservationName] = useState('');
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reservationName) return;
    setReservationSuccess(true);
    setTimeout(() => {
      setReservationSuccess(false);
      setShowReservation(false);
      setReservationName('');
    }, 2000);
  };

  // EduFlow AI Chat State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: "Hello! I am your AI study companion. Ask me anything about your Physics or Math courses!" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const userText = userInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setUserInput('');
    setIsTyping(true);

    setTimeout(() => {
      let aiText = "That's a great question! Based on your Course Syllabus, this concept is covered in Chapter 4: Electromagnetism. Would you like me to generate a practice quiz on this topic?";
      if (userText.toLowerCase().includes('schedule') || userText.toLowerCase().includes('class')) {
        aiText = "Your next Physics batch is scheduled for today at 4:00 PM. I've compiled the preparation notes for you. Click 'View Prep Notes' to download!";
      } else if (userText.toLowerCase().includes('exam') || userText.toLowerCase().includes('test')) {
        aiText = "Based on your progress, you have an upcoming Calculus Mock Exam this Saturday. I suggest reviewing Derivatives and Integrals. Let's do a quick quiz!";
      }
      setChatMessages(prev => [...prev, { sender: 'ai', text: aiText }]);
      setIsTyping(false);
    }, 1500);
  };

  const quickPrompts = [
    "What is today's schedule?",
    "Explain Electromagnetism",
    "Calculate my prep score"
  ];

  return (
    <div className="w-full h-full flex flex-col bg-slate-950 rounded-lg overflow-hidden border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" id={`browser-frame-${type}`}>
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800" id={`browser-header-${type}`}>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="w-1/2 max-w-xs md:max-w-md bg-slate-950 rounded-md py-1 px-3 text-[10px] md:text-xs text-slate-500 font-mono flex items-center justify-between border border-slate-800/80">
          <span className="truncate select-none">
            {type === 'fitfuel' && 'fitfuel-nutrition.com'}
            {type === 'gharkharch' && 'gharkharch.app'}
            {type === 'khubkhao' && 'khubkhao-dining.in'}
            {type === 'eduflow' && 'eduflow-ai.edu'}
          </span>
          <span className="text-slate-700">🔒</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <div className="w-2.5 h-2.5 rounded-full border border-slate-500 flex items-center justify-center text-[8px] font-bold">i</div>
        </div>
      </div>

      {/* Browser Webpage Canvas */}
      <div className="flex-1 overflow-auto bg-slate-950 relative text-slate-300 scrollbar-thin select-none" id={`browser-canvas-${type}`}>
        
        {/* ========================================================= */}
        {/* FITFUEL NUTRITION MOCKUP */}
        {/* ========================================================= */}
        {type === 'fitfuel' && (
          <div className="min-h-full bg-[#050505] text-stone-100 flex flex-col font-sans p-4 relative" id="fitfuel-page">
            {/* Dark background grids */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Micro Nav */}
            <div className="flex items-center justify-between py-1 border-b border-stone-900 z-10">
              <div className="flex items-center gap-1.5 text-orange-500 font-bold tracking-tight text-xs">
                <Dumbbell className="w-3.5 h-3.5" /> FITFUEL
              </div>
              <div className="flex gap-2.5 text-[9px] text-stone-400 font-medium">
                <span className="text-orange-500">Home</span>
                <span>Supplements</span>
                <span>Plans</span>
              </div>
            </div>

            {/* Hero Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-3 items-center z-10">
              <div className="md:col-span-7 space-y-2 text-left">
                <span className="inline-block bg-orange-600/10 text-orange-500 text-[8px] font-bold px-2 py-0.5 rounded-full border border-orange-500/20">
                  PRECISION ENGINEERED NUTRITION
                </span>
                <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight text-stone-100 leading-none">
                  FUEL YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">LIMITS</span>
                </h1>
                <p className="text-[10px] text-stone-400 leading-relaxed max-w-[240px]">
                  Elite formulas for serious athletes. No proprietary blends. Pure performance.
                </p>
                <div className="flex gap-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-black font-extrabold text-[9px] px-3 py-1.5 rounded transition-all shadow-[0_4px_12px_rgba(249,115,22,0.3)]">
                    SHOP PRODUCTS
                  </button>
                  <button className="border border-stone-800 hover:bg-stone-900 text-stone-300 font-bold text-[9px] px-2.5 py-1.5 rounded transition-all">
                    OUR GOAL
                  </button>
                </div>
              </div>

              {/* Whey Tub Graphic (CSS) */}
              <div className="md:col-span-5 flex items-center justify-center relative py-4">
                {/* Orbital lines */}
                <div className="absolute w-24 h-24 border border-orange-500/15 rounded-full animate-spin [animation-duration:8s] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full absolute -top-1" />
                </div>
                <div className="absolute w-32 h-32 border border-amber-500/10 rounded-full animate-spin [animation-duration:12s] [animation-direction:reverse] flex items-center justify-center">
                  <div className="w-1 h-1 bg-amber-400 rounded-full absolute -bottom-0.5" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.15)_0%,transparent_60%)] pointer-events-none" />

                {/* 3D-like pure CSS tub of WHEY */}
                <div className="relative w-16 h-24 bg-gradient-to-b from-stone-900 to-stone-950 rounded-lg border-2 border-orange-500/40 shadow-2xl flex flex-col items-center justify-between p-1.5 overflow-hidden z-10 hover:scale-105 transition-transform duration-300">
                  {/* Lid */}
                  <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-stone-950 via-stone-800 to-stone-950 border-b border-orange-500/30" />
                  {/* Label background */}
                  <div className="my-auto w-full h-14 bg-gradient-to-r from-stone-950 via-orange-950/40 to-stone-950 flex flex-col items-center justify-center p-1 relative">
                    <span className="text-[10px] font-black tracking-tighter text-white">WHEY</span>
                    <span className="text-[7px] font-bold text-orange-500 tracking-widest leading-none">ISOLATE</span>
                    <span className="text-[5px] text-stone-400 mt-1">25G PROTEIN</span>
                  </div>
                  {/* Logo overlay */}
                  <div className="w-3 h-3 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center mb-1">
                    <Dumbbell className="w-1.5 h-1.5 text-orange-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive BMI Calculator */}
            {interactive && (
              <div className="mt-4 p-3 bg-stone-950/95 border border-stone-900 rounded-lg text-left" id="bmi-calc-box">
                <div className="flex items-center gap-1.5 mb-2 border-b border-stone-900 pb-1.5">
                  <Calculator className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-xs font-black uppercase text-stone-200">FITNESS BMI CALCULATOR</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div>
                    <label className="block text-stone-400 mb-0.5">Weight (kg)</label>
                    <input 
                      type="number" 
                      value={weight} 
                      onChange={(e) => { setWeight(e.target.value); calculateBMI(e.target.value, height); }}
                      className="w-full bg-stone-900 border border-stone-800 rounded px-1.5 py-0.5 text-stone-100 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-400 mb-0.5">Height (cm)</label>
                    <input 
                      type="number" 
                      value={height} 
                      onChange={(e) => { setHeight(e.target.value); calculateBMI(weight, e.target.value); }}
                      className="w-full bg-stone-900 border border-stone-800 rounded px-1.5 py-0.5 text-stone-100 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {bmi !== null && (
                  <div className="mt-2.5 flex items-center justify-between bg-stone-900/60 border border-stone-800/40 p-2 rounded">
                    <div className="text-[10px]">
                      <span className="text-stone-400">BMI:</span>{' '}
                      <span className="font-extrabold text-orange-500 text-xs">{bmi}</span>
                    </div>
                    <div className="text-[10px] text-right">
                      <span className="text-stone-400">Status:</span>{' '}
                      <span className={`font-bold ${bmiCategory === 'Normal' ? 'text-green-400' : 'text-orange-400'}`}>
                        {bmiCategory}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* GHARKHARCH MOCKUP */}
        {/* ========================================================= */}
        {type === 'gharkharch' && (
          <div className="min-h-full bg-slate-50 text-slate-800 flex flex-col font-sans p-4 relative" id="gharkharch-page">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <div className="flex items-center gap-1.5 font-bold text-teal-600 text-xs">
                <Wallet className="w-3.5 h-3.5 text-teal-500" /> GharKharch
              </div>
              <div className="flex gap-2 text-[9px] text-slate-500 font-medium items-center">
                <span className="text-teal-600 font-bold">Dashboard</span>
                <span>Ledger</span>
                <span>Budgets</span>
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-[9px]">VM</div>
              </div>
            </div>

            {/* Summary Statistics */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-white p-2 border border-slate-200 rounded-lg shadow-sm text-left">
                <span className="text-[8px] text-slate-400 block font-medium">TOTAL INFLOW</span>
                <span className="text-xs font-bold text-emerald-600">₹45,000</span>
              </div>
              <div className="bg-white p-2 border border-slate-200 rounded-lg shadow-sm text-left">
                <span className="text-[8px] text-slate-400 block font-medium">OUTFLOW</span>
                <span className="text-xs font-bold text-rose-600">₹{totalExpense.toLocaleString()}</span>
              </div>
              <div className="bg-white p-2 border border-slate-200 rounded-lg shadow-sm text-left">
                <span className="text-[8px] text-slate-400 block font-medium">NET BALANCE</span>
                <span className="text-xs font-bold text-teal-600">₹{(45000 - totalExpense).toLocaleString()}</span>
              </div>
            </div>

            {/* Main Section split */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 flex-1 items-start text-left">
              {/* Interactive form */}
              {interactive && (
                <div className="md:col-span-5 bg-white p-2.5 border border-slate-200 rounded-lg shadow-sm space-y-2">
                  <div className="text-[10px] font-bold text-slate-700 border-b border-slate-100 pb-1 flex items-center gap-1">
                    <Plus className="w-3 h-3 text-teal-500" /> Quick Add Expense
                  </div>
                  <form onSubmit={addExpense} className="space-y-1.5 text-[9px]">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Expense Item (e.g., Dinner)" 
                        value={newExpName}
                        onChange={(e) => setNewExpName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:border-teal-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <input 
                        type="number" 
                        placeholder="Amount (₹)" 
                        value={newExpAmount}
                        onChange={(e) => setNewExpAmount(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded px-2 py-1 text-slate-700 focus:outline-none focus:border-teal-500"
                      />
                      <select 
                        value={newExpCategory}
                        onChange={(e) => setNewExpCategory(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded px-1.5 py-1 text-slate-600 focus:outline-none focus:border-teal-500"
                      >
                        <option value="Food">Food</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Leisure">Leisure</option>
                        <option value="Rent">Rent</option>
                        <option value="Bills">Bills</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-teal-500 text-white font-bold py-1 rounded shadow-sm hover:bg-teal-600 transition-colors">
                      Record Expense
                    </button>
                  </form>
                </div>
              )}

              {/* Transactions list & chart */}
              <div className={`${interactive ? 'md:col-span-7' : 'md:col-span-12'} space-y-2`}>
                <div className="bg-white p-2.5 border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-1.5 border-b border-slate-100 pb-1">
                    <span className="text-[10px] font-bold text-slate-700">Recent Transactions</span>
                    <span className="text-[8px] font-bold text-teal-600 flex items-center gap-0.5">
                      <TrendingUp className="w-2.5 h-2.5" /> Live Tracker
                    </span>
                  </div>
                  
                  <div className="space-y-1.5 max-h-[120px] overflow-auto pr-1">
                    {expenses.map((exp) => (
                      <div key={exp.id} className="flex items-center justify-between bg-slate-50 p-1.5 rounded text-[9px] border border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            exp.category === 'Food' ? 'bg-amber-400' :
                            exp.category === 'Fitness' ? 'bg-orange-500' :
                            exp.category === 'Leisure' ? 'bg-purple-500' : 'bg-blue-500'
                          }`} />
                          <div>
                            <p className="font-bold text-slate-700">{exp.name}</p>
                            <span className="text-[7px] text-slate-400">{exp.category} • {exp.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-800">₹{exp.amount}</span>
                          {interactive && (
                            <button 
                              onClick={() => removeExpense(exp.id)}
                              className="text-slate-400 hover:text-rose-500 p-0.5 rounded transition-colors"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* KHUBKHAO DIGITAL MENU MOCKUP */}
        {/* ========================================================= */}
        {type === 'khubkhao' && (
          <div className="min-h-full bg-[#f9f5eb] text-amber-950 flex flex-col font-serif p-4 relative" id="khubkhao-page">
            {/* Soft backdrop accents */}
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-amber-900/15 pb-2 mb-3 z-10 font-sans">
              <div className="flex items-center gap-1 font-bold text-amber-800 text-xs">
                <Utensils className="w-3.5 h-3.5 text-amber-700" /> KhubKhao
              </div>
              <div className="flex items-center gap-3 text-[9px] text-amber-900/70 font-medium">
                <span>Our Story</span>
                <span className="text-amber-800 font-bold">QR Menu</span>
                <button 
                  onClick={() => setShowReservation(true)}
                  className="bg-amber-800 text-amber-50 px-2 py-1 rounded font-bold text-[8px] tracking-wide hover:bg-amber-900 transition-colors"
                >
                  Book Table
                </button>
              </div>
            </div>

            {/* Main restaurant display */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center z-10 text-left">
              <div className="md:col-span-7 space-y-2">
                <span className="inline-block bg-amber-800/10 text-amber-800 text-[8px] font-bold px-2 py-0.5 rounded-full border border-amber-800/20 font-sans">
                  AUTHENTIC INDIAN FLAVOURS
                </span>
                <h1 className="text-lg md:text-xl font-black text-amber-900 leading-tight">
                  Premium QR-Based <br />
                  <span className="text-amber-700 underline decoration-amber-500/30">Dining Experience</span>
                </h1>
                <p className="text-[10px] text-amber-950/70 leading-relaxed font-sans max-w-[220px]">
                  Simplify table ordering and menu discovery with safe contactless QR menus updated instantly.
                </p>

                {/* Micro Menu Cards */}
                <div className="grid grid-cols-2 gap-2 mt-2 pt-1">
                  <div className="bg-white p-2 border border-amber-900/5 rounded-lg shadow-[0_2px_8px_rgba(120,53,4,0.04)] flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-bold text-amber-900">Paneer Tikka</span>
                      <span className="text-[8px] text-emerald-600 font-bold">● Veg</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[8px] font-bold text-amber-800">₹320</span>
                      <button 
                        onClick={() => setCartCount(c => c + 1)}
                        className="bg-amber-800 hover:bg-amber-900 text-amber-50 text-[7px] font-bold font-sans px-1.5 py-0.5 rounded transition-transform active:scale-95"
                      >
                        + Add
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-2 border border-amber-900/5 rounded-lg shadow-[0_2px_8px_rgba(120,53,4,0.04)] flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-bold text-amber-900">Dum Biryani</span>
                      <span className="text-[8px] text-rose-500 font-bold">▲ Non-Veg</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[8px] font-bold text-amber-800">₹450</span>
                      <button 
                        onClick={() => setCartCount(c => c + 1)}
                        className="bg-amber-800 hover:bg-amber-900 text-amber-50 text-[7px] font-bold font-sans px-1.5 py-0.5 rounded transition-transform active:scale-95"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contactless Standee Visual */}
              <div className="md:col-span-5 flex flex-col items-center justify-center p-2">
                <div className="bg-white border-4 border-amber-900/10 p-2.5 rounded-xl shadow-lg flex flex-col items-center space-y-1.5 w-24">
                  <span className="text-[6px] font-bold text-amber-800 tracking-wider font-sans uppercase">SCAN TO VIEW</span>
                  <QrCode className="w-12 h-12 text-amber-950" />
                  <span className="text-[5px] text-center text-amber-950/60 leading-none font-sans">Tableside Ordering</span>
                </div>
                {cartCount > 0 && (
                  <div className="mt-2 text-[8px] bg-amber-800 text-amber-50 px-2 py-0.5 rounded-full font-bold font-sans">
                    🛒 Selected: {cartCount} items
                  </div>
                )}
              </div>
            </div>

            {/* Reservation Modal Popup Mockup */}
            {showReservation && (
              <div className="absolute inset-0 bg-black/45 backdrop-blur-xs flex items-center justify-center p-3 z-30">
                <div className="bg-white p-3 rounded-xl border border-amber-900/10 shadow-xl max-w-xs w-full text-left font-sans">
                  <div className="flex items-center justify-between border-b border-amber-100 pb-1 mb-2">
                    <span className="text-[10px] font-bold text-amber-900 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-700" /> Reserve a Luxury Table
                    </span>
                    <button 
                      onClick={() => setShowReservation(false)}
                      className="text-amber-900/50 hover:text-amber-900 font-bold text-xs"
                    >
                      ×
                    </button>
                  </div>
                  
                  {reservationSuccess ? (
                    <div className="text-center py-4 space-y-1">
                      <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto" />
                      <p className="text-[10px] font-bold text-slate-800">Table Reserved Successfully!</p>
                      <p className="text-[8px] text-slate-500">A confirmation SMS has been sent.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleReserve} className="space-y-2">
                      <div>
                        <label className="block text-[8px] text-slate-500 mb-0.5">Your Name</label>
                        <input 
                          type="text" 
                          required
                          value={reservationName}
                          onChange={(e) => setReservationName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 text-[9px] text-slate-800 focus:outline-none focus:border-amber-700"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div>
                          <label className="block text-[8px] text-slate-500 mb-0.5">Guests</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded px-1 py-0.5 text-[9px] text-slate-600 focus:outline-none">
                            <option>2 Guests</option>
                            <option>4 Guests</option>
                            <option>6+ Guests</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[8px] text-slate-500 mb-0.5">Time Slot</label>
                          <select className="w-full bg-slate-50 border border-slate-200 rounded px-1 py-0.5 text-[9px] text-slate-600 focus:outline-none">
                            <option>7:00 PM</option>
                            <option>8:30 PM</option>
                            <option>9:45 PM</option>
                          </select>
                        </div>
                      </div>
                      <button type="submit" className="w-full bg-amber-800 text-amber-50 font-bold py-1.5 rounded text-[9px] mt-2 shadow hover:bg-amber-900 transition-colors">
                        Confirm Table Reservation
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* EDUFLOW COACHING WEBSITE MOCKUP */}
        {/* ========================================================= */}
        {type === 'eduflow' && (
          <div className="min-h-full bg-slate-900 text-slate-100 flex flex-col font-sans p-4 relative" id="eduflow-page">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <div className="flex items-center gap-1 font-black text-indigo-400 text-xs tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> EduFlow<span className="text-violet-400">AI</span>
              </div>
              <div className="flex gap-2 text-[9px] text-slate-400 font-semibold items-center">
                <span className="text-indigo-400">Dashboard</span>
                <span>My Courses</span>
                <span>Schedule</span>
                <span className="bg-indigo-500/10 text-indigo-400 border border-indigo-400/20 px-1.5 py-0.5 rounded text-[7px] font-bold">PRO MODE</span>
              </div>
            </div>

            {/* Dashboard stats */}
            <div className="grid grid-cols-4 gap-1.5 mb-3">
              <div className="bg-slate-950 border border-slate-800 p-1.5 rounded">
                <span className="text-[7px] text-slate-500 block">Total Students</span>
                <span className="text-[10px] font-black text-slate-200">324</span>
                <span className="text-[6px] text-green-400 block">+12 this month</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-1.5 rounded">
                <span className="text-[7px] text-slate-500 block">Active Instructors</span>
                <span className="text-[10px] font-black text-slate-200">18</span>
                <span className="text-[6px] text-slate-500 block">Full time</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-1.5 rounded">
                <span className="text-[7px] text-slate-500 block">Active Batches</span>
                <span className="text-[10px] font-black text-slate-200">22</span>
                <span className="text-[6px] text-indigo-400 block">7 today</span>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-1.5 rounded">
                <span className="text-[7px] text-slate-500 block">Monthly Revenue</span>
                <span className="text-[10px] font-black text-slate-200">₹2,48,120</span>
                <span className="text-[6px] text-green-400 block">+18% growth</span>
              </div>
            </div>

            {/* Dynamic AI Study Chatbot widget */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch text-left">
              {/* Batch list */}
              <div className="md:col-span-5 bg-slate-950 border border-slate-800 p-2.5 rounded-lg flex flex-col justify-between">
                <div>
                  <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Upcoming Live Classes</span>
                  <div className="space-y-1.5">
                    <div className="bg-slate-900 border-l-2 border-indigo-500 p-1 rounded">
                      <p className="text-[8px] font-bold text-slate-200">Advanced Calculus • 11th Standard</p>
                      <span className="text-[6px] text-slate-500 block">Today, 4:00 PM • By Prof. Malhotra</span>
                    </div>
                    <div className="bg-slate-900 border-l-2 border-violet-500 p-1 rounded">
                      <p className="text-[8px] font-bold text-slate-200">Organic Chemistry basics</p>
                      <span className="text-[6px] text-slate-500 block">Today, 5:30 PM • By Dr. Anjali Sen</span>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800 mt-2 flex items-center justify-between text-[7px] text-slate-400">
                  <span>Student Portal Active</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                </div>
              </div>

              {/* Chat panel */}
              {interactive && (
                <div className="md:col-span-7 bg-slate-950 border border-slate-800 p-2 rounded-lg flex flex-col justify-between" id="ai-study-companion-box">
                  <div className="flex items-center gap-1 text-[9px] font-bold text-indigo-400 border-b border-slate-800 pb-1.5 mb-1.5">
                    <Sparkles className="w-3 h-3 text-violet-400" /> AI Classroom Tutor
                  </div>
                  
                  {/* Messages list */}
                  <div className="space-y-1.5 max-h-[80px] overflow-auto mb-2 text-[8px] pr-1 scrollbar-none">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-1.5 rounded-lg max-w-[85%] leading-relaxed ${
                          msg.sender === 'user' 
                          ? 'bg-indigo-600 text-white rounded-tr-none' 
                          : 'bg-slate-900 text-slate-300 rounded-tl-none border border-slate-800/60'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-slate-900 text-slate-500 p-1.5 rounded-lg rounded-tl-none text-[7px] italic border border-slate-800/40">
                          AI Companion is writing...
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Predefined prompts */}
                  <div className="flex flex-wrap gap-1 mb-1.5">
                    {quickPrompts.map((prompt, idx) => (
                      <button 
                        key={idx}
                        type="button"
                        onClick={() => { setUserInput(prompt); }}
                        className="bg-slate-900 hover:bg-slate-800 border border-slate-800/60 rounded px-1 py-0.5 text-[7px] text-slate-400 hover:text-white transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>

                  {/* Form input */}
                  <form onSubmit={handleSendMessage} className="flex gap-1">
                    <input 
                      type="text" 
                      placeholder="Ask study partner..." 
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      className="flex-1 bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-[8px] text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white p-1 rounded transition-colors flex items-center justify-center">
                      <Send className="w-2.5 h-2.5" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
