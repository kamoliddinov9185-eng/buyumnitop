import React, { useState, useEffect } from 'react';
import { ObjectItem, RevealEffect, Language } from '../types';
import { t } from '../utils/translations';
import { Sparkles, Eye, ShieldAlert, Image as ImageIcon } from 'lucide-react';

interface Props {
  object: ObjectItem;
  stage: number; // 1 to 5
  effect: RevealEffect;
  isRevealed: boolean;
  roundResult: 'correct' | 'wrong' | 'timeout' | null;
  language: Language;
  categoryLabel: string;
}

export const ObjectCanvas: React.FC<Props> = ({
  object,
  stage,
  effect,
  isRevealed,
  roundResult,
  language,
  categoryLabel
}) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Reset image state when object changes
  useEffect(() => {
    setImgError(false);
    setImgLoaded(false);
  }, [object.id]);

  // Determine styles according to current effect and stage
  const effectiveStage = isRevealed ? 5 : stage;

  const getImageStyle = (): React.CSSProperties => {
    if (isRevealed) {
      return {
        filter: 'none',
        transform: 'scale(1)',
        clipPath: 'none',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
      };
    }

    switch (effect) {
      case 'blur': {
        const blurs = [28, 18, 10, 4, 0];
        const b = blurs[effectiveStage - 1] ?? 0;
        return {
          filter: `blur(${b}px)`,
          transform: 'scale(1.04)',
          transition: 'filter 0.5s ease-out'
        };
      }
      case 'silhouette': {
        const brights = [0, 0.25, 0.55, 0.85, 1];
        const contrasts = [400, 300, 200, 130, 100];
        const br = brights[effectiveStage - 1] ?? 1;
        const ct = contrasts[effectiveStage - 1] ?? 100;
        return {
          filter: `brightness(${br}) contrast(${ct}%)`,
          transition: 'filter 0.5s ease-out'
        };
      }
      case 'zoom': {
        const scales = [3.4, 2.6, 1.9, 1.35, 1];
        const sc = scales[effectiveStage - 1] ?? 1;
        return {
          transform: `scale(${sc})`,
          transition: 'transform 0.6s ease-out'
        };
      }
      case 'circle': {
        const radius = [14, 28, 48, 72, 100];
        const r = radius[effectiveStage - 1] ?? 100;
        return {
          clipPath: `circle(${r}% at 50% 50%)`,
          transition: 'clip-path 0.5s ease-out'
        };
      }
      case 'pixel': {
        const pixelBlurs = [20, 14, 8, 3, 0];
        const pb = pixelBlurs[effectiveStage - 1] ?? 0;
        return {
          filter: `blur(${pb}px) contrast(140%)`,
          transform: 'scale(1.05)',
          transition: 'filter 0.5s ease-out'
        };
      }
      default:
        return {
          filter: effectiveStage === 5 ? 'none' : `blur(${(5 - effectiveStage) * 5}px)`,
          transition: 'all 0.5s ease-out'
        };
    }
  };

  // Strip blinds or mosaic tiles
  const renderOverlays = () => {
    if (isRevealed || effectiveStage === 5) return null;

    if (effect === 'strips_h') {
      const totalStrips = 8;
      // Depending on stage, hide more strips
      const visibleCoverage = Math.max(0, 1 - (effectiveStage - 1) * 0.25);
      return (
        <div className="absolute inset-0 pointer-events-none flex flex-col z-10 transition-opacity duration-500">
          {Array.from({ length: totalStrips }).map((_, i) => {
            const isCovered = (i % 2 === 0 && effectiveStage <= 3) || Math.random() < visibleCoverage;
            return (
              <div
                key={i}
                className="flex-1 bg-slate-950/90 transition-all duration-500 border-b border-slate-900/40"
                style={{
                  opacity: isCovered ? 0.95 : 0.05,
                  transform: isCovered ? 'scaleY(1)' : 'scaleY(0)'
                }}
              />
            );
          })}
        </div>
      );
    }

    if (effect === 'strips_v') {
      const totalStrips = 8;
      const visibleCoverage = Math.max(0, 1 - (effectiveStage - 1) * 0.25);
      return (
        <div className="absolute inset-0 pointer-events-none flex z-10 transition-opacity duration-500">
          {Array.from({ length: totalStrips }).map((_, i) => {
            const isCovered = (i % 2 === 0 && effectiveStage <= 3) || Math.random() < visibleCoverage;
            return (
              <div
                key={i}
                className="flex-1 bg-slate-950/90 transition-all duration-500 border-r border-slate-900/40"
                style={{
                  opacity: isCovered ? 0.95 : 0.05,
                  transform: isCovered ? 'scaleX(1)' : 'scaleX(0)'
                }}
              />
            );
          })}
        </div>
      );
    }

    if (effect === 'mosaic') {
      const gridSize = 16; // 4x4 grid
      // Number of tiles covered decreases with stage
      const coveredCount = Math.max(0, Math.round(gridSize * (1 - (effectiveStage - 1) * 0.25)));
      return (
        <div className="absolute inset-0 pointer-events-none grid grid-cols-4 grid-rows-4 z-10 gap-0.5 p-0.5">
          {Array.from({ length: gridSize }).map((_, i) => {
            const isHidden = (i * 7 + 3) % gridSize < coveredCount;
            return (
              <div
                key={i}
                className="bg-slate-950/90 rounded-sm transition-all duration-500"
                style={{
                  opacity: isHidden ? 0.95 : 0,
                  transform: isHidden ? 'scale(1)' : 'scale(0.8)'
                }}
              />
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Category & Effect Indicator Header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 flex items-center gap-1.5 shadow-sm">
          <span>{categoryLabel}</span>
        </span>

        <span className="text-xs font-medium px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5" />
          <span>
            {t(language, 'stage')} {effectiveStage} / 5
          </span>
        </span>
      </div>

      {/* Main Image Frame Container */}
      <div 
        id="object-image-frame"
        className={`relative aspect-[4/3] w-full rounded-3xl overflow-hidden bg-slate-900 border-2 transition-all duration-500 shadow-2xl ${
          roundResult === 'correct'
            ? 'border-emerald-500 shadow-emerald-500/30 ring-4 ring-emerald-500/20'
            : roundResult === 'wrong'
            ? 'border-rose-500 shadow-rose-500/30 ring-4 ring-rose-500/20 animate-shake'
            : roundResult === 'timeout'
            ? 'border-amber-500 shadow-amber-500/30'
            : 'border-slate-700/80 shadow-slate-950/60'
        }`}
      >
        {/* Loading shimmer if not loaded */}
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 animate-pulse flex items-center justify-center">
            <ImageIcon className="w-10 h-10 text-slate-700 animate-spin" />
          </div>
        )}

        {/* Fallback SVG illustration in case image fails to load or offline */}
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-200">
            <div className="w-24 h-24 rounded-3xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-3">
              <span className="text-5xl">🔍</span>
            </div>
            <p className="font-bold text-lg text-slate-300">
              {isRevealed ? (language === 'uz' ? object.nameUz : object.name) : '???'}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              {t(language, 'questionLabel')}
            </p>
          </div>
        ) : (
          <img
            src={object.image}
            alt="Mystery Object"
            onError={() => setImgError(true)}
            onLoad={() => setImgLoaded(true)}
            style={getImageStyle()}
            className="w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
          />
        )}

        {/* Dynamic Blind / Mosaic Strip Overlays */}
        {renderOverlays()}

        {/* Ambient Glass Vignette */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.6)]" />

        {/* Stage Progress Bar Overlay along bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-900/80 backdrop-blur-sm z-20">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-400 transition-all duration-500"
            style={{ width: `${(effectiveStage / 5) * 100}%` }}
          />
        </div>

        {/* Round Result Reveal Overlay Banner */}
        {isRevealed && (
          <div className="absolute inset-x-0 bottom-3 mx-4 p-3 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 shadow-xl flex items-center justify-between z-30 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex items-center gap-2.5">
              <div 
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-lg ${
                  roundResult === 'correct'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                }`}
              >
                {roundResult === 'correct' ? '✓' : '✗'}
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  {roundResult === 'correct' ? t(language, 'correct') : t(language, 'itWas')}
                </p>
                <p className="font-extrabold text-base sm:text-lg text-white leading-tight">
                  {language === 'uz' ? object.nameUz : object.name}
                  <span className="text-xs text-slate-400 font-normal ml-2">
                    ({language === 'uz' ? object.name : object.nameUz})
                  </span>
                </p>
              </div>
            </div>

            {roundResult === 'correct' && (
              <div className="flex items-center gap-1 text-emerald-400 font-extrabold text-sm sm:text-base pr-2">
                <Sparkles className="w-4 h-4 fill-emerald-400" />
                <span>+POINTS</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Stage Hint description */}
      <div className="mt-2 text-center text-xs text-slate-400">
        {!isRevealed ? (
          <span>
            {effectiveStage === 1 && t(language, 'stage1')}
            {effectiveStage === 2 && t(language, 'stage2')}
            {effectiveStage === 3 && t(language, 'stage3')}
            {effectiveStage === 4 && t(language, 'stage4')}
            {effectiveStage === 5 && t(language, 'stage5')}
          </span>
        ) : (
          <span className="text-amber-400 font-medium">
            {t(language, 'nextRoundIn')}
          </span>
        )}
      </div>
    </div>
  );
};
