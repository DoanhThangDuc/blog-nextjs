import Link from "next/link";
import React from "react";

import { useTranslation } from "@/shared/translate/NextI18next";

import { sc } from "./Header.styled";

function Navbar() {
  const { t } = useTranslation("NavBar");

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
        <sc.LoginBtn>LOGIN</sc.LoginBtn>
      </sc.NavLinks>
    </sc.HeaderStyled>
  );
}

export default Navbar;
