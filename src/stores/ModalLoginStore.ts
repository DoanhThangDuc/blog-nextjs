import { makeAutoObservable } from "mobx";

import { RootStore } from "./rootStore";

export interface ModalLoginStoreProps {
  isModalLoginVisible: boolean;
  isLoginBtnClicked: () => void;
  isModalLoginClosed: () => void;
}

export class ModalLoginStore {
  isModalLoginVisible: boolean = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
  }

  isLoginBtnClicked = () => {
    this.isModalLoginVisible = true;
  };

  isModalLoginClosed = () => {
    this.isModalLoginVisible = false;
  };
}
