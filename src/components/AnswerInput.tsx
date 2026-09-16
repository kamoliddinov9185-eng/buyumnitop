import React, { useState, useRef, useEffect } from 'react';
import { Send, Lightbulb, SkipForward, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { t } from '../utils/translations';
import { SoundFX } from '../utils/sound';

interface Props {
  onGuess: (guessText: string) => void;
  onUseHint: () => void;
  onSkip: () => void;
  isRevealed: boolean;
  hintsUsedCount: number;
  maxHints: number;
  language: Language;
  soundEnabled: boolean;
  potentialPoints: number;
}

export const AnswerInput: React.FC<Props> = ({
  onGuess,
  onUseHint,
  onSkip,
  isRevealed,
  hintsUsedCount,
  maxHints,
  language,
  soundEnabled,
  potentialPoints
}) => {
  const [value, setValue] = useState('');
  const [emptyWarning, setEmptyWarning] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when a new round starts
  useEffect(() => {
    setValue('');
    setEmptyWarning(false);
    if (!isRevealed) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isRevealed]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isRevealed) return;

    const trimmed = value.trim();
    if (!trimmed) {
      setEmptyWarning(true);
      SoundFX.wrong(soundEnabled);
      setTimeout(() => setEmptyWarning(false), 2500);
      return;
    }

    setEmptyWarning(false);
    onGuess(trimmed);
  };

  const handleHintClick = () => {
    if (isRevealed || hintsUsedCount >= maxHints) return;
    SoundFX.hint(soundEnabled);
    onUseHint();
  };

  const handleSkipClick = () => {
    if (isRevealed) return;
    SoundFX.click(soundEnabled);
    onSkip();
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-4 px-1">
      {/* Empty input warning toast */}
      {emptyWarning && (
        <div className="mb-2 p-2 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold flex items-center justify-center gap-2 animate-bounce">
          <AlertCircle className="w-4 h-4 text-rose-400" />
          <span>{t(language, 'emptyGuessWarning')}</span>
        </div>
      )}

      {/* Main input form */}
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-2.5">
        <div className="relative flex items-center shadow-lg rounded-2xl bg-slate-900 border-2 border-slate-700/80 focus-within:border-amber-400 focus-within:ring-4 focus-within:ring-amber-400/20 transition-all">
          <input
            id="guess-input"
            ref={inputRef}
            type="text"
            value={value}
            disabled={isRevealed}
            onChange={(e) => {
              setValue(e.target.value);
              if (emptyWarning) setEmptyWarning(false);
            }}
            placeholder={t(language, 'inputPlaceholder')}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            className="w-full bg-transparent px-4 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white placeholder:text-slate-500 outline-none disabled:opacity-50"
          />

          <button
            id="guess-submit-btn"
            type="submit"
            disabled={isRevealed || !value.trim()}
            className="mr-2 px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm tracking-wide flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
          >
            <span>{t(language, 'guessBtn')}</span>
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Action button bar: Hint button & Skip button */}
        <div className="flex items-center justify-between gap-2 px-1 text-xs">
          <button
            id="hint-btn"
            type="button"
            onClick={handleHintClick}
            disabled={isRevealed || hintsUsedCount >= maxHints}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all border shadow-sm cursor-pointer active:scale-95 ${
              hintsUsedCount < maxHints && !isRevealed
                ? 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-500/40 text-amber-300'
                : 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-50 cursor-not-allowed'
            }`}
          >
            <Lightbulb className="w-4 h-4 text-amber-400 fill-amber-400/30" />
            <span>{t(language, 'hintBtn')}</span>
            <span className="text-[10px] bg-amber-500/20 px-1.5 py-0.5 rounded text-amber-200">
              {hintsUsedCount}/{maxHints}
            </span>
          </button>

          {/* Current max round points indicator */}
          <div className="text-slate-400 text-[11px] font-medium flex items-center gap-1">
            <span>Maks:</span>
            <span className="font-mono font-bold text-amber-400">+{potentialPoints}</span>
          </div>

          {/* Skip button */}
          <button
            id="skip-btn"
            type="button"
            onClick={handleSkipClick}
            disabled={isRevealed}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/60 text-slate-400 hover:text-slate-200 font-semibold transition-all cursor-pointer active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
          >
            <span>{t(language, 'giveUpBtn')}</span>
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
};
