import { Handler } from "https://deno.land/std@0.158.0/http/server.ts";

export const notFoundHandler: Handler = () =>
  new Response("Not Found", {
    status: 404,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
