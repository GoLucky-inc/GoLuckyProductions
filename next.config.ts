import type { NextConfig } from "next";
import { BLOCK_FIT_PLAY_URL } from "./app/site";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  // Branded links on our own domain that bounce straight to the store — good for
  // ads and sharing (the package name never shows). `permanent: false` (307) so
  // the target isn't cached forever and we can add attribution params later.
  async redirects() {
    return [
      {
        source: "/block-fit/get",
        destination: BLOCK_FIT_PLAY_URL,
        permanent: false,
      },
      { source: "/bf", destination: BLOCK_FIT_PLAY_URL, permanent: false },
    ];
  },
};

export default nextConfig;
