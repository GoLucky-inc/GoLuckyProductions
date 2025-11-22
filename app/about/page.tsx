import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 p-6 md:p-12">
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10" />

            <div className="max-w-3xl mx-auto">
                <nav className="mb-24 animate-fade-in">
                    <Link href="/" className="text-lg font-bold hover:text-purple-400 transition-colors">
                        &larr; GoLucky Production
                    </Link>
                </nav>

                <section className="animate-fade-in space-y-12">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            The Player
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                            Becomes the Maker
                        </span>
                    </h1>

                    <div className="space-y-8 text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                        <p>
                            I've been a gamer my whole life. From the pixelated adventures of the early days to the immersive open worlds of today, I've always been fascinated by the magic that happens on screen.
                        </p>
                        <p>
                            But playing wasn't enough. I wanted to understand how that magic was made.
                        </p>
                        <p>
                            <strong className="text-white font-medium">GoLucky Production</strong> is the result of that curiosity. It's my personal journey into the world of game development—learning the code, crafting the art, and building the experiences I've always wanted to play.
                        </p>
                        <p>
                            I'm just getting started, and I'm learning something new every day. Thanks for checking out my games and being part of this adventure.
                        </p>
                    </div>

                    <div className="pt-12 border-t border-white/10">
                        <p className="text-gray-500 italic">
                            — Joel, Founder of GoLucky Production
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
