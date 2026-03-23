'use client';
import { useState, useEffect } from 'react';

interface PollOption {
  id: string;
  label: string;
}

interface PollProps {
  id: string;
  question: string;
  options: PollOption[];
}

export function Poll({ id, question, options }: PollProps) {
  const [voted, setVoted] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>({});

  useEffect(() => {
    const stored = localStorage.getItem(`poll_${id}`);
    if (stored) {
      const { choice, counts } = JSON.parse(stored);
      setVoted(choice);
      setVotes(counts);
    } else {
      const initial: Record<string, number> = {};
      options.forEach((o, i) => { initial[o.id] = 10 + i * 7; });
      setVotes(initial);
    }
  }, [id, options]);

  function handleVote(optId: string) {
    if (voted) return;
    const updated = { ...votes, [optId]: (votes[optId] || 0) + 1 };
    setVotes(updated);
    setVoted(optId);
    localStorage.setItem(`poll_${id}`, JSON.stringify({ choice: optId, counts: updated }));
  }

  const total = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <div className="bg-accent-light rounded-2xl p-6 my-8">
      <h3 className="font-bold text-gray-900 mb-4">{question}</h3>
      <div className="space-y-3">
        {options.map(opt => {
          const pct = total ? Math.round((votes[opt.id] || 0) / total * 100) : 0;
          return (
            <button key={opt.id} onClick={() => handleVote(opt.id)}
              disabled={!!voted}
              className="w-full text-left rounded-xl overflow-hidden border-2 border-transparent hover:border-accent disabled:cursor-default transition-all">
              <div className="relative bg-white px-4 py-3">
                <div
                  className="absolute inset-y-0 left-0 bg-accent/10 transition-all duration-500"
                  style={{ width: voted ? `${pct}%` : '0%' }}
                />
                <div className="relative flex items-center justify-between">
                  <span className={`text-sm font-medium ${voted === opt.id ? 'text-accent' : 'text-gray-800'}`}>
                    {opt.label}
                  </span>
                  {voted && <span className="text-sm font-bold text-accent">{pct}%</span>}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {voted && <p className="text-xs text-gray-500 mt-3 text-center">Спасибо за голос! Всего проголосовало: {total}</p>}
    </div>
  );
}
