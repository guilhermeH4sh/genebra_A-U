import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projetos: resolve(__dirname, 'projetos.html'),
        studio: resolve(__dirname, 'studio.html'),
        processo: resolve(__dirname, 'processo.html'),
        contato: resolve(__dirname, 'contato.html'),
      }
    }
  }
})
