import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10 flex-grow flex flex-col">
        {/* Navigation / Brand */}
        <nav className="flex justify-between items-center mb-24">
          <div className="text-2xl font-bold tracking-tighter">GoLucky</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#games" className="hover:text-white transition-colors">Games</a>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </nav>

        {/* Vision Section */}
        <header className="min-h-screen flex flex-col justify-center items-center max-w-4xl mx-auto text-center mb-32 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-tight mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Hobby gamer turned
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              game maker!
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Building games for the passion of building games.
          </p>
        </header>

        {/* Games Section */}
        <section id="games" className="py-32">
          <h2 className="text-3xl font-bold mb-16 border-l-4 border-purple-500 pl-6">Our Games</h2>

          <div className="grid grid-cols-1 gap-16">
            {/* Snake Spell - Featured Large Card */}
            <Link href="/snake-spell" className="group relative block h-[700px] rounded-3xl overflow-hidden bg-gray-900 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
              <div className="absolute inset-0">
                <Image
                  src="/snake-spell-hero.png"
                  alt="Snake Spell"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 p-16 w-full">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-purple-500 text-white text-sm font-bold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                    Puzzle Arcade
                  </span>
                </div>
                <h3 className="text-6xl font-bold mb-6 text-white group-hover:text-purple-300 transition-colors">Snake Spell</h3>
                <p className="text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                  A neon-soaked word puzzle adventure. Slither, spell, and survive.
                </p>
                <div className="flex items-center gap-3 text-purple-400 font-medium group-hover:translate-x-2 transition-transform text-lg">
                  Play Now <span className="text-2xl">&rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Spacer for visual separation */}
        <div className="h-32 md:h-64"></div>

        {/* In the Lab Section */}
        <section className="py-32">
          <h2 className="text-3xl font-bold mb-16 border-l-4 border-blue-500 pl-6">In the Lab</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-12 flex flex-col justify-between min-h-[300px] hover:bg-white/10 transition-colors">
              <div>
                <div className="text-4xl mb-6">✨</div>
                <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
                <p className="text-gray-400 text-lg leading-relaxed">Our labs are bubbling with new ideas. Stay tuned for our next magical release.</p>
              </div>
              <div className="mt-8 text-sm text-gray-500 font-mono uppercase tracking-widest">In Development</div>
            </div>
          </div>
        </section>

        <footer className="mt-auto py-24 border-t border-white/5 text-center text-sm text-gray-600 flex flex-col gap-6">
          <p>&copy; {new Date().getFullYear()} GoLucky Production. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
