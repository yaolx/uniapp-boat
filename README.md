# uniapp-boat

vite + typescript 创建 uni-app 脚手架

# 前言

# 实现功能

- 使用 vue3 开发
- 构建工具：`vite`
- 集成 `typescript`
- 集成 eslint + prettier + husky + lint-staged 来格式化和规范代码
- 多环境配置
- 使用 `pinia`
- 封装 `uni-request` 请求
- 集成 `json-server` 做模拟开发
- ui 组件使用`uni-ui`

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

## 集成 pinia

## 封装 uni-request

- 统一配置接口地址
- 统一设置超时时间/报文格式/报文加密
- 统一身份认证
- 统一处理登录超时/接口异常提示
- 统一返回接口格式

## 集成 json-server

- crud 模拟 mock 数据
- 方便服务端接口还没给出，前端先行开发

## 集成 [uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html) 组件

配置 easycom

```json

"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
```

## 支持 typescript

`uni-ui`支持 ts 的配置：
安装`@uni-helper/uni-app-types`，支持`uni-ui`ts，否则会默认匹配 vue3 上标签元素的 ts

在再 tsconfig.json 中增加以下配置

```json

"compilerOptions": {
    "types": ["@dcloudio/types", "@uni-helper/uni-app-types"],
  },
  "vueCompilerOptions": {
    "nativeTags": ["block", "component", "template", "slot"]
  }
```

# 运行

## 运行 mock 环境

`pnpm run dev:mock`

## 运行 h5 环境

`pnpm run dev:h5`

## 编译微信小程序环境

`pnpm run dev:mp-weixin`

用微信开发者工具打开`dist/dev/mp-weixin`文件夹，编译后即可查看效果
