import React from "react";


import { sc } from "./FirstPost.styled";
import { PostModal } from "@/shared/types";

interface IPostDetail {
  postDetail: PostModal;
  isServerRender: boolean;
}
const PostDetailPage = (driver: IPostDetail) => {
  const { postDetail } = driver;
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
