import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 p-6 md:p-12 flex flex-col">
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10" />

            <div className="max-w-3xl mx-auto w-full flex-grow flex flex-col">
                <nav className="mb-24 animate-fade-in">
                    <Link href="/" className="text-lg font-bold hover:text-blue-400 transition-colors">
                        &larr; GoLucky Production
                    </Link>
                </nav>

                <section className="animate-fade-in flex-grow flex flex-col justify-center items-center text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Get in Touch
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-light">
                        Have a question, feedback, or just want to say hi? I'd love to hear from you.
                    </p>

                    <div className="glass-panel p-10 md:p-16 rounded-3xl border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
                        <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Email Me At</p>
                        <a
                            href="mailto:gamersgolucky@gmail.com"
                            className="text-3xl md:text-5xl font-bold text-white hover:text-blue-400 transition-colors break-all md:break-normal"
                        >
                            gamersgolucky@gmail.com
                        </a>
                    </div>
                </section>

                <footer className="mt-auto py-12 text-center text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} GoLucky Production. All rights reserved.</p>
                </footer>
            </div>
        </main>
    );
}
