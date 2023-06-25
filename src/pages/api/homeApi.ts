import type { NextApiRequest, NextApiResponse } from "next";

import { baseUrl } from "..";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();

      if (!data) {
        throw new Error("Can't find posts");
      }
      res.status(200).send({ data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }
}
