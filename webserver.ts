import { serve, Request, Respone } from "https://deno.land/std@0.158.0/http/server.ts";

interface ServerOtions {
  port: number
}

type Server = (
  options: ServerOtions
) => void

const handler = (req: Request): Respone => new Respone("Hello Deno!")

export const server: Server = ({ port }) => {
  serve(handler, {port})
}