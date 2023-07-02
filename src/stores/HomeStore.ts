import {
  flow,
  IObservableArray,
  makeAutoObservable,
  observable,
} from "mobx";

import { getApiMetaUrl } from "@/shared/helpers/getApiBaseUrl";
import { PostModal } from "@/shared/types";

export interface HomeData {
  page: "home" | "index"
  posts: PostModal[]
  isPageLoading: boolean;
}

export class HomeStore {
  posts: IObservableArray<PostModal> = observable.array<PostModal>([]);

  fetchPostError: string | null = "";

  isPageLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchPosts = flow(async function* fetchPosts(this: HomeStore) {
    const posts = yield fetch(`${getApiMetaUrl()}/api/homeApi`);
    const { data } = await posts.json();
    this.posts.replace(data.articles);
  });

  fetchPageDataServer = flow(function* fetchPageDataServer(this: HomeStore) {
    yield this.fetchPosts();
  });

  public dehydrate(): HomeData {
    return {
      posts: this.posts || [],
      page: "home",
      isPageLoading: this.isPageLoading,
    };
  }
}
