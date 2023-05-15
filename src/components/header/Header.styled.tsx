import styled from "styled-components";
import Link from "next/link";


export namespace sc {
  export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 4.375rem 4.375rem;
  justify-content: space-between;
`;

export const Logo = styled.div``;
export const NavLinks = styled.div`
  display: inline-flex;
  width: 40em;
  justify-content: space-between;
`;
export const NavLink = styled(Link)`
  color: #211f1fc9;
  font-size: 15px;
  cursor: pointer;`
}
