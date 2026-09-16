import React, { useEffect } from 'react';
import { BarChart3, X, Trophy, Target, Flame, CheckCircle, Clock, Lightbulb, Package } from 'lucide-react';
import { GameStats, Language } from '../../types';
import { t } from '../../utils/translations';

interface Props {
  isOpen: boolean;
  stats: GameStats;
  totalObjectsCount: number;
  language: Language;
  onClose: () => void;
}

export const StatsModal: React.FC<Props> = ({
  isOpen,
  stats,
  totalObjectsCount,
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

  const totalGuesses = stats.totalCorrect + stats.totalWrong;
  const accuracy = totalGuesses > 0 ? Math.round((stats.totalCorrect / totalGuesses) * 100) : 0;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    if (mins === 0) return `${s}s`;
    return `${mins}m ${s}s`;
  };

  const statItems = [
    {
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
      label: t(language, 'highestScoreStat'),
      value: stats.highestScore.toLocaleString(),
      color: 'from-amber-500/10 to-amber-500/5'
    },
    {
      icon: <Target className="w-5 h-5 text-emerald-400" />,
      label: t(language, 'accuracy'),
      value: `${accuracy}%`,
      color: 'from-emerald-500/10 to-emerald-500/5'
    },
    {
      icon: <Flame className="w-5 h-5 text-orange-400" />,
      label: t(language, 'bestStreak'),
      value: `x${stats.bestStreak}`,
      color: 'from-orange-500/10 to-orange-500/5'
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-sky-400" />,
      label: t(language, 'totalCorrect'),
      value: stats.totalCorrect.toLocaleString(),
      color: 'from-sky-500/10 to-sky-500/5'
    },
    {
      icon: <Package className="w-5 h-5 text-purple-400" />,
      label: t(language, 'objectsDiscovered'),
      value: `${stats.objectsDiscovered.length} / ${totalObjectsCount}`,
      color: 'from-purple-500/10 to-purple-500/5'
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
      label: t(language, 'gamesPlayed'),
      value: stats.gamesPlayed.toLocaleString(),
      color: 'from-blue-500/10 to-blue-500/5'
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-yellow-400" />,
      label: t(language, 'totalHintsStat'),
      value: stats.totalHintsUsed.toLocaleString(),
      color: 'from-yellow-500/10 to-yellow-500/5'
    },
    {
      icon: <Clock className="w-5 h-5 text-cyan-400" />,
      label: t(language, 'totalPlayTime'),
      value: formatTime(stats.totalPlayTimeSeconds),
      color: 'from-cyan-500/10 to-cyan-500/5'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="stats-modal"
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl relative select-none max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200 text-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl leading-tight">
                {t(language, 'stats')}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'uz' ? 'Sizning o‘yin ko‘rsatkichlaringiz' : 'Your personal game records'}
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

        {/* Stats Grid */}
        <div className="overflow-y-auto pr-1 grid grid-cols-2 gap-3 flex-1 scrollbar-thin">
          {statItems.map((item, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-2xl bg-gradient-to-br ${item.color} border border-slate-800 flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-xl bg-slate-800/80">
                  {item.icon}
                </span>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">
                  {item.label}
                </p>
                <p className="text-lg sm:text-xl font-extrabold text-white font-mono mt-0.5">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
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
