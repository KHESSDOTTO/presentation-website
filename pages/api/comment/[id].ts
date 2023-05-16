// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@vercel/postgres";

export default async function GetOne(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await db.connect();
  try {
    if (req.method !== "GET") {
      res.status(405).json("Method not allowed");
    }
    const { id } = req.query;
    const comment = await client.sql`SELECT * FROM comments WHERE id = ${String(
      id
    )};`;
    const commentRow = comment.rows;
    res.status(200).json(commentRow);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
