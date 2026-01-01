
import React from 'react';
import { TEAMS } from '../constants';

interface TeamSelectorProps {
  selectedTeamId: string;
  onSelect: (id: string) => void;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ selectedTeamId, onSelect }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-8 no-scrollbar">
      <div className="flex gap-2 min-w-max">
        {TEAMS.map((team) => (
          <button
            key={team.id}
            onClick={() => onSelect(team.id)}
            className={`px-4 py-2 rounded-lg border font-bold text-sm transition-all ${
              selectedTeamId === team.id
                ? 'bg-red-600 border-red-600 text-white'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-red-600/50'
            }`}
          >
            {team.ageGroup}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeamSelector;
