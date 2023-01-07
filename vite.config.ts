// https://vitejs.dev/config/
import path from 'path'

import { ConfigEnv } from 'vite'

import { PORT } from './config/constant'
import { createVitePlugins } from './config/vite/plugins'
import { createProxy } from './config/vite/proxy'
import pkg from './package.json'
export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  return {
    base: `/${pkg.name}/`,
    plugins: createVitePlugins(mode, isBuild),
    envDir: path.resolve(__dirname, 'config/env'),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    // css 配置
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
          // antd 定制主题样式
          modifyVars: {
            '@fill-body': '#fff'
          }
        }
      },
      modules: {
        localsConvention: 'camelCase'
      }
    },
    // 开发环境开启代理
    server: {
      host: true,
      port: PORT,
      open: true,
      proxy: createProxy()
    }
  }
}
