import { Handler } from "https://deno.land/std@0.158.0/http/server.ts";
import * as articlesRoute from "./articles/index.ts";

const match = (
  rawUrl: string,
  patterns: URLPattern[],
): URLPatternResult | null => {
  for (const p of patterns) {
    const m = p.exec(rawUrl);
    if (m) return m;
  }

  return null;
};

export const handler: Handler = (req, connInfo) => {
  const m = match(req.url, articlesRoute.patterns);
  if (m) {
    return articlesRoute.handler(m)(req, connInfo);
  }

  return new Response("Welcome to Faker!");
};
