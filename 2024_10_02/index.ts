import { serveFile } from "https://deno.land/std@0.177.0/http/file_server.ts";
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const port = 8000;

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  
  if (url.pathname === "/" || url.pathname === "/index.html") {
    return await serveFile(request, "./index.html");
  }
  
  return new Response("Not Found", { status: 404 });
}

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handleRequest, { port });
