import React, { useEffect } from 'react';
import { Trophy, X, Medal, Crown, Flame, Calendar } from 'lucide-react';
import { LeaderboardEntry, Language } from '../../types';
import { t } from '../../utils/translations';

interface Props {
  isOpen: boolean;
  entries: LeaderboardEntry[];
  language: Language;
  onClose: () => void;
}

export const LeaderboardModal: React.FC<Props> = ({
  isOpen,
  entries,
  language,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sortedEntries = [...entries].sort((a, b) => b.score - a.score);

  const getRankBadge = (rank: number) => {
    if (rank === 1) {
      return (
        <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-black">
          <Crown className="w-5 h-5 fill-amber-400" />
        </div>
      );
    }
    if (rank === 2) {
      return (
        <div className="w-8 h-8 rounded-xl bg-slate-300/20 text-slate-300 border border-slate-300/40 flex items-center justify-center font-black">
          <Medal className="w-5 h-5 fill-slate-300" />
        </div>
      );
    }
    if (rank === 3) {
      return (
        <div className="w-8 h-8 rounded-xl bg-amber-700/20 text-amber-600 border border-amber-700/40 flex items-center justify-center font-black">
          <Medal className="w-5 h-5 fill-amber-600" />
        </div>
      );
    }
    return (
      <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 flex items-center justify-center font-bold text-xs">
        #{rank}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="leaderboard-modal"
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl relative select-none max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200 text-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl leading-tight">
                {t(language, 'leaderboard')}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'uz' ? 'Mahalliy peshqadamlar jadvali' : 'Top local player scores'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Entries list */}
        <div className="overflow-y-auto pr-1 space-y-2.5 flex-1 scrollbar-thin">
          {sortedEntries.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              {language === 'uz' ? 'Hozircha natijalar yo‘q. O‘yinni yakunlab, birinchi bo‘ling!' : 'No entries yet. Play a game to record your score!'}
            </div>
          ) : (
            sortedEntries.map((entry, idx) => (
              <div
                key={entry.id || idx}
                className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                  idx === 0
                    ? 'bg-amber-500/10 border-amber-500/40 shadow-sm'
                    : 'bg-slate-800/60 border-slate-700/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  {getRankBadge(idx + 1)}
                  <div>
                    <p className="font-extrabold text-sm sm:text-base text-white leading-tight">
                      {entry.name}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-400">
                      <span className="capitalize">{entry.mode.replace('_', ' ')}</span>
                      <span>•</span>
                      <span>{entry.accuracy}% {t(language, 'accuracy')}</span>
                      <span>•</span>
                      <span>{entry.date}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-base sm:text-lg font-black text-amber-400 font-mono">
                    {entry.score.toLocaleString()}
                  </span>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase">
                    {t(language, 'score')}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black text-sm tracking-wide shadow-md transition active:scale-98 cursor-pointer"
        >
          {t(language, 'modalClose')}
        </button>
      </div>
    </div>
  );
};
