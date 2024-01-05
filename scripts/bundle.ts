import { buildSync } from "esbuild";
import { globSync } from "glob";
import { copyDir } from "./dataCopy";

const target = ["ES2019", "node14.17"];

buildSync({
  entryPoints: globSync("./src/**/*.ts"),
  outdir: "./dist/cjs",
  bundle: false,
  sourcemap: false,
  minify: true,
  format: "cjs",
  platform: "node",
  target,
});

buildSync({
  entryPoints: ["./src/index.ts"],
  outdir: "./dist/esm",
  bundle: true,
  sourcemap: false,
  minify: true,
  splitting: true,
  format: "esm",
  target,
  platform: "node",
  outExtension: { ".js": ".mjs" },
});

copyDir({
  inputDir: "./src/data/",
  outputDir: ["./dist/cjs/data", "./dist/esm/data"],
});
