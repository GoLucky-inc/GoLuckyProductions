import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container relative z-10">
        <header className="mb-20 text-center animate-fade-in">
          <h1 className="mb-6">GoLucky Production</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">
            Crafting digital experiences that spark joy and wonder.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Snake Spell Card */}
          <Link href="/snake-spell" className="group">
            <div className="glass-panel p-6 h-full transition-all duration-300 group-hover:bg-white/5 group-hover:scale-[1.02] group-hover:border-white/10">
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/snake-spell-hero.png"
                  alt="Snake Spell"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h2 className="text-2xl mb-2 text-white group-hover:text-purple-300 transition-colors">Snake Spell</h2>
              <p className="mb-4">
                A mystical word puzzle adventure. Cast spells, grow your snake, and conquer the neon forest.
              </p>
              <span className="text-sm font-medium text-purple-400 group-hover:text-purple-300 flex items-center gap-2">
                Explore Game <span>&rarr;</span>
              </span>
            </div>
          </Link>

          {/* Coming Soon Card */}
          <div className="glass-panel p-6 h-full opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="w-full h-48 mb-6 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
              <span className="text-4xl">?</span>
            </div>
            <h2 className="text-2xl mb-2 text-white">Next Project</h2>
            <p className="mb-4">
              Something amazing is brewing in the lab. Stay tuned for our next release.
            </p>
            <span className="text-sm font-medium text-gray-500">
              Coming Soon
            </span>
          </div>
        </section>

        <footer className="mt-24 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GoLucky Production. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
