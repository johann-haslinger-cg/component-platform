import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  base: "/component-platform/leleddssdsdlsdsde/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "leleddssdsdlsdsde",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/federation/Button.ts",
        "./Input": "./src/federation/Input.ts"
},
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react/": { singleton: true },
        "react-dom/": { singleton: true },
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    cssCodeSplit: true,
  },
});
