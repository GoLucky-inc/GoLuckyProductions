import Link from "next/link";

export default function SnakeSpellPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="container flex-grow flex flex-col justify-center items-center text-center py-24">
        <div className="animate-fade-in">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            New Release
          </span>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter" style={{ background: 'none', WebkitTextFillColor: 'unset' }}>
            <span className="text-white">SNAKE </span>
            <span className="text-purple-400">SPELL</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-zinc-400 leading-relaxed">
            Slither through a neon world, collect letters, and cast powerful spells in this addictive word-puzzle arcade game.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-delay">
          <button className="btn btn-primary text-lg px-8 py-4">
            Play Now
          </button>
          <button className="btn btn-outline text-lg px-8 py-4">
            Watch Trailer
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-12 mt-auto border-t border-zinc-800/50">
        <div className="flex justify-center gap-6">
          <Link href="/privacy-policy" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm text-zinc-600 hover:text-zinc-300 transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  );
}
