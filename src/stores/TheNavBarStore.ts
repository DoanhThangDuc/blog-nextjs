import { makeAutoObservable } from "mobx";

import { ModalLoginStore } from "./ModalLoginStore";
import { RootStore } from "./rootStore";

export interface TheNavBarStoreProps {
    modalLoginStore: ModalLoginStore
}

export class TheNavBarStore {
  modalLoginStore: ModalLoginStore | null = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.modalLoginStore = rootStore.modalLoginStore;
  }
}
