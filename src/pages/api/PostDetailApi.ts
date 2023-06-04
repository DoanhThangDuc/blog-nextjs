import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export async function PostDetailApi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return axios.get(process.env.BASE_URL || "");
  }
}
