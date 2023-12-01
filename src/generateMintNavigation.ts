import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

import { titleCase } from "./utils/string";

export interface INavigation {
  group: string;
  pages: Array<INavigation | string>;
}

const TEMPORARY_PARENT_DELETE_THIS_LATER = "docs";

export async function generateMintNavigation(
  dirPath: string,
  parents: Array<string> = [TEMPORARY_PARENT_DELETE_THIS_LATER]
): Promise<INavigation> {
  const navigation: INavigation = { group: "General", pages: [] };
  const paths = await readdir(dirPath);

  for (const path of paths) {
    const fullPath = join(dirPath, path);
    const pathStat = await stat(fullPath);
    if (pathStat.isDirectory()) {
      const { pages } = await generateMintNavigation(fullPath, [...parents, path]);
      const group = titleCase(path);
      navigation.pages.push({ group, pages });
    } else {
      const fileName = path.replace(".mdx", "");
      const fileWithFullPath = [...parents, fileName].join("/");
      navigation.pages.push(fileWithFullPath);
    }
  }

  return navigation;
}
