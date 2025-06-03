# Screen UI - 数据可视化组件库

基于Vue3和ECharts构建的企业级数据可视化组件库

## ✨ 特性
- 开箱即用的高质量Vue3图表组件
- 基于ECharts 5的深度封装
- 支持响应式设计
- 完善的TypeScript类型定义
- 多主题支持

## 🚀 快速开始

### 📦 安装依赖

```bash
pnpm install
```
### 🛠️ 开发命令 

```bash
pnpm run dev:test  # 启动示例
pnpm run dev:doc  # 启动文档
```
### 🔨 构建项目

```bash
pnpm run build:lib  # 构建组件库
pnpm run build:doc  # 构建文档
```
###  🚢 发布组件

```bash
pnpm run publish:lib  # 发布组件库
pnpm run publish:utils  # 发布工具库
```
## 📚 文档
<!-- ### 安装
```bash
# 使用pnpm
pnpm install screen-ui

# 或使用npm
npm install screen-ui

# 或使用yarn
yarn add screen-ui
## 使用组件
import { createApp } from 'vue'
import ScreenUI from 'screen-ui'

const app = createApp(App)
app.use(ScreenUI) -->

### 🏗️ 项目结构
screen-ui/
├── cli/                # 命令行工具
│   ├── src/            # 源码目录
│   └── package.json    # CLI配置
├── examples/           # 示例项目
│   ├── src/            # 示例源码
│   └── vite.config.ts  # Vite配置
├── packages/           # 核心包
│   ├── screen-view/    # 组件库
│   ├── utils/          # 工具库
│   └── document/       # 文档系统
└── package.json        # 项目配置

screen-ui项目是一个基于pnpm workspace管理的多包项目，主要包含以下目录结构及功能：

1. cli目录 ：
   
   - 命令行工具，用于创建和删除组件
   - 主要功能：
     - 通过commander库实现命令行交互
     - 提供create/remove命令管理组件
     - 使用esbuild打包为可执行文件
2. examples目录 ：
   
   - 示例项目，演示组件使用
   - 基于Vite构建的Vue3项目
   - 主要文件：
     - App.vue - 示例入口组件
     - main.ts - 注册screen-view组件库
3. packages目录 （核心）：
   
   - screen-view ：主组件库
     - 包含各种图表组件（barChart/lineChart等）
     - 使用Vite构建，支持ES/CJS双模式
     - 依赖echarts实现图表功能
   - utils ：工具库
     - 提供withInstall等工具方法
     - 被其他包依赖
   - document ：文档系统
     - 基于Vitepress搭建
     - 包含安装指南和组件文档
4. 根目录配置 ：
   
   - pnpm-workspace.yaml：定义工作区包
   - package.json：全局脚本命令
     - dev:test - 启动示例项目
     - dev:doc - 启动文档
     - cli:add - 添加组件
     - cli:remove - 删除组件
     - build:lib - 构建组件库
     - build:doc - 构建文档
     - bulid:utils - 构建工具库
     - publish:lib - 发布组件库
     - publish:utils - 发布工具库


