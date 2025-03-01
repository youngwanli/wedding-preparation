# 婚礼准备清单

这是一个使用 Vite + React + TypeScript + Tailwind CSS 构建的婚礼准备清单应用。

## 功能

- 显示预定义的婚礼准备任务列表
- 同时显示公历和农历日期
- 标记任务为已完成
- 按公历日期、农历日期和完成状态排序
- 完成状态本地存储，刷新页面不会丢失
- 查看项目更新记录
- 移动端友好的响应式设计

## 技术栈

- Vite
- React
- TypeScript
- Tailwind CSS
- Wouter (轻量级路由库，只有约 2.1KB)

## 移动端适配

应用采用响应式设计，在不同屏幕尺寸下提供最佳用户体验：

- 在移动设备上使用卡片式布局代替表格
- 自适应的排版和间距
- 优化的触摸目标大小
- 流式布局，适应各种屏幕尺寸

## 开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm preview
```

## 项目结构

- `src/components/` - React 组件
  - `TaskTable.tsx` - 显示任务列表的表格组件
- `src/pages/` - 页面组件
  - `TaskList.tsx` - 任务列表页面
  - `UpdateHistory.tsx` - 更新记录页面
- `src/types/` - TypeScript 类型定义
  - `Task.ts` - 任务类型定义
- `src/config/` - 配置文件
  - `weddingTasks.ts` - 预定义的婚礼准备任务
  - `updateHistory.ts` - 更新记录数据
- `src/App.tsx` - 主应用组件，设置路由
- `src/main.tsx` - 应用入口点
