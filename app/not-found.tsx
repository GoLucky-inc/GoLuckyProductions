import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <p className="eyebrow">404 · A little off the path</p>
      <h1>
        Let&apos;s find
        <br />
        <em>your way back.</em>
      </h1>
      <p>
        That page isn&apos;t here, but there&apos;s still something to play.
      </p>
      <Link className="button button-light" href="/#projects">
        Explore our games →
      </Link>
    </main>
  );
}
