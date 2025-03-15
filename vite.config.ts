import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://jsonui.carlosospina.dev',
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/private/', '/cgi-bin/', '/temp/', '/login/'],
        },
      ],
    }),
  ],
})
