import { observer } from "mobx-react-lite";
import { ReactNode } from "react";

import { parsePostIdFromUrl } from "@/shared/helpers/parsePostIdFromUrl";
import { PostModal } from "@/shared/types";

import Post from "../post/Post";
import { sc } from "./Posts.styled";

interface IProps {
  driver: PostModal[];
}
export const Posts = observer((props: IProps) => {
  const posts = props.driver;

  return (
    <>
      {posts.map((post) => (
        <sc.StyledLink
          href={`/posts/${parsePostIdFromUrl(post.url).toString()}`}
          key={post.url}
        >
          <Post post={post} />
        </sc.StyledLink>
      ))}
    </>
  );
});
