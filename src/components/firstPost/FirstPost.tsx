import React from "react";

import { PostModal } from "@/shared/types";

import {
  Comment,
  Content,
  FirstPostContent,
  FirstPostImg,
  FirstPostStyled,
  Img,
  Subject,
  Title,
} from "./FirstPost.styled";

function FirstPost(post: PostModal) {
  return (
    <FirstPostStyled>
      <FirstPostImg>
        <Img src={post.imageUrl} alt="post-image" />
      </FirstPostImg>
      <FirstPostContent>
        <Subject>{post.source.name}</Subject>
        <Title>{post.title}</Title>
        <Content>{post.description}</Content>
        <Comment>LEAVE A COMMENT</Comment>
      </FirstPostContent>
    </FirstPostStyled>
  );
}

export default FirstPost;
