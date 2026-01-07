import { defineConfig } from "tsup";

export default defineConfig([
  // main entry
  {
    entry: {
      index: "src/index.ts",
      react: "src/react.ts",
      "react-TimeAgo": "src/react/TimeAgo.tsx"
    },
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    treeshake: true,
    splitting: false,
    external: ["react", "next", "jalaali-js"]
  }
]);
