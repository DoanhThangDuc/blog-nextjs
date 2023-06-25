import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import React from "react";

import Layout from "@/components/layout/Layout";
import { safeAsync } from "@/helpers/safeAsync";
import { rootStoreFromNextPageContext } from "@/stores/rootStoreFromNextPageContext";

export default function BlogApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export async function getServerSideProps(appContext: AppContext) {
  const { ctx } = appContext;
  const rootStore = await safeAsync(rootStoreFromNextPageContext(ctx));

  (appContext.ctx as any).rootStore = rootStore;
  (appContext.ctx as any).translationStore = (ctx.req as any).translationStore;

  const appProps = await App.getInitialProps(appContext);
  console.log("appProps", appProps);

  return {
    ...appProps,
  };
}
