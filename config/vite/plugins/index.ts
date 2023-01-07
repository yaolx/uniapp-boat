/**
 * vite plugin
 */

import { Plugin } from 'vite'

import uni from '@dcloudio/vite-plugin-uni'
import viteCompression from 'vite-plugin-compression'
import eslint from '@rollup/plugin-eslint'
import { VITE_APP_ANALYZE, VITE_APP_COMPRESS_GZIP } from '../../constant'
import configVisualizerPlugin from './visualizer'

export function createVitePlugins(viteEnv: string, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    uni()
    // 支持jsx
    // vueJsx(),
    // ts检测
    // typescript(),
    // legacy(),
    // 按需加载组件
    // ViteComponents({
    //   customComponentResolvers: [AntDesignVueResolver()]
    // })
  ]
  //开发环境开启eslint
  if (!isBuild) {
    vitePlugins.push({
      ...eslint({
        include: 'src/**/*.+(js|jsx|ts|tsx|vue)'
      }),
      enforce: 'pre'
    })
  }
  // 包分析
  VITE_APP_ANALYZE && vitePlugins.push(configVisualizerPlugin())

  // 发布，打包
  if (VITE_APP_COMPRESS_GZIP && isBuild) {
    vitePlugins.push(viteCompression({ deleteOriginFile: true }))
  }

  return vitePlugins
}
