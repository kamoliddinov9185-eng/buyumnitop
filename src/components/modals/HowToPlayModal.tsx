import React, { useEffect } from 'react';
import { HelpCircle, X, CheckCircle2, Zap, Flame, Eye } from 'lucide-react';
import { Language } from '../../types';
import { t } from '../../utils/translations';

interface Props {
  isOpen: boolean;
  language: Language;
  onClose: () => void;
}

export const HowToPlayModal: React.FC<Props> = ({ isOpen, language, onClose }) => {
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

  const steps = [
    { num: '1', icon: '👁️', text: t(language, 'tutorialStep1') },
    { num: '2', icon: '🧠', text: t(language, 'tutorialStep2') },
    { num: '3', icon: '⌨️', text: t(language, 'tutorialStep3') },
    { num: '4', icon: '⚡', text: t(language, 'tutorialStep4') },
    { num: '5', icon: '💡', text: t(language, 'tutorialStep5') },
    { num: '6', icon: '🔥', text: t(language, 'tutorialStep6') },
    { num: '7', icon: '🏆', text: t(language, 'tutorialStep7') }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="how-to-play-modal"
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl relative select-none max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200 text-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl leading-tight">
                {t(language, 'howToPlay')}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'uz' ? 'Qoidalar va tavsiyalar' : 'Rules & Guidelines'}
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

        {/* Steps List */}
        <div className="overflow-y-auto pr-1 space-y-3 flex-1 scrollbar-thin">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold flex items-center justify-center flex-shrink-0 text-sm">
                {s.icon}
              </div>
              <p className="text-sm font-medium text-slate-200 leading-relaxed pt-1">
                {s.text}
              </p>
            </div>
          ))}

          {/* Points reference box */}
          <div className="mt-4 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
              {language === 'uz' ? '⭐ Ballar tizimi:' : '⭐ Scoring Breakdown:'}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>1-bosqich:</span>
                <span className="font-bold text-emerald-400">+1000</span>
              </div>
              <div className="flex justify-between">
                <span>2-bosqich:</span>
                <span className="font-bold text-emerald-400">+800</span>
              </div>
              <div className="flex justify-between">
                <span>3-bosqich:</span>
                <span className="font-bold text-emerald-400">+600</span>
              </div>
              <div className="flex justify-between">
                <span>4-bosqich:</span>
                <span className="font-bold text-amber-400">+400</span>
              </div>
              <div className="flex justify-between">
                <span>5-bosqich:</span>
                <span className="font-bold text-amber-400">+200</span>
              </div>
              <div className="flex justify-between">
                <span>Noto‘g‘ri:</span>
                <span className="font-bold text-rose-400">-100</span>
              </div>
            </div>
          </div>
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
