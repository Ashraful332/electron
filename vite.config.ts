import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base:'./',
  build: {
    outDir: 'out',
  },
   server:{
    port:5123,
    strictPort:true,
  }
})
