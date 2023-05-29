import React from "react";

import FirstPost from "@/components/firstPost/PostDetail";
import { PostDetailData, PostDetailStore } from "@/stores/PostDetailStore";
import { NextPage } from "next";
import { observer } from "mobx-react-lite";

interface IPostDetail {
  pageData: PostDetailData;
  isServerRender: boolean;
}
const PostDetailPage: NextPage<IPostDetail> = observer<IPostDetail>((props) => {
  const {postDetail} = props.pageData
  console.log('postDetail :>> ', postDetail);
    return <FirstPost driver={postDetail} />;
})
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
