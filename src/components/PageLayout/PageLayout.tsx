import { observer } from "mobx-react-lite";
import React, { ReactNode, useEffect, useState } from "react";

import ErrorPage from "@/pages/404";
import { BpReactProps, PostModal, Status } from "@/shared/types";
import { HomeData } from "@/stores/HomeStore";

import Loading from "../Loading/Loading";
import { sc } from "./PageLayout.styled";

type PageLayoutDriver = Pick<HomeData, "posts" | "errorMessage" | "status">;

interface IProps extends BpReactProps {
  renderPosts(): ReactNode;
  driver: PageLayoutDriver;
}
export const PageLayout = observer((props: IProps) => {
  const { renderPosts } = props;
  const { status, errorMessage } = props.driver;

  const [shouldTopBtnVisible, setShouldTopBtnVisible] =
    useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 1000) {
        setShouldTopBtnVisible(true);
        return;
      }
      setShouldTopBtnVisible(false);
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (!renderPosts) {
    return <></>;
  }
  return (
    <sc.HomeStyled>
      <sc.Status>
        {status !== Status.ERROR && <ErrorPage message={errorMessage} />}
        {/* {status === Status.PENDING && <Loading /> */}
      </sc.Status>
      <sc.PostContainer>{renderPosts()}</sc.PostContainer>
      {props.children}
      {shouldTopBtnVisible && <sc.TopBtn size={40} onClick={scrollToTop} />}
    </sc.HomeStyled>
  );
});
