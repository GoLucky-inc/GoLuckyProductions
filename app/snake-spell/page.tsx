import Link from "next/link";
import Image from "next/image";

export default function SnakeSpellPage() {
    return (
        <main className="min-h-screen flex flex-col relative">
            {/* Navigation */}
            <nav className="absolute top-0 left-0 w-full p-6 z-50">
                <div className="container flex justify-between items-center">
                    <Link href="/" className="text-lg font-bold hover:text-purple-400 transition-colors">
                        &larr; GoLucky Production
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/snake-spell-hero.png"
                        alt="Snake Spell Background"
                        fill
                        className="object-cover opacity-30 blur-sm"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[hsl(var(--background))]"></div>
                </div>

                <div className="container text-center animate-fade-in">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium backdrop-blur-md">
                        New Release
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent">
                        SNAKE SPELL
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300">
                        Slither through a neon world, collect letters, and cast powerful spells in this addictive word-puzzle arcade game.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <button className="btn btn-primary text-lg px-8 py-4">
                            Play Now
                        </button>
                        <button className="btn btn-outline text-lg px-8 py-4">
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-black/20">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass-panel p-8 text-center">
                            <div className="text-4xl mb-4">🐍</div>
                            <h3 className="text-xl font-bold mb-2 text-white">Classic Gameplay</h3>
                            <p>The nostalgic snake mechanics you love, reimagined with smooth controls and modern physics.</p>
                        </div>
                        <div className="glass-panel p-8 text-center">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="text-xl font-bold mb-2 text-white">Spellcasting</h3>
                            <p>Collect letters to form words and unleash magical effects to clear obstacles and boost your score.</p>
                        </div>
                        <div className="glass-panel p-8 text-center">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-bold mb-2 text-white">Neon Aesthetics</h3>
                            <p>Immerse yourself in a stunning cyberpunk forest with dynamic lighting and particle effects.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
