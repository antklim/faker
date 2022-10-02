import { serve } from "https://deno.land/std@0.158.0/http/server.ts";

interface AppOtions {
  port: number;
}

type App = (
  options?: Partial<AppOtions>,
) => void;

const handler = (_req: Request): Response => new Response("Hello Deno!");

export const app: App = (options = {}) => {
  serve(handler, options);
};
