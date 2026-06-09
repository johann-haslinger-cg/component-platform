import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "/component-platform/xyz/",
  plugins: [
    react(),
    federation({
      name: "xyz",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button/Button.tsx",
        "./Input": "./src/components/Input/Input.tsx"
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
    target: "chrome89",
  },
});
