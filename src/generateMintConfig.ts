/* eslint-disable @typescript-eslint/explicit-function-return-type */

import type { INavigation } from "./generateMintNavigation";

export function generateMintConfig(...navigations: Array<INavigation>) {
  return {
    $schema: "https://mintlify.com/schema.json",
    name: "Starter Kit",
    logo: {
      dark: "/logo/dark.svg",
      light: "/logo/light.svg",
    },
    favicon: "/favicon.svg",
    colors: {
      primary: "#0D9373",
      light: "#07C983",
      dark: "#0D9373",
      anchors: {
        from: "#0D9373",
        to: "#07C983",
      },
    },
    topbarLinks: [
      {
        name: "Support",
        url: "mailto:hi@mintlify.com",
      },
    ],
    topbarCtaButton: {
      name: "Dashboard",
      url: "https://dashboard.mintlify.com",
    },

    anchors: [
      {
        name: "HRIS API",
        icon: "users",
        url: "hris",
      },
      {
        name: "ATS API",
        icon: "briefcase",
        url: "ats",
      },
      {
        name: "ATS-Assessment API",
        icon: "ballot-check",
        url: "assessment",
      },
      {
        name: "Status",
        icon: "wave-pulse",
        url: "https://status.kombo.dev",
      },
    ],
    navigation: [
      ...navigations,
      // {
      //   group: "Get Started",
      //   pages: ["introduction", "quickstart", "development", "lamo"],
      // },
      // {
      //   group: "Essentials",
      //   pages: [
      //     "essentials/markdown",
      //     "essentials/code",
      //     "essentials/images",
      //     "essentials/settings",
      //     "essentials/navigation",
      //   ],
      // },
      {
        group: "API Documentation",
        pages: ["api-reference/introduction"],
      },
      {
        group: "Endpoint Examples",
        pages: ["api-reference/endpoint/get", "api-reference/endpoint/create", "api-reference/endpoint/delete"],
      },
    ],
    footerSocials: {
      twitter: "https://twitter.com/mintlify",
      github: "https://github.com/mintlify",
      linkedin: "https://www.linkedin.com/company/mintsearch",
    },
  };
}
