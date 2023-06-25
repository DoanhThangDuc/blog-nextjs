import { makeAutoObservable } from "mobx";
import { NextRouter } from "next/router";
import React from "react";

import { HomeStore } from "./HomeStore";
import { PostDetailStore } from "./PostDetailStore";

export class RootStore {
  homeStore: HomeStore;

  postDetailStore: PostDetailStore;

  constructor(homeStore: HomeStore, postDetailStore: PostDetailStore) {
    makeAutoObservable(this);
    this.homeStore = homeStore;
    this.postDetailStore = postDetailStore;
  }
}
const rootStoreContext = React.createContext<RootStore | null>(null);

export const Provider = (props: {
  children: React.ReactNode;
  router: NextRouter;
  rootStore: RootStore;
}) => (
  <rootStoreContext.Provider value={props.rootStore}>
    {props.children}
  </rootStoreContext.Provider>
);

export const useRootStore = () => {
  const store = React.useContext(rootStoreContext);
  if (!store) {
    throw new Error("useRootStore must be use in Provider");
  }

  return store;
};
