import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function DevlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="min-h-screen flex flex-col">
      <section className="container py-24">
        <div className="animate-fade-in">
          <Link
            href="/creeper-defense"
            className="text-sm text-stone-600 hover:text-stone-300 transition-colors"
          >
            ← Creeper Defense
          </Link>
        </div>

        <div className="mt-8 mb-16 animate-fade-in-delay">
          <p className="section-label">Development Blog</p>
          <h1 className="text-3xl md:text-4xl tracking-wide">Devlog</h1>
          <p className="text-stone-400 mt-3 max-w-xl">
            Progress updates, screenshots, and behind-the-scenes from the development of Creeper Defense.
          </p>
        </div>

        {sorted.length === 0 ? (
          <div className="text-center py-24 text-stone-600">
            <p>No posts yet — check back soon.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-16">
            {sorted.map((post) => (
              <article
                key={post.id}
                className="border-t border-stone-800 pt-12"
              >
                <time
                  dateTime={post.date}
                  className="text-xs text-amber-700 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {formatDate(post.date)}
                </time>
                <h2 className="text-2xl md:text-3xl tracking-wide mt-2 mb-4">{post.title}</h2>
                <div className="text-stone-400 max-w-2xl leading-relaxed space-y-4">
                  {post.body.split("\n\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {post.images.length > 0 && (
                  <div className="mt-8 flex gap-4 overflow-x-auto pb-2">
                    {post.images.map((src, i) => (
                      <div
                        key={i}
                        className="relative flex-none w-64 h-44 rounded overflow-hidden border border-stone-800 bg-stone-900"
                      >
                        <Image
                          src={src}
                          alt={`${post.title} screenshot ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="container py-16 mt-auto border-t border-stone-800/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-stone-600">
            &copy; {new Date().getFullYear()} GoLucky Production. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/creeper-defense" className="text-sm text-stone-600 hover:text-stone-300 transition-colors">
              ← Creeper Defense
            </Link>
            <Link href="/privacy-policy" className="text-sm text-stone-600 hover:text-stone-300 transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
