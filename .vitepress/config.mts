import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "工科賽伺服器Docs",
  description: "工科賽伺服器Docs",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首頁", link: "/" },
      { text: "Docs", link: "/docs/" },
    ],

    sidebar: [
      {
        text: "Windows 主機",
        items: [{ text: "Windows 主機", link: "/docs/windows" }],
      },
      {
        text: "Fedora 主機",
        items: [
          { text: "指令", link: "/docs/fedora-commands" },
          { text: "NFTables", link: "/docs/nftables" },
          { text: "SSL", link: "/docs/httpd-ssl" },
          { text: "NTP", link: "/docs/ntp" },
        ],
      },
      {
        text: "腳本",
        items: [
          {
            text: "Windows",
            items: [
              {
                text: "大量創立使用者",
                link: "/docs/scripts/windows-add-users",
              },
              { text: "", link: "/docs/nftables" },
            ],
          },
          {
            text: "Fedora",
            items: [
              {
                text: "大量創立使用者",
                link: "/docs/scripts/fedora-add-users",
              },
              { text: "", link: "/docs/nftables" },
            ],
          },
        ],
      },
      {
        text: "需要幫助?",
        items: [
          { text: "Email: edu@yuanhau.com", link: "mailto:edu@yuanhau.com" },
          {
            text: "Discord: @hwtw",
            link: "https://discord.com/users/918723093646684180",
          },
          {
            text: "GitHub 問題",
            link: "https://github.com/hpware/gongkesai-server-06/issues",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/hpware/gongkesai-server-06" },
    ],

    footer: {
      copyright: "&copy; 2025 吳元皓 | Licenced under MIT",
      message: "Powered by VitePress",
    },
    search: {
      provider: "local",
    },
    editLink: {
      pattern:
        "https://github.com/hpware/gongkesai-server-06-vite/edit/master/:path",
    },
  },
});
