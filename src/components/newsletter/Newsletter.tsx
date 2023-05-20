import React from "react";

import {
  Container,
  Content,
  InputContainer,
  InputEmail,
  Lable,
  NewsletterStyled,
  SendIcon,
} from "./Newsletter.styled";

function Newsletter({ content, lable }: { content: string; lable: string }) {
  return (
    <NewsletterStyled>
      <Container>
        <Content>{content}</Content>
        <InputContainer>
          <InputEmail />
          <Lable>{lable}</Lable>
          <SendIcon size={25} />
        </InputContainer>
      </Container>
    </NewsletterStyled>
  );
}

export default Newsletter;
