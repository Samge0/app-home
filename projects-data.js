/* app-home · 作品数据 · 生成于 2026-09 · 数据源: GitHub API + 旧版 index.html 55 个在线项目 */
"use strict";

const FEATURED = [
  {
      "id": "jev-arena",
      "name": "jev-arena",
      "title": "Jev Arena",
      "subtitle": "决策模型实战对比场",
      "period": "2026.09",
      "lang": "Python",
      "tags": [
          "agent-eval",
          "benchmark",
          "replay-site"
      ],
      "summary": "让云端 API、0.6B 与 421M 本地权重三引擎在俄罗斯方块与 1024 上用逐字节相同的题面公平对局，录制每步选择与概率分布，在纯静态三面板回放站同步播放。",
      "story": [
          "同一 (game, seed) 下三个引擎看到完全相同的 state 文本与选项描述——对局协议即公平性保证；答案规范化到 TypeSafe 契约：probabilities 键完备、归一、choice=argmax。",
          "Tetris 死亡规则 = 落点越出顶边；1024 选项描述必须携带真实合并后果数据——纯方向词会让所有模型原地打转。这是措辞工程，不是模型能力问题。"
      ],
      "facts": [
          [
              "引擎",
              "3（API / 0.6B / 421M）"
          ],
          [
              "游戏",
              "Tetris · 1024"
          ],
          [
              "回放站",
              "纯静态 · 0 框架"
          ]
      ],
      "repo": "https://github.com/Samge0/jev-arena",
      "links": [
          {
              "label": "源码",
              "href": "https://github.com/Samge0/jev-arena"
          }
      ]
  },
  {
      "id": "booster-match-runner",
      "name": "booster-match-runner",
      "title": "Booster Match Runner",
      "subtitle": "3v3 机器人足球对抗面板",
      "period": "2026.07–09",
      "lang": "TypeScript",
      "tags": [
          "vscode-extension",
          "agent-vs-agent",
          "i18n"
      ],
      "summary": "Booster Studio 侧栏面板：选两个 agent 开一场红蓝 3v3 机器人足球，实时比分、关键事件时间线、无头跑批、对局档案自动归档与 MP4 录制。",
      "story": [
          "比分每 3 秒轮询、终场自动判定；进球/犯规/定位球从容器 events.jsonl 增量读取，生成关键事件时间线。",
          "整块面板——每个标签、按钮、事件名——一键切换中英文，语言选择被记住。"
      ],
      "facts": [
          [
              "形态",
              "VS Code 侧栏扩展"
          ],
          [
              "模式",
              "可视化对局 · 无头跑批"
          ],
          [
              "产物",
              "ZIP 档案 · CSV · MP4"
          ]
      ],
      "repo": "https://github.com/Samge0/booster-match-runner",
      "links": [
          {
              "label": "源码",
              "href": "https://github.com/Samge0/booster-match-runner"
          }
      ]
  },
  {
      "id": "BizOwl",
      "name": "BizOwl",
      "title": "BizOwl",
      "subtitle": "AI 商业助手桌面 Agent",
      "period": "2026.08",
      "lang": "JavaScript · Electron",
      "tags": [
          "desktop-agent",
          "memory",
          "apple-design"
      ],
      "summary": "Electron 桌面 Agent 应用：流式对话、跨会话持久记忆、多引擎聚合搜索、7 阶段研报导出 PDF，Apple Design System 风格 UI。",
      "story": [
          "记忆系统：Agent 自动学习用户偏好与历史经验，懒加载不占上下文，空闲时自动压缩记忆块，USER.md 持久化人设画像。",
          "健壮性：首字节 + 流空闲双超时优雅降级——超时不崩溃，基于已收集数据生成部分结论；Token 三指标 80% 黄 / 95% 红预警。"
      ],
      "facts": [
          [
              "记忆",
              "跨会话 · 懒加载 · 自动压缩"
          ],
          [
              "研报",
              "7 阶段方法论 → PDF"
          ],
          [
              "UI",
              "毛玻璃 · SF Pro · Action Blue"
          ]
      ],
      "repo": "https://github.com/Samge0/BizOwl",
      "links": [
          {
              "label": "源码",
              "href": "https://github.com/Samge0/BizOwl"
          }
      ]
  },
  {
      "id": "hermes-research-report-agent",
      "name": "hermes-research-report-agent",
      "title": "Report Sage",
      "subtitle": "研报洞察 Agent · Hermes profile 分发",
      "period": "2026.07",
      "lang": "Python",
      "tags": [
          "hermes-profile",
          "research-agent",
          "pdf"
      ],
      "summary": "把「研究报告分析师」完整打包成 Hermes profile：人格 SOUL.md + 工作流技能 + PDF 渲染脚本 + 报告模板，一条命令安装，一句话生成研报 PDF。",
      "story": [
          "多源采集（WebSearch/WebFetch/browser/curl 交叉验证）→ 多维打分（0–10 分 + 加权 + 置信度 + 依据可追溯）→ headless Chrome 渲染结构化 PDF。",
          "分发内容与用户数据边界清晰：SOUL.md/skills/ 随更新替换，.env/memories/ 永不被触碰——更新不破坏用户态。"
      ],
      "facts": [
          [
              "安装",
              "hermes profile install 一条命令"
          ],
          [
              "输出",
              "封面/摘要/目录/评分表/文献"
          ],
          [
              "依赖",
              "7 个 skill 完整声明"
          ]
      ],
      "repo": "https://github.com/Samge0/hermes-research-report-agent",
      "links": [
          {
              "label": "源码",
              "href": "https://github.com/Samge0/hermes-research-report-agent"
          }
      ]
  },
  {
      "id": "ragflow-upload",
      "name": "ragflow-upload",
      "title": "RAGFlow Upload",
      "subtitle": "知识库批量上传工具",
      "period": "2024–2026",
      "lang": "Python",
      "tags": [
          "rag",
          "batch-tool",
          "cross-platform"
      ],
      "summary": "RAGFlow 知识库文档批量上传与解析工具，★ 535 星、跨 Windows/macOS/Linux 的独立客户端。从 RAGFlow v0.19 一路适配到 v0.26.2+。",
      "story": [
          "自动遍历目录树逐个上传解析，处理进度落盘——中断重跑自动跳过已完成文件。",
          "跨度 11 个月的版本重构：老版 RAGFlow API 变更大、新版客户端不再兼容时，按 RAGFlow 版本给用户明确的客户端选择指引。"
      ],
      "facts": [
          [
              "社区",
              "★ 535 · 多国用户 issue"
          ],
          [
              "平台",
              "Windows / macOS / Linux"
          ],
          [
              "形态",
              "CLI + 独立 GUI 客户端"
          ]
      ],
      "repo": "https://github.com/Samge0/ragflow-upload",
      "links": [
          {
              "label": "源码",
              "href": "https://github.com/Samge0/ragflow-upload"
          }
      ]
  },
];

