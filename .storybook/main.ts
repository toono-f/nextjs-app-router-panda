import type { StorybookConfig } from "@storybook/nextjs";

import path from "path";

const rootPath = path.resolve(__dirname, "../src/");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config: any) => {
    config.resolve.alias["@"] = rootPath; // srcを@と省略してパスを記載できるように設定
    return config;
  },
};
export default config;
