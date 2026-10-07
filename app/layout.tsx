import type { Metadata } from "next";
import { Crimson_Text, DM_Sans } from "next/font/google";
import Link from "next/link";
import { Brand } from "./components/brand";
import { SITE_URL } from "./site";
import "./globals.css";

const display = Crimson_Text({
  variable: "--font-display",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Go Lucky Productions",
    template: "%s | Go Lucky Productions",
  },
  description:
    "Small games. A little wonder. Discover independent mobile puzzle games from Go Lucky Productions.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Go Lucky Productions",
    title: "Go Lucky Productions",
    description:
      "Independent games made with curiosity and care. Discover Borrowed Light and Block Fit: Cozy Village.",
    images: [
      {
        url: "/borrowed-light/feature.png",
        width: 1024,
        height: 500,
        alt: "Borrowed Light, a game by Go Lucky Productions",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header className="site-header container">
          <Link href="/" aria-label="Go Lucky Productions home">
            <Brand />
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            <Link href="/#projects">Games</Link>
            <Link href="/about">Our story</Link>
            <Link href="/about#contact" className="nav-contact">
              Say hello <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer container">
          <div className="footer-top">
            <Link href="/" aria-label="Go Lucky Productions home">
              <Brand />
            </Link>
            <p>A little curiosity goes a long way.</p>
            <a className="text-link" href="mailto:gamersgolucky@gmail.com">
              Say hello <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Go Lucky Productions</p>
            <nav aria-label="Footer navigation">
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms-of-service">Terms</Link>
              <a
                href="https://github.com/GoLucky-inc"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
