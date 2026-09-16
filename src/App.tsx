import React, { useState, useEffect, useRef } from 'react';
import { 
  GameMode, 
  Difficulty, 
  Category, 
  Language, 
  ThemeMode, 
  GameSettings, 
  GameStats, 
  LeaderboardEntry, 
  Achievement 
} from './types';
import { OBJECTS_DATABASE } from './data/objects';
import { Storage, DEFAULT_SETTINGS, DEFAULT_STATS } from './utils/storage';
import { SoundFX } from './utils/sound';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { GameScreen } from './components/GameScreen';
import { HowToPlayModal } from './components/modals/HowToPlayModal';
import { SettingsModal } from './components/modals/SettingsModal';
import { StatsModal } from './components/modals/StatsModal';
import { LeaderboardModal } from './components/modals/LeaderboardModal';
import { AchievementsModal } from './components/modals/AchievementsModal';
import { GameOverModal } from './components/modals/GameOverModal';

export default function App() {
  // Global persistent settings & stats
  const [settings, setSettings] = useState<GameSettings>(DEFAULT_SETTINGS);
  const [stats, setStats] = useState<GameStats>(DEFAULT_STATS);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  // Navigation & Screen state
  const [currentScreen, setCurrentScreen] = useState<'home' | 'game'>('home');
  const [activeGameMode, setActiveGameMode] = useState<GameMode>('classic');

  // Active game session state
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestSessionStreak, setBestSessionStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const maxLives = 3;
  const [correctRoundsCount, setCorrectRoundsCount] = useState(0);
  const [totalRoundsPlayed, setTotalRoundsPlayed] = useState(0);
  const [totalSessionHints, setTotalSessionHints] = useState(0);
  const [gameStartTime, setGameStartTime] = useState<number>(Date.now());
  const [lastGameWin, setLastGameWin] = useState(false);

  // Modals state
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);
  const [isGameOverOpen, setIsGameOverOpen] = useState(false);

  // Daily seed
  const todayKey = new Date().toISOString().slice(0, 10);
  const [dailyStatus, setDailyStatus] = useState(() => Storage.getDailyStatus(todayKey));

  // Initialize data on mount
  useEffect(() => {
    const loadedSettings = Storage.loadSettings();
    const loadedStats = Storage.loadStats();
    const loadedLeaderboard = Storage.loadLeaderboard();
    const loadedAchievements = Storage.loadAchievements();

    setSettings(loadedSettings);
    setStats(loadedStats);
    setLeaderboard(loadedLeaderboard);
    setAchievements(loadedAchievements);
    setDailyStatus(Storage.getDailyStatus(todayKey));
  }, [todayKey]);

  // Sync theme class to body
  useEffect(() => {
    if (settings.theme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.body.className = 'bg-slate-100 text-slate-900 min-h-screen antialiased selection:bg-amber-500 selection:text-slate-950 transition-colors duration-500';
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.className = 'bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-amber-500 selection:text-slate-950 transition-colors duration-500';
    }
  }, [settings.theme]);

  // Achievement unlock helper
  const unlockAchievement = (id: string) => {
    setAchievements(prev => {
      const ach = prev.find(a => a.id === id);
      if (ach && !ach.unlocked) {
        const updated = prev.map(a => a.id === id ? { ...a, unlocked: true, unlockedAt: new Date().toLocaleDateString() } : a);
        Storage.saveAchievements(updated);
        SoundFX.streak(settings.soundEnabled, 10);
        return updated;
      }
      return prev;
    });
  };

  // Start game session
  const handleStartGame = (mode: GameMode) => {
    setActiveGameMode(mode);
    setScore(0);
    setStreak(0);
    setBestSessionStreak(0);
    setLives(maxLives);
    setCorrectRoundsCount(0);
    setTotalRoundsPlayed(0);
    setTotalSessionHints(0);
    setGameStartTime(Date.now());
    setIsGameOverOpen(false);
    setCurrentScreen('game');
  };

  // Update Score
  const handleUpdateScore = (newScore: number) => {
    setScore(newScore);
  };

  // Update Streak
  const handleUpdateStreak = (newStreak: number) => {
    setStreak(newStreak);
    if (newStreak > bestSessionStreak) {
      setBestSessionStreak(newStreak);
    }
    if (newStreak >= 5) {
      unlockAchievement('on_fire');
    }
  };

  // Lose Life
  const handleLoseLife = () => {
    setLives(prev => Math.max(0, prev - 1));
  };

  // Single round completed callback
  const handleRoundComplete = (
    correct: boolean,
    timeSpent: number,
    hintsUsed: number,
    objectId: string
  ) => {
    setTotalRoundsPlayed(prev => prev + 1);
    setTotalSessionHints(prev => prev + hintsUsed);

    if (correct) {
      setCorrectRoundsCount(prev => prev + 1);
      unlockAchievement('first_guess');

      if (timeSpent <= 3) {
        unlockAchievement('speed_demon');
      }

      // Record discovered object
      setStats(prev => {
        const discovered = prev.objectsDiscovered.includes(objectId)
          ? prev.objectsDiscovered
          : [...prev.objectsDiscovered, objectId];

        if (discovered.length >= 20) {
          unlockAchievement('sharp_eye');
        }

        const updatedStats: GameStats = {
          ...prev,
          totalCorrect: prev.totalCorrect + 1,
          objectsDiscovered: discovered,
          totalHintsUsed: prev.totalHintsUsed + hintsUsed,
          totalPlayTimeSeconds: prev.totalPlayTimeSeconds + Math.round(timeSpent)
        };
        Storage.saveStats(updatedStats);
        return updatedStats;
      });
    } else {
      setStats(prev => {
        const updatedStats: GameStats = {
          ...prev,
          totalWrong: prev.totalWrong + 1,
          totalHintsUsed: prev.totalHintsUsed + hintsUsed,
          totalPlayTimeSeconds: prev.totalPlayTimeSeconds + Math.round(timeSpent)
        };
        Storage.saveStats(updatedStats);
        return updatedStats;
      });
    }
  };

  // Game over / finish
  const handleGameOver = (isWin: boolean) => {
    setLastGameWin(isWin);
    setIsGameOverOpen(true);

    if (isWin) {
      SoundFX.levelComplete(settings.soundEnabled);
    } else {
      SoundFX.gameOver(settings.soundEnabled);
    }

    const sessionDuration = Math.round((Date.now() - gameStartTime) / 1000);

    // Check game achievements
    if (score >= 8000) {
      unlockAchievement('high_scorer');
    }
    if (activeGameMode === 'classic' && correctRoundsCount === 10) {
      unlockAchievement('perfect_game');
    }
    if (activeGameMode === 'classic' && isWin && totalSessionHints === 0) {
      unlockAchievement('no_hints');
    }
    if (activeGameMode === 'daily' && isWin) {
      unlockAchievement('daily_champion');
      Storage.setDailyStatus(todayKey, score);
      setDailyStatus({ completed: true, score });
    }

    // Update global stats
    setStats(prev => {
      const updated: GameStats = {
        ...prev,
        gamesPlayed: prev.gamesPlayed + 1,
        highestScore: Math.max(prev.highestScore, score),
        bestStreak: Math.max(prev.bestStreak, bestSessionStreak),
        totalPlayTimeSeconds: prev.totalPlayTimeSeconds + sessionDuration
      };
      Storage.saveStats(updated);
      return updated;
    });
  };

  // Save score to leaderboard
  const handleSaveScoreToLeaderboard = (nickname: string) => {
    const accuracy = totalRoundsPlayed > 0 ? Math.round((correctRoundsCount / totalRoundsPlayed) * 100) : 0;
    const newEntry: LeaderboardEntry = {
      id: Date.now().toString(),
      name: nickname,
      score,
      mode: activeGameMode,
      date: new Date().toISOString().slice(0, 10),
      accuracy
    };

    const updated = [newEntry, ...leaderboard]
      .sort((a, b) => b.score - a.score)
      .slice(0, 20);

    setLeaderboard(updated);
    Storage.saveLeaderboard(updated);
  };

  // Update Settings
  const handleUpdateSettings = (newSettings: Partial<GameSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    Storage.saveSettings(updated);
  };

  // Reset Stats
  const handleResetStats = () => {
    setStats(DEFAULT_STATS);
    Storage.saveStats(DEFAULT_STATS);
    setLeaderboard([]);
    Storage.saveLeaderboard([]);
  };

  return (
    <div 
      className={`min-h-screen w-full flex flex-col justify-between relative transition-colors duration-500 overflow-x-hidden ${
        settings.theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      }`}
    >
      {/* Background Animated Particles and Ambient Lights */}
      <BackgroundParticles 
        animationsEnabled={settings.animationsEnabled} 
        theme={settings.theme} 
      />

      {/* Persistent Navigation Header */}
      <Header
        inGame={currentScreen === 'game'}
        score={score}
        streak={streak}
        lives={lives}
        maxLives={maxLives}
        gameMode={activeGameMode}
        soundEnabled={settings.soundEnabled}
        theme={settings.theme}
        language={settings.language}
        onToggleSound={() => handleUpdateSettings({ soundEnabled: !settings.soundEnabled })}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenHowToPlay={() => setIsHowToPlayOpen(true)}
        onHomeClick={() => setCurrentScreen('home')}
        onToggleLanguage={() => handleUpdateSettings({ language: settings.language === 'uz' ? 'en' : 'uz' })}
      />

      {/* Main Viewport Screen */}
      <main className="flex-1 flex flex-col justify-center items-center relative z-10 w-full">
        {currentScreen === 'home' ? (
          <HomeScreen
            selectedMode={activeGameMode}
            selectedDifficulty={settings.difficulty}
            selectedCategory={settings.selectedCategory}
            language={settings.language}
            theme={settings.theme}
            soundEnabled={settings.soundEnabled}
            dailyCompleted={dailyStatus.completed}
            highScore={stats.highestScore}
            onSelectMode={(mode) => setActiveGameMode(mode)}
            onSelectDifficulty={(diff) => handleUpdateSettings({ difficulty: diff })}
            onStartGame={handleStartGame}
            onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
            onOpenStats={() => setIsStatsOpen(true)}
            onOpenSettings={() => setIsSettingsOpen(true)}
            onOpenHowToPlay={() => setIsHowToPlayOpen(true)}
            onOpenAchievements={() => setIsAchievementsOpen(true)}
          />
        ) : (
          <GameScreen
            key={`${activeGameMode}-${gameStartTime}`}
            gameMode={activeGameMode}
            difficulty={settings.difficulty}
            category={settings.selectedCategory}
            language={settings.language}
            soundEnabled={settings.soundEnabled}
            lives={lives}
            maxLives={maxLives}
            streak={streak}
            score={score}
            allObjects={OBJECTS_DATABASE}
            dailySeed={activeGameMode === 'daily' ? todayKey : undefined}
            onUpdateScore={handleUpdateScore}
            onUpdateStreak={handleUpdateStreak}
            onLoseLife={handleLoseLife}
            onRoundComplete={handleRoundComplete}
            onGameOver={handleGameOver}
          />
        )}
      </main>

      {/* Modals */}
      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        language={settings.language}
        onClose={() => setIsHowToPlayOpen(false)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        settings={settings}
        language={settings.language}
        onUpdateSettings={handleUpdateSettings}
        onResetStats={handleResetStats}
        onClose={() => setIsSettingsOpen(false)}
      />

      <StatsModal
        isOpen={isStatsOpen}
        stats={stats}
        totalObjectsCount={OBJECTS_DATABASE.length}
        language={settings.language}
        onClose={() => setIsStatsOpen(false)}
      />

      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        entries={leaderboard}
        language={settings.language}
        onClose={() => setIsLeaderboardOpen(false)}
      />

      <AchievementsModal
        isOpen={isAchievementsOpen}
        achievements={achievements}
        language={settings.language}
        onClose={() => setIsAchievementsOpen(false)}
      />

      <GameOverModal
        isOpen={isGameOverOpen}
        isWin={lastGameWin}
        score={score}
        correctCount={correctRoundsCount}
        totalRounds={totalRoundsPlayed}
        bestStreak={bestSessionStreak}
        hintsUsed={totalSessionHints}
        totalDurationSeconds={Math.max(1, Math.round((Date.now() - gameStartTime) / 1000))}
        gameMode={activeGameMode}
        language={settings.language}
        soundEnabled={settings.soundEnabled}
        onPlayAgain={() => handleStartGame(activeGameMode)}
        onMainMenu={() => {
          setIsGameOverOpen(false);
          setCurrentScreen('home');
        }}
        onViewStats={() => {
          setIsGameOverOpen(false);
          setIsStatsOpen(true);
        }}
        onSaveScore={handleSaveScoreToLeaderboard}
      />
    </div>
  );
}
