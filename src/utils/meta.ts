import { Meta } from "@once-ui-system/core";
import type { Metadata } from "next";
import { baseURL } from "@/resources";

const SITE_NAME = "Harshdip Saha";
const AUTHOR = { name: "Harshdip Saha", url: baseURL };

type MetaOptions = Parameters<typeof Meta.generate>[0];

/**
 * Generate metadata with Harshdip Saha branding: OG site name, author, Twitter creator.
 * Use everywhere instead of Meta.generate so WhatsApp/social/search show correct identity.
 */
export function generateMeta(options: MetaOptions): Metadata {
  const base = Meta.generate({
    ...options,
    author: options.author ?? AUTHOR,
  });
  const tw = base.twitter as { card?: string; title?: string; description?: string; images?: string[] } | undefined;
  return {
    ...base,
    applicationName: SITE_NAME,
    openGraph: {
      ...base.openGraph,
      siteName: SITE_NAME,
      locale: "en_US",
    },
    twitter: {
      ...tw,
      creator: "@HARSHDIPSAHA",
      site: "@HARSHDIPSAHA",
    },
  };
}
