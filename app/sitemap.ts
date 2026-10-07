import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/borrowed-light",
    "/block-fit",
    "/about",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({ url: `${SITE_URL}${path}` }));
}
