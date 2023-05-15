import { memo, useEffect, useState } from "react";
import Post from "../../components/post/Post";
import {
  HomeStyled,
  PostContainer,
  Status,
  StyledLink,
  TopBtn,
} from "./Home.styled";
import Header from "../header/NavBar";
import { parsePostIdFromUrl } from "../../helpers/parsePostIdFromUrl";
import Loading from "../Loading/Loading";
import ErrorPage from "@/pages/404";

export interface PostModal {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  content: string;
}
export type HomeProps = {
  posts: PostModal[];
  status?: string;
  errorMessage?: string | null;
}
function Home({
  posts,
  status,
  errorMessage,
}: HomeProps ) {
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
  return (
    <>
      <HomeStyled>
        <Status>
          {status !== ("pending" || "idle") && (
            <ErrorPage message={errorMessage} />
          )}
          {status === "pending" && <Loading />}
        </Status>
        <PostContainer>
          {posts.map((post) => {
            return (
              <StyledLink
                href={`/posts/${parsePostIdFromUrl(post.url).toString()}`}
                key={post.url}
              >
                <Post post={post} />
              </StyledLink>
            );
          })}
        </PostContainer>
        {shouldTopBtnVisible && <TopBtn size={40} onClick={scrollToTop} />}
      </HomeStyled>
    </>
  );
}

export default memo(Home);
