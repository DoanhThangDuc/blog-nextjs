import { observer } from "mobx-react-lite";
import React from "react";

import { HomeStoreProps } from "@/stores/HomeStore";

import { sc } from "./ModalLogin.style";

type ModalLoginDriver = Pick<
  HomeStoreProps,
  "isModalLoginVisible" | "setOpenModalLogin"
>;

interface IProps {
  driver: ModalLoginDriver;
}

  export const ModalLogin = observer((props: IProps) => {
  const { isModalLoginVisible, setOpenModalLogin } = props.driver;

  return (
    <>
      {isModalLoginVisible && (
        <sc.ModalLogin>
          <sc.Container>
            <sc.IconContainer>
              <sc.CloseIcon onClick={() => setOpenModalLogin()} />
            </sc.IconContainer>
            <sc.Title>Login</sc.Title>
            <sc.LoginForm>
              <sc.Input type="email" placeholder="Email..." />
              <sc.Input type="password" placeholder="Password..." />
              <sc.Button>Login</sc.Button>
            </sc.LoginForm>
            <sc.Socials>
              <sc.SocialTitle>or use your social network</sc.SocialTitle>
              <sc.SocialTitle />
              <sc.Icons>
                <sc.SocialIconTwitter />
                <sc.SocialIconFacebook />
                <sc.SocialIconLinkin />
              </sc.Icons>
            </sc.Socials>
            <sc.TagLine />
            <sc.SignUp>
              <sc.Member>Not a member yet?</sc.Member>
              <sc.SignUpLink> Sign up.</sc.SignUpLink>
            </sc.SignUp>
          </sc.Container>
        </sc.ModalLogin>
      )}
    </>
  );
});

export default ModalLogin;
