import React, { useEffect, useState } from "react";

import ErrorPage from "@/pages/404";
import { PostModal } from "@/shared/types";

import { parsePostIdFromUrl } from "../../shared/helpers/parsePostIdFromUrl";
import Loading from "../Loading/Loading";
import Post from "../post/Post";
import {
  HomeStyled,
  PostContainer,
  Status,
  StyledLink,
  TopBtn,
} from "./Home.styled";

export type HomeProps = {
  posts: PostModal[];
  status?: string;
  errorMessage?: string;
};
function Home({
  posts,
  status,
  errorMessage,
}: HomeProps) {
  const [shouldTopBtnVisible, setShouldTopBtnVisible] = useState<boolean>(false);

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
  return (
    <HomeStyled>
      <Status>
        {status !== ("pending" || "idle") && (
        <ErrorPage message={errorMessage} />
        )}
        {status === "pending" && <Loading />}
      </Status>
      <PostContainer>
        {posts.map((post) => (
          <StyledLink
            href={`/posts/${parsePostIdFromUrl(post.url).toString()}`}
            key={post.url}
          >
            <Post post={post} />
          </StyledLink>
        ))}
      </PostContainer>
      {shouldTopBtnVisible && <TopBtn size={40} onClick={scrollToTop} />}
    </HomeStyled>
  );
}

export default (Home);
