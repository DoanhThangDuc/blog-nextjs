import React, { useState } from "react";

import { PostModal } from "@/shared/types";

import { limitParagraph } from "../../shared/helpers/limitParagraph";
import {
  PostContainer,
  PostContent,
  PostImg,
  PostStyled,
  PostSubject,
  PostTitle,
} from "./Post.styled";

function Post({ post }: { post: PostModal }) {
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <PostStyled onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <PostImg src={post.urlToImage} />
      <PostContainer>
        <PostSubject>{post.source.name}</PostSubject>
        <PostTitle>
          {!mouseOver ? limitParagraph(post.title, 45) : post.title}
        </PostTitle>
        <PostContent>
          <p>{limitParagraph(post.content, 120)}</p>
        </PostContent>
      </PostContainer>
    </PostStyled>
  );
}

export default Post;
