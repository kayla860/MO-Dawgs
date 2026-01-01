
import React, { useState, useMemo } from 'react';
import { MOCK_ROSTER, TEAMS } from '../constants';
import { Player } from '../types';

interface RosterProps {
  selectedTeamId: string;
}

type SortCriterion = 'name' | 'number' | 'class';

const Roster: React.FC<RosterProps> = ({ selectedTeamId }) => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [sortBy, setSortBy] = useState<SortCriterion>('number');
  
  const selectedTeam = TEAMS.find(t => t.id === selectedTeamId);

  const sortedRoster = useMemo(() => {
    const filtered = MOCK_ROSTER.filter(p => p.teamId === selectedTeamId);
    
    return [...filtered].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'number') {
        return parseInt(a.number) - parseInt(b.number);
      }
      if (sortBy === 'class') {
        return parseInt(a.class) - parseInt(b.class);
      }
      return 0;
    });
  }, [selectedTeamId, sortBy]);

  const openPlayerModal = (player: Player) => {
    setSelectedPlayer(player);
    document.body.style.overflow = 'hidden';
  };

  const closePlayerModal = () => {
    setSelectedPlayer(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-4xl font-bold font-athletic uppercase">Team Roster</h2>
          <p className="text-red-500 font-black uppercase text-xs tracking-[0.2em] mt-2 italic">
            {selectedTeam?.name} Squad
          </p>
        </div>

        {/* Sorting Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">Sort Pack By:</span>
          <div className="flex gap-2">
            {[
              { id: 'number', label: '#' },
              { id: 'name', label: 'Name' },
              { id: 'class', label: 'Class' }
            ].map((criterion) => (
              <button
                key={criterion.id}
                onClick={() => setSortBy(criterion.id as SortCriterion)}
                className={`px-4 py-2 text-xs font-black uppercase italic tracking-widest transition-all skew-btn border-b-2 ${
                  sortBy === criterion.id
                    ? 'bg-red-600 text-white border-red-900 shadow-lg shadow-red-600/20'
                    : 'bg-slate-900 text-slate-400 border-transparent hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{criterion.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedRoster.length > 0 ? sortedRoster.map((player: Player) => (
          <div 
            key={player.id} 
            onClick={() => openPlayerModal(player)}
            className="group relative bg-slate-900/80 rounded-[2rem] overflow-hidden border border-slate-800 transition-all hover:border-red-600/50 cursor-pointer hover:shadow-2xl hover:shadow-red-600/10 transform hover:-translate-y-2"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img 
                src={player.imageUrl} 
                alt={player.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              {/* Quick View Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-red-600 text-white px-3 py-1 text-[10px] font-black uppercase italic skew-btn">
                  <span>View Details</span>
                </div>
              </div>
            </div>

            <div className="absolute top-4 left-4">
              <div className="text-7xl font-black text-red-600/20 italic font-athletic">#{player.number}</div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-red-500 font-black text-xs uppercase tracking-widest mb-1 italic">
                {player.primaryPosition}
                {player.secondaryPosition ? ` / ${player.secondaryPosition}` : ''}
              </div>
              <h3 className="text-3xl font-black text-white mb-2 uppercase font-athletic tracking-tight">
                {player.name}
              </h3>
              
              <div className="flex flex-wrap gap-4 text-[11px] text-slate-500 uppercase font-black border-t border-white/5 pt-4">
                <div>Grad Year: <span className="text-white">{player.class}</span></div>
                <div>Bats/Throws: <span className="text-white">{player.batThrows}</span></div>
              </div>
            </div>
          </div>
        )) : (
          <div className="col-span-full text-center py-32 bg-slate-950/50 rounded-[3rem] border-2 border-dashed border-slate-800">
            <div className="text-5xl mb-4">⚾</div>
            <p className="text-slate-500 font-black uppercase tracking-[0.3em] italic">Roster currently being scouted.</p>
          </div>
        )}
      </div>

      {/* Player Detail Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300" 
            onClick={closePlayerModal}
          ></div>
          
          <div className="relative bg-slate-900 w-full max-w-5xl rounded-[3rem] overflow-hidden border border-red-600/30 shadow-2xl animate-in zoom-in duration-300 flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Close Button */}
            <button 
              onClick={closePlayerModal}
              className="absolute top-6 right-6 z-10 bg-black/50 hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all border border-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            {/* Left Column: Image */}
            <div className="w-full md:w-2/5 relative h-64 md:h-auto">
              <img 
                src={selectedPlayer.imageUrl} 
                alt={selectedPlayer.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r"></div>
              <div className="absolute bottom-6 left-8 block md:hidden">
                <div className="text-6xl font-black text-red-600/40 italic font-athletic">#{selectedPlayer.number}</div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-3/5 p-8 md:p-16 overflow-y-auto">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="inline-block bg-red-600 px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-[0.4em] italic mb-4">
                    Active Pack Member
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black uppercase italic font-athletic tracking-tight text-white leading-none">
                    {selectedPlayer.name}
                  </h2>
                  <div className="flex items-center gap-4 mt-4">
                    <span className="text-2xl font-black text-red-600 italic font-athletic">#{selectedPlayer.number}</span>
                    <span className="w-1.5 h-1.5 bg-slate-700 rounded-full"></span>
                    <span className="text-xl font-bold text-slate-400 uppercase italic tracking-wider">
                      {selectedPlayer.primaryPosition}
                      {selectedPlayer.secondaryPosition ? ` / ${selectedPlayer.secondaryPosition}` : ''}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Grid */}
              <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-white/5">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Class Of</div>
                  <div className="text-2xl font-black text-white italic font-athletic">{selectedPlayer.class}</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Hometown</div>
                  <div className="text-2xl font-black text-white italic font-athletic">{selectedPlayer.hometown}</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Bats / Throws</div>
                  <div className="text-2xl font-black text-white italic font-athletic">{selectedPlayer.batThrows}</div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Primary Pos</div>
                  <div className="text-2xl font-black text-white italic font-athletic">{selectedPlayer.primaryPosition}</div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mb-12">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600 mb-6 italic">Season Performance Metrics</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'AVG', val: selectedPlayer.stats?.avg || '---', color: 'text-white' },
                    { label: 'ERA', val: selectedPlayer.stats?.era || '---', color: 'text-red-500' },
                    { label: 'HR', val: selectedPlayer.stats?.hr ?? '0', color: 'text-white' },
                    { label: 'SO', val: selectedPlayer.stats?.so ?? '0', color: 'text-white' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-black/40 border border-white/5 p-6 rounded-2xl text-center">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{stat.label}</div>
                      <div className={`text-3xl font-black font-athletic italic ${stat.color}`}>{stat.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Video Highlights Section */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-600 mb-6 italic">Dawg Film Room</h4>
                {selectedPlayer.videoHighlights && selectedPlayer.videoHighlights.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedPlayer.videoHighlights.map((url, idx) => (
                      <a 
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 bg-black/60 border border-red-600/20 p-4 rounded-2xl hover:bg-red-600/10 hover:border-red-600/50 transition-all"
                      >
                        <div className="w-12 h-12 bg-red-600 flex items-center justify-center rounded-full shrink-0 shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Video {idx + 1}</div>
                          <div className="text-sm font-bold text-white uppercase italic">Watch Highlights</div>
                        </div>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="bg-black/20 border border-dashed border-white/5 p-8 rounded-2xl text-center">
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest italic">Film currently being edited.</p>
                  </div>
                )}
              </div>

              <div className="mt-12 flex justify-end">
                <button 
                  onClick={closePlayerModal}
                  className="bg-white text-black px-10 py-4 font-black uppercase italic transform -skew-x-12 hover:bg-red-600 hover:text-white transition-all"
                >
                  Return to Pack
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roster;
