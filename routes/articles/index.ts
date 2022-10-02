import { Handler } from "https://deno.land/std@0.158.0/http/server.ts";
import { notFoundHandler } from "../notFound.ts";
import db from "../../data/db.json" assert { type: "json" };

export const patterns: URLPattern[] = [
  new URLPattern({ pathname: "/articles" }),
  new URLPattern({ pathname: "/articles/" }),
  new URLPattern({ pathname: "/articles/:id" }),
];

const articlesHandler: Handler = () =>
  new Response(JSON.stringify(db.articles), {
    status: 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });

const articleHandler = (id: string): Handler => {
  const article = db.articles.find((a) => `${a.id}` === id);

  if (!article) {
    return notFoundHandler;
  }

  return () =>
    new Response(JSON.stringify(article), {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    });
};

export const handler = (match: URLPatternResult): Handler => {
  console.log(match.pathname.input, match.pathname.groups);

  const articleId = match.pathname.groups.id;
  if (articleId) {
    return articleHandler(articleId);
  }

  return articlesHandler;
};
