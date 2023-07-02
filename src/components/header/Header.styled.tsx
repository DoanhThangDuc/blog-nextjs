import Link from "next/link";
import styled from "styled-components";

import { bpRaisinBlack, bpRifleGreen } from "../../shared/color";

export namespace sc {
  export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 4.375rem 4.375rem;
  justify-content: space-between;
  align-items: center;
`;

  export const Logo = styled.div``;
  export const NavLinks = styled.div`
  display: inline-flex;
  width: 40em;
  justify-content: space-between;
  align-items: center;
`;
  export const NavLink = styled(Link)`
  color: ${bpRaisinBlack};
  font-size: 15px;
  cursor: pointer;
  
  &:hover {
    color: black;
  }
  `;

  export const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border: 1px solid ${bpRaisinBlack};
  border-radius: 15px;
  color: ${bpRaisinBlack};
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${bpRifleGreen};
    border-color: #fff;
  }
  `;
}
