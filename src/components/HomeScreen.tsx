import React, { useState } from 'react';
import { Play, Trophy, Settings as SettingsIcon, HelpCircle, Flame, Award, Zap, Shield, Sparkles, ChevronRight, Clock, Heart, Infinity } from 'lucide-react';
import { GameMode, Difficulty, Category, Language, ThemeMode } from '../types';
import { t } from '../utils/translations';
import { SoundFX } from '../utils/sound';

interface Props {
  selectedMode: GameMode;
  selectedDifficulty: Difficulty;
  selectedCategory: 'all' | Category;
  language: Language;
  theme: ThemeMode;
  soundEnabled: boolean;
  dailyCompleted: boolean;
  highScore: number;
  onSelectMode: (mode: GameMode) => void;
  onSelectDifficulty: (diff: Difficulty) => void;
  onStartGame: (mode: GameMode) => void;
  onOpenLeaderboard: () => void;
  onOpenStats: () => void;
  onOpenSettings: () => void;
  onOpenHowToPlay: () => void;
  onOpenAchievements: () => void;
}

export const HomeScreen: React.FC<Props> = ({
  selectedMode,
  selectedDifficulty,
  selectedCategory,
  language,
  theme,
  soundEnabled,
  dailyCompleted,
  highScore,
  onSelectMode,
  onSelectDifficulty,
  onStartGame,
  onOpenLeaderboard,
  onOpenStats,
  onOpenSettings,
  onOpenHowToPlay,
  onOpenAchievements
}) => {
  const [activeTab, setActiveTab] = useState<'modes' | 'categories'>('modes');

  const modes: Array<{
    id: GameMode;
    title: string;
    descUz: string;
    descEn: string;
    icon: React.ReactNode;
    badge?: string;
  }> = [
    {
      id: 'classic',
      title: t(language, 'modeClassic'),
      descUz: '10 raund. Har bir to‘g‘ri topilgan buyum uchun ball to‘plang.',
      descEn: '10 rounds. Earn maximum points before the image reveals.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'time_attack',
      title: t(language, 'modeTimeAttack'),
      descUz: '60 soniya ichida imkon qadar ko‘p buyumni toping!',
      descEn: '60 seconds! Guess as many mystery objects as you can.',
      icon: <Clock className="w-5 h-5 text-sky-400" />
    },
    {
      id: 'sudden_death',
      title: t(language, 'modeSuddenDeath'),
      descUz: '3 ta joningiz bor. Har bir xatoda 1 jon yo‘qoladi.',
      descEn: '3 hearts. Every mistake loses a heart. Survive as long as possible.',
      icon: <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
    },
    {
      id: 'endless',
      title: t(language, 'modeEndless'),
      descUz: 'Cheksiz buyumlar oqimi. 3 ta xatoga qadar o‘ynang.',
      descEn: 'Never-ending stream of objects until 3 strikes.',
      icon: <Infinity className="w-5 h-5 text-purple-400" />
    }
  ];

  const difficulties: Array<{ id: Difficulty; labelUz: string; labelEn: string; multiplier: string }> = [
    { id: 'easy', labelUz: 'Oson', labelEn: 'Easy', multiplier: '×1.0' },
    { id: 'medium', labelUz: 'O‘rtacha', labelEn: 'Medium', multiplier: '×1.5' },
    { id: 'hard', labelUz: 'Qiyin', labelEn: 'Hard', multiplier: '×2.0' }
  ];

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-4 sm:py-6 flex flex-col items-center select-none text-white animate-in fade-in duration-300">
      {/* Hero Animated Mystery Box / Magnifying Glass */}
      <div className="relative mb-5 flex items-center justify-center">
        {/* Ambient Ring Glow */}
        <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-tr from-amber-500/30 to-orange-500/20 blur-xl animate-pulse" />

        <div className="relative w-28 h-28 rounded-3xl bg-slate-900/90 border-2 border-amber-500/50 p-3 shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 p-0.5 shadow-lg shadow-amber-500/30 flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-slate-950 flex items-center justify-center">
              <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">
                🔍
              </span>
            </div>
          </div>
          <div className="absolute -bottom-2 px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] tracking-wider uppercase shadow-md">
            MYSTERY
          </div>
        </div>
      </div>

      {/* Hero Title & Subtitle */}
      <div className="text-center mb-6">
        <h2 className="font-black text-3xl sm:text-4xl tracking-tight uppercase leading-none bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
          {t(language, 'appTitle')}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md mx-auto font-medium">
          {t(language, 'appSubtitle')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <span>🖼️</span>
            <span>{language === 'uz' ? '100+ rasmlar bazasi (119 ta buyum)' : '100+ objects collection (119 items)'}</span>
          </div>

          {highScore > 0 && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
              <Trophy className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{t(language, 'highestScoreStat')}:</span>
              <span className="font-mono">{highScore.toLocaleString()}</span>
            </div>
          )}
        </div>
      </div>

      {/* Big Play CTA Button */}
      <div className="w-full mb-6">
        <button
          id="home-play-btn"
          onClick={() => {
            SoundFX.click(soundEnabled);
            onStartGame(selectedMode);
          }}
          className="w-full py-4 sm:py-5 px-6 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 hover:from-amber-400 hover:via-orange-400 hover:to-yellow-400 text-slate-950 font-black text-xl sm:text-2xl tracking-wide flex items-center justify-center gap-3 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-slate-950/20 flex items-center justify-center">
            <Play className="w-5 h-5 fill-slate-950 text-slate-950 ml-0.5 group-hover:scale-110 transition-transform" />
          </div>
          <span>{t(language, 'play')}</span>
        </button>

        {/* Daily Challenge Special Button */}
        <button
          id="home-daily-btn"
          onClick={() => {
            SoundFX.click(soundEnabled);
            onStartGame('daily');
          }}
          className={`mt-3 w-full py-3 px-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer active:scale-98 ${
            dailyCompleted
              ? 'bg-slate-900/60 border-slate-800 text-slate-400'
              : 'bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/10 hover:bg-orange-500/30 border-orange-500/40 text-orange-200'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
              <Flame className="w-4 h-4 fill-orange-400" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-xs sm:text-sm uppercase tracking-wide block">
                {t(language, 'dailyChallenge')}
              </span>
              <span className="text-[11px] text-slate-400">
                {dailyCompleted ? t(language, 'dailyAlreadyDone') : t(language, 'dailyInfo')}
              </span>
            </div>
          </div>
          <span className="text-xs font-bold px-2 py-1 rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/30">
            {dailyCompleted ? '✓ 100%' : '5 OBJ'}
          </span>
        </button>
      </div>

      {/* Mode & Difficulty Selector Card */}
      <div className="w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-5 mb-5 shadow-xl">
        {/* Difficulty Selector */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>{t(language, 'difficultyLabel')}</span>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff.id}
                onClick={() => {
                  SoundFX.click(soundEnabled);
                  onSelectDifficulty(diff.id);
                }}
                className={`py-2 px-2 rounded-xl text-xs font-bold transition border cursor-pointer flex flex-col items-center ${
                  selectedDifficulty === diff.id
                    ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                <span>{language === 'uz' ? diff.labelUz : diff.labelEn}</span>
                <span className={`text-[10px] font-mono ${selectedDifficulty === diff.id ? 'text-slate-900 font-extrabold' : 'text-slate-400'}`}>
                  {diff.multiplier}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Modes Grid */}
        <div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
            {language === 'uz' ? 'O‘yin rejimlari:' : 'Game Modes:'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {modes.map((mode) => (
              <div
                key={mode.id}
                onClick={() => {
                  SoundFX.click(soundEnabled);
                  onSelectMode(mode.id);
                }}
                className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                  selectedMode === mode.id
                    ? 'bg-amber-500/15 border-amber-500/60 shadow-sm'
                    : 'bg-slate-800/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 flex-shrink-0">
                  {mode.icon}
                </div>
                <div>
                  <h4 className={`text-xs sm:text-sm font-bold leading-tight ${selectedMode === mode.id ? 'text-amber-400' : 'text-slate-200'}`}>
                    {mode.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {language === 'uz' ? mode.descUz : mode.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Navigation Action Grid */}
      <div className="w-full grid grid-cols-4 gap-2 mb-6">
        <button
          id="home-leaderboard-btn"
          onClick={() => {
            SoundFX.click(soundEnabled);
            onOpenLeaderboard();
          }}
          className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 flex flex-col items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm"
        >
          <Trophy className="w-5 h-5 text-amber-400" />
          <span className="text-[11px] font-bold text-slate-300">
            {language === 'uz' ? 'Reyting' : 'Scores'}
          </span>
        </button>

        <button
          id="home-achievements-btn"
          onClick={() => {
            SoundFX.click(soundEnabled);
            onOpenAchievements();
          }}
          className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 flex flex-col items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm"
        >
          <Award className="w-5 h-5 text-purple-400" />
          <span className="text-[11px] font-bold text-slate-300">
            {language === 'uz' ? 'Yutuqlar' : 'Badges'}
          </span>
        </button>

        <button
          id="home-stats-btn"
          onClick={() => {
            SoundFX.click(soundEnabled);
            onOpenStats();
          }}
          className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 flex flex-col items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm"
        >
          <Zap className="w-5 h-5 text-sky-400" />
          <span className="text-[11px] font-bold text-slate-300">
            {t(language, 'stats')}
          </span>
        </button>

        <button
          id="home-how-btn"
          onClick={() => {
            SoundFX.click(soundEnabled);
            onOpenHowToPlay();
          }}
          className="p-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 flex flex-col items-center gap-1.5 transition cursor-pointer active:scale-95 shadow-sm"
        >
          <HelpCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-[11px] font-bold text-slate-300">
            {language === 'uz' ? 'Qoidalar' : 'Rules'}
          </span>
        </button>
      </div>

      {/* Footer Text */}
      <p className="text-xs text-slate-500 font-medium tracking-wide">
        🔍 {t(language, 'footerText')}
      </p>
    </div>
  );
};
