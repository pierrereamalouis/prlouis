import * as esbuild from "https://deno.land/x/esbuild@v0.17.18/mod.js";
import { parse } from "https://deno.land/std@0.186.0/flags/mod.ts";

const args = parse(Deno.args);

const cwd = Deno.cwd();

async function getFiles() {
  const files: string[] = [];

  const entryFullPath = `${cwd}/${args.entryDir}`;

  for await (const dirEntry of Deno.readDir(entryFullPath)) {
    if (dirEntry.isFile && getFileExtensions(dirEntry.name) === "ts") {
      files.push(`${args.entryDir}/${dirEntry.name}`);
    }
  }

  return files;
}

function getFileExtensions(str: string) {
  const lastIndex = str.lastIndexOf(".");

  return str.slice(lastIndex + 1);
}

function getLastOccurrence(str: string, substring: string) {
  return str.slice(str.lastIndexOf(substring) + 1);
}

const result = await esbuild.build({
  entryPoints: await getFiles(),
  bundle: true,
  loader: { ".svg": "file" },
  outdir: `${cwd}/${args.outputDir}`,
  minify: true,
});
console.log(result);

esbuild.stop();
