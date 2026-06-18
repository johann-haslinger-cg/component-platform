import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/component-platform/leanscope1/",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "leanscope1",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/federation/Button.ts",
        "./TextInput": "./src/federation/TextInput.ts"
},
      shared: ["react", "react-dom", "react/jsx-runtime"],
    }),
  ],
 build: {
  modulePreload: false,
  target: "esnext",
  minify: false,
  cssCodeSplit: false,
},
});
