import React from 'react';
import { Volume2, VolumeX, Settings as SettingsIcon, Home, Sparkles, Flame, Heart } from 'lucide-react';
import { Language, GameMode, ThemeMode } from '../types';
import { t } from '../utils/translations';
import { SoundFX } from '../utils/sound';

interface Props {
  inGame: boolean;
  score: number;
  streak: number;
  lives: number;
  maxLives: number;
  gameMode: GameMode;
  soundEnabled: boolean;
  theme: ThemeMode;
  language: Language;
  onToggleSound: () => void;
  onOpenSettings: () => void;
  onOpenHowToPlay: () => void;
  onHomeClick: () => void;
  onToggleLanguage: () => void;
}

export const Header: React.FC<Props> = ({
  inGame,
  score,
  streak,
  lives,
  maxLives,
  gameMode,
  soundEnabled,
  theme,
  language,
  onToggleSound,
  onOpenSettings,
  onOpenHowToPlay,
  onHomeClick,
  onToggleLanguage
}) => {
  const getStreakMultiplier = (s: number) => {
    if (s >= 10) return 'x1.5';
    if (s >= 5) return 'x1.25';
    if (s >= 3) return 'x1.1';
    return null;
  };

  const streakMultiplier = getStreakMultiplier(streak);

  return (
    <header 
      id="game-header"
      className={`w-full max-w-5xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4 relative z-20 select-none ${
        theme === 'dark' ? 'text-white' : 'text-slate-900'
      }`}
    >
      {/* Brand / Home Link */}
      <div className="flex items-center gap-2 sm:gap-3">
        {inGame && (
          <button
            id="header-home-btn"
            onClick={() => {
              SoundFX.click(soundEnabled);
              onHomeClick();
            }}
            className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
            title={t(language, 'mainMenu')}
            aria-label="Back to home"
          >
            <Home className="w-5 h-5" />
          </button>
        )}

        <div 
          onClick={inGame ? onHomeClick : undefined}
          className={`flex items-center gap-2.5 ${inGame ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 p-0.5 shadow-md shadow-amber-500/20 flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
              <span className="text-xl">🔍</span>
            </div>
          </div>
          <div>
            <h1 className="font-extrabold text-base sm:text-xl tracking-tight leading-none bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent uppercase">
              {t(language, 'appTitle')}
            </h1>
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-wide">
              {inGame ? (
                <span className="text-amber-400/90 font-semibold">
                  {gameMode === 'classic' && t(language, 'modeClassic')}
                  {gameMode === 'time_attack' && t(language, 'modeTimeAttack')}
                  {gameMode === 'sudden_death' && t(language, 'modeSuddenDeath')}
                  {gameMode === 'endless' && t(language, 'modeEndless')}
                  {gameMode === 'daily' && t(language, 'modeDaily')}
                </span>
              ) : (
                'Visual Mystery Game'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* In-Game HUD: Score, Streak, Lives */}
      {inGame && (
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Score Badge */}
          <div 
            id="hud-score-badge"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs sm:text-sm tracking-wide font-mono">
              {score.toLocaleString()}
            </span>
          </div>

          {/* Streak Badge */}
          {streak > 0 && (
            <div 
              id="hud-streak-badge"
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-orange-500/15 border border-orange-500/40 text-orange-400 font-bold shadow-sm animate-pulse"
            >
              <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
              <span className="text-xs sm:text-sm font-mono">{streak}</span>
              {streakMultiplier && (
                <span className="text-[10px] bg-orange-500 text-slate-950 font-black px-1.5 py-0.5 rounded-md ml-0.5">
                  {streakMultiplier}
                </span>
              )}
            </div>
          )}

          {/* Lives (For sudden death / endless) */}
          {(gameMode === 'sudden_death' || gameMode === 'endless') && (
            <div id="hud-lives-badge" className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30">
              {Array.from({ length: maxLives }).map((_, i) => (
                <Heart
                  key={i}
                  className={`w-4 h-4 transition-all duration-300 ${
                    i < lives
                      ? 'text-rose-500 fill-rose-500 scale-100'
                      : 'text-slate-600 fill-slate-700/30 scale-75 opacity-40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Action Buttons: Sound, Language, Settings, Help */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Language quick switcher */}
        <button
          id="header-language-toggle"
          onClick={() => {
            SoundFX.click(soundEnabled);
            onToggleLanguage();
          }}
          className="px-2.5 py-1.5 rounded-xl bg-slate-800/70 hover:bg-slate-700 border border-slate-700/80 text-xs font-bold text-slate-200 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
          title="Change language"
          aria-label="Change language"
        >
          {language === 'uz' ? '🇺🇿 UZ' : '🇬🇧 EN'}
        </button>

        {/* Sound toggle */}
        <button
          id="header-sound-toggle"
          onClick={() => {
            onToggleSound();
            if (!soundEnabled) {
              SoundFX.click(true);
            }
          }}
          className={`p-2 rounded-xl border transition-all shadow-sm active:scale-95 cursor-pointer ${
            soundEnabled
              ? 'bg-slate-800/70 hover:bg-slate-700 border-slate-700/80 text-amber-400'
              : 'bg-slate-800/30 border-slate-800 text-slate-500 hover:text-slate-400'
          }`}
          title={soundEnabled ? 'Mute sound' : 'Unmute sound'}
          aria-label="Toggle sound"
        >
          {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>

        {/* Settings button */}
        <button
          id="header-settings-btn"
          onClick={() => {
            SoundFX.click(soundEnabled);
            onOpenSettings();
          }}
          className="p-2 rounded-xl bg-slate-800/70 hover:bg-slate-700 border border-slate-700/80 text-slate-300 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
          title={t(language, 'settings')}
          aria-label="Settings"
        >
          <SettingsIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
