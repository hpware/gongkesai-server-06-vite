import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "工科賽伺服器Docs",
  description: "工科賽伺服器Docs",
  lang: "zh-Hant",
  head: [
    ["meta", { name: "author", content: "吳元皓" }],
    ["meta", { name: "author-email", content: "hw@yuanhau.com" }],
    ["link", { ref: "icon", href: "/favicon.ico" }],
    [
      "script",
      {
        defer: "",
        src: "https://data.yuanhau.com/script.js",
        "data-website-id": "24112a66-9b42-4689-8926-d09cab651cff",
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首頁", link: "/" },
      { text: "Docs", link: "/docs/" },
    ],

    sidebar: [
      {
        text: "💻 客戶筆電",
        items: [{ text: "Customer-XX", link: "/laptop/" }],
      },
      {
        text: "Windows 主機",
        items: [
          { text: "安裝 Windows Server 2019", link: "/windows/how-to-install-windows-server-2019" },
          { text: "安裝 Active Directory", link: "/windows/how-to-install-active-directory" },
          {
            text: "腳本",
            items: [
              {
                text: "大量創立使用者",
                link: "/docs/scripts/windows-mass-add-users",
              },
              {
                text: "大量刪除使用者",
                link: "/docs/scripts/windows-mass-delete-users",
              },
              {
                text: "大量刪除使用者(雙數)",
                link: "/docs/scripts/windows-mass-delete-users-filter",
              },
              {
                text: "IIS 網頁",
                link: "/docs/windows-web-index"
              },
            ],
          },
        ],
      },
      {
        text: "Fedora 主機",
        items: [
          { text: "Fedora 教學", link: "/docs/fedora" },
          { text: "指令", link: "/docs/fedora-commands" },
          { text: "NFTables", link: "/docs/nftables" },
          { text: "SSL", link: "/docs/httpd-ssl" },
          { text: "NTP", link: "/docs/ntp" },
          {
            text: "網頁",
            items: [
              { text: "linux", link: "/docs/linux-index-html" },
              { text: "old", link: "/docs/oldpage-index-html" },
            ],
          },
          {
            text: "腳本",
            items: [
              {
                text: "大量創立使用者",
                link: "/docs/scripts/fedora-mass-add-users",
              },
              {
                text: "SMB 大量創立使用者",
                link: "/docs/scripts/smb-mass-add-users",
              },
            ],
          },
          {
            text: "軟體安裝",
            items: [{ text: "Fedora 38", link: "/docs/fedora-packages/38" }],
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
