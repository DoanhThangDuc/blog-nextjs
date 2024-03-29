import { makeAutoObservable } from "mobx";
import React from "react";

import { DeviceStore } from "./DeviceStore";
import { HomeStore } from "./HomeStore";
import { ModalLoginStore } from "./ModalLoginStore";
import { PostDetailStore } from "./PostDetailStore";

export class RootStore {
  pageStore: HomeStore | null = null;

  deviceStore: DeviceStore | null = null;

  postDetailStore: PostDetailStore | null = null;

  modalLoginStore: ModalLoginStore | null = null;

  constructor() {
    makeAutoObservable(this);
    this.modalLoginStore = new ModalLoginStore(this);
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

  setModalLoginStore = (store: ModalLoginStore) => {
    this.modalLoginStore = store;
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
