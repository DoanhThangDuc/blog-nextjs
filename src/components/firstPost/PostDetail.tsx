import { observer } from "mobx-react-lite";
import { NextPage } from "next";
import React from "react";

import { PostDetailData, PostDetailStore } from "@/stores/PostDetailStore";

import { sc } from "./FirstPost.styled";

interface IPostDetail {
  pageData: PostDetailData,
  isServerRender: boolean,
}
const PostDetailPage: NextPage<IPostDetail> = observer<IPostDetail>((props) => {
  const { postDetail } = props.pageData;
  if (!postDetail) {
    return <></>;
  }
  return (
    <sc.FirstPostStyled>
      <sc.FirstPostImg>
        <sc.Img src={postDetail?.imageUrl} alt="post-image" />
      </sc.FirstPostImg>
      <sc.FirstPostContent>
        <sc.Subject>{postDetail?.source.name}</sc.Subject>
        <sc.Title>{postDetail?.title}</sc.Title>
        <sc.Content>{postDetail?.description}</sc.Content>
        <sc.Comment>LEAVE A COMMENT</sc.Comment>
      </sc.FirstPostContent>
    </sc.FirstPostStyled>
  );
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
