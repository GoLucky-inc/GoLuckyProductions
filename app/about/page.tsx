export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* About */}
      <section className="container flex-grow py-24 max-w-3xl mx-auto">
        <div className="animate-fade-in">
          <p className="section-label">About</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4" style={{ background: 'none', WebkitTextFillColor: 'unset' }}>
            The Player Becomes{" "}
            <span className="text-purple-400">the Maker</span>
          </h1>
        </div>

        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed mt-12 animate-fade-in-delay">
          <p>
            I&apos;ve been a gamer my whole life. From the pixelated adventures of the early days to the immersive open worlds of today, I&apos;ve always been fascinated by the magic that happens on screen.
          </p>
          <p>
            But playing wasn&apos;t enough. I wanted to understand how that magic was made.
          </p>
          <p>
            <strong className="text-white font-medium">GoLucky Production</strong> is the result of that curiosity. It&apos;s my personal journey into the world of game development — learning the code, crafting the art, and building the experiences I&apos;ve always wanted to play.
          </p>
          <p>
            I&apos;m just getting started, and I&apos;m learning something new every day. Thanks for checking out my games and being part of this adventure.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 animate-fade-in-delay-2">
          <p className="text-zinc-600 italic">
            — Joe, Founder of GoLucky Production
          </p>
        </div>

      </section>

      {/* Contact */}
      <section className="container py-24 flex flex-col items-center text-center animate-fade-in-delay-2">
        <p className="section-label">Contact</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4" style={{ background: 'none', WebkitTextFillColor: 'unset' }}>
          Get in Touch
        </h2>
        <p className="text-lg text-zinc-400 max-w-lg mx-auto mb-12">
          Have a question, feedback, or just want to say hi?<br />I&apos;d love to hear from you.
        </p>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10 md:p-16">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4 font-semibold">Email</p>
          <a
            href="mailto:gamersgolucky@gmail.com"
            className="text-2xl md:text-4xl font-bold text-white hover:text-purple-400 transition-colors break-all md:break-normal"
          >
            gamersgolucky@gmail.com
          </a>
        </div>

        <p className="text-sm text-zinc-500 mt-8">
          In my professional life, I also work with data and AI —{" "}
          <a
            href="https://ai-prepared.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors underline"
          >
            check it out here
          </a>.
        </p>

        <div className="flex gap-6 mt-12 text-zinc-500">
          <a href="https://github.com/GoLucky-inc" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/joseph-leavitt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-12 mt-auto border-t border-zinc-800/50">
        <p className="text-sm text-zinc-600 text-center">&copy; {new Date().getFullYear()} GoLucky Production. All rights reserved.</p>
      </footer>
    </main>
  );
}
