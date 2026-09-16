import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Timer, Heart, Sparkles, Flame, Eye, ArrowRight, ShieldAlert } from 'lucide-react';
import { ObjectItem, GameMode, Difficulty, Category, Language, RevealEffect, ScorePopupItem } from '../types';
import { t } from '../utils/translations';
import { checkAnswer } from '../utils/validation';
import { SoundFX } from '../utils/sound';
import { ObjectCanvas } from './ObjectCanvas';
import { AnswerInput } from './AnswerInput';
import { HintModal } from './modals/HintModal';

interface Props {
  gameMode: GameMode;
  difficulty: Difficulty;
  category: 'all' | Category;
  language: Language;
  soundEnabled: boolean;
  lives: number;
  maxLives: number;
  streak: number;
  score: number;
  allObjects: ObjectItem[];
  dailySeed?: string;
  onUpdateScore: (newScore: number) => void;
  onUpdateStreak: (newStreak: number) => void;
  onLoseLife: () => void;
  onRoundComplete: (correct: boolean, timeSpent: number, hintsUsed: number, objectId: string) => void;
  onGameOver: (isWin: boolean) => void;
}

// Reveal effects pool
const EFFECTS: RevealEffect[] = [
  'blur',
  'pixel',
  'silhouette',
  'zoom',
  'circle',
  'strips_h',
  'strips_v',
  'mosaic'
];

function buildDeck(
  allObjects: ObjectItem[],
  category: 'all' | Category,
  difficulty: Difficulty,
  gameMode: GameMode,
  dailySeed: string | undefined,
  totalRounds: number
): ObjectItem[] {
  let pool = allObjects;

  // Filter by category if not 'all'
  if (category !== 'all') {
    pool = pool.filter(obj => obj.category === category);
    if (pool.length < 5) {
      pool = allObjects; // fallback if category has few items
    }
  }

  // Filter or weight by difficulty if possible
  let filteredByDiff = pool.filter(obj => obj.difficulty === difficulty);
  if (filteredByDiff.length < 10) {
    filteredByDiff = pool;
  }

  let shuffled: ObjectItem[];

  if (gameMode === 'daily' && dailySeed) {
    // Deterministic pseudo-random shuffle using seed
    let seedNum = 0;
    for (let i = 0; i < dailySeed.length; i++) {
      seedNum = (seedNum << 5) - seedNum + dailySeed.charCodeAt(i);
      seedNum |= 0;
    }
    shuffled = [...pool].sort((a, b) => {
      const hashA = Math.sin(seedNum + a.id.charCodeAt(0)) * 10000;
      const hashB = Math.sin(seedNum + b.id.charCodeAt(0)) * 10000;
      return (hashA - Math.floor(hashA)) - (hashB - Math.floor(hashB));
    });
  } else {
    // Modern Fisher-Yates shuffle
    shuffled = [...filteredByDiff].sort(() => Math.random() - 0.5);
  }

  return shuffled.slice(0, Math.min(shuffled.length, totalRounds));
}

