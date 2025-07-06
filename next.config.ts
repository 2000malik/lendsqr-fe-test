import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: "sass-embedded",
  },

  webpack(config) {
    // Exclude SVGs from Next.js default loader
    const fileLoaderRule = config.module.rules.find(
      (rule: { test?: RegExp | undefined }) =>
        rule.test?.toString().includes("svg")
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
