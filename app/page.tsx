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
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav>

        {/* Vision Section */}
        <header className="max-w-4xl mx-auto text-center mb-32 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Hobby gamer turned
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              game maker!
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Building games for the passion of building games.
          </p>
        </header>

        {/* Games Section */}
        <section id="games" className="max-w-6xl mx-auto w-full mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Our Games</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Snake Spell Card - Featured */}
            <Link href="/snake-spell" className="group lg:col-span-8">
              <div className="glass-panel p-8 h-full flex flex-col md:flex-row gap-8 items-center transition-all duration-300 group-hover:bg-white/5 group-hover:border-purple-500/30">
                <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="/snake-spell-hero.png"
                    alt="Snake Spell"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>
                <div className="flex-1 text-left">
                  <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-purple-300 uppercase bg-purple-500/20 rounded-full">
                    Latest Release
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">Snake Spell</h3>
                  <p className="mb-6 text-gray-300 text-lg leading-relaxed">
                    A mystical word puzzle adventure. Cast spells, grow your snake, and conquer the neon forest.
                  </p>
                  <span className="inline-flex items-center gap-2 text-purple-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Play Now <span className="text-xl">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Coming Soon Card */}
            <div className="glass-panel p-8 lg:col-span-4 flex flex-col justify-center h-full opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">What's Next?</h3>
              <p className="mb-6 text-gray-400 leading-relaxed">
                Our labs are bubbling with new ideas. Stay tuned for our next magical release.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                  In Development
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-auto pt-12 border-t border-white/5 text-center text-sm text-gray-600 flex flex-col gap-4">
          <p>&copy; {new Date().getFullYear()} GoLucky Production. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-gray-400 transition-colors">
            Terms of Service
          </Link>
        </footer>
      </div>
    </main>
  );
}
