import "./clean";
import { shell } from "./tools/shell";
import { copyPackageSet } from "./tools/copyPackageSet";
import * as fs from "fs";
import { EOL } from "os";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require("../package.json");

const main = async () => {
  await Promise.all([
    shell("pnpm tsc -p tsconfig.esm.json -d --emitDeclarationOnly --outDir ./lib/\\$types"),
    shell("pnpm tsc -p tsconfig.cjs.json"),
    shell("pnpm tsc -p tsconfig.esm.json"),
  ]);

  await shell("cherry-pick --cwd ./lib --input-dir ../src --types-dir ./\\$types --cjs-dir ./\\$cjs --esm-dir ./\\$esm");
  await copyPackageSet();
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
