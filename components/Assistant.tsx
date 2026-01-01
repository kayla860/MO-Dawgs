
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { TEAM_NAME } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
  sources?: any[];
}

const Assistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: `Welcome to the ${TEAM_NAME} Command Center. You are currently in the Unified Portal.

I can help you navigate our systems:
- Need to check games? I can find GameChanger links.
- Want to train? I can point you toward The Futures App drills.
- Lost? I can give you directions to Ellisville, The Vet, or Bud Dome.

What can I help you with today?` 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const result = await geminiService.askAssistant(input, history);
    
    setMessages(prev => [...prev, { 
      role: 'model', 
      text: result.text,
      sources: result.sources
    }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-athletic uppercase italic">AI Coach <span className="text-red-600">Assistance</span></h2>
        <p className="text-slate-400 font-medium">Your 24/7 Portal guide for GameChanger and The Futures App</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto bg-slate-900/50 rounded-[2.5rem] p-8 border border-slate-800 space-y-6 mb-4 scroll-smooth"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-[2rem] p-6 ${
              m.role === 'user' 
              ? 'bg-red-600 text-white rounded-br-none shadow-xl shadow-red-600/20' 
              : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700 shadow-xl'
            }`}>
              <div className="prose prose-invert prose-sm">
                {m.text.split('\n').map((line, idx) => (
                  <p key={idx} className={line.trim() === '' ? 'h-2' : 'mb-2'}>{line}</p>
                ))}
              </div>
              
              {m.sources && m.sources.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-3 italic">Verified Intelligence:</p>
                  <div className="flex flex-wrap gap-2">
                    {m.sources.map((s, idx) => (
                      <a 
                        key={idx} 
                        href={s.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] bg-slate-700 hover:bg-red-600 hover:text-white text-red-500 px-3 py-1.5 rounded-full font-black uppercase transition-all"
                      >
                        {s.title || 'Source'}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 rounded-full px-6 py-3 flex gap-2 border border-slate-700">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-.3s]"></div>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:-.5s]"></div>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask Coach anything about the Portal..."
          className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-white font-medium"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white w-16 h-16 rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-red-600/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
        </button>
      </div>
    </div>
  );
};

export default Assistant;
