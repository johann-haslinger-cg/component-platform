import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/component-platform/test2/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "test2",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/federation/Button.ts"
},
      shared: ["react", "react-dom", "react/jsx-runtime"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    cssCodeSplit: true,
  },
});
