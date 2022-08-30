import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/index.jsx'),
      '@images': path.resolve(__dirname, './src/assets/images/index.jsx'),
      '@icons': path.resolve(__dirname, './src/assets/icons/index.jsx'),
      '@services': path.resolve(__dirname, './src/services/index.jsx'),
      '@contexts': path.resolve(__dirname, './src/contexts/index.js'),
    },
  },
  plugins: [react(), eslint()],
});
