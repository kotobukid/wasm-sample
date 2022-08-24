import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist2/vite",
    rollupOptions: {
      external: [
          path.resolve(__dirname, '../../public/js/index.js'),
          '/js/index.js'
      ]
    }
  }
})
