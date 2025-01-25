# 在 IIS 上設定 Reverse Proxy

## 安裝檔

URL Rewrite: https://yhw.tw/QX1rE

Application Request Routing: https://yhw.tw/RNVcW

### 

## 影片教學

影片未做 SSL 請造著之前的教學來設定，以下步驟也有教學

<!--<video width="560" height="315" controls>
  <source src="/videos/ap-8.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>-->

## 步驟

**如果還沒有安裝 Internet Information Services 的請先安裝 Internet Information Services 再來做 Reverse Proxy**

### 申請憑證
1. 回到 **伺服器管理員**，點擊 **工具 (Tools)**，選擇 **IIS 管理員**

2. 按下左側 **伺服器名稱**，並選擇 **伺服器憑證 (Server Certificates)**

![](images/iis_select_server_li.png)


3. 點擊 **建立憑證申請 (Create Certificate Request)**

4. 填寫憑證資訊：
    - 常用名稱： 必須是你要的網域 (ex: old.obyhw.tw)
    - 剩下的隨便填就好

![](images/iis_cert_create.png)

5. 點擊 **下一步** **下一步**

6. 指定憑證請求的保存位置，點擊 **完成**

![](images/iis_request_cert.png)

7. 點開txt檔，並複製到剪貼簿上

8. 打開 IE，並輸入 ```http://localhost/certsrv``` 或是 ```http://host-12.obyhw.tw```

![](images/request_cert_1.png)

9. 按要求憑證，並按進階憑證要求

![](images/request_advanced_cert.png)

10. 按用 Base-64 編碼的 CMC ... 要求，並在 Base-64-encoded certificated request 輸入欄位中複製你剛剛複製的 Base-64

![](images/usebase64whatever.png)

11. 憑證範本為網頁伺服器（Web），並按提交

![](images/copy_from_cert_box_compelete_server.png)

12. 下載憑證後打開IIS 並 按完成憑證要求

![](images/download_cert.png)

![]()

13. 完成

### 設立 DNS
1. 按下 <kbd>Windows</kbd> 鍵，並打DNS，打開第一個選項

2. 在正向對應區域，點 你的網域 (ex: obyhw.tw)

3. 按右鍵，並按增加主機(A Record)

![](images/dns_sel_a_record.png)

4. 並在名稱上輸入 old (如果要 old.obyhw.tw 的話)，在IＰ位置輸入 192.168.1.254（主機）並安建立

![](images/dns_sel_ip_name.png)

###  設定 Reverse Proxy
1. 按下 <kbd>Windows</kbd> 鍵，並打IIS，打開第一個選項

2. 在左側欄選擇伺服器名稱，點擊 **網站**，然後右鍵選擇 **新增網站 (Add Website)**。

3. 輸入網站名稱、實體路徑、設定 IP 地址與 Port，並綁定 https 憑證的與關閉 https/2

4. 安裝模組
    - URL Rewrite
    - Application Request Routing (ARR)

5. 安裝完後，重新開機

6. 重開 IIS，並選擇你剛剛創立的網站

7. 在 URL Rewrite 中，點及反向 Proxy

8. 打入要反向的網站，例如: ******* https://yuanhau.com

### 驗證
打開 IE 並 輸入 ```https://你的網域``` (ex: ```https://www.obyhw.tw``` )

解果：

![](images/ie_haocom_complete.png)
