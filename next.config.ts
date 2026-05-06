import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow raw text imports of *.md files (used by content/slides/*.md
  // to feed the CodeMd component).
  turbopack: {
    rules: {
      "*.md": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
