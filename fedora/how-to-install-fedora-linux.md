# 如何安裝 Windows Server 2019

## 影片教學
<video width="560" height="315" controls>
  <source src="/videos/ap-11.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 步驟

### 1. 配置虛擬機

- **名稱**: 輸入您的 VM 名稱（例如 `Fedora`）。
- **類型**: 選擇 `Linux`。
- **版本**: 選擇 `Fedora (64-bit)`。
- **記憶體大小**: 至少分配 **4GB RAM**（建議 8GB）。
- **硬碟**: 選擇 **立即建立虛擬硬碟**。
- **硬碟文件類型**: 選擇 `VDI (VirtualBox Disk Image)`。
- **硬碟存儲方式**: 選擇 `動態分配`。
- **文件位置與大小**: 設置最少 **60GB**。

### 2. 調整設置

- **系統**:
    - 設置 **處理器** 數量為 `2` 或以上。
    - 啟用 **PAE/NX**。
- **顯示**:
    - 增加 **顯示記憶體** 至 `128MB`。
    - 啟用 **3D 加速**。
- **存儲**:
    - 選擇已創建的硬碟並掛載 **Fedora ISO 文件**。
- **網絡**:
    - 設置 **網絡介面 1** 為 `橋接網絡`。

### 3. 安裝 Fedora

- 啟動虛擬機並從 Fedora ISO 啟動。
- 選擇 **安裝 Fedora**。
- 選擇 **語言**: `繁體中文 (台灣)`。
- 點擊 **繼續**。
- 選擇 **安裝目的地** 並點擊 **完成**。
- 點擊 **開始安裝**。

### 4. 設置系統

- 創建 **root 密碼** 和用戶帳戶。
- 安裝完成後，重啟虛擬機。

### 5. 安裝後配置

- 在 **存儲設置** 中移除 Fedora ISO。
- 打開終端並運行:
    
    ```bash
    sudo dnf update -y
    sudo dnf install -y VirtualBox Guest Additions
    ```
    
- 設置 **固定 IP 地址**:
    - 打開 **網絡設置**。
    - 選擇 **手動配置**。
    - IP: `192.168.0.54`
    - 子網掩碼: `255.255.255.0`
    - 閘道: `192.168.0.1`
    - DNS: `192.168.0.4`

### 6. 優化性能

- 增加 CPU 分配至 **4 核**。
- 設置 RAM 至 **8GB**（如可行）。
- 在 **系統設置** 中啟用 **I/O APIC**。

### 7. 最後步驟

- 重新啟動虛擬機，即可順利使用 Fedora！

如果性能較慢，請檢查 CPU 和 RAM 設置，並確保已安裝 VirtualBox Guest Additions。

<!--Most of this guide is made according to the video transcript to AI aka ChatGPT-4o -->