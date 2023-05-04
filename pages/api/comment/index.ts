// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { QueryResult } from "pg";
import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../api-config-pg";

interface DataRow {
  id: number;
  comment: string;
  commenter: string;
}

export default async function HandleCommentGetAllPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "GET":
        const allComments: QueryResult = await pool.query(
          "SELECT * FROM comments;"
        );
        const allCommentsRows: DataRow[] = allComments.rows;
        res.status(200).json(allCommentsRows);
        break;

      case "POST":
        const newComment: QueryResult = await pool.query(
          `INSERT INTO comments (commenter, comment) VALUES ('${req.body.commenter}', '${req.body.comment}')`
        );
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
