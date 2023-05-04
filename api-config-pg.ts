import { Pool } from "pg";

export const pool: Pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_DBNAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});
