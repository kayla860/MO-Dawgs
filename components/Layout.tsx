
import React from 'react';
import { AppTab } from '../types';
import { TEAM_NAME, TEAM_SLOGAN } from '../constants';

interface LayoutProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeTab, setActiveTab, children }) => {
  const navItems = [
    { id: AppTab.HOME, label: 'Home', icon: '🏠' },
    { id: AppTab.SCHEDULE, label: 'Games', icon: '📅' },
    { id: AppTab.ROSTER, label: 'Roster', icon: '⚾' },
    { id: AppTab.STATS, label: 'Metrics', icon: '📊' },
    { id: AppTab.ASSISTANT, label: 'AI Coach', icon: '🤖' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-2xl border-b border-red-600/30 px-4 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6 group cursor-pointer" onClick={() => setActiveTab(AppTab.HOME)}>
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 blur-2xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <img 
              src="https://i.ibb.co/Xrb912F/mo-dawgs-logo.png" 
              alt="MO Dawgs Logo" 
              className="w-14 h-14 md:w-20 md:h-20 relative object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = "https://via.placeholder.com/64/ce1126/ffffff?text=DAWGS";
              }}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-black italic font-athletic leading-none text-white uppercase tracking-tighter">
              MO <span className="text-red-600">DAWGS</span>
            </h1>
            <span className="text-[9px] font-black text-red-600 uppercase tracking-[0.3em] mt-1 hidden sm:block animate-pulse">Missouri's Elite Choice</span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-6 py-2 transition-all text-sm font-black uppercase italic tracking-widest skew-btn border-b-2 ${
                activeTab === item.id 
                ? 'bg-red-600 text-white shadow-2xl shadow-red-600/40 border-red-900' 
                : 'text-slate-400 hover:text-white hover:bg-slate-900 border-transparent'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden xl:flex bg-white/5 border border-white/10 px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-tighter items-center gap-3">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span>
            <span className="opacity-80 italic">{TEAM_SLOGAN}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
          {children}
        </div>
      </main>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-red-600/40 px-3 py-4 flex justify-around items-center z-50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-1.5 flex-1 transition-all ${
              activeTab === item.id ? 'text-red-600 scale-110' : 'text-slate-500'
            }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-[10px] font-black uppercase tracking-tighter italic font-athletic leading-none">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
