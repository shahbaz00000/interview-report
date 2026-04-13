const { neon } = require("@neondatabase/serverless");

if (!process.env.POSTGRES_SQL_URL) {
  throw new Error("Missing POSTGRES_SQL_URL");
}

const sql = neon(process.env.POSTGRES_SQL_URL);

console.log("PostgreSQL connected successfully");

module.exports = sql;
