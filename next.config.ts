import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    implementation: "sass-embedded",
  },
};

export default withBundleAnalyzer(nextConfig);
