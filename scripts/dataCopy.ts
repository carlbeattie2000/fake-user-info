import { readdir, copyFile, mkdir, stat } from "fs/promises";
import path from "path";

interface CopyFileParams {
  inputDir: string;
  outputDir: string | string[];
}

async function checkDirectoryExists(directory: string) {
  try {
    await stat(directory);
  } catch (_) {
    await mkdir(directory);
  }
}

async function copyFileToDir(input: string, outputDir: string | string[]) {
  if (Array.isArray(outputDir)) {
    for (const output of outputDir) {
      await copyFile(input, output);
    }
  } else {
    await copyFile(input, outputDir);
  }
}

export async function copyDir({ inputDir, outputDir }: CopyFileParams) {
  const inputRealtiveFolder = path.join(process.cwd(), inputDir);
  const outputDestRealtive = Array.isArray(outputDir)
    ? outputDir.map((output) => path.join(process.cwd(), output))
    : path.join(process.cwd(), outputDir);

  if (Array.isArray(outputDestRealtive)) {
    for (const output of outputDestRealtive) {
      await checkDirectoryExists(output);
    }
  } else {
    await checkDirectoryExists(outputDestRealtive);
  }

  const files = await readdir(inputRealtiveFolder);

  for (const file of files) {
    const filePath = path.join(inputRealtiveFolder, file);

    try {
      const fileStat = await stat(filePath);

      if (fileStat.isDirectory()) {
        await copyDir({
          inputDir: path.join(inputDir, file),
          outputDir: Array.isArray(outputDir)
            ? outputDir.map((output) => path.join(output, file))
            : path.join(outputDir, file),
        });
      }

      if (fileStat.isFile()) {
        await copyFileToDir(
          filePath,
          Array.isArray(outputDestRealtive)
            ? outputDestRealtive.map((output) => path.join(output, file))
            : path.join(outputDestRealtive, file),
        );
      }
    } catch (e) {
      console.log(e);
    }
  }
}
