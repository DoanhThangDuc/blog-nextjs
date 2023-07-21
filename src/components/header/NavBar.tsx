import { observer } from "mobx-react-lite";
import Link from "next/link";
import React from "react";

import { ModalLoginStoreProps } from "@/stores/ModalLoginStore";

import { sc } from "./Header.styled";

interface IProps {
  driver: ModalLoginStoreProps | null
}

export const Navbar = observer((props: IProps) => {
const { isLoginBtnClicked } = props.driver;
  return (
    <sc.HeaderStyled>
      <Link href="/">
        <sc.Logo>
          <img src="/images/minimo-logo.png" alt="img" />
        </sc.Logo>
      </Link>
      <sc.NavLinks>
        <sc.NavLink href="/lifestyle">LIFESTYLE</sc.NavLink>
        <sc.NavLink href="/photodiary">PHOTODIARY</sc.NavLink>
        <sc.NavLink href="/music">MUSIC</sc.NavLink>
        <sc.NavLink href="/travel">TRAVEL</sc.NavLink>
        <sc.LoginBtn onClick={() => isLoginBtnClicked()}>LOGIN</sc.LoginBtn>
      </sc.NavLinks>
    </sc.HeaderStyled>
  );
});
