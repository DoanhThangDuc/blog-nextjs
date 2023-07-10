import { makeAutoObservable } from "mobx";
import { NextRouter } from "next/router";
import React from "react";

import { DeviceStore, IDeviceData } from "./DeviceStore";
import { HomeStore } from "./HomeStore";
import { PostDetailStore } from "./PostDetailStore";

export class RootStore {
  pageStore: HomeStore | null = null;

  deviceStore: DeviceStore | null = null;

  postDetailStore: PostDetailStore | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPageStore = (store: HomeStore) => {
    this.pageStore = store;
  };

  setDeviceStore = (store: DeviceStore) => {
    this.deviceStore = store;
  };

  setPostDetailStore = (store: PostDetailStore) => {
    this.postDetailStore = store;
  };
}
const rootStoreContext = React.createContext<RootStore | null>(null);

export const Provider = (props: {
  children: React.ReactNode;
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
