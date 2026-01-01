
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MOCK_ROSTER } from '../constants';

const Stats: React.FC = () => {
  const hrData = MOCK_ROSTER
    .filter(p => p.stats?.hr !== undefined)
    .map(p => ({ name: p.name.split(' ')[1], hr: p.stats?.hr }))
    .sort((a, b) => (b.hr || 0) - (a.hr || 0));

  const eraData = MOCK_ROSTER
    .filter(p => p.stats?.era !== undefined)
    .map(p => ({ name: p.name.split(' ')[1], era: parseFloat(p.stats?.era || "0") }))
    .sort((a, b) => a.era - b.era);

  return (
    <div className="space-y-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Team Analytics</h2>
        <p className="text-slate-400 mt-2">Regular Season Performance Breakdown</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Home Run Leaders */}
        <div className="bg-glass p-8 rounded-3xl border border-slate-800">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-amber-500">🔥</span> Home Run Leaders
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hrData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px'}}
                />
                <Bar dataKey="hr" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                  {hrData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#fbbf24' : '#3b82f6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ERA Comparison */}
        <div className="bg-glass p-8 rounded-3xl border border-slate-800">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-blue-500">⚾</span> Pitching (ERA)
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={eraData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" fontSize={12} hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} width={80} />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px'}}
                />
                <Bar dataKey="era" fill="#ef4444" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Season Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Team AVG', value: '.312', trend: '+.015', icon: '📈' },
          { label: 'Team ERA', value: '3.42', trend: '-0.24', icon: '📉' },
          { label: 'Runs Scored', value: '184', trend: '1st in Div', icon: '🏃' },
          { label: 'Fielding %', value: '.974', trend: 'Career Best', icon: '🧤' },
        ].map((item, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <div className="flex justify-between items-start mb-2">
              <span className="text-2xl">{item.icon}</span>
              <span className={`text-[10px] font-bold px-2 py-1 rounded ${item.trend.startsWith('+') || item.label.includes('ERA') && item.trend.startsWith('-') ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                {item.trend}
              </span>
            </div>
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">{item.label}</div>
            <div className="text-2xl font-black text-white">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
