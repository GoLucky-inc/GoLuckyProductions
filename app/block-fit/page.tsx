import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Arrow } from "../components/brand";
import { BLOCK_FIT_PLAY_URL } from "../site";

export const metadata: Metadata = {
  title: "Block Fit: Cozy Village — A Cozy Block Puzzle",
  description:
    "Fit houses, farms, shops, and parks into snug plots. Build a little village with Block Fit: Cozy Village, free on Google Play.",
  alternates: { canonical: "/block-fit" },
  openGraph: {
    title: "Block Fit: Cozy Village",
    description:
      "Fit the blocks. Grow a cozy little village. Free on Google Play.",
    url: "/block-fit",
    images: [
      {
        url: "/block-fit/feature.png",
        width: 1024,
        height: 500,
        alt: "Block Fit: Cozy Village",
      },
    ],
  },
};
export default function BlockFitPage() {
  return (
    <main id="main-content" className="game-page">
      <section className="container game-intro reveal">
        <Link href="/#projects" className="back-link">
          ← All games
        </Link>
        <div className="game-title-row">
          <div>
            <p className="eyebrow">Cozy village · Block puzzles</p>
            <h1>
              Block <em>Fit</em>
            </h1>
          </div>
          <a
            href={BLOCK_FIT_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-light"
          >
            Get it on Google Play <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="game-banner block-art">
          <Image
            src="/block-fit/feature.png"
            alt="Block Fit: Cozy Village Puzzle, with a colorful collection of village buildings"
            width={1024}
            height={500}
            sizes="(max-width: 1200px) 92vw, 1144px"
            preload
          />
        </div>
      </section>
      <section className="container game-overview">
        <div>
          <p className="eyebrow">A puzzle with a place for everyone</p>
          <h2>
            Small pieces.
            <br />
            <em>A place to call home.</em>
          </h2>
        </div>
        <div className="overview-copy">
          <p>
            A cozy block puzzle where every piece you place grows a charming
            little village. Fit the blocks, house the villagers, and build a
            place that feels like home.
          </p>
          <p>
            Bring farms, markets, shops, and parks together. Find the right fit
            and let a little town take shape, one good idea at a time.
          </p>
          <p className="availability">
            Available now on Android · Free to download
          </p>
        </div>
      </section>
      <section className="container feature-list" aria-label="Game features">
        <article>
          <span className="feature-number">01 / FIT</span>
          <h3>Everything has a place.</h3>
          <p>
            Slot homes, farms, markets, and parks into snug plots. Fit everyone
            in before move-in day.
          </p>
        </article>
        <article>
          <span className="feature-number">02 / GROW</span>
          <h3>Better together.</h3>
          <p>
            Place farms by markets, homes by shops, and parks beside anything to
            earn good-neighbor bonuses.
          </p>
        </article>
        <article>
          <span className="feature-number">03 / UNWIND</span>
          <h3>Take a little breather.</h3>
          <p>
            Soft storybook art and a gentle soundtrack. No timers, just you and
            the next piece of the puzzle.
          </p>
        </article>
      </section>
      <section
        className="container screenshots-section"
        aria-labelledby="screenshots-heading"
      >
        <div className="section-heading">
          <h2 id="screenshots-heading">
            Welcome to <em>the neighborhood.</em>
          </h2>
          <span className="small-note">In-game screenshots</span>
        </div>
        <div className="portrait-gallery">
          {[1, 2, 3].map((n) => (
            <a
              key={n}
              href={`/block-fit/shot${n}.png`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View full-size Block Fit gameplay screenshot ${n}`}
            >
              <Image
                src={`/block-fit/shot${n}.png`}
                alt={`Block Fit village puzzle gameplay, screenshot ${n}`}
                width={1080}
                height={1920}
                sizes="(max-width: 760px) 29vw, 320px"
              />
            </a>
          ))}
        </div>
      </section>
      <section className="container release-note">
        <Image
          src="/block-fit/icon.png"
          alt="Block Fit app icon"
          width={88}
          height={88}
        />
        <div>
          <p className="eyebrow">Your next little escape</p>
          <h2>Make yourself at home.</h2>
          <p>Block Fit: Cozy Village is free on Google Play.</p>
        </div>
        <a
          href={BLOCK_FIT_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-light"
        >
          Start your village <Arrow />
        </a>
      </section>
    </main>
  );
}
