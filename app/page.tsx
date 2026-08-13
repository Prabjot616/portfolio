'use client';

import { Mail, ExternalLink, Code2, Award, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" width="20" height="20">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const AnimatedSignature = () => {
  const firstRef = useRef<SVGTextElement>(null);
  const lastRef = useRef<SVGTextElement>(null);

  const replay = () => {
    [firstRef.current, lastRef.current].forEach((el) => {
      if (!el) return;
      el.style.animation = 'none';
      void el.getBoundingClientRect();
      el.style.animation = '';
    });
  };

  return (
    <div
      className="inline-block w-full max-w-4xl cursor-pointer transition-transform duration-300 hover:scale-[1.015] active:scale-[0.99]"
      onClick={replay}
      role="button"
      tabIndex={0}
      aria-label="Replay signature animation"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); replay(); } }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 280" className="w-full h-auto" preserveAspectRatio="xMinYMin meet">
        <style>
          {`
            .signature-text {
              font-family: var(--font-caveat), cursive;
              font-size: 100px;
              fill: transparent;
              stroke: #111111;
              stroke-width: 2.5;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              text-anchor: start;
            }

            .first-name {
              animation: write-and-fill 1.8s ease-in-out forwards;
              animation-delay: 0.2s;
            }

            .last-name {
              animation: write-and-fill 1.5s ease-in-out forwards;
              animation-delay: 1.6s;
            }

            @keyframes write-and-fill {
              50% {
                stroke-dashoffset: 0;
                fill: rgba(17, 17, 17, 0);
              }
              100% {
                stroke-dashoffset: 0;
                fill: #111111;
              }
            }
          `}
        </style>
        <text ref={firstRef} x="10" y="100" className="signature-text first-name">Prabjot</text>
        <text ref={lastRef} x="10" y="220" className="signature-text last-name">Kaur</text>
      </svg>
    </div>
  );
};

const SquiggleDivider = ({ className = '' }: { className?: string }) => (
  <div className={`flex justify-center text-[#111111] ${className}`} aria-hidden="true">
    <svg viewBox="0 0 260 20" width="220" height="18">
      <path
        d="M2,11 C24,1 34,21 54,10 C72,0 82,20 100,9 C118,-1 130,19 148,10 C166,1 178,19 196,9 C212,1 224,17 238,9 C246,5 252,10 258,8"
        fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"
      />
    </svg>
  </div>
);

const cardFramePaths = [
  'M3,4 C30,1 70,0.5 97,4 C98.5,25 98,65 97,96 C70,99 30,99.5 3,96 C1.5,75 2,30 3,4 Z',
  'M4,3 C35,0.5 68,1.5 96,5 C99,30 97.5,68 96,97 C65,98.5 32,99 4,95 C2,70 3,28 4,3 Z',
  'M2,6 C28,2 72,2.5 98,6 C96.5,32 97,66 98,94 C72,98 28,97.5 2,94 C3.5,68 3,30 2,6 Z',
];

const CardFrame = ({ variant }: { variant: number }) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 h-full w-full text-[#222222] transition-colors duration-300 group-hover:text-[#111111]"
  >
    <path
      d={cardFramePaths[variant % cardFramePaths.length]}
      fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round"
    />
  </svg>
);

const TimelinePin = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="absolute left-[-12px] top-2 transition-transform duration-300 group-hover:scale-125">
    <path
      d="M11,2.3 C15.4,1.6 20,4.9 19.7,10.3 C19.4,15.9 15.3,19.6 10.6,19.7 C5.7,19.8 1.9,15.6 2.3,10.6 C2.6,6.4 6.2,2.9 11,2.3 Z"
      fill="white" stroke="#111111" strokeWidth="1.6"
    />
  </svg>
);

const ACCENT = '#1D4ED8';

// Marker-style scribble underline. Uses a tiled SVG background (not an overlay)
// so it keeps working correctly if the wrapped phrase wraps across lines.
// The tile is wide with irregular hump widths/heights so the repeat isn't
// obviously mechanical, and the slopes are gentle (a real hand doesn't zigzag).
const scribbleTile =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 16' width='140' height='16'%3E%3Cpath d='M0,9 C12,6 18,12 32,9 C42,7 50,11.5 62,8.5 C74,6 84,11 98,9 C108,7 118,11 132,8.5 C136,8 138,9 140,9' fill='none' stroke='%231D4ED8' stroke-width='2.3' stroke-linecap='round'/%3E%3C/svg%3E";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      backgroundImage: `url("${scribbleTile}")`,
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '0 100%',
      backgroundSize: '120px 14px',
      paddingBottom: '3px',
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone',
    } as React.CSSProperties}
  >
    {children}
  </span>
);

// Renders text with one verbatim substring wrapped in the scribble Highlight.
const withHighlight = (text: string, phrase?: string) => {
  if (!phrase) return text;
  const i = text.indexOf(phrase);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <Highlight>{phrase}</Highlight>
      {text.slice(i + phrase.length)}
    </>
  );
};

// Hand-drawn circle looped around a single standout item in a row of equals,
// with an optional handwritten note pointing at it.
const CircleLoop = ({ children, label, raised = false }: { children: React.ReactNode; label?: string; raised?: boolean }) => (
  <span className="relative inline-flex">
    {label && (
      <span
        className={`pointer-events-none absolute left-1 whitespace-nowrap font-heading text-lg leading-none text-[#1D4ED8] ${raised ? '-top-9' : '-top-6'}`}
      >
        {label} ↴
      </span>
    )}
    {children}
    <svg
      viewBox="0 0 140 70" preserveAspectRatio="none" aria-hidden="true"
      className="pointer-events-none absolute text-[#1D4ED8]"
      style={{ left: '-8px', right: '-8px', top: '-6px', bottom: '-6px', width: 'calc(100% + 16px)', height: 'calc(100% + 12px)' }}
    >
      <path
        d="M8,45 C5,18 30,4 68,4 C108,4 128,16 124,42 C120,60 96,66 60,66 C28,66 12,58 8,46 C7,44 8,42 10,44"
        fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
      />
    </svg>
  </span>
);

