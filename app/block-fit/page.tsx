import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Block Fit: Cozy Village — GoLucky Production",
  description:
    "A cozy block-fit puzzle where every piece you place grows a charming little village. Coming soon to Google Play.",
};

const features = [
  {
    title: "Cozy block-fit puzzles",
    body: "Slot houses, farms, markets, shops, and parks into snug plots. Fit everyone in before move-in day.",
  },
  {
    title: "A village that grows",
    body: "Connect buildings into bustling neighborhoods that level up in style as your town grows.",
  },
  {
    title: "Good-neighbor bonuses",
    body: "Place farms by markets, homes by shops, and parks beside anything to earn extra stars.",
  },
  {
    title: "Calm by design",
    body: "No timers, no pressure. Soft storybook art and a gentle soundtrack made for unwinding.",
  },
];

const shots = ["/block-fit/shot1.png", "/block-fit/shot2.png", "/block-fit/shot3.png"];

export default function BlockFitPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="container flex flex-col justify-center items-center text-center py-24">
        <div className="animate-fade-in">
          <Image
            src="/block-fit/icon.png"
            alt="Block Fit: Cozy Village icon"
            width={104}
            height={104}
            className="mx-auto mb-6 rounded-2xl shadow-lg shadow-black/40"
          />
          <span className="inline-block mb-4 px-4 py-1.5 rounded-sm border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            Coming Soon
          </span>
          <h1 className="text-5xl md:text-7xl tracking-wide mb-6" style={{ background: "none", WebkitTextFillColor: "unset" }}>
            <span className="text-amber-100">BLOCK </span>
            <span className="text-amber-400">FIT</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-stone-400 leading-relaxed">
            A cozy block-fit puzzle where every piece you place grows a charming little village. Fit the blocks, house every villager, and build a little place that feels like home.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-delay">
          <span className="btn btn-outline text-lg px-8 py-4 cursor-default opacity-90">
            Coming soon to Google Play
          </span>
        </div>
      </section>

      {/* Screenshots */}
      <section className="container pb-8">
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {shots.map((src, i) => (
            <div key={src} className="relative aspect-[9/16] rounded overflow-hidden border border-stone-700/60 bg-stone-900">
              <Image
                src={src}
                alt={`Block Fit gameplay ${i + 1}`}
                fill
                sizes="(max-width: 768px) 33vw, 220px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <p className="section-label">What&apos;s inside</p>
          <h2 className="text-3xl md:text-4xl tracking-wide">A calm, thinky escape</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="rounded border border-stone-700/60 bg-stone-900/60 p-6">
              <h3 className="text-xl text-amber-100 mb-2">{f.title}</h3>
              <p className="text-sm text-stone-400 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-12 mt-auto border-t border-stone-800/50">
        <div className="flex justify-center gap-6">
          <Link href="/privacy-policy" className="text-sm text-stone-600 hover:text-stone-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-sm text-stone-600 hover:text-stone-300 transition-colors">
            Terms of Service
          </Link>
        </div>
      </footer>
    </main>
  );
}
