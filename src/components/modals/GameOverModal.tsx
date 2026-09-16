import React, { useState, useEffect } from 'react';
import { Trophy, RotateCcw, Home, BarChart3, CheckCircle, Target, Flame, Clock, Lightbulb, Save } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GameMode, Language } from '../../types';
import { t } from '../../utils/translations';
import { SoundFX } from '../../utils/sound';

interface Props {
  isOpen: boolean;
  isWin: boolean;
  score: number;
  correctCount: number;
  totalRounds: number;
  bestStreak: number;
  hintsUsed: number;
  totalDurationSeconds: number;
  gameMode: GameMode;
  language: Language;
  soundEnabled: boolean;
  onPlayAgain: () => void;
  onMainMenu: () => void;
  onViewStats: () => void;
  onSaveScore: (nickname: string) => void;
}

export const GameOverModal: React.FC<Props> = ({
  isOpen,
  isWin,
  score,
  correctCount,
  totalRounds,
  bestStreak,
  hintsUsed,
  totalDurationSeconds,
  gameMode,
  language,
  soundEnabled,
  onPlayAgain,
  onMainMenu,
  onViewStats,
  onSaveScore
}) => {
  const [nickname, setNickname] = useState('');
  const [hasSaved, setHasSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setHasSaved(false);
      // Auto fill last nickname if stored
      const lastNick = localStorage.getItem('gto_last_nickname') || '';
      setNickname(lastNick);

      if (isWin || score >= 2000) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  }, [isOpen, isWin, score]);

  if (!isOpen) return null;

  const accuracy = totalRounds > 0 ? Math.round((correctCount / totalRounds) * 100) : 0;
  const avgTime = correctCount > 0 ? (totalDurationSeconds / correctCount).toFixed(1) : '0.0';

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || hasSaved) return;

    localStorage.setItem('gto_last_nickname', nickname.trim());
    onSaveScore(nickname.trim());
    setHasSaved(true);
    SoundFX.correct(soundEnabled);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        id="game-over-modal"
        className="w-full max-w-lg bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 sm:p-7 shadow-2xl relative select-none max-h-[95vh] flex flex-col animate-in zoom-in-95 duration-200 text-white"
      >
        {/* Top Trophy Banner */}
        <div className="text-center mb-4">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 p-0.5 shadow-xl shadow-amber-500/25 flex items-center justify-center mb-3">
            <div className="w-full h-full rounded-[22px] bg-slate-950 flex items-center justify-center">
              <Trophy className="w-8 h-8 text-amber-400 fill-amber-400/20 animate-bounce" />
            </div>
          </div>

          <h2 className="font-black text-2xl sm:text-3xl uppercase tracking-tight bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
            {isWin ? t(language, 'gameComplete') : t(language, 'gameOver')}
          </h2>

          <div className="mt-2 py-2 px-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 inline-block">
            <p className="text-xs uppercase font-extrabold tracking-widest text-amber-400/90">
              {t(language, 'finalScore')}
            </p>
            <p className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight mt-0.5">
              {score.toLocaleString()} ⭐
            </p>
          </div>
        </div>

        {/* Breakdown Stats Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-5 text-xs">
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>{t(language, 'correctAnswers')}</span>
            </div>
            <span className="font-bold text-white font-mono">{correctCount} / {totalRounds}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Target className="w-4 h-4 text-sky-400" />
              <span>{t(language, 'accuracy')}</span>
            </div>
            <span className="font-bold text-white font-mono">{accuracy}%</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>{t(language, 'bestStreak')}</span>
            </div>
            <span className="font-bold text-white font-mono">x{bestStreak}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>{t(language, 'hintsUsed')}</span>
            </div>
            <span className="font-bold text-white font-mono">{hintsUsed}</span>
          </div>

          <div className="col-span-2 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>{t(language, 'avgGuessTime')}</span>
            </div>
            <span className="font-bold text-white font-mono">{avgTime} sec</span>
          </div>
        </div>

        {/* Enter Nickname for Leaderboard */}
        <div className="mb-5 p-3.5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
          <form onSubmit={handleSave} className="flex flex-col gap-2">
            <label className="text-xs font-bold text-slate-300">
              🏆 {t(language, 'enterNickname')}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                maxLength={20}
                disabled={hasSaved}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder={language === 'uz' ? 'Ismingiz...' : 'Your name...'}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white font-semibold outline-none focus:border-amber-400 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={hasSaved || !nickname.trim()}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  hasSaved
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm'
                }`}
              >
                <Save className="w-4 h-4" />
                <span>{hasSaved ? t(language, 'scoreSaved') : t(language, 'saveScoreBtn')}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <button
            id="modal-play-again-btn"
            onClick={onPlayAgain}
            className="py-3 px-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-md flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t(language, 'playAgain')}</span>
          </button>

          <button
            id="modal-main-menu-btn"
            onClick={onMainMenu}
            className="py-3 px-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
          >
            <Home className="w-4 h-4 text-slate-400" />
            <span>{t(language, 'mainMenu')}</span>
          </button>

          <button
            id="modal-stats-btn"
            onClick={onViewStats}
            className="py-3 px-2 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 flex items-center justify-center gap-1.5 transition active:scale-95 cursor-pointer"
          >
            <BarChart3 className="w-4 h-4 text-slate-400" />
            <span>{t(language, 'viewStats')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
