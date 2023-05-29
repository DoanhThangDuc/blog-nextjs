import React from "react";

import { PostModal } from "@/shared/types";

import { sc } from "./FirstPost.styled";

interface IPostDetail {
  driver: PostModal | null;
}
const PostDetailPage = (props: IPostDetail) => {
  const postDetail = props.driver;
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
};

export default PostDetailPage;
