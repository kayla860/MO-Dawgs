
import React from 'react';
import { MOCK_SCHEDULE, TEAMS } from '../constants';
import { Game } from '../types';

interface ScheduleProps {
  selectedTeamId: string;
}

const Schedule: React.FC<ScheduleProps> = ({ selectedTeamId }) => {
  const filteredSchedule = MOCK_SCHEDULE.filter(g => g.teamId === selectedTeamId);
  const selectedTeam = TEAMS.find(t => t.id === selectedTeamId);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-4xl font-bold">Game Schedule</h2>
          <p className="text-slate-400 uppercase text-xs font-black tracking-widest mt-1">{selectedTeam?.name}</p>
        </div>
        
        {selectedTeam && (
          <a 
            href={selectedTeam.gameChangerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2ba3f7] hover:bg-[#1a8ce1] text-white px-6 py-3 rounded-xl font-black text-sm uppercase transition-all shadow-lg"
          >
            <img src="https://gc.com/favicon.ico" className="w-4 h-4 invert" alt="" />
            Watch on GameChanger
          </a>
        )}
      </div>

      <div className="grid gap-4">
        {filteredSchedule.length > 0 ? filteredSchedule.map((game: Game) => (
          <div 
            key={game.id} 
            className="group flex flex-col md:flex-row items-center justify-between p-6 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl transition-all hover:border-red-600/50 border-l-4 border-l-red-600"
          >
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="text-center min-w-[60px]">
                <div className="text-red-500 text-xs font-black uppercase">{new Date(game.date).toLocaleDateString('en-US', { month: 'short' })}</div>
                <div className="text-3xl font-black">{new Date(game.date).toLocaleDateString('en-US', { day: 'numeric' })}</div>
              </div>
              
              <div className="h-12 w-[1px] bg-slate-800 hidden md:block"></div>

              <div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{game.type} Matchup</div>
                <div className="text-xl font-bold flex items-center gap-2">
                  <span className="text-slate-600">vs</span> {game.opponent}
                </div>
                <div className="text-slate-500 text-sm font-medium">{game.location}</div>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex items-center gap-4 w-full md:w-auto justify-end">
              <div className="text-right">
                <div className="text-slate-400 font-black uppercase text-xs tracking-tighter">Status</div>
                <div className="text-white font-bold">{game.status}</div>
              </div>
            </div>
          </div>
        )) : (
          <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-dashed border-slate-800">
            <p className="text-slate-500 font-bold uppercase tracking-widest">No games scheduled for this squad yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
