import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // 生成 source map 文件
    rollupOptions: {
      output: {
        sourcemapPathTransform: (relativePath) => { 
          // 生成的 sourcemap 文件路径
          return resolve(__dirname, relativePath).replace(/\\/g, '/')
        }
      }
    }
  },
  server: {
    port: 3000, // 设置开发服务器端口
  }
})
