import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import React from "react";

import FirstPost from "@/components/firstPost/PostDetail";
import { PostDetailStore, PostDetailStoreData } from "@/stores/PostDetailStore";

interface IPostDetail {
  pageData: PostDetailStoreData;
  isServerRender: boolean;
}
const PostDetailPage: NextPage<IPostDetail> = observer<IPostDetail>((props) => {
  const { postDetail } = props.pageData;
  console.log("postDetail", postDetail);
  return <FirstPost driver={postDetail} />;
});
export function getServerSideProps(ctx: any) {
  const pageStore = new PostDetailStore();

  return {
    props: {
      pageData: pageStore.dehydrate(),
      isServerRender: true,
    },
  };
}
export default PostDetailPage;
