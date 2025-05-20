import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  plugins: [react(),basicSsl()],
  server: {
    https: true,
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    hmr: {
      clientPort: 443,
      protocol: 'wss'
    },
    allowedHosts:true,
    cors: true
  }
});