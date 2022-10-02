import db from "../../data/db.json" assert { type: "json" };

export const pattern = new URLPattern({ pathname: "/articles" });

export const handler = (_req: Request): Response =>
  new Response(JSON.stringify(db.articles));
