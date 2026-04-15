"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreeperDefensePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="container flex-grow flex flex-col justify-center items-center text-center py-32 md:py-40">
        <div className="animate-fade-in">
          <p className="section-label">Coming Soon</p>
        </div>

        <h1
          className="tracking-wide mb-4 animate-fade-in-delay"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          Creeper Defense
        </h1>

        <p
          className="text-base md:text-lg text-stone-400 max-w-lg mx-auto leading-relaxed mt-2 animate-fade-in-delay"
        >
          A new tower defense game brewing at the ranch. Hold the line, protect your base, and crush
          every creeper that dares to cross your turf.
        </p>

        {/* Google Play badge area */}
        <div className="flex items-center gap-3 mt-6 mb-10 animate-fade-in-delay-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
            <path d="M3.18 23.76c.37.21.8.22 1.19.04L15.91 12 4.37.2C3.98.02 3.55.03 3.18.24 2.44.65 2 1.4 2 2.22v19.56c0 .82.44 1.57 1.18 1.98zM17.62 13.69l2.97-1.71c.83-.48.83-1.48 0-1.96l-2.97-1.71L14.74 12l2.88 1.69zM5.1 1.71L14.03 12 5.1 22.29 16.78 15.4l-3.04-3.04-8.64-8.65z"/>
          </svg>
          <span className="text-sm text-stone-500 uppercase tracking-widest" style={{ fontFamily: "var(--font-display)" }}>
            Google Play · Launch Day Only
          </span>
        </div>

        {/* Devlog link */}
        <Link
          href="/creeper-defense/devlog"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-amber-300 transition-colors mb-10 animate-fade-in-delay-2"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
          Follow the development blog
        </Link>

        {/* Form */}
        <div className="w-full max-w-md animate-fade-in-delay-2">
          {status === "success" ? (
            <div className="rounded border border-amber-700/40 bg-amber-900/20 px-8 py-10 text-center">
              <div className="text-3xl mb-4">&#9733;</div>
              <h2 className="text-xl text-amber-200 mb-2">You&apos;re on the list!</h2>
              <p className="text-sm text-stone-400">
                We&apos;ll notify you the moment Creeper Defense hits Google Play.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full rounded px-4 py-3 bg-stone-900 border border-stone-700 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn btn-primary w-full disabled:opacity-60"
              >
                {status === "loading" ? "Joining..." : "Notify Me at Launch"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-400 text-center">{errorMessage}</p>
              )}
              <p className="text-xs text-stone-600 text-center mt-1">
                No spam. One email when the game is live.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-16 mt-auto border-t border-stone-800/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-stone-600">
            &copy; {new Date().getFullYear()} GoLucky Production. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-stone-600 hover:text-stone-300 transition-colors">
              ← Back to Games
            </Link>
            <Link href="/privacy-policy" className="text-sm text-stone-600 hover:text-stone-300 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