// Pinned star marking a featured project or certification.
const CornerStar = ({ className = '', size = 42 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 46 46" aria-hidden="true" className={className}>
    <path
      d="M23,4 C24.5,12 22,15 30,16.5 C23,19 25,23 23,31 C21.5,23 19,20 12,17.5 C19,15.5 17,12 23,4 Z"
      fill="#DCE9F8" stroke={ACCENT} strokeWidth="1.6" strokeLinejoin="round"
    />
  </svg>
);

// Skills strip: auto-scrolls at a steady pace, but hovering, dragging (mouse),
// wheel/trackpad, or touch all take over immediately. Two duplicated copies of
// the list let scrollLeft wrap seamlessly in either direction, so it never
// snaps or resets — auto-scroll just picks back up wherever the user left it.
const MARQUEE_SPEED = 36; // px/second

// Ambient motion runs on a CSS animation (compositor thread) rather than a
// JS/requestAnimationFrame loop — rAF-driven scrollLeft mutation turned out
// unreliable on mobile Safari specifically (auto-scroll just never started
// for some users, and -webkit-overflow-scrolling: touch didn't fix it
// either). A CSS animation isn't subject to whatever main-thread throttling
// was causing that. Drag/wheel/touch interactions pause the animation and
// take over `transform: translateX()` directly, then hand back control by
// resuming the animation from a negative animation-delay computed to match
// wherever the interaction left off — no visible jump either way.
// Name of the CSS-authored keyframes rule in globals.css.
const MARQUEE_KEYFRAME = 'skills-marquee';

const SkillsMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const durationRef = useRef(0);
  const frozenOffsetRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchIntentRef = useRef<'none' | 'horizontal' | 'vertical'>('none');
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const items = [...allSkills, ...allSkills];

  const getHalf = () => (trackRef.current ? trackRef.current.scrollWidth / 2 : 0);
  const normalize = (offset: number, half: number) => (half > 0 ? ((offset % half) + half) % half : 0);

  // Reads the animation's current visual position (works whether running or
  // already paused) so pausing never causes a jump.
  const readOffset = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const m = new DOMMatrixReadOnly(getComputedStyle(track).transform);
    return -m.m41;
  };

  const freeze = () => {
    const track = trackRef.current;
    if (!track) return;
    const offset = normalize(readOffset(), getHalf());
    frozenOffsetRef.current = offset;
    // A CSS animation's own value overrides an inline `transform` for as
    // long as the animation is in effect — including while paused. Setting
    // animation-play-state: paused alone leaves the animation "in effect",
    // so it keeps winning the cascade and any inline transform write here
    // is silently ignored. Removing the animation entirely (not just
    // pausing it) is what actually cedes the property to inline styles.
    track.style.animation = 'none';
    track.style.transform = `translateX(${-offset}px)`;
  };

  const resume = () => {
    const track = trackRef.current;
    if (!track || durationRef.current <= 0) return;
    const half = getHalf();
    const offset = normalize(frozenOffsetRef.current, half);
    const progress = half > 0 ? offset / half : 0;
    track.style.transform = '';
    track.style.animation = `${MARQUEE_KEYFRAME} ${durationRef.current}s linear infinite`;
    track.style.animationDelay = `${-(progress * durationRef.current)}s`;
  };

  const scheduleResume = (delay: number) => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      if (!draggingRef.current) resume();
    }, delay);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // The keyframe (globals.css) animates to translateX(-50%), which now
    // resolves correctly by construction: the track is `w-max` and the
    // overflow-clipping viewport is a separate wrapper around it, so the
    // track's own layout width always equals its full two-copies content
    // width, and -50% always means "exactly one copy" — no matter when
    // webfonts finish loading or the pills reflow to a different width.
    // Only the *duration* still needs a JS measurement, to keep the visual
    // speed constant (px/second) regardless of how wide the list ends up.
    const applyDuration = () => {
      const half = getHalf();
      durationRef.current = half / MARQUEE_SPEED;
      track.style.animationDuration = `${durationRef.current}s`;
    };
    applyDuration();

    // iOS Safari can leave a CSS animation "pending" and never actually play
    // it if its properties are patched in the same tick the element — and
    // its animate-* class — are first created, which is exactly what
    // happens here since the whole page is gated behind `mounted` and this
    // is the track's first paint. Tearing the animation down, forcing a
    // style flush, then declaring it fresh (same trick as
    // AnimatedSignature.replay()) reliably kicks it off instead of patching
    // an instance Safari never started.
    track.style.animation = 'none';
    void track.offsetWidth;
    track.style.animation = `${MARQUEE_KEYFRAME} ${durationRef.current}s linear infinite`;

    // Fira Code loads via an unoptimized `@import url(...)` (no next/font
    // preloading), so it can swap in shortly after mount and nudge the
    // pills' width slightly. Re-syncing the duration once fonts are ready
    // keeps the speed accurate; it's cosmetic only now (the travel distance
    // is always correct regardless), so there's no need to also watch
    // `resize` here.
    document.fonts?.ready?.then(() => {
      if (track.style.animation === 'none') return; // don't fight an active freeze/drag
      applyDuration();
    });

    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Native listeners with { passive: false } — React attaches touchmove/wheel
  // as passive by default, which would silently make preventDefault() a
  // no-op and let the page try to scroll horizontally along with the strip.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const dragTo = (clientX: number) => {
      const offset = normalize(dragStartOffsetRef.current - (clientX - dragStartXRef.current), getHalf());
      frozenOffsetRef.current = offset;
      track.style.transform = `translateX(${-offset}px)`;
    };

    const onTouchMoveNative = (e: TouchEvent) => {
      const t = e.touches[0];
      if (touchIntentRef.current === 'none') {
        const dx = t.clientX - touchStartRef.current.x;
        const dy = t.clientY - touchStartRef.current.y;
        if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
        touchIntentRef.current = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
        if (touchIntentRef.current === 'horizontal') {
          freeze();
          draggingRef.current = true;
          dragStartXRef.current = t.clientX;
          dragStartOffsetRef.current = frozenOffsetRef.current;
        }
      }
      if (touchIntentRef.current === 'horizontal') {
        e.preventDefault();
        dragTo(t.clientX);
      }
      // 'vertical': do nothing, let the page scroll natively (touch-action: pan-y).
    };

    const onWheelNative = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // vertical wheel scrolls the page, not this
      e.preventDefault();
      if (!draggingRef.current) freeze();
      const offset = normalize(frozenOffsetRef.current + e.deltaX, getHalf());
      frozenOffsetRef.current = offset;
      track.style.transform = `translateX(${-offset}px)`;
      scheduleResume(1800);
    };

    track.addEventListener('touchmove', onTouchMoveNative, { passive: false });
    track.addEventListener('wheel', onWheelNative, { passive: false });
    return () => {
      track.removeEventListener('touchmove', onTouchMoveNative);
      track.removeEventListener('wheel', onWheelNative);
    };
  }, []);

  const onMouseEnter = () => {
    freeze();
    scheduleResume(1800); // fallback in case mouseleave never fires (cursor left stationary over the strip)
  };
  const onMouseDown = (e: React.MouseEvent) => {
    freeze();
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = frozenOffsetRef.current;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    if (!draggingRef.current) {
      scheduleResume(1800);
      return;
    }
    const offset = normalize(dragStartOffsetRef.current - (e.clientX - dragStartXRef.current), getHalf());
    frozenOffsetRef.current = offset;
    track.style.transform = `translateX(${-offset}px)`;
  };
  const endDrag = () => {
    if (draggingRef.current) {
      draggingRef.current = false;
      scheduleResume(1800);
    }
  };
  const onMouseLeave = () => {
    if (draggingRef.current) { endDrag(); return; }
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resume();
  };
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    touchIntentRef.current = 'none';
  };
  const onTouchEnd = () => {
    if (touchIntentRef.current === 'horizontal') endDrag();
    touchIntentRef.current = 'none';
  };

  return (
    <div className="overflow-hidden pt-12 pb-3">
      <div
        ref={trackRef}
        className="flex w-max whitespace-nowrap cursor-grab active:cursor-grabbing select-none animate-skills-marquee"
        style={{ touchAction: 'pan-y', willChange: 'transform' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {items.map((skill, index) => {
          const pill = (
            <span className="flex items-center justify-center h-11 px-5 rounded-full border-2 border-[#222222] text-[#111111] text-sm font-medium whitespace-nowrap bg-white font-mono skill-badge">
              {skill}
            </span>
          );
          const highlight = skillHighlights[skill];
          return (
            <span key={index} className="mx-3 flex-shrink-0">
              {highlight ? <CircleLoop label={highlight.label} raised={highlight.raised}>{pill}</CircleLoop> : pill}
            </span>
          );
        })}
      </div>
    </div>
  );
};

// Hand-drawn checkmark, replaces the solid square achievement bullet.
const CheckMark = () => (
  <svg width="20" height="18" viewBox="0 0 20 16" aria-hidden="true" className="flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125">
    <path
      d="M2,8 C4,11 6,13 8,14 C11,9 14,4 18,2"
      fill="none" stroke={ACCENT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

// Full-screen viewer for an achievement polaroid: clicking the small photo
// flies an enlarged copy up into the center of the screen over a dimmed
// backdrop. Closes on Escape (handled by the caller), backdrop click, or
// the close button.
// Small wood-grain picture frame for a certificate memento — the
// counterpart to the taped polaroid used for photos. Corner "miter" marks
// suggest a real frame's joined edges.
const WoodFrame = ({ src, size = 84, aspect = 0.78 }: { src: string; size?: number; aspect?: number }) => (
  <div
    className="relative"
    style={{
      width: size,
      padding: '7px',
      background: 'linear-gradient(155deg, #C79A66, #8B6239 55%, #6B4A2E)',
      boxShadow: 'inset 0 0 0 1.5px rgba(0,0,0,0.25), 0 5px 12px rgba(0,0,0,0.25)',
    }}
  >
    <img
      src={src} alt="" className="block w-full"
      style={{ aspectRatio: aspect, border: '1px solid rgba(0,0,0,0.3)' }}
    />
    <span className="absolute w-[10px] h-[10px] border border-black/35 border-r-0 border-b-0" style={{ top: 2, left: 2 }} />
    <span className="absolute w-[10px] h-[10px] border border-black/35 border-l-0 border-b-0" style={{ top: 2, right: 2 }} />
    <span className="absolute w-[10px] h-[10px] border border-black/35 border-r-0 border-t-0" style={{ bottom: 2, left: 2 }} />
    <span className="absolute w-[10px] h-[10px] border border-black/35 border-l-0 border-t-0" style={{ bottom: 2, right: 2 }} />
  </div>
);

const AchievementPhotoLightbox = ({ photo, onClose }: { photo: { src: string; title: string; meta: string } | null; onClose: () => void }) => {
  if (!photo) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${photo.title}`}
    >
      <div
        className="relative bg-white shadow-2xl animate-lightbox-in"
        style={{ width: 'min(88vw, 380px)', padding: '16px 16px 56px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-4 -right-4 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#111111] bg-white text-[#111111] hover:bg-[#111111] hover:text-white transition-all duration-200 shadow-[0_3px_10px_rgba(0,0,0,0.3)]"
        >
          <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2,2 L16,16 M16,2 L2,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <img src={photo.src} alt="" className="block w-full object-cover" style={{ height: 'min(70vw, 340px)' }} />
        <p className="font-heading text-2xl text-[#111111] text-center mt-4">{photo.title}</p>
        <p className="text-xs text-[#555555] font-mono text-center mt-1">{photo.meta}</p>
      </div>
    </div>
  );
};

// "Say hi" note-to-self arrow, pointing at the hero CTA.
const HeroPointer = () => (
  <div className="hidden md:block absolute -top-11 left-0 text-[#1D4ED8]" aria-hidden="true">
    <span className="font-heading text-xl">say hi</span>
    <svg width="90" height="54" viewBox="0 0 90 54" className="absolute left-0 top-4">
      <defs>
        <marker id="hero-arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L7,4 L0,7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      <path
        d="M6,6 C28,3 62,12 78,34" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
        markerEnd="url(#hero-arrowhead)"
      />
    </svg>
  </div>
);

const personalInfo = {
  name: 'PRABJOT KAUR',
  title: 'Lead Software Engineer',
  email: 'prabjotkaur4@gmail.com',
  linkedin: 'https://www.linkedin.com/in/prabjot-kaur-10b6874b/',
  github: 'https://github.com/Prabjot616',
};

const experience = [
  {
    title: 'Lead Software Engineer',
    company: 'Tech Wishes Solutions',
    location: 'Kolkata, West Bengal, India',
    period: 'Oct 2024 – Present',
    points: [
      { text: 'Lead architecture decisions for Shopify app development, full-stack web, mobile (React Native), and AI/agent-based systems', highlight: 'Shopify app development' },
      { text: 'Review Shopify platform updates as they roll out and coordinate technical execution across the engineering team', highlight: 'coordinate technical execution' },
      { text: 'Handle infrastructure work including server hardening, deployment pipelines, and production troubleshooting', highlight: 'server hardening' },
      { text: 'Build tools and systems that improve delivery consistency and velocity for client projects', highlight: 'delivery consistency and velocity' },
    ],
    skills: ['Product Engineering', 'Team Leadership', 'API Design', 'Shopify Apps', 'AI Agent Systems']
  },
  {
    title: 'Senior Software Engineer',
    company: 'Tech Wishes Solutions',
    location: 'India',
    period: 'Oct 2021 – Sep 2024',
    points: [
      { text: 'Built and maintained backend APIs and database systems supporting scalable commerce platforms', highlight: 'scalable commerce platforms' },
      { text: 'Developed Shopify applications and integrations for e-commerce clients', highlight: 'Shopify applications and integrations' },
      { text: 'Optimized application architecture and database queries to improve system performance and reliability', highlight: 'system performance and reliability' },
    ],
    skills: ['Full-Stack Development', 'Shopify APIs', 'Database Architecture']
  },
  {
    title: 'Software Engineer',
    company: 'Tech Wishes Solutions',
    location: 'India',
    period: 'Aug 2020 – Sep 2021',
    points: [
      { text: 'Built backend modules and application features using modern web frameworks', highlight: 'modern web frameworks' },
      { text: 'Designed and implemented database schemas and API integrations for client projects', highlight: 'database schemas and API integrations' },
      { text: 'Collaborated with team on e-commerce platform development', highlight: 'e-commerce platform development' },
    ],
    skills: ['Backend Development', 'API Integration', 'Database Design']
  },
  {
    title: 'Engineering Intern',
    company: 'Tech Wishes Solutions',
    location: 'Kolkata Area, India',
    period: 'Jun 2019 – Jul 2020',
    points: [
      { text: 'Assisted in developing and maintaining web application modules', highlight: 'web application modules' },
      { text: 'Gained hands-on experience in backend architectures and software engineering practices', highlight: 'backend architectures' },
      { text: 'Contributed to client projects under senior engineer mentorship', highlight: 'senior engineer mentorship' },
    ],
    skills: ['Software Development', 'Backend Systems']
  },
];

const projects = [
  {
    title: 'CrowdGuard: Real-Time Crowd Safety Monitoring',
    subtitle: 'Cohort 2, Google APAC Hackathon',
    description: 'Joint project with colleague Sougata Chattapadhay (submitted under participant name Dhatri). CrowdGuard detects and flags crowd safety risks in real-time using computer vision and generative AI to interpret live video feeds. Runs on Gemini 2.5 Flash via Vertex AI for scene analysis, with Cloud Run for serving, AlloyDB for structured data, and Cloud Storage for media.',
    tech: ['Vertex AI', 'Gemini 2.5 Flash', 'Cloud Run', 'AlloyDB', 'Cloud Storage'],
    colSpan: 'col-span-1',
    highlight: 'detects and flags crowd safety risks in real-time using computer vision and generative AI',
  },
  {
    title: 'Multi-Agent AI SEO/GEO Analysis Pipeline',
    subtitle: 'Top 100 - Google APAC Hackathon',
    description: 'Built a multi-agent AI system on Google Cloud (ADK, Vertex AI, AlloyDB) that analyzes websites and generates comprehensive SEO, GEO, and competitor insights. Placed in top 100 at Google APAC hackathon.',
    tech: ['Google Cloud', 'Vertex AI', 'AlloyDB', 'Python', 'AI Agents'],
    colSpan: 'col-span-1',
    highlight: 'Placed in top 100 at Google APAC hackathon',
    featured: true,
  },
  {
    title: 'Shopify App Ecosystem',
    subtitle: 'E-commerce Platform Development',
    description: 'Led architecture and development for Shopify applications serving e-commerce merchants. Coordinated platform updates, team execution, and infrastructure reliability across multiple production apps.',
    tech: ['Shopify APIs', 'React', 'Node.js', 'PostgreSQL'],
    colSpan: 'col-span-1',
    highlight: 'across multiple production apps',
  },
  {
    title: 'Pomodoro Pulse',
    subtitle: 'Mobile Productivity App',
    description: 'Published a Pomodoro productivity timer mobile application on Google Play Store built with React Native.',
    tech: ['React Native', 'Mobile Development'],
    link: 'https://play.google.com/store/apps/details?id=com.pomodoropulse',
    colSpan: 'col-span-1',
    highlight: 'Google Play Store',
  },
  {
    title: 'Bouncy Birdie: Casual Mobile Game',
    subtitle: 'Amazon Appstore - July 2021',
    description: 'Solo-developed casual tap-tap game where players navigate a bird through obstacles. A lightweight, stress-relieving experience designed for Android (min. 4.4). Self-published independently on the Amazon Appstore.',
    tech: ['Android', 'Game Development', 'Solo Project'],
    link: 'https://www.amazon.com/Prabjot-Kaur-Bouncy-Birdie/dp/B098R96DX2',
    colSpan: 'col-span-1',
    highlight: 'Self-published independently',
  },
];

const allSkills = [
  'Shopify App Development', 'AI Agent Systems', 'React Native', 'Full-Stack Engineering',
  'Google Cloud Platform', 'Vertex AI', 'AWS', 'Product Engineering',
  'Team Leadership', 'API Design', 'REST APIs', 'Node.js', 'React',
  'Python', 'JavaScript', 'PostgreSQL', 'AlloyDB', 'MySQL',
  'Docker', 'CI/CD', 'Server Hardening', 'Infrastructure', 'Git'
];

// Adjacent circled pills (Team Leadership/Product Engineering, React/Node.js) get
// staggered label heights via `raised` so the handwritten notes don't collide.
const skillHighlights: Record<string, { label: string; raised?: boolean }> = {
  'AI Agent Systems': { label: 'core focus' },
  'Product Engineering': { label: 'day job' },
  'Team Leadership': { label: 'leading now', raised: true },
  'Node.js': { label: 'backend' },
  'React': { label: 'front-end', raised: true },
  'Infrastructure': { label: 'own this' },
};

const education = [
  {
    degree: 'Master of Computer Applications (MCA), Computer Science',
    school: 'RCC Institute of Information Technology',
    location: 'Kolkata, West Bengal',
    period: '2017 – 2020',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA), Computer Science',
    school: 'Nopany Institute of Professional Studies',
    location: 'Kolkata, West Bengal',
    period: '2014 – 2017',
  },
];

// "Mon YYYY" -> a sortable integer (months since year 0), used to lay
// certifications out in true calendar order now that they render as a
// timeline rather than an arbitrarily-ordered list.
const MONTH_INDEX: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};
const certDateValue = (date?: string) => {
  if (!date) return -Infinity;
  const [mon, year] = date.split(' ');
  return Number(year) * 12 + (MONTH_INDEX[mon] ?? 0);
};

const CERT_CATEGORIES = ['AI & Machine Learning', 'Game Development', 'Software & Web', 'Competitions & Education'] as const;
const CERT_TAB_HEIGHT = 130;

const certifications = [
  { name: 'Google Cloud Gen AI Academy APAC Edition', issuer: 'Google', date: 'Jul 2026', id: '2026H2S07GCGENAIAPACC2-P02586', skills: 'Google Agent Development Kit (ADK)', featured: true, category: 'AI & Machine Learning' },
  { name: 'AWS AI Practitioner Challenge', issuer: 'Udacity', date: 'May 2026', skills: 'AI Productivity · Responsible AI', featured: true, category: 'AI & Machine Learning' },
  { name: 'Build AI Agents with Enterprise Databases', issuer: 'Google', date: 'Jun 2026', id: '25090841', skills: 'Vertex AI · Google Agent Development Kit (ADK)', category: 'AI & Machine Learning' },
  { name: 'Software Architecture Foundations', issuer: 'LinkedIn', date: 'Aug 2025', skills: 'Software Architecture', category: 'Software & Web' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'LinkedIn', date: 'May 2025', skills: 'Artificial Intelligence (AI)', category: 'AI & Machine Learning' },
  { name: 'Career Essentials in Generative AI by Microsoft and LinkedIn', issuer: 'Microsoft', date: 'May 2025', skills: 'Prompt Engineering', category: 'AI & Machine Learning' },
  { name: 'Ethics in the Age of Generative AI', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Responsible AI · Computer Ethics · Generative AI', category: 'AI & Machine Learning' },
  { name: 'Learning Microsoft 365 Copilot and Business Chat', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Office 365 · Microsoft Copilot', category: 'AI & Machine Learning' },
  { name: 'Streamlining Your Work with Microsoft Copilot', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'AI for Business · AI Productivity · Generative AI', category: 'AI & Machine Learning' },
  { name: 'Generative AI: The Evolution of Thoughtful Online Search', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Search Engine Technology · AI for Business', category: 'AI & Machine Learning' },
  { name: 'What Is Generative AI?', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Generative AI Tools · Artificial Intelligence (AI)', category: 'AI & Machine Learning' },
  { name: 'AI Algorithms for Gaming', issuer: 'LinkedIn', date: 'Apr 2025', skills: 'Algorithms', category: 'AI & Machine Learning' },
  { name: 'SSL Certificates for Web Developers', issuer: 'LinkedIn', date: 'Nov 2023', skills: 'Transport Layer Security (TLS)', category: 'Software & Web' },
  { name: 'Learning Docker', issuer: 'LinkedIn', date: 'Jul 2023', skills: 'Docker Products', category: 'Software & Web' },
  { name: 'Game Development Foundations: Game-Related Math', issuer: 'LinkedIn', date: 'Apr 2023', skills: 'Game Development', category: 'Game Development' },
  { name: 'Learning 3D Graphics on the Web with Three.js', issuer: 'LinkedIn', date: 'Apr 2023', skills: 'Three.js · 3D Graphics', category: 'Software & Web' },
  { name: 'Generative AI Imaging: What Creative Pros Need to Know', issuer: 'LinkedIn', date: 'Apr 2023', skills: 'Conditional Image Generation · Generative AI', category: 'AI & Machine Learning' },
  { name: 'Nano Tips for Using Generative AI Tools for Better Marketing Outcomes', issuer: 'LinkedIn', date: 'Apr 2023', skills: 'Artificial Intelligence (AI) · Generative AI', category: 'AI & Machine Learning' },
  { name: 'AWS Planning a Machine Learning Project', issuer: 'Amazon Web Services (AWS)', date: 'Aug 2026', skills: 'Machine Learning', image: '/images/certifications/aws-planning-ml-project.jpg', imageAspect: 1.36, category: 'AI & Machine Learning' },
  { name: 'Game Development for Modern Platforms', issuer: 'Coursera', date: 'Jul 2020', id: 'C5FKFZ22NL38', category: 'Game Development' },
  { name: 'Business of Games and Entrepreneurship', issuer: 'Coursera', date: 'Jul 2020', id: '4CN5ABSDLNEZ', link: 'https://www.coursera.org/account/accomplishments/certificate/4CN5ABSDLNEZ', category: 'Game Development' },
  { name: 'Principles of Game Design', issuer: 'Coursera', date: 'Jun 2020', id: '7LVLBPBBAXH3', link: 'https://www.coursera.org/account/accomplishments/certificate/7LVLBPBBAXH3', category: 'Game Development' },
  { name: 'Introduction to Game Development', issuer: 'Coursera', date: 'May 2020', id: '2EPRZ7FGZ2MR', category: 'Game Development' },
  { name: 'Code Gladiator 2019 Semifinalist', issuer: 'TechGig', date: 'Jun 2019', id: 'THFZbDA3VHB5NEd3eU1ObEhNNGJkQ01nMUlPREo2RjlrejEwc3VGVGVIK0xHa1JIN1hKcVRSTG9UUVNj', category: 'Competitions & Education' },
  { name: 'Master the Mainframe 2018 - Part 2', issuer: 'IBM', date: 'Jan 2019', category: 'Software & Web' },
  { name: 'Android Application development', issuer: 'Techtree Technologies', category: 'Software & Web' },
  { name: 'Diploma in Computer Hardware', issuer: 'Byte Institute', category: 'Competitions & Education' },
].sort((a, b) => certDateValue(b.date) - certDateValue(a.date));

const achievements = [
  { title: 'Mentor of the Year', meta: 'Tech Wishes Solutions · 2025–26', photo: '/images/achievements/mentor-of-the-year.jpg', photoRotate: '6deg' },
  { title: 'Top 100 Finalist, Google APAC Hackathon', meta: 'AI/SEO Analysis Pipeline' },
  { title: 'Employee of the Year', meta: 'Tech Wishes Solutions · 2022–23', photo: '/images/achievements/employee-2022-23.jpg', photoRotate: '-7deg' },
  { title: 'Star Performer', meta: 'Tech Wishes Solutions · 2020–21', certificate: '/images/achievements/cert-star-performer.jpg', certAspect: 0.79, photoRotate: '-4deg' },
  { title: 'Employee of the Year', meta: 'Tech Wishes Solutions · 2020–21', photo: '/images/achievements/employee-2020-21.jpg', certificate: '/images/achievements/cert-employee-2020-21.jpg', certAspect: 0.77, photoRotate: '5deg' },
  { title: 'Academic Excellence Award', meta: 'BCA · 2017–18', photo: '/images/achievements/academic-excellence.jpg', photoRotate: '-6deg' },
  { title: 'Academic Excellence Award', meta: 'BCA · 2016–17', certificate: '/images/achievements/cert-academic-excellence-2016-17.jpg', certAspect: 0.67, photoRotate: '5deg' },
  { title: 'Ram Avtar Gupt Pratibha Puruskar', meta: 'Agrasain Balika Siksha Sadan · 2014', certificate: '/images/achievements/cert-ram-avtar-gupt-puruskar.jpg', certAspect: 1.27, photoRotate: '-5deg' },
  { title: 'Intern → Software Engineer → Senior Software Engineer → Lead Software Engineer', meta: 'Tech Wishes Solutions · 2019–Present' },
];

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const leftColRef = useRef<HTMLDivElement>(null);
  const [rightHeight, setRightHeight] = useState<string>('600px');
  const [openAchievementPhoto, setOpenAchievementPhoto] = useState<{ src: string; title: string; meta: string } | null>(null);
  const [activeCertCategory, setActiveCertCategory] = useState<(typeof CERT_CATEGORIES)[number]>(CERT_CATEGORIES[0]);
  const certBoxRef = useRef<HTMLDivElement>(null);
  const certTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [certMaskRect, setCertMaskRect] = useState<{ top: number; height: number }>({ top: 0, height: CERT_TAB_HEIGHT });
  const [certTabHeights, setCertTabHeights] = useState<number[]>(CERT_CATEGORIES.map(() => CERT_TAB_HEIGHT));

  useEffect(() => {
    if (!openAchievementPhoto) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenAchievementPhoto(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [openAchievementPhoto]);

  useEffect(() => {
    const updateMask = () => {
      const boxEl = certBoxRef.current;
      if (!boxEl) return;
      const boxHeight = boxEl.getBoundingClientRect().height;
      const count = CERT_CATEGORIES.length;
      const base = Math.max(CERT_TAB_HEIGHT, Math.floor(boxHeight / count));
      const heights = CERT_CATEGORIES.map((_, i) => (i === count - 1 ? boxHeight - base * (count - 1) : base));
      setCertTabHeights(heights);

      const activeIdx = CERT_CATEGORIES.indexOf(activeCertCategory);
      const top = heights.slice(0, activeIdx).reduce((sum, h) => sum + h, 0);
      setCertMaskRect({ top, height: heights[activeIdx] });
    };
    updateMask();
    window.addEventListener('resize', updateMask);
    return () => window.removeEventListener('resize', updateMask);
  }, [activeCertCategory, rightHeight]);

  useEffect(() => {
    setMounted(true);

    const updateHeight = () => {
      if (leftColRef.current) {
        if (window.innerWidth >= 1024) {
          setRightHeight(`${leftColRef.current.offsetHeight}px`);
        } else {
          setRightHeight('600px');
        }
      }
    };

    setTimeout(updateHeight, 100);
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <main className="relative flex flex-col w-full min-h-screen bg-white overflow-x-clip font-body">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="mb-8">
              <AnimatedSignature />
            </div>

            <p className="text-base md:text-lg text-[#333333] max-w-xl mb-12 leading-relaxed animate-slide-up delay-100">
              Lead Software Engineer specializing in Shopify app architecture, AI agent systems, and full-stack engineering. Building multi-agent AI pipelines on Google Cloud and leading technical execution for e-commerce platforms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 items-start animate-slide-up delay-200">
              <div className="relative">
                <HeroPointer />
                <a href={`mailto:${personalInfo.email}`}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-white font-medium rounded-full hover-bg hover:bg-[#000000] border-2 border-[#111111] font-mono text-sm button-press transition-all duration-200">
                  <Mail className="h-5 w-5 transition-transform duration-200 group-hover:rotate-12" />
                  <span>Get in Touch</span>
                </a>
              </div>

              <div className="flex gap-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#222222] text-[#222222] hover-border hover:border-[#111111] hover:text-[#111111] transition-all duration-300 icon-hover">
                  <LinkedInIcon />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener" className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#222222] text-[#222222] hover-border hover:border-[#111111] hover:text-[#111111] transition-all duration-300 icon-hover">
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <img
                src="/images/hero-portrait.png"
                alt="Prabjot Kaur"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee Section */}
      <section className="py-24 border-y-2 border-[#111111] bg-[#fcfcfc] overflow-hidden">
        <SkillsMarquee />
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-48">
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#111111] mb-24 tracking-tight">
          Featured Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="col-span-1 scroll-reveal group relative hover-lift transition-all duration-300 cursor-pointer p-[5px]">
              <CardFrame variant={idx} />
              <div className="flex flex-col h-full bg-white p-8 md:p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading text-[#111111] mb-2">{project.title}</h3>
                    <p className="text-sm text-[#555555] uppercase tracking-wide font-mono">{project.subtitle}</p>
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-[#222222] flex items-center justify-center hover-border hover:border-[#111111] flex-shrink-0 group/link transition-all duration-300">
                      <ArrowUpRight size={18} className="text-[#333333] group-hover/link:text-[#111111] transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>

                <p className="text-[#333333] leading-relaxed flex-grow mb-8">
                  {withHighlight(project.description, project.highlight)}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIdx) => (
                    <span key={tech} className={`px-3 py-1.5 border-2 border-[#222222] text-xs font-medium text-[#111111] font-mono transition-all duration-200 hover:bg-[#111111] hover:text-white cursor-default stagger-${(techIdx % 6) + 1}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.featured && (
                <CornerStar className="absolute -top-4 -right-3 z-10" />
              )}
            </div>
          ))}
        </div>
      </section>

      <SquiggleDivider />

      {/* Experience Timeline */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-48">
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-[#111111] mb-32 tracking-tight">
          Experience
        </h2>

        <div className="relative border-l-2 border-dashed border-[#222222] ml-0 space-y-24">
          {experience.map((job, idx) => (
            <div key={idx} className="scroll-reveal relative pl-12 md:pl-16 group">
              <TimelinePin />

              <div className="bg-white border-2 border-[#222222] p-8 md:p-10 hover-border group-hover:border-[#111111] transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading text-[#111111] mb-2">{job.title}</h3>
                    <h4 className="text-base text-[#333333] font-medium">{job.company}</h4>
                  </div>
                  <span className="inline-block text-sm text-[#555555] uppercase tracking-wide font-mono">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {job.points.map((point, i) => (
                    <li key={i} className="text-[#333333] flex items-start gap-3 leading-relaxed">
                      <span className="text-[#222222] mt-0.5 block w-4 flex-shrink-0">—</span>
                      <span>{withHighlight(point.text, point.highlight)}</span>
                    </li>
                  ))}
                </ul>

                {job.skills.length > 0 && (
                  <div className="pt-6 border-t-2 border-[#dddddd] flex flex-wrap items-center gap-2">
                    <span className="text-xs text-[#555555] uppercase tracking-wider font-mono mr-1">Skills</span>
                    {job.skills.map((skill) => (
                      <span key={skill} className="flex items-center justify-center h-7 px-3 rounded-full border-2 border-[#222222] text-xs font-medium text-[#111111] font-mono whitespace-nowrap">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SquiggleDivider />

      {/* Education & Certifications */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">

          {/* Education */}
          <div ref={leftColRef}>
            <h2 className="font-heading text-4xl md:text-5xl text-[#111111] mb-24 tracking-tight">
              Education
            </h2>
            <div className="space-y-16 border-l-2 border-dashed border-[#222222]">
              {education.map((edu, idx) => (
                <div key={idx} className="scroll-reveal relative pl-8 group">
                  <TimelinePin />
                  <h3 className="text-xl font-heading text-[#111111] mb-2">{edu.degree}</h3>
                  <p className="text-[#333333] font-medium mb-1">{edu.school}</p>
                  <p className="text-sm text-[#555555] font-mono">{edu.location} • {edu.period}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h2 className="font-heading text-4xl md:text-5xl text-[#111111] mb-16 mt-32 tracking-tight">
              Achievements
            </h2>
            <ul className="space-y-8">
              {achievements.map((achieve, idx) => {
                const hasMemento = !!(achieve.photo || achieve.certificate);
                const combined = !!(achieve.photo && achieve.certificate);
                return (
                  <li key={idx} className={`scroll-reveal relative flex gap-4 items-start p-6 bg-white border-2 border-[#222222] hover-border hover:border-[#111111] transition-all duration-300 hover:shadow-md group cursor-default ${hasMemento ? 'pr-20 sm:pr-24' : ''}`}>
                    <CheckMark />
                    <div>
                      <p className="font-heading text-lg text-[#111111] leading-tight mb-0.5">{achieve.title}</p>
                      <p className="text-xs text-[#555555] font-mono">{achieve.meta}</p>
                    </div>
                    {hasMemento && (
                      <div className="absolute -top-4 -right-3 flex items-end">
                        {achieve.certificate && (
                          <button
                            type="button"
                            onClick={() => setOpenAchievementPhoto({ src: achieve.certificate!, title: achieve.title, meta: achieve.meta })}
                            className="cursor-zoom-in transition-shadow duration-200 hover:shadow-[0_8px_18px_rgba(0,0,0,0.3)]"
                            style={{
                              transform: combined ? 'rotate(-7deg) translateX(14px)' : `rotate(${achieve.photoRotate})`,
                              zIndex: combined ? 1 : 2,
                            }}
                            aria-label={`View certificate for ${achieve.title}`}
                          >
                            <WoodFrame src={achieve.certificate} size={combined ? 54 : 84} aspect={achieve.certAspect} />
                          </button>
                        )}
                        {achieve.photo && (
                          <button
                            type="button"
                            onClick={() => setOpenAchievementPhoto({ src: achieve.photo!, title: achieve.title, meta: achieve.meta })}
                            className="relative bg-white shadow-[0_5px_12px_rgba(0,0,0,0.22)] cursor-zoom-in transition-shadow duration-200 hover:shadow-[0_8px_18px_rgba(0,0,0,0.3)]"
                            style={{
                              width: combined ? '66px' : '84px',
                              padding: combined ? '5px 5px 16px' : '6px 6px 20px',
                              transform: `rotate(${achieve.photoRotate})`,
                              zIndex: 2,
                            }}
                            aria-label={`View photo for ${achieve.title}`}
                          >
                            <span
                              className="absolute left-1/2 bg-[#EAE3D3]"
                              style={{ top: '-8px', width: '34px', height: '13px', transform: 'translateX(-50%) rotate(-3deg)', opacity: 0.85 }}
                            />
                            <img src={achieve.photo} alt="" className="block w-full object-cover" style={{ height: combined ? '54px' : '70px' }} />
                          </button>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Certifications */}
          <div className="flex flex-col h-full min-h-0" style={{ height: rightHeight }}>
            <h2 className="font-heading text-4xl md:text-5xl text-[#111111] mb-24 tracking-tight flex-shrink-0">
              Certifications
            </h2>
            <div className="scroll-reveal flex-1 min-h-0 flex" style={{ minHeight: CERT_CATEGORIES.length * CERT_TAB_HEIGHT }}>
              <div ref={certBoxRef} className="relative bg-white border-2 border-[#222222] flex-1 min-w-0 min-h-0 flex flex-col">
                <div
                  className="absolute bg-white z-10 pointer-events-none"
                  style={{ right: '-2px', width: '4px', top: certMaskRect.top, height: certMaskRect.height }}
                />
                <div className="flex-1 min-h-0 overflow-y-auto p-8">
                  <div className="space-y-6 border-l-2 border-dashed border-[#222222]">
                    {certifications.filter((cert) => cert.category === activeCertCategory).map((cert, idx) => (
                      <div key={idx} className="relative pl-8 group">
                        <TimelinePin />
                        <h3 className="text-[#111111] font-heading text-lg mb-1 flex flex-wrap items-center gap-2">
                          {cert.featured && <CornerStar size={16} className="flex-shrink-0" />}
                          {cert.name}
                          {cert.image && (
                            <button
                              type="button"
                              onClick={() => setOpenAchievementPhoto({ src: cert.image!, title: cert.name, meta: `${cert.issuer}${cert.date ? ` · ${cert.date}` : ''}` })}
                              className="flex-shrink-0 cursor-zoom-in transition-shadow duration-200 hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                              aria-label={`View certificate for ${cert.name}`}
                            >
                              <WoodFrame src={cert.image} size={44} aspect={cert.imageAspect ?? 0.78} />
                            </button>
                          )}
                          {cert.link && (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 text-xs font-mono text-[#555555] hover:text-[#111111] underline decoration-dashed underline-offset-2 transition-colors duration-200"
                              aria-label={`Show credential for ${cert.name}`}
                            >
                              Show credential ↗
                            </a>
                          )}
                        </h3>
                        <p className="text-xs text-[#555555]">
                          <span className="font-mono">{cert.issuer}{cert.date ? ` · ${cert.date}` : ''}</span>
                          {cert.skills && <span className="text-[#333333] text-sm"> · {cert.skills}</span>}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col flex-shrink-0">
                {CERT_CATEGORIES.map((cat, i) => {
                  const active = cat === activeCertCategory;
                  const isFirst = i === 0;
                  const isLast = i === CERT_CATEGORIES.length - 1;
                  return (
                    <button
                      key={cat}
                      ref={(el) => { certTabRefs.current[i] = el; }}
                      type="button"
                      onClick={() => setActiveCertCategory(cat)}
                      aria-pressed={active}
                      className={`flex-shrink-0 flex items-center justify-center px-1 py-2 font-heading font-bold text-[15px] leading-tight whitespace-normal text-center border-2 border-[#222222] transition-colors duration-200 ${isFirst ? 'rounded-tr-lg' : 'border-t-0'} ${isLast ? 'rounded-br-lg' : ''} ${
                        active
                          ? 'bg-white text-[#111111] border-l-0 w-[54px]'
                          : 'bg-[#E7E1D3] text-[#333333] w-[46px] hover:bg-white'
                      }`}
                      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', height: certTabHeights[i] ?? CERT_TAB_HEIGHT }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="text-xs text-[#555555] mt-4 uppercase tracking-wide font-mono">
              Scroll to view all {certifications.filter((cert) => cert.category === activeCertCategory).length} certifications in {activeCertCategory}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#111111] text-white pt-40 pb-24 mt-32 border-t-2 border-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-12 font-mono">
            FOR ENQUIRIES OR COLLABORATION REQUESTS, FEEL FREE TO REACH OUT
          </p>

          <h2 className="font-heading text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[140px] text-white mb-20 leading-[0.85] tracking-tight">
            GET IN TOUCH
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t-2 border-[#333333] pt-12">
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="inline-block text-2xl md:text-3xl text-[#dddddd] hover:text-white transition-all duration-300 footer-wavy-underline">
                {personalInfo.email}
              </a>
            </div>

            <div className="flex gap-6">
              <a href={personalInfo.github} target="_blank" rel="noopener" className="text-sm uppercase tracking-wide text-[#888888] hover:text-white transition-all duration-300 font-mono link-underline">
                GitHub
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="text-sm uppercase tracking-wide text-[#888888] hover:text-white transition-all duration-300 font-mono link-underline">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mt-20 pt-8 border-t-2 border-[#333333]">
            <p className="text-xs text-[#888888] font-mono">
              ©{new Date().getFullYear()} PRABJOT KAUR
            </p>
            <p className="text-xs text-[#888888] uppercase tracking-wide font-mono">
              DESIGNED & DEVELOPED BY PRABJOT KAUR
            </p>
          </div>
        </div>
      </footer>

      <AchievementPhotoLightbox photo={openAchievementPhoto} onClose={() => setOpenAchievementPhoto(null)} />
    </main>
  );
}
