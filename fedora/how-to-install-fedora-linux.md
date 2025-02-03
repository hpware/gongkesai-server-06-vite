# 如何安裝 Windows Server 2019

## 影片教學
<video width="560" height="315" controls>
  <source src="/videos/ap-11.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 步驟

### 1. 配置虛擬機

- **名稱**: 輸入VM 名稱 `Fedora`。
- **記憶體大小**: 分配 **4GB RAM**
- **硬碟**: 選擇 **立即建立虛擬硬碟**。
- **硬碟文件類型**: 選擇 `VDI (VirtualBox Disk Image)`。
- **硬碟存儲方式**: 選擇 `動態分配`。
- **文件位置與大小**: 設置 **60GB**。

### 2. 調整設置

- 設置 **處理器** 數量為 `4`
- 增加 **顯示記憶體** 至 `128MB`
- 選擇掛載 **Fedora ISO 文件**
- 設置 **網絡介面** 為 `橋接網絡`。

### 3. 安裝 Fedora

1. 啟動虛擬機並從 Fedora ISO 啟動。
2. 選擇 **安裝 Fedora**。
3. 選擇 **語言**: `繁體中文 (台灣)`。
4. 點擊 **繼續**。
5. 選擇 **安裝目的地**，按兩下硬碟，並點擊 **完成**。
6. 點擊 **開始安裝**。
7. 裝完時要關機並在 **存儲設置** 中移除的Fedora ISO

### 4. 設置系統
1. 設定一個隨便創立的使用者，例如 q w 或 a
2. 密碼和名稱設立一樣的
3. 進入桌面後，打開終端機 (Terminal)，並輸入 `sudo -i` 這個讓我們進入root mode，輸入密碼後，再打入 `passwd`　來設定密碼，密碼設定為 `Skills@2024`
4. 登出我們之前創立的使用者，按沒有列出來，帳號輸入 root，密碼輸入前面所設定的密碼 aka `Skills@2024`，並登入
5. 打開設定並設定固定IP 
    - 設置 **固定 IP 地址**:
    - 打開 **網絡設置**。
    - 選擇 **手動配置**。
    - IP: `192.168.1.110`
    - 子網掩碼: `255.255.255.0`
    - 閘道: `192.168.1.254`
    - DNS: `192.168.1.254`
6. 打開終端機，並輸入 `userdel`前面創立的使用者 例: `userdel q`


<!--Part of this guide is made according to the video transcript to AI aka ChatGPT-4o -->