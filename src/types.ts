export type Difficulty = 'easy' | 'medium' | 'hard';

export type GameMode = 'classic' | 'time_attack' | 'sudden_death' | 'endless' | 'daily';

export type RevealEffect = 
  | 'blur'
  | 'pixel'
  | 'silhouette'
  | 'zoom'
  | 'circle'
  | 'strips_h'
  | 'strips_v'
  | 'mosaic';

export type Category = 
  | 'everyday'
  | 'food'
  | 'technology'
  | 'household'
  | 'vehicles'
  | 'sports'
  | 'music'
  | 'school'
  | 'tools'
  | 'nature';

export interface ObjectItem {
  id: string;
  name: string;
  nameUz: string;
  acceptedAnswers: string[];
  category: Category;
  difficulty: Difficulty;
  image: string;
  fallbackColor?: string;
  hints: {
    en: [string, string, string];
    uz: [string, string, string];
  };
}

export type Language = 'uz' | 'en';
export type ThemeMode = 'dark' | 'light';

export interface GameSettings {
  soundEnabled: boolean;
  animationsEnabled: boolean;
  theme: ThemeMode;
  difficulty: Difficulty;
  language: Language;
  selectedCategory: 'all' | Category;
}

export interface GameStats {
  gamesPlayed: number;
  totalCorrect: number;
  totalWrong: number;
  highestScore: number;
  bestStreak: number;
  objectsDiscovered: string[];
  totalHintsUsed: number;
  totalPlayTimeSeconds: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  mode: GameMode;
  date: string;
  accuracy: number;
}

export interface Achievement {
  id: string;
  titleEn: string;
  titleUz: string;
  descEn: string;
  descUz: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface ScorePopupItem {
  id: number;
  text: string;
  type: 'positive' | 'negative' | 'streak';
}
