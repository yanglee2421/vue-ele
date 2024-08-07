import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  return {
    plugins: [
      vue({
        template: {
          transformAssetUrls: false,
        },
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@use "@/assets/scss" as *;` },
      },
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },

    base: "./",
    envDir: resolve(__dirname, "./"),
    assetsInclude: [],

    build: {
      outDir: resolve(__dirname, "./docs"),
      emptyOutDir: true,

      rollupOptions: {
        input: {
          main: resolve(__dirname, "./index.html"),
        },
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/cropperjs")) {
              return "cropperjs";
            }

            if (id.includes("node_modules/fabric")) {
              return "fabric";
            }

            if (id.includes("node_modules/element-plus")) {
              return "element-plus";
            }
          },
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },

      target: "modules",
      minify: "esbuild",

      cssTarget: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
      cssMinify: "esbuild",
      cssCodeSplit: true,

      manifest: false,
      sourcemap: false,
      chunkSizeWarningLimit: 500,
      assetsInlineLimit: 0,
    },

    server: {
      port: 3007,
      strictPort: true,
      hmr: {
        port: 3007,
      },
      host: false,
      proxy: {
        "/dev": {
          target: "http://localhost:5173",
          rewrite(path) {
            return path.replace(/^\/dev/, "");
          },
          changeOrigin: true,
          ws: true,
        },
        "/wp-content": {
          target: "http://www.osmosisai.co",
          changeOrigin: true,
          ws: true,
        },
      },
      fs: {
        allow: [resolve(__dirname, "./")],
      },
    },
  };
});
