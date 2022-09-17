# vue3-router-auth

Routing permissions 路由权限
技术栈： vue3 vue-router4 vuex4.0
用官方脚手架起项目

## 前期准备

### 前端

1. 别名 aline
   需要用到 node 的 path 模块 中的 resolve 和 \_\_dirname 当前文件的路径
2. 代理 proxy

   target 目标源
   changeOrigin 替换源

3. vuex vue-router4

   下载开发环境类型依赖 @type/\*

4. 清理无用文件

   HelloWorld.vue
   style.css

### 后端准备

1. 生产依赖
   express

2. 下载开发依赖
   @types/express
   @types/node
   ts-node-dev
   typescript

## client

- router

  - route addRoute 动态生成路由配置
  - hasAuth 判断是否有权限

- libs

  - http axios 路由拦截
  - utils routerTree 根据后端返回数据定义权限菜单

- store
  - actions 异步请求数据
  - commit 指定 type 传参给 mutations
  - mutations 修改 store 状态
  - state 状态
  - dispatch 派发类型事件

## server

> 暂时模拟数据库

user 用户数据表
router 权限路由表
