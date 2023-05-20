import Link from "next/link";
import React from "react";

import { sc } from "./Header.styled";

function Navbar() {
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
      </sc.NavLinks>
    </sc.HeaderStyled>
  );
}

export default Navbar;
