import { DefaultTheme } from "vitepress"
type NavItem = DefaultTheme.NavItem

export const navbarZh: NavItem[] = [
  {
    text: '指南',
    link: "/zh/guide/index.md"
  },
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
  {
    text: 'Capacitor/Ionic',
    link: "/zh/guide/capacitor.md"
  },
]