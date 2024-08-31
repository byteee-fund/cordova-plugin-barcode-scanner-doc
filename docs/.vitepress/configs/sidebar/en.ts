import { DefaultTheme } from "vitepress"
type Sidebar = DefaultTheme.Sidebar

export const sidebarEn: Sidebar = {
  '/guide': [
    {
      text: 'Guide',
      items: [
        {text: "About", link: "/guide/index.md"},
        {text: "Quickstart", link: "/guide/quickstart.md"},
        {text: "Capacitor/Ionic", link: "/guide/capacitor.md"},
        {text: "Troubleshooting", link: "/guide/troubleshooting.md"},
        {text: "Errcode", link: "/guide/errcode.md"},
        {text: "Changelog", link: "/guide/changelog.md"},
        {text: "Thanks", link: "/guide/thanks.md"}
      ],
    },
  ],
  '/api/': [
    {
      text: 'API',
      items: [
        {
          text: "Scan",
          link: "/api/scan.md"
        },
        {
          text: "StopScan",
          link: "/api/stop-scan.md"
        },
      ],
    },
  ],

}