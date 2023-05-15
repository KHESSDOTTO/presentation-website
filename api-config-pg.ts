import { Pool } from "pg";

export const pool: Pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});
