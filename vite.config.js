import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("firebase")) {
              return "firebase";
            }
            if (id.includes("react")) {
              return "react-vendor";
            }
            if (id.includes('node_modules/firebase')) {
            return 'firebase-vendor';
            }
            if (id.includes('node_modules/leaflet')) {
            return 'leaflet-vendor';
            }
            if (id.includes("date-fns") || id.includes("moment")) {
              return "date-utils";
            }
            // añade más secciones según librerías grandes que uses
            return "vendor-core";  // todo lo demás
          }
        }
      }
    }
  },
  server: {
    port: 5173,
    host: 'localhost',
  },
});