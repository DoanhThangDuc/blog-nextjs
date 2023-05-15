 import { ReactNode } from "react";
import Navbar from "../header/NavBar";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}