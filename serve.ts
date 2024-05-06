import { Application, Router } from "https://deno.land/x/oak@v16.0.0/mod.ts";

const app = new Application();
const router = new Router();
const helloWorld = "Hello World";

router.post("/stream_chat", async (ctx) => {
  const target = await ctx.sendEvents();
  for (const char of helloWorld) {
    target.dispatchMessage(char.toString());
    await new Promise((resolve) => setTimeout(resolve, 100));
    if(char === "d") {
      target.close();
      break;
    }
  }
});

router.post("/chat", async (ctx) => {
  ctx.response.body = helloWorld;
  ctx.response.type = "text/plain";
});

router.get("/", async (ctx) => {
  ctx.response.body = await Deno.readTextFile("./chcat.html");
  ctx.response.type = "text/html";
});

app.use(router.routes());

console.log("Server running on http://localhost:8000/");

await app.listen({ port: 8000 });