const ONLINE = [
  { name: "AgentInterview", cat: "agent", date: "2026-09-06", desc: "仿多邻国交互样式的 Agent 面试题学习小工具", lang: "HTML", url: "https://ms-agent.samgeai.com/app/", demo: "live" },
  { name: "wzyp-view", cat: "agent", date: "2026-09-11", desc: "链动小铺店铺数据洞察 · FastAPI + LangGraph", lang: "HTML", url: "https://samge0.github.io/wzyp-view/", demo: "live" },
  { name: "hermes-research-report-webui", cat: "agent", date: "2026-07-24", desc: "研究报告 Agent 的独立 WebUI", lang: "HTML", url: "https://samge0.github.io/hermes-research-report-webui/", demo: "live" },
  { name: "ai-agent-book-skill", cat: "agent", date: "2026-07-22", desc: "《深入理解 AI Agent》提炼的即用技能合集", lang: "Markdown", url: "https://samge0.github.io/ai-agent-book-skill/", demo: "live" },
  { name: "mbti-agents-sandbox", cat: "agent", date: "2026-04-16", desc: "AgentScope 多 agent 沙盘：16 型 MBTI 圆桌讨论", lang: "Python", url: "https://samge0.github.io/mbti-agents-sandbox/", demo: "live" },
  { name: "dsh-plugin-nexterm", cat: "agent", date: "2026-08-17", desc: "Nexterm 批量运维 DeepSeek Harness 插件", lang: "JavaScript", url: "https://samge0.github.io/dsh-plugin-nexterm/", demo: "live" },
  { name: "dsh-plugin-qcc", cat: "agent", date: "2026-08-15", desc: "企查查数据源 DSH 插件：5 agent 工具 + 扫码登录", lang: "JavaScript", url: "https://samge0.github.io/dsh-plugin-qcc/", demo: "live" },
  { name: "AgentDoc", cat: "agent", date: "2026-08-13", desc: "AI Agent / 大模型应用开发学习教程合集", lang: "Python", url: "https://samge0.github.io/AgentDoc/", demo: "live" },
  { name: "langchain-langgraph-demos", cat: "agent", date: "2026-09-06", desc: "LangChain / LangGraph / Agent 学习 Demos", lang: "Python", url: "https://github.com/Samge0/langchain-langgraph-demos", demo: "code" },
  { name: "ai-interview", cat: "agent", date: "2026-04-20", desc: "AI 深访实验", lang: "HTML", url: "https://samge0.github.io/ai-interview/", demo: "live" },
  { name: "openai-api-free", cat: "agent", date: "2026-09-02", desc: "openai 账号轮询 chatgpt web 端接口", lang: "Python", url: "https://github.com/Samge0/openai-api-free", demo: "code" },
  { name: "langgraph-demo", cat: "agent", date: "2026-08-24", desc: "langgraph 练习 demo", lang: "Python", url: "https://github.com/Samge0/langgraph-demo", demo: "code" },
  { name: "mcp-qqmusic-test-server", cat: "tool", date: "2025-03-24", desc: "QQ音乐搜索 MCP 测试服务器", lang: "Python", url: "https://samge0.github.io/mcp-qqmusic-test-server/", demo: "live" },
  { name: "pixelle-video-mcp-server", cat: "tool", date: "2026-04-22", desc: "FastMCP 视频生成服务器 · Playwright 自动化", lang: "Python", url: "https://samge0.github.io/pixelle-video-mcp-server/", demo: "live" },
  { name: "mind-docs", cat: "tool", date: "2026-08-18", desc: "个人知识思维导图静态站", lang: "Python", url: "https://samge0.github.io/mind-docs/", demo: "live" },
  { name: "openai-api-calcul", cat: "tool", date: "2024-06", desc: "openai 接口计费 API + gradio 界面", lang: "Python", url: "https://samge0.github.io/openai-api-calcul/", demo: "live" },
  { name: "notionai-api-py", cat: "tool", date: "2024-06", desc: "NotionAI 页面 API 接口 + token 校验", lang: "Python", url: "https://samge0.github.io/notionai-api-py/", demo: "live" },
  { name: "forward_openai", cat: "tool", date: "2023-11-01", desc: "go+docker 转发 OpenAI API，支持 stream", lang: "Go", url: "https://samge0.github.io/forward_openai/", demo: "live" },
  { name: "F5-TTS-API", cat: "tool", date: "2024-10-31", desc: "F5-TTS 的 API，docker 运行", lang: "Python", url: "https://samge0.github.io/F5-TTS-API/", demo: "live" },
  { name: "ttsmaker-download", cat: "tool", date: "2024-10-18", desc: "下载 ttsmaker 示例音频，搭配 F5 TTS 测试", lang: "Python", url: "https://samge0.github.io/ttsmaker-download/", demo: "live" },
  { name: "paddleocr", cat: "tool", date: "2024-04-29", desc: "OCR 识别图片数字 API + token 校验", lang: "Python", url: "https://samge0.github.io/paddleocr/", demo: "live" },
  { name: "samge-blog", cat: "tool", date: "2024-05-27", desc: "个人博客", lang: "None", url: "https://samge0.github.io/samge-blog/", demo: "live" },
  { name: "mypac", cat: "tool", date: "2026-07-28", desc: "轻量级 PAC 自动代理服务", lang: "Python", url: "https://samge0.github.io/mypac/", demo: "live" },
  { name: "wujindongri", cat: "tool", date: "2024-12-07", desc: "无尽冬日自动点击治疗 + 自动狩猎脚本", lang: "Python", url: "https://samge0.github.io/wujindongri/", demo: "live" },
  { name: "dlg_cv_demo", cat: "tool", date: "2025-06-07", desc: "多邻国自动答题：cv 识别 + adb 截图点击", lang: "Python", url: "https://samge0.github.io/dlg_cv_demo/", demo: "live" },
  { name: "wyy-artist-recorder", cat: "tool", date: "2026-04-20", desc: "网易云音乐歌手信息变化监控与通知", lang: "Python", url: "https://samge0.github.io/wyy-artist-recorder/", demo: "live" },
  { name: "DelBaiDuSnapshot", cat: "tool", date: "2024-01", desc: "半自动提交删除百度快照申请脚本", lang: "Python", url: "https://samge0.github.io/DelBaiDuSnapshot/", demo: "live" },
  { name: "parse-baidumap", cat: "tool", date: "2024-12-02", desc: "百度围栏坐标解析小工具", lang: "Python", url: "https://samge0.github.io/parse-baidumap/", demo: "live" },
  { name: "delete-file", cat: "tool", date: "2026-04-15", desc: "just delete-file", lang: "Python", url: "https://samge0.github.io/delete-file/", demo: "live" },
  { name: "GPU-Z-WEB", cat: "tool", date: "2026-04-15", desc: "GPU-Z WEB 复刻", lang: "Python", url: "https://samge0.github.io/GPU-Z-WEB/", demo: "live" },
  { name: "doc-crawler", cat: "tool", date: "2024-08-26", desc: "页面文档转 markdown & 上传 RAG 知识库", lang: "Python", url: "https://samge0.github.io/doc-crawler/", demo: "live" },
  { name: "dify-upload", cat: "tool", date: "2024-08-29", desc: "Dify 知识库批量上传解析", lang: "Python", url: "https://samge0.github.io/dify-upload/", demo: "live" },
  { name: "chromium-jsrpc", cat: "tool", date: "2025-08-15", desc: "Chromium + JsRPC 容器化方案，免证书配置", lang: "Dockerfile", url: "https://samge0.github.io/chromium-jsrpc/", demo: "live" },
  { name: "IOPaint-docker", cat: "tool", date: "2024-06-07", desc: "IOPaint docker 镜像构建", lang: "Python", url: "https://samge0.github.io/IOPaint-docker/", demo: "live" },
  { name: "DockerProxyOneKey", cat: "tool", date: "2024-08-13", desc: "一键部署 docker 镜像加速 + Caddy2 TLS", lang: "Shell", url: "https://samge0.github.io/DockerProxyOneKey/", demo: "live" },
  { name: "ros2-install-script", cat: "tool", date: "2026-04-28", desc: "ROS2 安装脚本", lang: "Shell", url: "https://samge0.github.io/ros2-install-script/", demo: "live" },
  { name: "velxio-updater", cat: "tool", date: "2026-05-08", desc: "velxio 项目 diagram.json/sketch.ino 更新 CLI", lang: "Python", url: "https://samge0.github.io/velxio-updater/", demo: "live" },
  { name: "doccano-docker", cat: "tool", date: "2024-09-06", desc: "Doccano Custom REST 请求数据修复", lang: "Dockerfile", url: "https://samge0.github.io/doccano-docker/", demo: "live" },
  { name: "product_design_civitai_image", cat: "tool", date: "2026-04-04", desc: "civitai_com_image", lang: "Python", url: "https://samge0.github.io/product_design_civitai_image/", demo: "live" },
  { name: "design_down_demo", cat: "tool", date: "2026-04-02", desc: "design_down_demo", lang: "Python", url: "https://samge0.github.io/design_down_demo/", demo: "live" },
  { name: "hello-hexo", cat: "tool", date: "2024-03-28", desc: "hello hexo", lang: "None", url: "https://samge0.github.io/hello-hexo/", demo: "live" },
  { name: "test-week-n", cat: "tool", date: "2026-07-17", desc: "some test", lang: "Python", url: "https://samge0.github.io/test-week-n/", demo: "live" },
  { name: "vscode-samge-translate", cat: "app", date: "2024-01-27", desc: "VSCode 翻译助手：多引擎 + 命名变量转换", lang: "TypeScript", url: "https://samge0.github.io/vscode-samge-translate/", demo: "live" },
  { name: "boxuegu-video", cat: "app", date: "2026-08-08", desc: "Electron 博学谷视频播放客户端", lang: "JavaScript", url: "https://samge0.github.io/boxuegu-video/", demo: "live" },
  { name: "video-cutter", cat: "app", date: "2025-03-09", desc: "视频上传与片段剪辑 Web 应用", lang: "HTML", url: "https://samge0.github.io/video-cutter/", demo: "live" },
  { name: "json2arkts", cat: "app", date: "2024-11-10", desc: "JSON 转鸿蒙 ArkTS Interface/Class", lang: "Python", url: "https://samge0.github.io/json2arkts/", demo: "live" },
  { name: "ssqc", cat: "app", date: "2026-08-25", desc: "拍照自动识别双色球是否中奖", lang: "HTML", url: "https://samge0.github.io/ssqc/", demo: "live" },
  { name: "SamgeBotWx", cat: "app", date: "2024-02", desc: "openwechat + openai 微信 bot", lang: "Go", url: "https://samge0.github.io/SamgeBotWx/", demo: "live" },
  { name: "SamgeBotQq", cat: "app", date: "2024-02", desc: "go-Pichubot + openai QQ bot", lang: "Go", url: "https://samge0.github.io/SamgeBotQq/", demo: "live" },
  { name: "apk-copilot", cat: "app", date: "2024-03", desc: "ApkCopilot 多渠道打包签名 + gradio 界面", lang: "Python", url: "https://samge0.github.io/apk-copilot/", demo: "live" },
  { name: "BiTrans", cat: "app", date: "2026-09-20", desc: "免费实时双语语音翻译（Android）", lang: "Kotlin", url: "https://github.com/Samge0/BiTrans", demo: "code" },
  { name: "funny-pets", cat: "app", date: "2026-09-15", desc: "纯前端原创精灵捕捉休闲小游戏", lang: "JavaScript", url: "https://funny-pets.samgeai.com/", demo: "live" },
  { name: "test2neo4j", cat: "ai", date: "2024-08-30", desc: "文档 → 关系抽取 → Neo4j 知识图谱", lang: "Python", url: "https://samge0.github.io/test2neo4j/", demo: "live" },
  { name: "yolo8-plus-iopaint", cat: "ai", date: "2024-05-31", desc: "YOLOv8 水印检测 + IOPaint 移除", lang: "Python", url: "https://samge0.github.io/yolo8-plus-iopaint/", demo: "live" },
  { name: "yolo8-watermark-brand", cat: "ai", date: "2024-05-31", desc: "labelImg 标注 + YOLOv8 水印检测", lang: "Python", url: "https://samge0.github.io/yolo8-watermark-brand/", demo: "live" },
  { name: "yolo8-watermark-xhs", cat: "ai", date: "2024-06-13", desc: "小红书 logo 水印检测 demo", lang: "Python", url: "https://samge0.github.io/yolo8-watermark-xhs/", demo: "live" },
  { name: "remove-watermark-xhs", cat: "ai", date: "2024-06-17", desc: "移除小红书 logo 水印 demo", lang: "Python", url: "https://samge0.github.io/remove-watermark-xhs/", demo: "live" },
  { name: "ms-swift-train", cat: "ai", date: "2024-09-13", desc: "ms-swift 微调 Qwen1.5-7B → Ollama 格式", lang: "Python", url: "https://samge0.github.io/ms-swift-train/", demo: "live" },
  { name: "ChatTTS-fork", cat: "ai", date: "2024-05-29", desc: "ChatTTS fork（学习用）", lang: "Jupyter", url: "https://samge0.github.io/ChatTTS-fork/", demo: "live" },
  { name: "manim-examples", cat: "ai", date: "2024-10-18", desc: "manim 官网 examples v0.8.1", lang: "Jupyter", url: "https://samge0.github.io/manim-examples/", demo: "live" },
  { name: "SimpleShooterGame", cat: "ai", date: "2025-03-25", desc: "Godot + godot-mcp 构建的 2D 射击游戏", lang: "GDScript", url: "https://samge0.github.io/SimpleShooterGame/", demo: "live" },
];

