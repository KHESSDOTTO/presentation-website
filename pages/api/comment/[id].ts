// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { QueryResult } from "pg";
import type { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../api-config-pg";

interface DataRow {
  id: number;
  comment: string;
  commenter: string;
}

export default async function GetOne(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      res.status(405).json("Method not allowed");
    }

    const { id } = req.query;

    const comment: QueryResult = await pool.query(
      `SELECT * FROM comments WHERE id = ${id}`
    );

    const commentRow = comment.rows;

    res.status(200).json(commentRow);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
