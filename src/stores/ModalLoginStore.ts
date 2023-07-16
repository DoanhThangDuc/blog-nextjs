import { makeAutoObservable } from "mobx";

import { RootStore } from "./rootStore";

export interface ModalLoginStoreProps {
  isModalLoginVisible: boolean;
  toggleOpenModalLogin: () => void;
}

export class ModalLoginStore {
  isModalLoginVisible: boolean = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
  }

  toggleOpenModalLogin = () => {
    console.log("hehehhee");
    this.isModalLoginVisible = !this.isModalLoginVisible;
  };
}
