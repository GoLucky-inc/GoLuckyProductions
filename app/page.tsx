import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section — centered like yenz.be */}
      <section className="container flex-grow flex flex-col justify-center items-center text-center py-32 md:py-40">
        <div className="animate-fade-in">
          <p className="section-label animate-fade-in">Game Studio</p>
        </div>
        <h1 className="font-bold tracking-tighter mb-4 animate-fade-in-delay whitespace-nowrap" style={{ background: 'none', WebkitTextFillColor: 'unset', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}>
          GoLucky Production
        </h1>
        <div className="animate-fade-in-delay">
          <p className="font-bold tracking-tight text-purple-400 whitespace-nowrap" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            <span className="rotating-text-wrapper" style={{ width: '7em' }}>
              <span>Puzzle Games</span>
              <span>Arcade Games</span>
              <span>Word Games</span>
            </span>
          </p>
        </div>
        <p className="text-base md:text-lg text-zinc-500 max-w-md mx-auto leading-relaxed mt-6 animate-fade-in-delay-2">
          Hobby gamer turned game maker. Building games for the passion of building games.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-32">
        <div className="text-center mb-16">
          <p className="section-label">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Games</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Snake Spell Card */}
          <Link href="/snake-spell" className="project-card group relative block rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/60 aspect-[4/3]">
            <Image
              src="/snake-spell-hero.png"
              alt="Snake Spell"
              fill
              className="object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                  Puzzle
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-zinc-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                  Arcade
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">Snake Spell</h3>
              <p className="text-sm text-zinc-400">Slither, spell, and survive in this neon word-puzzle adventure.</p>
            </div>
          </Link>

          {/* Coming Soon Card */}
          <div className="project-card relative rounded-2xl overflow-hidden bg-zinc-900/60 border border-zinc-800/60 aspect-[4/3] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-4xl mb-4">&#10024;</div>
              <h3 className="text-xl font-bold text-white mb-2">What&apos;s Next?</h3>
              <p className="text-sm text-zinc-500">Something new is brewing in the lab.</p>
              <span className="inline-block mt-4 text-xs font-mono text-zinc-600 uppercase tracking-widest">In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-16 mt-auto border-t border-zinc-800/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-zinc-600">&copy; {new Date().getFullYear()} GoLucky Production. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">Privacy</Link>
            <Link href="/terms-of-service" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">Terms</Link>
            <div className="flex gap-4 text-zinc-600">
              <a href="https://github.com/GoLucky-inc" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/joseph-leavitt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
