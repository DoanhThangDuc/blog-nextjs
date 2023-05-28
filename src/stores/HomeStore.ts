import {
  IObservableArray,
  makeAutoObservable,
  observable,
} from "mobx";

import { PostModal } from "@/shared/types";

import { dummyPosts } from "../../Dummy-data";

export interface HomeData {
  page: "home" | "index"
  posts: PostModal[]
  isPageLoading: boolean;
}

export class HomeStore {
  posts: IObservableArray<PostModal> = observable.array<PostModal>(dummyPosts);

  fetchPostError: string | null = "";

  isPageLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  get getPosts() {
    return this.posts;
  }

  public dehydrate(): HomeData {
    return {
      posts: this.posts || [],
      page: "home",
      isPageLoading: this.isPageLoading,
    };
  }
}
