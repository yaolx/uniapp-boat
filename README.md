# uniapp-boat

vite + typescript 创建 uni-app 脚手架

# 前言

# 实现功能

- 使用 vue3 开发
- 构建工具：vite
- 使用 pinia
- 集成 typescript
- 集成 eslint + prettier + husky + lint-staged 来格式化和规范代码
- 多环境配置
- 封装 uni-request 请求
- 集成 json-server 做模拟开发
- ui 组件待选

## 生成基础脚手架

npx degit dcloudio/uni-preset-vue#vite-ts uniapp-boat

如果不能下载，可从 [gitee](https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip) 上下载

## 简单配置

1. 规范目录

2. 配置别名@ 表示 src 目录
   `vite.config.js`添加 alias

   ```js

     resolve: {
       alias: {
         '@': path.resolve(__dirname, 'src')
       }
     }

   ```

   `tsconfig.json`添加路径配置

   ```json
   {
     "baseUrl": "./",
     "paths": {
       "@/*": ["src/*"]
     }
   }
   ```

3. 配置 mock 环境，搭配 json-server 服务

## 集成 eslint

安装`eslint`

`pnpm add eslint -D`

配置`.eslintrc.js`

## 集成 prettier

安装`prettier`

`pnpm add prettier -D`

添加`.prettierrrc`

## 多环境配置

```js
envDir: path.resolve(__dirname, 'config/env')
```

# 运行

## 运行 mock 环境

`pnpm run dev:mock`

## 运行 h5 环境

`pnpm run dev:h5`

## 编译微信小程序环境

`pnpm run dev:mp-weixin`

用微信开发者工具打开`dist/dev/mp-weixin`文件夹，编译后即可查看效果
