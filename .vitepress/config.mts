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
        text: "客戶筆電",
        items: [{ text: "113", link: "/laptop/113" }],
      },
      {
        text: "Windows 主機",
        items: [
          {
            text: "安裝 Windows Server 2019",
            link: "/windows/install-windows-server-2019",
          },
          {
            text: "安裝 Active Directory",
            link: "/windows/install-active-directory",
          },
          {
            text: "安裝 Active Directory 憑證服務",
            link: "/windows/install-active-directory-certificate-services",
          },
          {
            text: "設定 IIS 並取得憑證",
            link: "/windows/setup-internet-information-services",
          },
          {
            text: "設定 NAT 與 安裝 DHCP",
            link: "/windows/install-dhcp-and-nat",
          },
          { text: "IE 首頁更改", link: "/windows/setup-ie-home-page" },
          { text: "安裝並設定 DFS", link: "/windows/install-dfs" },
          {
            text: "設定 IIS 反向代理服務",
            link: "/windows/setup-iis-revese-proxy",
          },
          { text: "安裝 VirtualBox", link: "/windows/install-virtualbox" },
          {
            text: "腳本",
            items: [
              {
                text: "大量創立使用者",
                link: "/windows/scripts/mass-add-users",
              },
              {
                text: "大量刪除使用者",
                link: "/windows/scripts/mass-delete-users",
              },
              {
                text: "大量刪除使用者(雙數)",
                link: "/windows/scripts/mass-delete-users-filter",
              },
              {
                text: "IIS 網頁",
                link: "/windows/scripts/web",
              },
            ],
          },
        ],
      },
      {
        text: "Fedora 主機",
        items: [
          { text: "安裝 Fedora 38", link: "/fedora/how-to-install-fedora-linux" },
          { text: "設定 Fedora 38", link: "/fedora/how-to-setup-fedora-linux-2"},
          { text: "安裝 SSH", link: "/fedora/how-to-setup-ssh"},
          { text: "安裝 httpd 與設定 SSL", link: "/fedora/how-to-setup-httpd"},
          { text: "安裝 NTP", link: "/fedora/how-to-setup-ntp"},
          {
            text: "腳本",
            items: [
              {
                text: "大量創立使用者",
                link: "/fedora/scripts/mass-add-users",
              },
              {
                text: "SMB 大量創立使用者",
                link: "/fedora/scripts/smb-mass-add-users",
              },
            ],
          },
          {
            text: "軟體安裝",
            link: "/fedora/packages/index",
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
  sitemap: {
    hostname: "https://gs06.edu.yhw.tw",
  },
});
