import { writeFile } from "fs/promises";

import { generateMintConfig } from "./src/generateMintConfig";
import type { INavigation } from "./src/generateMintNavigation";
import { generateMintNavigation } from "./src/generateMintNavigation";

export function logNavigation(navigation: INavigation): void {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(navigation, null, 4));
}

async function main(): Promise<void> {
  const navigation = await generateMintNavigation("./docs");
  logNavigation(navigation);
  const mintConfig = generateMintConfig(navigation);

  await writeFile("mint.json", JSON.stringify(mintConfig, null, 2));
}

void main();
