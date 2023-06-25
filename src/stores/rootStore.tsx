import { makeAutoObservable } from "mobx";
import { NextRouter } from "next/router";
import React from "react";

import { IDeviceData } from "./DeviceStore";

export class RootStore {
  constructor(public device: IDeviceData) {
    makeAutoObservable(this);
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
