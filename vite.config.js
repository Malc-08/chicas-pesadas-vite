import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'src/pages/productos/itemsController.js', // Sustituye 'nombre-del-modulo-problematico' con el nombre real del módulo
      ],
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutUs: resolve(__dirname, 'src/pages/acercaDeNosotros/acercadenosotros.html'),
        products: resolve(__dirname, 'src/pages/productos/productos.html'),
        contact: resolve(__dirname, 'src/pages/contacto/contacto.html'),
      },
    },
  },
})

