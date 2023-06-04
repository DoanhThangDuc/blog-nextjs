import { makeAutoObservable } from "mobx";

import { parsePostIdFromUrl } from "@/helpers/parsePostIdFromUrl";
import { PostModal } from "@/shared/types";

import { dummyPosts } from "../../Dummy-data";

export interface PostDetailStoreData {
  postDetail: PostModal | null,
  page: "home",
  isPageLoading:boolean,
}

export class PostDetailStore {
  postDetail: PostModal | null = {
    source: {
      id: "",
      name: "",
    },
    author: "",
    title: "",
    description: "",
    url: "",
    imageUrl: "",
    publishedAt: "",
    content: "",
  };

  isPageLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  public dehydrate(): PostDetailStoreData {
    return {
      postDetail: this.postDetail || null,
      page: "home",
      isPageLoading: this.isPageLoading,
    };
  }

  updatePostDetail(id: string) {
    this.postDetail = dummyPosts.find((postDetail) => parsePostIdFromUrl(postDetail.url) === id) || null;
  }
}
