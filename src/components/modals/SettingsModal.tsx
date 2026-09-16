import React, { useEffect } from 'react';
import { Settings as SettingsIcon, X, Volume2, VolumeX, Sparkles, Moon, Sun, Globe, Shield, RefreshCw } from 'lucide-react';
import { GameSettings, Language, Difficulty, Category } from '../../types';
import { t } from '../../utils/translations';

interface Props {
  isOpen: boolean;
  settings: GameSettings;
  language: Language;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
  onResetStats: () => void;
  onClose: () => void;
}

export const SettingsModal: React.FC<Props> = ({
  isOpen,
  settings,
  language,
  onUpdateSettings,
  onResetStats,
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

  const categories: Array<{ id: 'all' | Category; labelUz: string; labelEn: string }> = [
    { id: 'all', labelUz: 'Barchasi', labelEn: 'All Categories' },
    { id: 'everyday', labelUz: '🧸 Kundalik buyumlar', labelEn: '🧸 Everyday' },
    { id: 'food', labelUz: '🍎 Taomlar va mevalar', labelEn: '🍎 Food' },
    { id: 'technology', labelUz: '💻 Texnologiya', labelEn: '💻 Technology' },
    { id: 'household', labelUz: '🏠 Uy-ro‘zg‘or', labelEn: '🏠 Household' },
    { id: 'vehicles', labelUz: '🚗 Transport', labelEn: '🚗 Vehicles' },
    { id: 'sports', labelUz: '⚽ Sport', labelEn: '⚽ Sports' },
    { id: 'music', labelUz: '🎵 Musiqa', labelEn: '🎵 Music' },
    { id: 'school', labelUz: '📚 Maktab', labelEn: '📚 School' },
    { id: 'tools', labelUz: '🔧 Ish qurollari', labelEn: '🔧 Tools' },
    { id: 'nature', labelUz: '🌳 Tabiat', labelEn: '🌳 Nature' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="settings-modal"
        className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-7 shadow-2xl relative select-none max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200 text-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <SettingsIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl leading-tight">
                {t(language, 'settings')}
              </h3>
              <p className="text-xs text-slate-400">
                {language === 'uz' ? 'O‘yin parametrlarini moslash' : 'Game preferences'}
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

        {/* Options List */}
        <div className="overflow-y-auto pr-1 space-y-4 flex-1 scrollbar-thin">
          {/* Sound Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-3">
              {settings.soundEnabled ? (
                <Volume2 className="w-5 h-5 text-amber-400" />
              ) : (
                <VolumeX className="w-5 h-5 text-slate-500" />
              )}
              <span className="text-sm font-semibold text-slate-200">
                {t(language, 'sound')}
              </span>
            </div>
            <button
              onClick={() => onUpdateSettings({ soundEnabled: !settings.soundEnabled })}
              className={`px-4 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer ${
                settings.soundEnabled
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              {settings.soundEnabled ? t(language, 'on') : t(language, 'off')}
            </button>
          </div>

          {/* Animations Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-semibold text-slate-200">
                {t(language, 'animations')}
              </span>
            </div>
            <button
              onClick={() => onUpdateSettings({ animationsEnabled: !settings.animationsEnabled })}
              className={`px-4 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer ${
                settings.animationsEnabled
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-slate-700 text-slate-400'
              }`}
            >
              {settings.animationsEnabled ? t(language, 'on') : t(language, 'off')}
            </button>
          </div>

          {/* Theme Mode Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-3">
              {settings.theme === 'dark' ? (
                <Moon className="w-5 h-5 text-indigo-400" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
              <span className="text-sm font-semibold text-slate-200">
                {t(language, 'theme')}
              </span>
            </div>
            <div className="flex gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => onUpdateSettings({ theme: 'dark' })}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  settings.theme === 'dark' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t(language, 'dark')}
              </button>
              <button
                onClick={() => onUpdateSettings({ theme: 'light' })}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  settings.theme === 'light' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t(language, 'light')}
              </button>
            </div>
          </div>

          {/* Language selection */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-semibold text-slate-200">
                {t(language, 'languageLabel')}
              </span>
            </div>
            <div className="flex gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => onUpdateSettings({ language: 'uz' })}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  settings.language === 'uz' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                🇺🇿 O‘zbek
              </button>
              <button
                onClick={() => onUpdateSettings({ language: 'en' })}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  settings.language === 'en' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                🇬🇧 English
              </button>
            </div>
          </div>

          {/* Difficulty selection */}
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center gap-3 mb-2.5">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-semibold text-slate-200">
                {t(language, 'difficultyLabel')}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
                <button
                  key={diff}
                  onClick={() => onUpdateSettings({ difficulty: diff })}
                  className={`py-2 px-1 rounded-xl text-xs font-bold text-center transition border cursor-pointer ${
                    settings.difficulty === diff
                      ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-sm'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  {diff === 'easy' && t(language, 'diffEasy')}
                  {diff === 'medium' && t(language, 'diffMedium')}
                  {diff === 'hard' && t(language, 'diffHard')}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-200">
                {t(language, 'categoryLabel')}
              </span>
            </div>
            <select
              value={settings.selectedCategory}
              onChange={(e) => onUpdateSettings({ selectedCategory: e.target.value as any })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id} className="bg-slate-900 text-white">
                  {language === 'uz' ? cat.labelUz : cat.labelEn}
                </option>
              ))}
            </select>
          </div>

          {/* Clear stats button */}
          <div className="pt-2">
            <button
              onClick={() => {
                if (confirm(language === 'uz' ? 'Haqiqatan ham barcha statistika va natijalarni tozalashni xohlaysizmi?' : 'Are you sure you want to reset all stats and history?')) {
                  onResetStats();
                }
              }}
              className="w-full py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 font-semibold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{language === 'uz' ? 'Statistikani qayta tiklash' : 'Reset Statistics & Data'}</span>
            </button>
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
