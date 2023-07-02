import { flow, IObservableArray, makeAutoObservable, observable } from "mobx";

import { getApiMetaUrl } from "@/shared/helpers/getApiBaseUrl";
import { PostModal, Status } from "@/shared/types";

export interface HomeData {
  page: "home" | "index";
  posts: PostModal[];
  isPageLoading: boolean;
  status: Status;
  errorMessage?: string;
}

export class HomeStore {
  posts: IObservableArray<PostModal> = observable.array<PostModal>([]);

  fetchPostError: string | null = "";

  isPageLoading: boolean = true;

  status: Status = Status.PENDING;

  errorMessage?: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  fetchPosts = flow(async function* fetchPosts(this: HomeStore) {
    try {
      const posts = yield fetch(`${getApiMetaUrl()}/api/homeApi`);
      const { data } = await posts.json();
      this.posts.replace(data.articles);
      this.status = Status.IDLE;
    } catch (err) {
      this.status = Status.ERROR;
    }
  });

  fetchPageDataServer = flow(function* fetchPageDataServer(this: HomeStore) {
    try {
      yield this.fetchPosts();
    } catch (error: any) {
      this.status = Status.ERROR;
      this.errorMessage = error.message;
    }
  });

  public dehydrate(): HomeData {
    return {
      posts: this.posts || [],
      page: "home",
      isPageLoading: this.isPageLoading,
      status: this.status,
      errorMessage: this.errorMessage,
    };
  }
}
