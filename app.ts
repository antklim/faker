import { serve } from "https://deno.land/std@0.158.0/http/server.ts";

import { handler } from "./routes/router.ts";

interface AppOtions {
  port: number;
}

type App = (
  options?: Partial<AppOtions>,
) => void;

export const app: App = (options = {}) => {
  serve(handler, options);
};
