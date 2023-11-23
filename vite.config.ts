import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNesting from 'postcss-nesting';
import path from 'path';

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 配置项目别名
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
  css: {
    postcss: {
      plugins: [postcssNesting()],
    },
  },
  server: {
    port: 1024,
    open: true,
    proxy: {
      '/iam': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
      '/film': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
      '/customer': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
      },
    },
  },
});
