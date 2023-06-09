import React from "react";

import {
  Banner,
  ChartContent,
  ChartList,
  CommentNumber,
  PostChart,
  PostsChartStyled,
  PostSubject,
  Title,
} from "./PostsChart.styled";

export interface PostsChartProps {
  title: string;
  commentNumber: number;
  src: string;
}
function PostsChart({ title, commentNumber, src }: PostsChartProps) {
  return (
    <PostsChartStyled>
      <PostSubject>TOP POSTS</PostSubject>
      <ChartContent>
        <ChartList>
          <PostChart>
            <Title>{title}</Title>
            <CommentNumber>{`${commentNumber} COMMENTS`}</CommentNumber>
          </PostChart>
        </ChartList>
        <ChartList>
          <PostChart>
            <Title>{title}</Title>
            <CommentNumber>{`${commentNumber} COMMENTS`}</CommentNumber>
          </PostChart>
        </ChartList>
        <ChartList>
          <PostChart>
            <Title>{title}</Title>
            <CommentNumber>{`${commentNumber} COMMENTS`}</CommentNumber>
          </PostChart>
        </ChartList>
      </ChartContent>

      <Banner src={src} />
    </PostsChartStyled>
  );
}

export default PostsChart;
