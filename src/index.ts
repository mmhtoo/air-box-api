import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { env } from "hono/adapter";
import type { Environment } from "./types/index.js";
import { configDotenv } from "dotenv";

configDotenv();

const app = new Hono();

app.get("/", (c) => {
  const { BCRYPT_SERCRET } = env<Environment>(c);
  console.log(BCRYPT_SERCRET);
  return c.text("Hello Hono!");
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
