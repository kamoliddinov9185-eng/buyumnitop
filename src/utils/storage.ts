import { GameSettings, GameStats, LeaderboardEntry, Achievement } from '../types';

const SETTINGS_KEY = 'gto_settings_v1';
const STATS_KEY = 'gto_stats_v1';
const LEADERBOARD_KEY = 'gto_leaderboard_v1';
const ACHIEVEMENTS_KEY = 'gto_achievements_v1';
const DAILY_PREFIX = 'gto_daily_';

export const DEFAULT_SETTINGS: GameSettings = {
  soundEnabled: true,
  animationsEnabled: true,
  theme: 'dark',
  difficulty: 'easy',
  language: 'uz',
  selectedCategory: 'all'
};

export const DEFAULT_STATS: GameStats = {
  gamesPlayed: 0,
  totalCorrect: 0,
  totalWrong: 0,
  highestScore: 0,
  bestStreak: 0,
  objectsDiscovered: [],
  totalHintsUsed: 0,
  totalPlayTimeSeconds: 0
};

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_guess',
    titleEn: 'First Guess',
    titleUz: 'Birinchi topish',
    descEn: 'Guess your first object correctly.',
    descUz: 'Birinchi marta buyumni to‘g‘ri toping.',
    icon: '🎯',
    unlocked: false
  },
  {
    id: 'on_fire',
    titleEn: 'On Fire',
    titleUz: 'Olovli zanjir',
    descEn: 'Reach a streak of 5 correct answers.',
    descUz: 'Ketma-ket 5 ta to‘g‘ri javob toping.',
    icon: '🔥',
    unlocked: false
  },
  {
    id: 'speed_demon',
    titleEn: 'Speed Demon',
    titleUz: 'Tezkor topqir',
    descEn: 'Guess an object in under 3 seconds.',
    descUz: 'Buyumni 3 soniyadan kamroq vaqtda toping.',
    icon: '⚡',
    unlocked: false
  },
  {
    id: 'perfect_game',
    titleEn: 'Flawless Master',
    titleUz: 'Mukammal g‘alaba',
    descEn: 'Complete a 10-round game with 100% accuracy.',
    descUz: '10 raundli o‘yinda biror marta adashmay g‘olib bo‘ling.',
    icon: '🧠',
    unlocked: false
  },
  {
    id: 'no_hints',
    titleEn: 'No Help Needed',
    titleUz: 'Maslahatsiz usta',
    descEn: 'Win a Classic game without using any hints.',
    descUz: 'Klassik o‘yinda biror marta maslahat (hint) olmasdan yuting.',
    icon: '💡',
    unlocked: false
  },
  {
    id: 'sharp_eye',
    titleEn: 'Sharp Eye',
    titleUz: 'O‘tkir nigoh',
    descEn: 'Identify 20 unique objects total.',
    descUz: 'Jami 20 xil buyumni kashf eting.',
    icon: '👁️',
    unlocked: false
  },
  {
    id: 'high_scorer',
    titleEn: 'Grand Master',
    titleUz: 'Grossmeyster',
    descEn: 'Score over 8,000 points in a single game.',
    descUz: 'Bitta o‘yinda 8,000 balldan ortiq to‘plang.',
    icon: '👑',
    unlocked: false
  },
  {
    id: 'daily_champion',
    titleEn: 'Daily Champion',
    titleUz: 'Kunlik qahramon',
    descEn: 'Complete a Daily Challenge.',
    descUz: 'Kunlik maxsus topshiriqni yakunlang.',
    icon: '📅',
    unlocked: false
  }
];

export const Storage = {
  loadSettings(): GameSettings {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (data) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
      }
    } catch {}
    return DEFAULT_SETTINGS;
  },

  saveSettings(settings: GameSettings): void {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {}
  },

  loadStats(): GameStats {
    try {
      const data = localStorage.getItem(STATS_KEY);
      if (data) {
        return { ...DEFAULT_STATS, ...JSON.parse(data) };
      }
    } catch {}
    return DEFAULT_STATS;
  },

  saveStats(stats: GameStats): void {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch {}
  },

  loadLeaderboard(): LeaderboardEntry[] {
    try {
      const data = localStorage.getItem(LEADERBOARD_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch {}
    // Initial sample leaderboard to make it feel vibrant
    return [
      { id: '1', name: 'Abdulaziz', score: 9450, mode: 'classic', date: '2026-09-14', accuracy: 100 },
      { id: '2', name: 'Zilola', score: 8600, mode: 'classic', date: '2026-09-15', accuracy: 90 },
      { id: '3', name: 'Jasur_Master', score: 7900, mode: 'classic', date: '2026-09-15', accuracy: 80 },
      { id: '4', name: 'CyberGuesser', score: 7150, mode: 'time_attack', date: '2026-09-16', accuracy: 85 }
    ];
  },

  saveLeaderboard(entries: LeaderboardEntry[]): void {
    try {
      localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(entries));
    } catch {}
  },

  loadAchievements(): Achievement[] {
    try {
      const data = localStorage.getItem(ACHIEVEMENTS_KEY);
      if (data) {
        const saved: Achievement[] = JSON.parse(data);
        return INITIAL_ACHIEVEMENTS.map(initial => {
          const found = saved.find(s => s.id === initial.id);
          return found ? { ...initial, unlocked: found.unlocked, unlockedAt: found.unlockedAt } : initial;
        });
      }
    } catch {}
    return INITIAL_ACHIEVEMENTS;
  },

  saveAchievements(achievements: Achievement[]): void {
    try {
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
    } catch {}
  },

  getDailyStatus(dateKey: string): { completed: boolean; score?: number } {
    try {
      const data = localStorage.getItem(`${DAILY_PREFIX}${dateKey}`);
      if (data) return JSON.parse(data);
    } catch {}
    return { completed: false };
  },

  setDailyStatus(dateKey: string, score: number): void {
    try {
      localStorage.setItem(`${DAILY_PREFIX}${dateKey}`, JSON.stringify({ completed: true, score }));
    } catch {}
  }
};
