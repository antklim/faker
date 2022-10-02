import * as articlesRoute from "./articles/index.ts";

export const notFoundHandler = (_req: Request): Response =>
  new Response("Not Found", { status: 404 });

export const handler = (req: Request): Response => {
  const match = articlesRoute.pattern.exec(req.url);

  if (match) {
    return articlesRoute.handler(req);
  }

  return notFoundHandler(req);
};
