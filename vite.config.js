import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Puedes cambiarlo a otro puerto si es necesario
    host: 'localhost', // Asegura que se sirva en localhost
  },
});