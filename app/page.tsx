import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Clover } from "./components/brand";

export const metadata: Metadata = {
  title: "Go Lucky Productions | Small Games, A Little Wonder",
  description:
    "Independent mobile games made with curiosity and care. Discover Borrowed Light, a light and shadow puzzle adventure, and Block Fit: Cozy Village.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="main-content">
      <section className="container home-intro reveal">
        <p className="eyebrow">
          <span className="little-dot" /> An independent game studio
        </p>
        <div className="intro-grid">
          <h1>
            Small games.
            <br />
            <em>A little wonder.</em>
          </h1>
          <div className="intro-note">
            <p>
              A clever puzzle. A quiet discovery. One more try. We make little
              worlds worth spending time in.
            </p>
            <a href="#projects" className="text-link">
              Find your next game <Arrow direction="down" />
            </a>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="container games-section"
        aria-labelledby="games-heading"
      >
        <div className="section-heading">
          <h2 id="games-heading" className="eyebrow">
            Made to be played
          </h2>
          <span className="small-note">
            A little collection, made with care
          </span>
        </div>
        <article className="featured-game reveal">
          <Link
            href="/borrowed-light"
            className="game-art borrowed-art"
            aria-label="Discover Borrowed Light"
          >
            <Image
              src="/borrowed-light/feature.png"
              alt="Borrowed Light: tiny shadow companions gathered around a candle beside a glowing doorway"
              width={1024}
              height={500}
              sizes="(max-width: 1200px) 92vw, 1144px"
              preload
            />
            <span className="art-link" aria-hidden="true">
              <Arrow />
            </span>
          </Link>
          <div className="game-summary">
            <div>
              <div className="game-meta">
                <span className="status">Coming soon · Android</span>
                <span>Light &amp; shadow puzzles</span>
              </div>
              <h3>
                <Link href="/borrowed-light">Borrowed Light</Link>
              </h3>
              <p>
                A candle changes everything. Turn shadows into pathways and
                guide tiny companions home.
              </p>
            </div>
            <Link href="/borrowed-light" className="button button-light">
              Explore the game <Arrow />
            </Link>
          </div>
        </article>
        <article className="secondary-game">
          <Link
            href="/block-fit"
            className="game-art block-art"
            aria-label="Discover Block Fit: Cozy Village"
          >
            <Image
              src="/block-fit/feature.png"
              alt="Block Fit: Cozy Village Puzzle, with colorful little village buildings"
              width={1024}
              height={500}
              sizes="(max-width: 760px) 92vw, 560px"
            />
          </Link>
          <div className="secondary-copy">
            <div className="game-meta">
              <span className="status status-live">
                Available on Google Play
              </span>
            </div>
            <h3>
              Make room for
              <br />
              <em>a little village.</em>
            </h3>
            <p>
              Meet Block Fit: Cozy Village. Fit the pieces, bring neighbors
              together, and watch a snug little town take shape.
            </p>
            <Link href="/block-fit" className="text-link">
              Discover Block Fit <Arrow />
            </Link>
          </div>
        </article>
      </section>
      <section className="studio-note container">
        <Clover className="studio-clover" />
        <p className="eyebrow">From player to maker</p>
        <h2>
          Made for the love
          <br />
          of <em>making games.</em>
        </h2>
        <p>
          Go Lucky Productions started with a lifelong love of playing and a
          curiosity about what goes into the worlds on screen. Still learning.
          Still making. Always playing.
        </p>
        <Link href="/about" className="text-link">
          Meet the maker <Arrow />
        </Link>
      </section>
    </main>
  );
}
