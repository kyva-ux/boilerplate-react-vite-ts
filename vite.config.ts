import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'
function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [react()]
})
