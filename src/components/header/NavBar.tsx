import { observer } from "mobx-react-lite";
import Link from "next/link";
import React from "react";

import { TheNavBarStore } from "@/stores/TheNavBarStore";

import { sc } from "./Header.styled";

interface IProps {
  driver: TheNavBarStore
}

export const Navbar = observer((props: IProps) => {
  const { modalLoginStore } = props.driver;

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
        <sc.LoginBtn onClick={() => modalLoginStore?.toggleOpenModalLogin()}>LOGIN</sc.LoginBtn>
      </sc.NavLinks>
    </sc.HeaderStyled>
  );
});
