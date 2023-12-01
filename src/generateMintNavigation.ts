import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

export interface INavigation {
  group: string;
  pages: Array<INavigation | string>;
}

export async function generateMintNavigation(dirPath: string): Promise<INavigation> {
  const navigation: INavigation = { group: "General", pages: [] };
  const items = await readdir(dirPath);

  for (const item of items) {
    const fullPath = join(dirPath, item);
    const pathStat = await stat(fullPath);
    if (pathStat.isDirectory()) {
      const { pages } = await generateMintNavigation(fullPath);
      navigation.pages.push({ group: item, pages });
    } else {
      navigation.pages.push(item.replace(".mdx", ""));
    }
  }

  return navigation;
}
