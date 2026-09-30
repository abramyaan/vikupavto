import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(), // Этот плагин активирует Tailwind v4 в Vite
    tsconfigPaths(),
  ],
  // Заменяем "./" на точное имя репозитория, чтобы роутинг TanStack и ассеты работали без ошибок на GitHub Pages
  base: "/avtovykup/", 
});