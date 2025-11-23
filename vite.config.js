import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // ✅ Split vendor code into separate chunks
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          prime: ["primereact"],
        },
        external: ["chart.js", "quill"], // Vite ignores chart.js
      },
    },
    // ✅ Optional: increase warning limit so you don’t see false alarms
    chunkSizeWarningLimit: 1000, // in KB (1 MB)
    // ✅ Minify using terser (better optimization than default esbuild)
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // removes console.log in production
        drop_debugger: true,
      },
    },
    // ✅ Generate smaller assets
    assetsInlineLimit: 4096, // Inline small assets as base64 to reduce requests
  },
});
