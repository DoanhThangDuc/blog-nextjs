import {
  flow, IObservableArray, makeAutoObservable, observable,
} from "mobx";

import { getApiMetaUrl } from "@/helpers/getApiBaseUrl";
import { parsePostIdFromUrl } from "@/helpers/parsePostIdFromUrl";
import { PostModal } from "@/shared/types";

import { dummyPosts } from "../../Dummy-data";
import { HomeStore } from "./HomeStore";

export interface PostDetailStoreData {
  postDetail: PostModal | null,
  page: "home",
  isPageLoading:boolean,
}
export interface PostDetailData {
  postDetail: PostModal | null,
  posts: IObservableArray<PostModal>
}

export class PostDetailStore implements PostDetailData {
  postDetail: PostModal | null = {
    source: {
      id: "",
      name: "",
    },
    author: "",
    title: "",
    description: "",
    url: "",
    urlToImage: "",
    publishedAt: "",
    content: "",
  };

  postId: string = "";

  posts: IObservableArray<PostModal> = observable.array<PostModal>([]);

  isPageLoading: boolean = true;

  constructor(slug: string) {
    this.postId = slug;
    makeAutoObservable(this);
  }

  public dehydrate(): PostDetailStoreData {
    return {
      postDetail: this.postDetail || null,
      page: "home",
      isPageLoading: this.isPageLoading,
    };
  }

  fetchPosts = flow(async function* fetchPosts(this: PostDetailStore) {
    const posts = yield fetch(`${getApiMetaUrl()}/api/homeApi`);
    const { data } = await posts.json();
    this.posts.replace(data.articles);
  });

  updatePostDetail() {
    this.postDetail = this.posts.find((postDetail) => parsePostIdFromUrl(postDetail.url) === this.postId) || null;
  }
}
