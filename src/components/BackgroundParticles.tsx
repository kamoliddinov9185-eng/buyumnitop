import React, { useMemo } from 'react';

interface Props {
  animationsEnabled: boolean;
  theme: 'dark' | 'light';
}

export const BackgroundParticles: React.FC<Props> = ({ animationsEnabled, theme }) => {
  const particles = useMemo(() => {
    const symbols = ['?', '🔍', '✨', '⭐', '❓', '💡', '🎯'];
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      symbol: symbols[i % symbols.length],
      left: `${(i * 7.1 + 3) % 94}%`,
      top: `${(i * 13.7 + 5) % 90}%`,
      size: 14 + (i % 4) * 6,
      duration: 18 + (i % 6) * 5,
      delay: (i % 5) * 1.5,
      opacity: 0.12 + (i % 3) * 0.08
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Dynamic ambient radial gradients */}
      <div 
        className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-30 transition-colors duration-700 ${
          theme === 'dark' ? 'bg-amber-500/20' : 'bg-amber-300/30'
        }`}
      />
      <div 
        className={`absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-3xl opacity-25 transition-colors duration-700 ${
          theme === 'dark' ? 'bg-indigo-600/20' : 'bg-indigo-400/20'
        }`}
      />
      <div 
        className={`absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-700 ${
          theme === 'dark' ? 'bg-emerald-500/20' : 'bg-emerald-300/20'
        }`}
      />

      {/* Floating mystery glyphs */}
      {animationsEnabled && (
        <div className="absolute inset-0">
          {particles.map(p => (
            <span
              key={p.id}
              style={{
                left: p.left,
                top: p.top,
                fontSize: `${p.size}px`,
                opacity: p.opacity,
                animation: `floatParticle ${p.duration}s infinite ease-in-out alternate`,
                animationDelay: `${p.delay}s`,
                color: theme === 'dark' ? '#94a3b8' : '#64748b'
              }}
              className="absolute font-bold"
            >
              {p.symbol}
            </span>
          ))}
        </div>
      )}

      <style>{`
        @keyframes floatParticle {
          0% {
            transform: translateY(0px) rotate(0deg) scale(0.95);
          }
          50% {
            transform: translateY(-25px) rotate(15deg) scale(1.08);
          }
          100% {
            transform: translateY(15px) rotate(-10deg) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};
