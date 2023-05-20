import React from "react";

import {
  CommentContainer,
  CommentNumber,
  CommentStyled,
  Container,
  Content,
  Desciption,
  Img,
  Name,
  Reply,
} from "./Comment.styled";

export interface CommentProps {
  src: string;
  author: string;
  description: string;
  numberComment: number;
}
function Comment({
  src, author, description, numberComment,
}: CommentProps) {
  return (
    <CommentStyled>
      <Container>
        <CommentNumber>{`${numberComment} COMMENTS`}</CommentNumber>
        <CommentContainer>
          <Img src={src} />
          <Content>
            <Name>{author}</Name>
            <Desciption>{description}</Desciption>
            <Reply>REPLY</Reply>
          </Content>
        </CommentContainer>
      </Container>
    </CommentStyled>
  );
}

export default Comment;
