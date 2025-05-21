/** @type {import('next').NextConfig} */
const nextConfig = {
  // Forza la detección del directorio app
  experimental: {
    appDir: true,
  },
  // Configuración para entornos online
  output: 'standalone',
}

module.exports = nextConfig