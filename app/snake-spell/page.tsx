"use client";

import Link from "next/link";
import { useState } from "react";

const IOS_URL = "https://apps.apple.com/us/app/snake-spell/id6755446858";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.goluckyproduction.spellsnake";

function getDeviceStore(): "ios" | "android" | "unknown" {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  return "unknown";
}

export default function SnakeSpellPage() {
  const [showPicker, setShowPicker] = useState(false);

  function handlePlayNow() {
    const device = getDeviceStore();
    if (device === "ios") {
      window.open(IOS_URL, "_blank", "noopener,noreferrer");
    } else if (device === "android") {
      window.open(ANDROID_URL, "_blank", "noopener,noreferrer");
    } else {
      setShowPicker(true);
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="container flex-grow flex flex-col justify-center items-center text-center py-24">
        <div className="animate-fade-in">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-sm border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            New Release
          </span>
          <h1 className="text-6xl md:text-8xl tracking-wide mb-6" style={{ background: 'none', WebkitTextFillColor: 'unset' }}>
            <span className="text-amber-100">SNAKE </span>
            <span className="text-amber-400">SPELL</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-stone-400 leading-relaxed">
            Slither through a neon world, collect letters, and cast powerful spells in this addictive word-puzzle arcade game.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-delay">
          <button onClick={handlePlayNow} className="btn btn-primary text-lg px-8 py-4">
            Play Now
          </button>
          <button className="btn btn-outline text-lg px-8 py-4">
            Watch Trailer
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-12 mt-auto border-t border-stone-800/50">
        <div className="flex justify-center gap-6">
          <Link href="/privacy-policy" className="text-sm text-stone-600 hover:text-stone-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm text-stone-600 hover:text-stone-300 transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>

      {/* Store Picker Modal */}
      {showPicker && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ background: 'rgba(0,0,0,0.7)' }}
          onClick={() => setShowPicker(false)}
        >
          <div
            className="relative border border-stone-700 bg-stone-900 p-10 max-w-sm w-full mx-4 text-center"
            style={{ borderRadius: '0.25rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPicker(false)}
              className="absolute top-4 right-4 text-stone-500 hover:text-amber-300 transition-colors text-lg leading-none"
              aria-label="Close"
            >
              ✕
            </button>
            <p className="section-label mb-2">Choose Your Store</p>
            <p className="text-stone-400 text-sm mb-8">Where would you like to download Snake Spell?</p>
            <div className="flex flex-col gap-4">
              <a
                href={IOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
                onClick={() => setShowPicker(false)}
              >
                App Store (iOS)
              </a>
              <a
                href={ANDROID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full"
                onClick={() => setShowPicker(false)}
              >
                Google Play (Android)
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
