import type { NextApiRequest, NextApiResponse } from "next";

import { APP_URL } from "..";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(APP_URL);
      const data = await response.json();

      if (!data) {
        throw new Error("Can't find posts");
      }
      res.status(200).send({ data });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
