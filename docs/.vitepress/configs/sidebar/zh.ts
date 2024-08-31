import { DefaultTheme } from "vitepress"
type Sidebar = DefaultTheme.Sidebar

export const sidebarZh: Sidebar = {
  '/zh/guide/': [
    {
      text: '指南',
      items: [
        {text: "关于", link: "/zh/guide/index.md"},
        {text: "快速开始", link: "/zh/guide/quickstart.md"},
        {text: "Capacitor/Ionic", link: "/zh/guide/capacitor.md"},
        {text: "常见问题", link: "/zh/guide/troubleshooting.md"},
        {text: "错误码", link: "/zh/guide/errcode.md"},
        {text: "更新日志", link: "/zh/guide/changelog.md"},
        {text: "特别鸣谢", link: "/zh/guide/thanks.md"}
      ],
    },
  ],
  '/zh/api/': [
    {
      text: 'API',
      items: [
        {
          text: "扫码（scan）",
          link: "/zh/api/scan.md"
        },
        {
          text: "停止扫码（stopScan）",
          link: "/zh/api/stop-scan.md"
        }
      ],
    },
  ],

}