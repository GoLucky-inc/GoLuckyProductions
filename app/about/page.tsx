import type { Metadata } from "next";
import { Clover } from "../components/brand";
export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet Joe, the maker behind Go Lucky Productions. Independent games born from a lifelong love of playing.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="container about-intro reveal">
        <p className="eyebrow">The story so far</p>
        <h1>
          Once a player.
          <br />
          <em>Always a player.</em>
        </h1>
        <div className="about-story">
          <Clover className="about-clover" />
          <div>
            <p className="lead">
              Hi, I&apos;m Joe. A lifelong gamer who wanted to find out what
              happens on the other side of the screen.
            </p>
            <p>
              From early pixel adventures to open worlds, games have always been
              part of my life. Eventually, playing sparked a different kind of
              curiosity: could I make something of my own?
            </p>
            <p>
              Go Lucky Productions is that curiosity taking shape. It&apos;s a
              personal journey into making games: learning the code, crafting
              the details, and building the experiences I want to play.
            </p>
            <p>
              That might mean finding a home for a little village or a path
              through the shadows. What connects it all is the pleasure of a
              good puzzle and the small discoveries along the way.
            </p>
            <p>
              I&apos;m still learning, still building, and glad you&apos;re
              here.
            </p>
            <p className="signature">
              Joe <span>Founder &amp; game maker</span>
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="container contact-section">
        <p className="eyebrow">The door is open</p>
        <h2>
          Good ideas start
          <br />
          <em>with a hello.</em>
        </h2>
        <p>
          A question about a game, a bug you spotted, or just something
          you&apos;d like to share? I&apos;d love to hear it.
        </p>
        <a className="contact-email" href="mailto:gamersgolucky@gmail.com">
          gamersgolucky@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <p className="contact-tip">
          For game support, include the game name, your device, and what
          happened. It helps me get to the right fix.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/GoLucky-inc"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-leavitt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://ai-prepared.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My work in data &amp; AI ↗
          </a>
        </div>
      </section>
    </main>
  );
}
