import { serve } from "https://deno.land/std@0.158.0/http/server.ts";

import * as articlesRoute from "./routes/articles/index.ts";

interface AppOtions {
  port: number;
}

type App = (
  options?: Partial<AppOtions>,
) => void;

const handler = (req: Request): Response => {
  const match = articlesRoute.pattern.exec(req.url);

  if (match) {
    return articlesRoute.handler(req);
  }

  return new Response("Not Found", { status: 404 });
};

export const app: App = (options = {}) => {
  serve(handler, options);
};
