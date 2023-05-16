// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { db } from "@vercel/postgres";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function HandleCommentGetAllPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await db.connect();
  try {
    switch (req.method) {
      case "GET":
        const allComments = await client.sql`SELECT * FROM comments;`;
        const allCommentsRows = allComments.rows;
        res.status(200).json(allCommentsRows);
        break;

      case "POST":
        await client.sql`INSERT INTO comments (commenter, comment) VALUES (${req.body.commenter}, ${req.body.comment});`;
        res
          .status(201)
          .json(
            `Successfully added: {Commenter: ${req.body.commenter}, Comment: ${req.body.comment}}`
          );
        break;
      default:
        res.status(405).json("Method not allowed");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
