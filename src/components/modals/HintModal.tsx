import React from 'react';
import { Lightbulb, X } from 'lucide-react';
import { Language } from '../../types';
import { t } from '../../utils/translations';

interface Props {
  isOpen: boolean;
  hints: string[];
  activeHintsCount: number;
  language: Language;
  onClose: () => void;
}

export const HintModal: React.FC<Props> = ({
  isOpen,
  hints,
  activeHintsCount,
  language,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="hint-modal"
        className="w-full max-w-md bg-slate-900 border border-amber-500/40 rounded-3xl p-6 shadow-2xl relative select-none animate-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Lightbulb className="w-6 h-6 fill-amber-400/20" />
          </div>
          <div>
            <h3 className="font-extrabold text-xl text-white">
              {t(language, 'hintBtn')}
            </h3>
            <p className="text-xs text-amber-400/80 font-medium">
              {t(language, 'hintUsedToast')}
            </p>
          </div>
        </div>

        {/* Clues list */}
        <div className="space-y-3">
          {hints.slice(0, activeHintsCount).map((hintText, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-100 animate-in slide-in-from-top-2 duration-300"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black text-amber-400 uppercase tracking-wider">
                  {language === 'uz' ? `${idx + 1}-maslahat:` : `Hint ${idx + 1}:`}
                </span>
              </div>
              <p className="text-sm sm:text-base font-medium leading-relaxed">
                {hintText}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm tracking-wide shadow-lg shadow-amber-500/20 transition active:scale-98 cursor-pointer"
        >
          {language === 'uz' ? 'Tushundim, davom etamiz!' : 'Got it, let\'s guess!'}
        </button>
      </div>
    </div>
  );
};
