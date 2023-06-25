import { NextPageContext } from "next";

import { RootStore } from "./rootStore";

export function rootStoreFromNextPageContext(
  context: NextPageContext,
): Promise<RootStore> {
  const { req } = context;
  if (!req) {
    throw new Error("no request found in context");
  }

  const isCloudFrontMobileHeader = req.headers["cloudfront-is-mobile-viewer"]
    && req.headers["cloudfront-is-mobile-viewer"] === "true";

  const userAgent = (req.headers["User-Agent"] || req.headers["user-agent"])
    ?.toString()
    .trim();

  const isMobileDevice = isCloudFrontMobileHeader
    ? true
    : /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent || "",
    );

  const isMobileWidth = isMobileDevice;

  const rootStore = new RootStore(
    { isWebPSupported: false, isMobileDevice, isMobileWidth },
  );

  return Promise.resolve(rootStore);
}
