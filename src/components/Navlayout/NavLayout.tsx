import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

import { ModalLoginStore } from "@/stores/ModalLoginStore";
import { TheNavBarStore } from "@/stores/TheNavBarStore";

import { Navbar } from "../header/NavBar";

interface IProps {
  driver: ModalLoginStore | null
  children: ReactNode
}
export const NavLayout = observer((props: IProps) => {
  const { children } = props;
  return (
    <>
      <Navbar driver={props.driver} />
      <main>{children}</main>
    </>
  );
});
