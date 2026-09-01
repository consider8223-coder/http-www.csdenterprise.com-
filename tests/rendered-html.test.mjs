import assert from "node:assert/strict";
import test from "node:test";

test("renders the CSD Enterprise home page", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /<title>CSD Enterprise \| Skills, Creativity &amp; Delivery<\/title>/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/services"/);
  assert.match(html, /href="\/contact"/);
  assert.match(html, />AI Generative</);
  assert.match(html, /consider8223@gmail\.com/);
});
