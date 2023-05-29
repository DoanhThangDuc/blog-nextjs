import { makeAutoObservable } from "mobx";

import { PostModal, Source } from "@/shared/types";

export interface PostDetailStoreData {
  postDetail: PostModal | null,
  page: "home",
  isPageLoading:boolean,
}

export class PostDetailStore {
  postDetail: PostModal = {
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

  updatePostDetail(postDetail: PostModal) {
    this.postDetail = postDetail;
  }
}
