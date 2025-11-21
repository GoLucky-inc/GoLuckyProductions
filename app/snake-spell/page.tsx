import Link from "next/link";
import Image from "next/image";

export default function SnakeSpellPage() {
    return (
        <main className="min-h-screen flex flex-col relative bg-black">
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



            <footer className="absolute bottom-4 w-full text-center z-10 flex justify-center gap-6">
                <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                    Terms of Service
                </Link>
            </footer>
        </main>
    );
}
