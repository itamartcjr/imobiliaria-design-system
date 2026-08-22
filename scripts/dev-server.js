const fs = require("node:fs");
const path = require("node:path");
const http = require("node:http");

const root = process.cwd();
const dist = path.join(root, "dist");
const port = Number(process.env.PORT || 4173);

function contentType(file) {
  if (file.endsWith(".html")) return "text/html; charset=utf-8";
  if (file.endsWith(".css")) return "text/css; charset=utf-8";
  if (file.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (file.endsWith(".svg")) return "image/svg+xml";
  if (file.endsWith(".json")) return "application/json; charset=utf-8";
  if (file.endsWith(".webp")) return "image/webp";
  if (file.endsWith(".ttf")) return "font/ttf";
  return "application/octet-stream";
}

function resolveFile(requestPath) {
  const relative = requestPath.replace(/^\/+/, "");
  let filePath = path.resolve(dist, relative || "index.html");
  if (filePath !== dist && !filePath.startsWith(`${dist}${path.sep}`)) return null;
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, "index.html");
  return fs.existsSync(filePath) && fs.statSync(filePath).isFile() ? filePath : null;
}

http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || "/").split("?")[0]);
  const filePath = resolveFile(requestPath);

  if (!filePath) {
    const notFound = path.join(dist, "404.html");
    if (fs.existsSync(notFound)) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(fs.readFileSync(notFound));
      return;
    }
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  res.writeHead(200, { "Content-Type": contentType(filePath) });
  res.end(fs.readFileSync(filePath));
}).listen(port, () => {
  console.log(`Serving static ${dist} at http://localhost:${port}`);
});
