import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    {
      input: "./src/index",
      // builder: "mkdist",
      format: "esm",
      ext: "mjs",
      outDir: "lib/esm",
    },
    {
      input: "./src/index",
      // builder: "mkdist",
      format: "cjs",
      ext: "cjs",
      outDir: "lib/cjs",
    },
  ],
  declaration: true, // generate .d.ts files
  // outDir: "lib",
  // stub: true,
});
