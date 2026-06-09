import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "/component-platform/lelele/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "lelele",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button/index.ts",
        "./Input": "./src/components/Input/index.ts"
},
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
        "react-dom/": {
          singleton: true,
        },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
