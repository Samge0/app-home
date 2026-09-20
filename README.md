# app-home

Samge 的个人主页 —— AI Agent 工程实践展示。

## 结构

- `index.html` — 主页：终端 hero + 5 个代表作（各带项目风味的动效面板）+ 工作栈
- `archive.html` — 归档页：61 个在线项目（搜索 / 分类过滤）+ 33 个学习参考 fork
- `projects-data.js` — 作品数据（单文件，好维护）

## 设计

暗色终端美学（inspired by [VoltAgent DESIGN.md](https://github.com/VoltAgent/awesome-design-md)）：
虚空黑画布 `#101010` + 电光绿单强调 `#00d992` + mono 排印。
每个代表作的展示面板都提取自项目本身的元素——jev-arena 的概率分布条、
booster 的球场与事件时间线、BizOwl 的对话与记忆块、Report Sage 的流水线与评分、
ragflow-upload 的上传队列。

## 维护

数据都在 `projects-data.js`：`FEATURED`（首页代表作）、`ONLINE`（归档在线项目）、
`FORKS`（fork 列表）。改完 push main 即自动部署（`.github/workflows/pages.yml`）。
