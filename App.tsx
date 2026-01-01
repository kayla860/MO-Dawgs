
import React, { useState } from 'react';
import Layout from './components/Layout';
import Roster from './components/Roster';
import Schedule from './components/Schedule';
import Stats from './components/Stats';
import Assistant from './components/Assistant';
import TeamSelector from './components/TeamSelector';
import { AppTab } from './types';
import { MOCK_NEWS, TEAM_NAME, TEAMS, TEAM_SLOGAN, TRAINING_HUBS } from './constants';

const Home: React.FC<{ onExplore: (tab: AppTab) => void }> = ({ onExplore }) => {
  const openMaps = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-[650px] md:h-[750px] rounded-[3.5rem] overflow-hidden flex items-center bg-black border border-red-900/20 shadow-2xl shadow-red-900/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale contrast-125"
            alt="Baseball Diamond"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
          <img 
            src="https://i.ibb.co/Xrb912F/mo-dawgs-logo.png"
            className="absolute -right-16 -bottom-16 w-[550px] h-[550px] object-contain opacity-10 pointer-events-none rotate-6"
            alt=""
          />
        </div>
        
        <div className="relative z-10 px-8 md:px-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-red-600 px-5 py-2 rounded-sm text-[12px] font-black uppercase tracking-[0.5em] italic mb-8 shadow-2xl shadow-red-600/40 animate-pulse">
              Unified Program Portal
            </div>
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] mb-8 text-white uppercase italic font-athletic">
              THE<br/>
              <span className="text-red-600 drop-shadow-[0_0_20px_rgba(206,17,38,0.5)]">PORTAL.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white font-black italic uppercase tracking-wider mb-10 opacity-90 font-athletic">
              {TEAM_SLOGAN}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <button 
                onClick={() => onExplore(AppTab.SCHEDULE)}
                className="px-14 py-6 bg-red-600 text-white font-black uppercase italic rounded-none text-xl hover:bg-red-700 transition-all transform hover:-skew-x-12 hover:scale-110 active:scale-95 shadow-2xl shadow-red-600/30 border-b-4 border-red-900"
              >
                Access Games
              </button>
              <button 
                onClick={() => onExplore(AppTab.ASSISTANT)}
                className="px-14 py-6 bg-white text-black font-black uppercase italic rounded-none text-xl hover:bg-slate-200 transition-all transform hover:-skew-x-12 hover:scale-110 active:scale-95 border-b-4 border-slate-400"
              >
                Ask AI Coach
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center relative">
             <div className="absolute inset-0 bg-red-600/20 blur-[120px] rounded-full"></div>
             <img 
               src="https://i.ibb.co/Xrb912F/mo-dawgs-logo.png" 
               className="w-full max-w-[500px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] relative z-10 hover:rotate-2 transition-transform duration-500"
               alt="MO Dawgs"
             />
          </div>
        </div>
      </section>

      {/* COMMAND CENTER - New section for Portal Access */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-5xl font-black uppercase italic font-athletic tracking-tight">The <span className="text-red-600">Command Center</span></h2>
          <p className="text-slate-500 mt-2 font-black uppercase text-xs tracking-[0.2em] italic">Access your unified baseball tools</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-glass p-12 rounded-[3rem] border border-red-600/20 group hover:border-red-600/50 transition-all">
            <div className="text-6xl mb-6">📅</div>
            <h3 className="text-4xl font-black uppercase italic font-athletic mb-4 text-white">GameChanger</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">Schedule, live scores, messaging, and box scores. This is your hub for everything happening on the field.</p>
            <button 
              onClick={() => window.open('https://gc.com', '_blank')}
              className="w-full bg-[#2ba3f7] hover:bg-[#1a8ce1] text-white py-6 rounded-2xl font-black uppercase italic tracking-widest text-lg transition-all shadow-xl shadow-blue-500/20 transform group-hover:scale-105"
            >
              Open GameChanger
            </button>
          </div>
          <div className="bg-glass p-12 rounded-[3rem] border border-blue-600/20 group hover:border-blue-600/50 transition-all">
            <div className="text-6xl mb-6">⚡</div>
            <h3 className="text-4xl font-black uppercase italic font-athletic mb-4 text-white">The Futures App</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">300+ pro-led drills, rep counters, strength programs, and video analysis. This is your portal to "The Dawghouse".</p>
            <button 
              onClick={() => window.open('https://thefuturesapp.com', '_blank')}
              className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase italic tracking-widest text-lg transition-all shadow-xl transform group-hover:scale-105"
            >
              Open Futures App
            </button>
          </div>
        </div>
      </section>

      {/* TRAINING HUBS - New section for local navigation */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-5xl font-black uppercase italic font-athletic tracking-tight">Our <span className="text-red-600">Training Hubs</span></h2>
          <p className="text-slate-500 mt-2 font-black uppercase text-xs tracking-[0.2em] italic">Where the Pack puts in work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAINING_HUBS.map((hub, i) => (
            <div key={i} className="bg-slate-950/50 border border-slate-900 p-8 rounded-[2rem] hover:bg-slate-900 transition-all flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-black uppercase italic text-red-600 mb-2">{hub.name}</h4>
                <p className="text-slate-500 text-sm mb-6">{hub.address}</p>
              </div>
              <button 
                onClick={() => openMaps(hub.address)}
                className="w-full border border-slate-700 hover:border-red-600 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
              >
                Get Directions
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl font-black uppercase italic font-athletic tracking-tight">
            News from <span className="text-red-600 italic">The Dawghouse</span>
          </h2>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-red-600 to-transparent mx-10 opacity-30 hidden md:block"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MOCK_NEWS.map((item) => (
            <div key={item.id} className="group bg-slate-950 border border-slate-900 rounded-[3rem] overflow-hidden hover:border-red-600/30 transition-all shadow-xl">
              <div className="h-80 overflow-hidden relative">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                <div className="absolute bottom-8 left-8 bg-red-600 px-6 py-2 text-xs font-black uppercase italic skew-btn shadow-lg">
                  <span>{item.category}</span>
                </div>
              </div>
              <div className="p-12">
                <div className="text-slate-500 text-[11px] font-black uppercase tracking-widest mb-4">{item.date}</div>
                <h3 className="text-4xl font-black mb-6 uppercase italic font-athletic tracking-tight leading-none">{item.title}</h3>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed font-medium">{item.summary}</p>
                <button className="text-white bg-red-600/10 hover:bg-red-600 px-8 py-3 font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all rounded-full border border-red-600/20">
                  READ FULL STORY <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-red-600 p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-8xl font-black font-athletic italic text-white mb-8">JOIN THE PACK</h2>
          <p className="text-white text-xl md:text-2xl font-medium mb-12 opacity-90 max-w-2xl mx-auto italic">
            Ready to take your game to the next level? Fear the Dawg and become part of Missouri's elite.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-black text-white px-16 py-6 rounded-none font-black text-xl uppercase italic transform hover:-skew-x-12 hover:scale-110 transition-all shadow-2xl">
              Tryout Info
            </button>
            <button className="bg-white text-black px-16 py-6 rounded-none font-black text-xl uppercase italic transform hover:-skew-x-12 hover:scale-110 transition-all shadow-2xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.HOME);
  const [selectedTeamId, setSelectedTeamId] = useState<string>(TEAMS[0].id);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.HOME:
        return <Home onExplore={setActiveTab} />;
      case AppTab.ROSTER:
        return (
          <>
            <div className="mb-12">
              <h2 className="text-5xl font-black italic font-athletic uppercase text-white mb-4">The <span className="text-red-600">Pack</span></h2>
              <p className="text-slate-400 font-medium">Select a team to view our elite roster of athletes.</p>
            </div>
            <TeamSelector selectedTeamId={selectedTeamId} onSelect={setSelectedTeamId} />
            <Roster selectedTeamId={selectedTeamId} />
          </>
        );
      case AppTab.SCHEDULE:
        return (
          <>
            <div className="mb-12">
              <h2 className="text-5xl font-black italic font-athletic uppercase text-white mb-4">Battle <span className="text-red-600">Center</span></h2>
              <p className="text-slate-400 font-medium">Follow the pack on their journey to championships.</p>
            </div>
            <TeamSelector selectedTeamId={selectedTeamId} onSelect={setSelectedTeamId} />
            <Schedule selectedTeamId={selectedTeamId} />
          </>
        );
      case AppTab.STATS:
        return (
          <>
            <div className="mb-12">
              <h2 className="text-5xl font-black italic font-athletic uppercase text-white mb-4">The <span className="text-red-600">Dawghouse</span> Metrics</h2>
              <p className="text-slate-400 font-medium">High-level analytics for our elite performers.</p>
            </div>
            <TeamSelector selectedTeamId={selectedTeamId} onSelect={setSelectedTeamId} />
            <Stats />
          </>
        );
      case AppTab.ASSISTANT:
        return <Assistant />;
      default:
        return <Home onExplore={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
