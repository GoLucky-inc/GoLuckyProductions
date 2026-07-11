import type { NextConfig } from "next";

const BLOCK_FIT_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.joeleavitt.hamlet";

const nextConfig: NextConfig = {
  // Branded links on our own domain that bounce straight to the store — good for
  // ads and sharing (the package name never shows). `permanent: false` (307) so
  // the target isn't cached forever and we can add attribution params later.
  async redirects() {
    return [
      { source: "/block-fit/get", destination: BLOCK_FIT_PLAY_URL, permanent: false },
      { source: "/bf", destination: BLOCK_FIT_PLAY_URL, permanent: false },
    ];
  },
};

export default nextConfig;
