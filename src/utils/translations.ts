import { Language } from '../types';

export const TRANSLATIONS = {
  uz: {
    appTitle: 'BUYUMNI TOPING',
    appSubtitle: 'To‘liq ochilmasidan oldin buyumni aniqlay olasizmi?',
    play: 'O‘YNASH',
    dailyChallenge: 'KUNLIK TOPSHIRIQ',
    leaderboard: 'REYTING VA STATISTIKA',
    stats: 'STATISTIKA',
    achievements: 'YUTUQLAR',
    settings: 'SOZLAMALAR',
    howToPlay: 'QANDAY O‘YNASH KERAK?',
    footerText: 'Barcha buyumlarni topa olasizmi?',

    // HUD
    round: 'RAUND',
    score: 'BALL',
    streak: 'KETMA-KET',
    lives: 'JONLAR',
    timeRemaining: 'Vaqt',

    // Game modes
    modeClassic: 'Klassik (10 raund)',
    modeTimeAttack: 'Vaqt poygasi (60s)',
    modeSuddenDeath: 'Bir xato (3 jon)',
    modeEndless: 'Cheksiz rejim',
    modeDaily: 'Bugungi kunlik topshiriq',

    // Categories
    categories: {
      all: 'Barcha toifalar',
      everyday: '🧸 Kundalik buyumlar',
      food: '🍎 Taomlar va mevalar',
      technology: '💻 Texnologiya',
      household: '🏠 Uy-ro‘zg‘or',
      vehicles: '🚗 Transport',
      sports: '⚽ Sport',
      music: '🎵 Musiqa',
      school: '📚 Maktab',
      tools: '🔧 Ish qurollari',
      nature: '🌳 Tabiat'
    },

    // Difficulty
    diffEasy: 'Oson (x1)',
    diffMedium: 'O‘rtacha (x1.5)',
    diffHard: 'Qiyin (x2)',

    // In-game controls
    questionLabel: 'Bu qanday buyum?',
    inputPlaceholder: 'Javobingizni yozing...',
    guessBtn: 'TOPISH',
    hintBtn: 'MASLAHAT',
    giveUpBtn: 'TASLIM BO‘LISH',
    emptyGuessWarning: 'Iltimos, javobingizni yozing!',
    hintUsedToast: 'Maslahat olindi (-200 ball)',

    // Game feedback
    correct: 'TO‘G‘RI!',
    wrong: 'NOTO‘G‘RI!',
    timesUp: 'VAQT TUGADI!',
    itWas: 'Bu buyum:',
    pointsAdded: 'BALL',
    streakBroken: 'Ketma-ketlik uzildi!',
    nextRoundIn: 'Keyingi raund...',

    // Reveal stages
    stage: 'Bosqich',
    stage1: '1-bosqich: Qattiq berkitilgan',
    stage2: '2-bosqich: Bir oz aniqlashmoqda',
    stage3: '3-bosqich: Qisman ko‘rinmoqda',
    stage4: '4-bosqich: Deyarli aniq',
    stage5: '5-bosqich: To‘liq ochildi',

    // Modals
    modalClose: 'Yopish',

    // Results / Game Over
    gameOver: 'O‘YIN YAKUNLANDI',
    gameComplete: 'G‘ALABA! O‘YIN TUGADI',
    finalScore: 'YAKUNIY BALL',
    correctAnswers: 'To‘g‘ri javoblar',
    accuracy: 'Aniqlik',
    bestStreak: 'Eng yaxshi ketma-ketlik',
    hintsUsed: 'Olingan maslahatlar',
    avgGuessTime: 'O‘rtacha topish vaqti',
    enterNickname: 'Ismingizni kiriting:',
    saveScoreBtn: 'BALLNI SAQLASH',
    scoreSaved: 'Ball reytingga saqlandi!',
    playAgain: 'QAYTA O‘YNASH',
    mainMenu: 'BOSH SAHIFA',
    viewStats: 'STATISTIKA',

    // Settings modal
    sound: 'Ovoz effektlari',
    animations: 'Animatsiyalar',
    theme: 'Mavzu (Tungi / Kunduzgi)',
    difficultyLabel: 'Qiyinlik darajasi',
    languageLabel: 'Til (Language)',
    categoryLabel: 'Mavzu toifasi',
    on: 'Yoniq',
    off: 'O‘chiq',
    dark: 'Qorong‘i',
    light: 'Yorug‘',

    // How to play modal
    tutorialStep1: 'Berkitilgan yoki xiralashtirilgan suratga diqqat bilan qarang.',
    tutorialStep2: 'Buyum nima bo‘lishi mumkinligini taxmin qiling.',
    tutorialStep3: 'Pastdagi maydonga javobingizni o‘zbekcha yoki inglizcha yozing.',
    tutorialStep4: 'Buyum to‘liq ochilishidan oldin tezroq topsangiz, shuncha ko‘p ball olasiz (1000 gacha).',
    tutorialStep5: 'Qiyinchilik tug‘ilsa, 💡 Maslahat tugmasidan foydalaning.',
    tutorialStep6: 'Ketma-ket to‘g‘ri javoblar orqali ko‘paytirgich (Streak) hosil qiling.',
    tutorialStep7: 'Reytingda eng yuqori o‘rinni egallashga harakat qiling!',

    // Stats modal
    gamesPlayed: 'O‘ynalgan o‘yinlar',
    totalCorrect: 'Jami to‘g‘ri topilgan',
    totalWrong: 'Noto‘g‘ri urinishlar',
    highestScoreStat: 'Eng yuqori natija',
    objectsDiscovered: 'Kashf qilingan buyumlar',
    totalHintsStat: 'Ishlatilgan maslahatlar',
    totalPlayTime: 'O‘yin vaqti',

    // Daily
    dailyCompleteTitle: 'KUNLIK TOPSHIRIQ YAKUNLANDI!',
    dailyAlreadyDone: 'Bugungi topshiriq allaqachon bajarilgan! Ertaga yana urinib ko‘ring.',
    dailyInfo: 'Bugungi 5 ta maxsus buyum'
  },

  en: {
    appTitle: 'GUESS THE OBJECT',
    appSubtitle: 'Can you identify it before it is fully revealed?',
    play: 'PLAY',
    dailyChallenge: 'DAILY CHALLENGE',
    leaderboard: 'LEADERBOARD & STATS',
    stats: 'STATISTICS',
    achievements: 'ACHIEVEMENTS',
    settings: 'SETTINGS',
    howToPlay: 'HOW TO PLAY',
    footerText: 'Can you guess them all?',

    // HUD
    round: 'ROUND',
    score: 'SCORE',
    streak: 'STREAK',
    lives: 'LIVES',
    timeRemaining: 'Time',

    // Game modes
    modeClassic: 'Classic (10 Rounds)',
    modeTimeAttack: 'Time Attack (60s)',
    modeSuddenDeath: 'Sudden Death (3 Lives)',
    modeEndless: 'Endless Mode',
    modeDaily: 'Daily Mystery Challenge',

    // Categories
    categories: {
      all: 'All Categories',
      everyday: '🧸 Everyday Objects',
      food: '🍎 Food & Fruits',
      technology: '💻 Technology',
      household: '🏠 Household',
      vehicles: '🚗 Vehicles',
      sports: '⚽ Sports',
      music: '🎵 Music',
      school: '📚 School',
      tools: '🔧 Tools',
      nature: '🌳 Nature'
    },

    // Difficulty
    diffEasy: 'Easy (x1)',
    diffMedium: 'Medium (x1.5)',
    diffHard: 'Hard (x2)',

    // In-game controls
    questionLabel: 'What is this object?',
    inputPlaceholder: 'Type your answer...',
    guessBtn: 'GUESS',
    hintBtn: 'HINT',
    giveUpBtn: 'SKIP',
    emptyGuessWarning: 'Please enter your guess!',
    hintUsedToast: 'Hint revealed (-200 pts)',

    // Game feedback
    correct: 'CORRECT!',
    wrong: 'WRONG!',
    timesUp: "TIME'S UP!",
    itWas: 'It was:',
    pointsAdded: 'POINTS',
    streakBroken: 'Streak Broken!',
    nextRoundIn: 'Next round in...',

    // Reveal stages
    stage: 'Stage',
    stage1: 'Stage 1: Heavily Obscured',
    stage2: 'Stage 2: Slightly Clearer',
    stage3: 'Stage 3: Partially Visible',
    stage4: 'Stage 4: Recognizable',
    stage5: 'Stage 5: Fully Revealed',

    // Modals
    modalClose: 'Close',

    // Results / Game Over
    gameOver: 'GAME OVER',
    gameComplete: 'VICTORY! COMPLETE',
    finalScore: 'FINAL SCORE',
    correctAnswers: 'Correct Answers',
    accuracy: 'Accuracy',
    bestStreak: 'Best Streak',
    hintsUsed: 'Hints Used',
    avgGuessTime: 'Average Guess Time',
    enterNickname: 'Enter your nickname:',
    saveScoreBtn: 'SAVE SCORE',
    scoreSaved: 'Score saved to leaderboard!',
    playAgain: 'PLAY AGAIN',
    mainMenu: 'MAIN MENU',
    viewStats: 'STATISTICS',

    // Settings modal
    sound: 'Sound Effects',
    animations: 'Animations',
    theme: 'Theme (Dark / Light)',
    difficultyLabel: 'Difficulty Level',
    languageLabel: 'Language',
    categoryLabel: 'Object Category',
    on: 'ON',
    off: 'OFF',
    dark: 'Dark',
    light: 'Light',

    // How to play modal
    tutorialStep1: 'Look closely at the hidden or blurred image.',
    tutorialStep2: 'Think about what common object it could be.',
    tutorialStep3: 'Type your guess in English or Uzbek in the text field.',
    tutorialStep4: 'Guess before the image is fully revealed to earn up to 1,000 points.',
    tutorialStep5: 'Stuck? Click the 💡 Hint button for helpful progressive clues.',
    tutorialStep6: 'Build your consecutive streak for bonus multipliers.',
    tutorialStep7: 'Compete for the top spot on the leaderboard!',

    // Stats modal
    gamesPlayed: 'Games Played',
    totalCorrect: 'Total Correct Guesses',
    totalWrong: 'Wrong Attempts',
    highestScoreStat: 'Highest Score',
    objectsDiscovered: 'Unique Objects Found',
    totalHintsStat: 'Total Hints Used',
    totalPlayTime: 'Total Play Time',

    // Daily
    dailyCompleteTitle: 'DAILY CHALLENGE FINISHED!',
    dailyAlreadyDone: "You've already solved today's challenge! Come back tomorrow for 5 new objects.",
    dailyInfo: "Today's 5 special objects"
  }
};

export function t(lang: Language, key: keyof typeof TRANSLATIONS['en']): string {
  return (TRANSLATIONS[lang] && (TRANSLATIONS[lang] as Record<string, any>)[key]) || TRANSLATIONS.en[key] || String(key);
}
