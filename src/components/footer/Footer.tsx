import React from "react";

import {
  FacebookIcon,
  FooterStyled,
  Icons,
  InstagramIcon,
  Privacy,
  PrivacyContainer,
  SocialContainer,
  Socials,
  Terms,
  TwitterIcon,
} from "./Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <PrivacyContainer>
        <Terms>Term and conditions</Terms>
        <Privacy>Privacy</Privacy>
      </PrivacyContainer>
      <Socials>
        <SocialContainer>
          <p>Follow</p>
          <Icons>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Icons>
        </SocialContainer>
      </Socials>
    </FooterStyled>
  );
}

export default Footer;
