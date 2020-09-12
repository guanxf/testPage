# README

## 写在开头

脚手架又双叒叕更新了。
更新不易，且更且珍惜。更新于2020年5月20日。

> 有任何bug请随时砸向peter，有任何建议请随时喊peter，有任何用着不爽的请随时**peter。

希望你在用它开发活动的时候，不仅是会用，而且要了解它。

虽然多种多样的配置非常烦人，但是它能帮我们把代码优化、把性能提升、把工资提高。

所以，请尽情的去了解它吧，同时，非常非常欢迎大家和我咨询各种相关问题。

## 简介

这个文件夹是使用vue-cli的4.3.1版本搭建的活动脚手架，用于日常运营活动开发。

## 目录结构及介绍

```js
├── public  // html模版文件
│   ├── index.html
│   ├── prize.html
│   └── share.html
├── src
│   ├── assets // 业务引用的资源文件
│   │   ├── css
│   │   │   ├── base.less
│   │   │   ├── index.less
│   │   │   ├── mixin.less
│   │   │   ├── normal.less
│   │   │   └── share.less
│   │   ├── font // 字体文件，已内置在minin.less中，需要用时要打开相应注释
│   │   │   └── YuewenFont-Regular.ttf
│   │   └── img
│   ├── components  // 业务组件
│   │   ├── activity-over.vue
│   │   ├── share-mask.vue
│   │   └── share-weibo.vue
│   ├── pages  // 具体业务页面，可自行添加新页面
│   │   ├── index
│   │   │   ├── Index.vue
│   │   │   └── main.js  // 打包入口文件
│   │   ├── prize
│   │   │   ├── Prize.vue
│   │   │   └── main.js
│   │   └── share
│   │       ├── Share.vue
│   │       └── main.js
│   └── plugins  // 插件、工具
│       ├── axios.js  // 封装的请求方法
│       ├── constant.js  // 定义的常量
│       ├── eruda.js  // eruda调试，放弃vconsole
│       ├── mock.js  // mock模拟接口数据
│       ├── oauth.js  // 微信鉴权方法
│       ├── report.js  // 埋点方法
│       ├── set.js  // rem适配方法
│       └── tool.js  // 新增Utils或Local的自定义方法
├── .editorconfig  // 编码格式配置
├── .env.serve  // 自定义serve环境，用于本地使用mock数据
├── .eslintrc.js  // eslint相关配置
├── .gitignore
├── babel.config.js
├── package.json
├── vue.config.js  // webpack配置，有任何疑问请联系peter，配置项可参考 https://cli.vuejs.org/zh/config/
```

## 三种模式介绍

1. serve 模式（自定义）
   - 包含 本地mock 或者 yapi mock
   - 可以使用devtool
2. development 模式
   - 不含mock
   - 可以使用devtool
3. production 模式
   - 不含mock
   - 不可以使用devtool

## 命令介绍

```js
// 1. 本地开发（使用本地mock-需要打开main.js里的注释 & serve模式启用本地端口 & development模式构建 & 热更新构建）
npm run serve
// 2. 本地开发（development模式启用本地端口 & development模式构建 & 热更新构建）
npm run dev
// 3. 生产环境部署（仅producttion模式构建）
npm run build
```

## 注意事项

1. 十分建议在开发时只打开 BookEventFront/WebConent/act11XXX 这层文件夹，目前此版本由于eslint及其相关依赖的升级，导致在vscode中打开完整的BookEventFront时，保存自动修复eslint问题的功能会失效。后续我会关注相关的升级，并及时修复。
2. 配置一些别名，@代表src目录（例：'@/assets/css/abc.less'）, @c代表组件目录（例：'@c/activity-over.vue'）, @img代表图片目录（例：'@img/activity-over.png'）
3. 在写css时如果使用别名，请注意要在开头加上~（例：background-image: url('~@img/logo.png');）
