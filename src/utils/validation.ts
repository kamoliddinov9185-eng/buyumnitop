import { ObjectItem } from '../types';

export function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    // normalize various unicode apostrophes to single standard quote
    .replace(/[’‘`´ʻʼ]/g, "'")
    // remove special punctuation except spaces and letters
    .replace(/[^a-z0-9а-яёўқғҳ'\s]/gi, '')
    .replace(/\s+/g, ' ');
}

/**
 * Checks if the user guess matches any of the object's accepted answers
 */
export function checkAnswer(guess: string, object: ObjectItem): boolean {
  const cleanGuess = normalizeString(guess);
  if (!cleanGuess) return false;

  // Also strip apostrophe version for relaxed matching (e.g. o'chirg'ich vs ochirgich)
  const noApostropheGuess = cleanGuess.replace(/'/g, '');

  const targets = [
    object.name,
    object.nameUz,
    ...object.acceptedAnswers
  ].map(ans => normalizeString(ans));

  for (const target of targets) {
    if (!target) continue;
    const noApostropheTarget = target.replace(/'/g, '');

    // Exact or apostrophe-insensitive match
    if (cleanGuess === target || noApostropheGuess === noApostropheTarget) {
      return true;
    }

    // Levenshtein distance 1 typo tolerance for words longer than 4 chars
    if (target.length >= 5 && Math.abs(cleanGuess.length - target.length) <= 1) {
      if (levenshteinDistance(cleanGuess, target) <= 1) {
        return true;
      }
    }
  }

  return false;
}

function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
