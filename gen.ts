import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

interface INavigation {
  group: string;
  pages: Array<INavigation | string>;
}

async function generateMintNavigation(dirPath: string): Promise<INavigation> {
  const result: INavigation = { group: "General", pages: [] };
  const items = await readdir(dirPath);

  for (const item of items) {
    const fullPath = join(dirPath, item);
    const pathStat = await stat(fullPath);
    if (pathStat.isDirectory()) {
      const { pages } = await generateMintNavigation(fullPath);
      result.pages.push({ group: item, pages });
    } else {
      result.pages.push(item.replace(".mdx", ""));
    }
  }

  return result;
}

async function main(): Promise<void> {
  const structure = await generateMintNavigation("src/mintlify/docs");
  console.log(JSON.stringify(structure, null, 4));
}

void main();
