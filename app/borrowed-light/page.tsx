import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "../components/brand";

export const metadata: Metadata = {
  title: "Borrowed Light — Light & Shadow Puzzle Game",
  description:
    "Place candles, build shadow bridges, and guide tiny companions home. Discover Borrowed Light, an offline logic puzzle game coming soon to Android.",
  alternates: { canonical: "/borrowed-light" },
  openGraph: {
    title: "Borrowed Light",
    description:
      "A candle changes everything. A light and shadow puzzle adventure from Go Lucky Productions.",
    url: "/borrowed-light",
    images: [
      {
        url: "/borrowed-light/feature.png",
        width: 1024,
        height: 500,
        alt: "Borrowed Light",
      },
    ],
  },
};
const screenshots = [
  {
    src: "01-shadow-paths.png",
    alt: "Candle-cast shadow bridges connect ledges for the little companions.",
    caption: "Turn shadows into pathways.",
  },
  {
    src: "02-find-a-way-home.png",
    alt: "The companions approach a glowing doorway after crossing shadow bridges.",
    caption: "Help a little light go a long way.",
  },
  {
    src: "03-pause-and-rethink.png",
    alt: "Pause keeps the companions in place while a candle is moved to create their next bridge.",
    caption: "Pause, rethink, and carry on.",
  },
  {
    src: "04-mirrors.png",
    alt: "Mirrors reflect candlelight to make new routes across the puzzle.",
    caption: "Find a different angle with mirrors.",
  },
];
export default function BorrowedLightPage() {
  return (
    <main id="main-content" className="game-page">
      <section className="container game-intro reveal">
        <Link href="/#projects" className="back-link">
          ← All games
        </Link>
        <div className="game-title-row">
          <div>
            <p className="eyebrow">Light &amp; shadow · Logic puzzles</p>
            <h1>
              Borrowed <em>Light</em>
            </h1>
          </div>
          <span className="status">Coming soon · Android</span>
        </div>
        <div className="game-banner borrowed-art">
          <Image
            src="/borrowed-light/feature.png"
            alt="Tiny shadow companions gather around a glowing candle in Borrowed Light"
            width={1024}
            height={500}
            sizes="(max-width: 1200px) 92vw, 1144px"
            preload
          />
        </div>
      </section>
      <section className="container game-overview">
        <div>
          <p className="eyebrow">A small flame. A clever idea.</p>
          <h2>
            The way home
            <br />
            is <em>in the shadows.</em>
          </h2>
        </div>
        <div className="overview-copy">
          <p>
            In a world of little ledges and deep darkness, a candle can become a
            bridge. Place your light, watch the shadows change, and make a path
            for your tiny companions.
          </p>
          <p>
            Every new puzzle asks you to look a little closer. A wall changes
            their direction. Another light changes the path. And a mirror opens
            up a whole new possibility.
          </p>
          <a href="#screenshots" className="text-link">
            Take a closer look <Arrow direction="down" />
          </a>
        </div>
      </section>
      <section className="container feature-list" aria-label="Game features">
        <article>
          <span className="feature-number">01 / SHAPE</span>
          <h3>Light makes the path.</h3>
          <p>
            Place and move candles to turn shadows into bridges. A small
            adjustment can change everything.
          </p>
        </article>
        <article>
          <span className="feature-number">02 / DISCOVER</span>
          <h3>A new way to think.</h3>
          <p>
            Unlock Pause and mirrors as you progress. Hold your companions in
            place, then reflect light into new routes.
          </p>
        </article>
        <article>
          <span className="feature-number">03 / RETURN</span>
          <h3>A little world to keep.</h3>
          <p>
            Play offline, collect stars, and revisit your favorite puzzles. Your
            progress saves on your device.
          </p>
        </article>
      </section>
      <section
        id="screenshots"
        className="container screenshots-section"
        aria-labelledby="screenshots-heading"
      >
        <div className="section-heading">
          <h2 id="screenshots-heading">
            A glimpse into <em>the dark.</em>
          </h2>
          <span className="small-note">In-game screenshots</span>
        </div>
        <div className="landscape-gallery">
          {screenshots.map((shot) => (
            <figure key={shot.src}>
              <a
                href={`/borrowed-light/${shot.src}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full-size screenshot: ${shot.caption}`}
              >
                <Image
                  src={`/borrowed-light/${shot.src}`}
                  alt={shot.alt}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 760px) 92vw, 560px"
                />
              </a>
              <figcaption>
                {shot.caption}
                <span aria-hidden="true">↗</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="container release-note">
        <Image
          src="/borrowed-light/icon.png"
          alt="Borrowed Light app icon"
          width={88}
          height={88}
        />
        <div>
          <p className="eyebrow">Coming soon to Android</p>
          <h2>A little light is on its way.</h2>
          <p>
            Borrowed Light is currently in testing. Check back here for the
            public release.
          </p>
        </div>
        <Link href="/about#contact" className="button button-outline">
          Get in touch <Arrow />
        </Link>
      </section>
    </main>
  );
}
