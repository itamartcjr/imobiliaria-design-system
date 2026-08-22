const fs = require("node:fs");
const path = require("node:path");

for (const folder of ["dist", "generated"]) {
  fs.rmSync(path.join(process.cwd(), folder), { recursive: true, force: true });
}