const FORKS = [
  { name: "laya", desc: "421M 决策模型权重（jev-arena 对局引擎之一）", url: "https://github.com/Samge0/laya" },
  { name: "deepseek-harness", desc: "DeepSeek Harness: Everything is a Plugin", url: "https://github.com/Samge0/deepseek-harness" },
  { name: "awesome-dsh-plugin", desc: "DSH 插件精选列表", url: "https://github.com/Samge0/awesome-dsh-plugin" },
  { name: "Blue-Whale-Harness", desc: "DeepSeek Harness Plugins", url: "https://github.com/Samge0/Blue-Whale-Harness" },
  { name: "langgraph-multi-agent", desc: "LangGraph Multi-Agent System", url: "https://github.com/Samge0/langgraph-multi-agent" },
  { name: "MotrixLab", desc: "机器人训练通用 ML 架构", url: "https://github.com/Samge0/MotrixLab" },
  { name: "llm-benchmark", desc: "LLM 并发性能测试工具", url: "https://github.com/Samge0/llm-benchmark" },
  { name: "claw-code", desc: "史上最快破 50K star 的仓库", url: "https://github.com/Samge0/claw-code" },
  { name: "hexstrike-ai", desc: "HexStrike AI MCP Agents", url: "https://github.com/Samge0/hexstrike-ai" },
  { name: "Pixelle-Video", desc: "AI 全自动短视频引擎", url: "https://github.com/Samge0/Pixelle-Video" },
  { name: "BigBanana-AI-Director", desc: "AI 短剧/漫剧导演平台", url: "https://github.com/Samge0/BigBanana-AI-Director" },
  { name: "CineGen-AI", desc: "AI 漫剧/动漫生成系统", url: "https://github.com/Samge0/CineGen-AI" },
  { name: "NarratoAI", desc: "AI 一键解说并剪辑视频", url: "https://github.com/Samge0/NarratoAI" },
  { name: "api-enhanced", desc: "网易云音乐 API 接口", url: "https://github.com/Samge0/api-enhanced" },
  { name: "frigate", desc: "IP 摄像头 NVR 实时目标检测", url: "https://github.com/Samge0/frigate" },
  { name: "github-readme-stats", desc: "GitHub README 动态统计", url: "https://github.com/Samge0/github-readme-stats" },
  { name: "NotionNext", desc: "Notion 静态博客系统", url: "https://github.com/Samge0/NotionNext" },
  { name: "Leonids", desc: "Android 粒子系统", url: "https://github.com/Samge0/Leonids" },
  { name: "html-text", desc: "Android RichText 富文本解析器", url: "https://github.com/Samge0/html-text" },
  { name: "OrionTV", desc: "React Native TVOS 播放器", url: "https://github.com/Samge0/OrionTV" },
  { name: "termux-app", desc: "Android 终端模拟器", url: "https://github.com/Samge0/termux-app" },
  { name: "ubuntu-novnc-quickstart", desc: "Ubuntu noVNC 快速启动", url: "https://github.com/Samge0/ubuntu-novnc-quickstart" },
  { name: "JsRpc", desc: "远程调用浏览器方法", url: "https://github.com/Samge0/JsRpc" },
  { name: "DuckDuckGo-API", desc: "DuckDuckGo 搜索 API", url: "https://github.com/Samge0/DuckDuckGo-API" },
  { name: "wechat_articles_spider", desc: "微信公众号文章爬虫", url: "https://github.com/Samge0/wechat_articles_spider" },
  { name: "wedecode", desc: "小程序 wxapkg 源码还原", url: "https://github.com/Samge0/wedecode" },
  { name: "ChinaTextbook", desc: "小初高大学 PDF 教材", url: "https://github.com/Samge0/ChinaTextbook" },
  { name: "APIJSON", desc: "后端接口和文档自动化", url: "https://github.com/Samge0/APIJSON" },
  { name: "hackingtool", desc: "All in one hacking tool", url: "https://github.com/Samge0/hackingtool" },
  { name: "RedTeam_BlueTeam_HW", desc: "红蓝对抗工具资料", url: "https://github.com/Samge0/RedTeam_BlueTeam_HW" },
  { name: "web-sec", desc: "WEB 安全手册", url: "https://github.com/Samge0/web-sec" },
  { name: "fiddler-everywhere-patch-automated", desc: "Fiddler patch 自动化", url: "https://github.com/Samge0/fiddler-everywhere-patch-automated" },
  { name: "openzep", desc: "学习参考", url: "https://github.com/Samge0/openzep" },
];

window.PROJECTS = { FEATURED, ONLINE, FORKS };
