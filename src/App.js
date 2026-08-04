import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Truck, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  TrendingUp, 
  Leaf, 
  Receipt, 
  Cpu, 
  ArrowRight,
  Activity
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <div className="min-h-screen bg-[#050C0A] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#050C0A]/80 border-b border-emerald-900/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center font-black text-black shadow-lg shadow-emerald-500/20">
              FG
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              FoodGrid <span className="text-emerald-400">AI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-emerald-400 transition-colors">AI Modules</a>
            <a href="#impact" className="hover:text-emerald-400 transition-colors">Live Impact</a>
            <a href="#tech" className="hover:text-emerald-400 transition-colors">Architecture</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-4 py-2.5 rounded-lg hover:bg-emerald-900/40 transition">
              Portal Access
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black font-semibold text-sm px-5 py-2.5 rounded-lg shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5">
              Launch App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Headline */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-950/80 border border-emerald-800/60 px-3.5 py-1.5 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            AI-Powered Global Food Redistribution Grid
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1]"
          >
            Predict. Route. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
              Zero Waste.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl font-normal leading-relaxed"
          >
            An autonomous supply-chain engine matching commercial surplus food with food banks and distribution networks in real-time using Computer Vision, LLMs, and Dynamic Logistics.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-500/20 flex items-center gap-2 transition group">
              Donate Surplus Stock
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-slate-800 hover:border-emerald-500/50 bg-slate-900/40 text-slate-200 font-semibold px-7 py-3.5 rounded-xl transition">
              Watch Live Dashboard
            </button>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-10 grid grid-cols-3 gap-6 border-t border-slate-800/80"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">12,540 kg</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Saved Today</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">320</div>
              <div className="text-xs text-slate-400 font-medium mt-1">Active Deliveries</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">7,420 Tons</div>
              <div className="text-xs text-slate-400 font-medium mt-1">CO₂ Prevented</div>
            </div>
          </motion.div>
        </div>

        {/* Right Animated Interactive UI Canvas */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-2xl border border-emerald-900/50 bg-slate-950/60 backdrop-blur-xl p-6 shadow-2xl shadow-emerald-950/50"
          >
            {/* Header Tag */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest">
                  Live Dispatch Grid
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500">GRID_NODE_#884</span>
            </div>

            {/* Interactive Workflow Visualizer */}
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">1. AI Vision Scan</div>
                  <p className="text-xs text-slate-400 mt-0.5">Mobile CV model identifies item, volume & remaining shelf life (96% fresh).</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">2. Predictive Routing</div>
                  <p className="text-xs text-slate-400 mt-0.5">Optimizes cold-chain path to nearest shelter within 2.4 hours.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Receipt className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">3. Tax & ESG Certificate</div>
                  <p className="text-xs text-slate-400 mt-0.5">Automated tax deduction generated & Scope 3 carbon reduction logged.</p>
                </div>
              </div>
            </div>

            {/* Floating Live Badge */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Network Operational
              </span>
              <span className="font-mono text-emerald-400 font-medium">Latency: 12ms</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Engineered with Next-Gen Intelligence
          </h2>
          <p className="text-slate-400 mt-3 text-base">
            Combining machine learning models with distributed system architecture to eliminate global food loss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Computer Vision Scanner</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Scan pallets instantly via mobile camera. Edge AI models calculate freshness scores and expiration timelines in seconds.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Dynamic Logistics Router</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Reinforcement learning algorithms continuously optimize delivery routes across cold-chain fleets to stop spoilage in transit.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">ESG & Tax Credit Engine</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Automated compliance module calculates instant corporate tax write-offs and generates verified Scope 3 carbon reports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-10 text-center text-xs text-slate-600">
        <p>© 2026 FoodGrid AI — Global Food Redistribution Network. All rights reserved.</p>
      </footer>
    </div>
  );
}