export const GameScreen: React.FC<Props> = ({
  gameMode,
  difficulty,
  category,
  language,
  soundEnabled,
  lives,
  maxLives,
  streak,
  score,
  allObjects,
  dailySeed,
  onUpdateScore,
  onUpdateStreak,
  onLoseLife,
  onRoundComplete,
  onGameOver
}) => {
  const TOTAL_ROUNDS = gameMode === 'classic' ? 10 : gameMode === 'daily' ? 5 : 999;
  const ROUND_DURATION = gameMode === 'time_attack' ? 12 : 15; // seconds per round in regular modes

  // Game session object pool
  const [deck, setDeck] = useState<ObjectItem[]>(() =>
    buildDeck(allObjects, category, difficulty, gameMode, dailySeed, TOTAL_ROUNDS)
  );
  const [roundIndex, setRoundIndex] = useState(0);
  const [currentObject, setCurrentObject] = useState<ObjectItem | null>(() => deck[0] || null);

  // Round state
  const [roundTimeLeft, setRoundTimeLeft] = useState(ROUND_DURATION);
  const [timeAttackTotalLeft, setTimeAttackTotalLeft] = useState(60); // for 60s total time attack
  const [activeEffect, setActiveEffect] = useState<RevealEffect>('blur');
  const [isRevealed, setIsRevealed] = useState(false);
  const [roundResult, setRoundResult] = useState<'correct' | 'wrong' | 'timeout' | null>(null);
  const [hintsUsedCount, setHintsUsedCount] = useState(0);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [scorePopups, setScorePopups] = useState<ScorePopupItem[]>([]);

  // Dynamically derived reveal stage (1 to 5 based on elapsed time)
  const stage = Math.min(5, Math.max(1, Math.floor((ROUND_DURATION - roundTimeLeft) / 3) + 1));

  // Refs for tracking
  const roundStartTimeRef = useRef(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef(false);

  // Re-sync deck if options change
  useEffect(() => {
    const newDeck = buildDeck(allObjects, category, difficulty, gameMode, dailySeed, TOTAL_ROUNDS);
    setDeck(newDeck);
    setRoundIndex(0);
    setCurrentObject(newDeck[0] || null);
    setRoundTimeLeft(ROUND_DURATION);
    setIsRevealed(false);
    setRoundResult(null);
    setHintsUsedCount(0);
    isTransitioningRef.current = false;
  }, [gameMode, difficulty, category, allObjects, dailySeed, TOTAL_ROUNDS, ROUND_DURATION]);

  // Difficulty multiplier
  const getDifficultyMultiplier = () => {
    if (difficulty === 'hard') return 2.0;
    if (difficulty === 'medium') return 1.5;
    return 1.0;
  };

  // Streak multiplier
  const getStreakMultiplier = (currentStreak: number) => {
    if (currentStreak >= 10) return 1.5;
    if (currentStreak >= 5) return 1.25;
    if (currentStreak >= 3) return 1.1;
    return 1.0;
  };

  // Calculate potential round score
  const calculatePotentialScore = useCallback(() => {
    const baseScores = [1000, 800, 600, 400, 200];
    const base = baseScores[stage - 1] ?? 200;
    const penalty = hintsUsedCount * 200;
    const raw = Math.max(100, base - penalty);
    return Math.round(raw * getDifficultyMultiplier() * getStreakMultiplier(streak));
  }, [stage, hintsUsedCount, difficulty, streak]);

  // Start new round
  const startRound = useCallback((index: number, newDeck: ObjectItem[]) => {
    if (index >= newDeck.length) {
      // All rounds completed!
      onGameOver(true);
      return;
    }

    isTransitioningRef.current = false;
    setCurrentObject(newDeck[index]);
    setRoundTimeLeft(ROUND_DURATION);
    setIsRevealed(false);
    setRoundResult(null);
    setHintsUsedCount(0);
    setIsHintModalOpen(false);
    roundStartTimeRef.current = Date.now();

    // Pick a random reveal effect
    const nextEffect = EFFECTS[Math.floor(Math.random() * EFFECTS.length)];
    setActiveEffect(nextEffect);
  }, [ROUND_DURATION, onGameOver]);

  // Trigger next round after delay
  const triggerNextRound = useCallback(() => {
    const nextIndex = roundIndex + 1;
    if (nextIndex >= TOTAL_ROUNDS || nextIndex >= deck.length) {
      setTimeout(() => {
        onGameOver(true);
      }, 1800);
    } else {
      setRoundIndex(nextIndex);
      setTimeout(() => {
        startRound(nextIndex, deck);
      }, 1800);
    }
  }, [roundIndex, TOTAL_ROUNDS, deck, onGameOver, startRound]);

  // Add score floating popup
  const addPopup = (text: string, type: 'positive' | 'negative' | 'streak') => {
    const newPopup: ScorePopupItem = {
      id: Date.now() + Math.random(),
      text,
      type
    };
    setScorePopups(prev => [...prev, newPopup]);
    setTimeout(() => {
      setScorePopups(prev => prev.filter(p => p.id !== newPopup.id));
    }, 1200);
  };

  // Handle Timeout
  const handleTimeout = useCallback(() => {
    if (isRevealed || isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setIsRevealed(true);
    setRoundResult('timeout');
    SoundFX.wrong(soundEnabled);
    addPopup(t(language, 'timesUp'), 'negative');

    onUpdateStreak(0);
    if (gameMode === 'sudden_death' || gameMode === 'endless') {
      onLoseLife();
      if (lives <= 1) {
        setTimeout(() => onGameOver(false), 2000);
        return;
      }
    }

    if (currentObject) {
      onRoundComplete(false, ROUND_DURATION, hintsUsedCount, currentObject.id);
    }

    triggerNextRound();
  }, [isRevealed, soundEnabled, language, onUpdateStreak, gameMode, onLoseLife, lives, currentObject, ROUND_DURATION, hintsUsedCount, onRoundComplete, triggerNextRound, onGameOver]);

  // Pure Timer Tick Engine - strictly numerical updates, NO side effects inside state updaters
  useEffect(() => {
    if (isRevealed || !currentObject) return;

    timerRef.current = setInterval(() => {
      setRoundTimeLeft(prev => Math.max(0, prev - 1));

      if (gameMode === 'time_attack') {
        setTimeAttackTotalLeft(prev => Math.max(0, prev - 1));
      }
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isRevealed, currentObject, gameMode]);

  // Audio tick alerts in final countdown seconds
  useEffect(() => {
    if (isRevealed) return;
    if (gameMode === 'time_attack' && timeAttackTotalLeft <= 10 && timeAttackTotalLeft > 0) {
      SoundFX.tick(soundEnabled, true);
    } else if (roundTimeLeft <= 5 && roundTimeLeft > 0) {
      SoundFX.tick(soundEnabled, roundTimeLeft <= 3);
    }
  }, [roundTimeLeft, timeAttackTotalLeft, isRevealed, gameMode, soundEnabled]);

  // Handle Round Timeout outside of render via clean useEffect
  useEffect(() => {
    if (roundTimeLeft <= 0 && !isRevealed && currentObject && !isTransitioningRef.current) {
      handleTimeout();
    }
  }, [roundTimeLeft, isRevealed, currentObject, handleTimeout]);

  // Handle Time Attack expiry outside of render via clean useEffect
  useEffect(() => {
    if (gameMode === 'time_attack' && timeAttackTotalLeft <= 0 && !isTransitioningRef.current) {
      isTransitioningRef.current = true;
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      onGameOver(score > 0);
    }
  }, [gameMode, timeAttackTotalLeft, onGameOver, score]);

  // Handle Guess submission
  const handleGuess = (guessText: string) => {
    if (isRevealed || !currentObject || isTransitioningRef.current) return;

    const isMatch = checkAnswer(guessText, currentObject);
    const duration = Math.max(1, (Date.now() - roundStartTimeRef.current) / 1000);

    if (isMatch) {
      // Correct!
      isTransitioningRef.current = true;
      setIsRevealed(true);
      setRoundResult('correct');

      const earnedPoints = calculatePotentialScore();
      const newScore = score + earnedPoints;
      const newStreak = streak + 1;

      onUpdateScore(newScore);
      onUpdateStreak(newStreak);

      SoundFX.correct(soundEnabled);
      if (newStreak >= 3) {
        setTimeout(() => SoundFX.streak(soundEnabled, newStreak), 200);
      }

      addPopup(`+${earnedPoints} ⭐`, 'positive');
      if (newStreak >= 3) {
        setTimeout(() => {
          addPopup(`🔥 STREAK x${newStreak}!`, 'streak');
        }, 300);
      }

      onRoundComplete(true, duration, hintsUsedCount, currentObject.id);
      triggerNextRound();
    } else {
      // Incorrect!
      SoundFX.wrong(soundEnabled);
      setRoundResult('wrong');
      setTimeout(() => {
        setRoundResult(null);
      }, 600);

      // Penalty: -100 points
      const newScore = Math.max(0, score - 100);
      onUpdateScore(newScore);
      onUpdateStreak(0);

      addPopup('-100 ❌', 'negative');

      if (gameMode === 'sudden_death' || gameMode === 'endless') {
        onLoseLife();
        if (lives <= 1) {
          isTransitioningRef.current = true;
          setIsRevealed(true);
          setTimeout(() => onGameOver(false), 2000);
          return;
        }
      }
    }
  };

  // Handle Hint usage
  const handleUseHint = () => {
    if (isRevealed || !currentObject || hintsUsedCount >= 3) return;
    setHintsUsedCount(prev => prev + 1);
    setIsHintModalOpen(true);
  };

  // Handle Skip
  const handleSkip = () => {
    if (isRevealed || isTransitioningRef.current) return;
    handleTimeout();
  };

  if (!currentObject) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-slate-400">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="font-bold text-sm">O‘yin yuklanmoqda...</p>
      </div>
    );
  }

  const hintsList = language === 'uz' ? currentObject.hints.uz : currentObject.hints.en;
  const categoryLabel = (t(language, 'categories' as any) as any)?.[currentObject.category] || currentObject.category;

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-2 sm:py-4 flex flex-col select-none relative animate-in fade-in duration-200">
      {/* Top HUD: Round Indicator & Timer Bar */}
      <div className="w-full flex items-center justify-between gap-2 mb-3 px-1">
        {/* Round Counter */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white font-extrabold text-xs sm:text-sm">
          <span className="text-amber-400">
            {gameMode === 'daily' ? '📅' : '🎯'}
          </span>
          <span>
            {gameMode === 'endless'
              ? `${t(language, 'round')} ${roundIndex + 1}`
              : `${t(language, 'round')} ${roundIndex + 1} / ${TOTAL_ROUNDS}`}
          </span>
        </div>

        {/* Timer Pill */}
        <div 
          id="round-timer-pill"
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm transition-colors ${
            roundTimeLeft <= 4
              ? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-pulse'
              : 'bg-slate-900 border-slate-800 text-amber-300'
          }`}
        >
          <Timer className="w-4 h-4 text-amber-400" />
          <span>
            {gameMode === 'time_attack'
              ? `${timeAttackTotalLeft}s [Attack]`
              : `${roundTimeLeft}s`}
          </span>
        </div>
      </div>

      {/* Score Popups Area (Floating dynamic scores) */}
      <div className="absolute top-16 right-6 z-40 pointer-events-none flex flex-col gap-1 items-end">
        {scorePopups.map(popup => (
          <div
            key={popup.id}
            className={`px-3 py-1.5 rounded-xl font-black text-sm sm:text-base shadow-xl animate-in slide-in-from-bottom-2 fade-in duration-300 ${
              popup.type === 'positive'
                ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
                : popup.type === 'streak'
                ? 'bg-orange-500 text-slate-950 shadow-orange-500/30'
                : 'bg-rose-600 text-white shadow-rose-600/30'
            }`}
          >
            {popup.text}
          </div>
        ))}
      </div>

      {/* Main Image Mystery Canvas Frame */}
      <ObjectCanvas
        object={currentObject}
        stage={stage}
        effect={activeEffect}
        isRevealed={isRevealed}
        roundResult={roundResult}
        language={language}
        categoryLabel={categoryLabel}
      />

      {/* User Input, Guess Button, Hint Button */}
      <AnswerInput
        onGuess={handleGuess}
        onUseHint={handleUseHint}
        onSkip={handleSkip}
        isRevealed={isRevealed}
        hintsUsedCount={hintsUsedCount}
        maxHints={3}
        language={language}
        soundEnabled={soundEnabled}
        potentialPoints={calculatePotentialScore()}
      />

      {/* Hint Dialog Modal */}
      <HintModal
        isOpen={isHintModalOpen}
        hints={hintsList}
        activeHintsCount={hintsUsedCount}
        language={language}
        onClose={() => setIsHintModalOpen(false)}
      />
    </div>
  );
};
