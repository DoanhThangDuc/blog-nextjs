import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-05-04&sortBy=publishedAt&apiKey=1b4b963ff661428ebe4b361015bd015c");
    res.status(200).json({ data: response.body.articles });
  }
}
