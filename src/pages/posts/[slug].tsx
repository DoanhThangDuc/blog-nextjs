import React from "react";

import FirstPost from "@/components/firstPost/PostDetail";

const post = {
  source: {
    id: "meo meo meo meo",
    name: "meo meo meo meo",
  },
  author: "meo meo meo meo",
  title: "meo meo meo meo",
  description: "meo meo meo meo",
  url: "https://vnexpress.net/tong-bi-thu-khong-de-loi-dung-lay-phieu-tin-nhiem-gay-chia-re-4605504.html",
  imageUrl: "https://i1-vnexpress.vnecdn.net/2023/05/15/fe86e819bf45611b3854-1-3473-1684145452.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=L4h6qvnk8evwAI-DlVZ59w",
  publishedAt: "meo meo meo meo",
  content: "meo meo meo meo",
};
function CardPage() {
  return <FirstPost post={post} />;
}
export default CardPage;
