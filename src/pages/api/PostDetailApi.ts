import { PostModal } from "@/shared/types";

export class PostDetailApi {
  fetchPostDetail = async (postId: string): Promise<{ PostDetail:PostModal }> => {
    const res = await fetch("");
    return res.data;
  };
}
