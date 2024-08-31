import { DefaultTheme } from "vitepress"
type NavItem = DefaultTheme.NavItem

export const navbarEn: NavItem[] = [
  {
    text: 'Guide',
    link: "/guide"
  },
  {
    text: 'API',
    items: [
      {
        text: "Scan",
        link: "/api/login.md"
      },
      {
        text: "StopScan",
        link: "/api/stop-scan.md"
      }
    ],
  },
  {
    text: 'Capacitor/Ionic',
    link: "/guide/capacitor.md"
  },
]