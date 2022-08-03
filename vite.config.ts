import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // antd 按需加载
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style(name) {
            return `antd/es/${name}/style/index.less`
          },
        },
      ],
    }),
  ],
  server: {
    port: 5874,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 JavaScript
        // 方式1
        // modifyVars: {
        //   'primary-color': '#ff3636',
        // },
        // 方式2
        modifyVars: {
          hack: `true; @import "${path.resolve(__dirname, 'src/utils/antd_custom.less')}"`,
        },
      },
    },
  },
})
