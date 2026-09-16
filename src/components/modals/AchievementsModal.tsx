import React, { useEffect } from 'react';
import { Award, X, Lock, CheckCircle2 } from 'lucide-react';
import { Achievement, Language } from '../../types';
import { t } from '../../utils/translations';

interface Props {
  isOpen: boolean;
  achievements: Achievement[];
  language: Language;
  onClose: () => void;
}

export const AchievementsModal: React.FC<Props> = ({
  isOpen,
  achievements,
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

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="achievements-modal"
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl relative select-none max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200 text-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl leading-tight">
                {t(language, 'achievements')}
              </h3>
              <p className="text-xs text-slate-400">
                {unlockedCount} / {achievements.length} {language === 'uz' ? 'ochildi' : 'unlocked'}
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

        {/* Progress bar */}
        <div className="w-full bg-slate-800 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-amber-500 to-orange-500 h-full transition-all duration-500 rounded-full"
            style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
          />
        </div>

        {/* List */}
        <div className="overflow-y-auto pr-1 space-y-2.5 flex-1 scrollbar-thin">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                ach.unlocked
                  ? 'bg-amber-500/10 border-amber-500/40 shadow-sm'
                  : 'bg-slate-800/40 border-slate-800 opacity-60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 border ${
                    ach.unlocked
                      ? 'bg-amber-500/20 border-amber-500/40'
                      : 'bg-slate-800 border-slate-700 grayscale'
                  }`}
                >
                  {ach.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    {language === 'uz' ? ach.titleUz : ach.titleEn}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {language === 'uz' ? ach.descUz : ach.descEn}
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0">
                {ach.unlocked ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Lock className="w-4 h-4 text-slate-600" />
                )}
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
