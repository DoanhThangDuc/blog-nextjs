import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import React from "react";

import NavLayout from "@/components/Navlayout/NavLayout";
import { safeAsync } from "@/shared/helpers/safeAsync";
import { Provider, RootStore } from "@/stores/rootStore";
import { rootStoreFromNextPageContext } from "@/stores/rootStoreFromNextPageContext";

export default function BlogApp({ Component, pageProps }: AppProps) {
  const rootStore = (() => new RootStore())();

  return (
    <Provider rootStore={rootStore}>
      <NavLayout>
        <Component {...pageProps} />
      </NavLayout>
    </Provider>
  );
}

export async function getServerSideProps(appContext: AppContext) {
  const { ctx } = appContext;
  const rootStore = await safeAsync(rootStoreFromNextPageContext(ctx));

  (appContext.ctx as any).rootStore = rootStore;
  (appContext.ctx as any).translationStore = (ctx.req as any).translationStore;

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
  };
}
