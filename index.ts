import type { INavigation } from "./src/generateMintNavigation";
import { generateMintNavigation } from "./src/generateMintNavigation";

function logNavigation(navigation: INavigation): void {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(navigation, null, 4));
}

async function main(): Promise<void> {
  const navigation = await generateMintNavigation("./docs");
  logNavigation(navigation);

  // introduction
}

void main();
