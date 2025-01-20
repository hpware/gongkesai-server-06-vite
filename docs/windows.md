# Windows 2019
## 檔案
Windows Server 2019 ISO: **還沒上傳**

Virtualbox 6.1: https://yhw.tw/Pj4BC


## 必要
1. 改變伺服器名 (!): 設定完 Active Directory 之後就無法更改
2. 要有第二個磁碟區! (!): 第一個建議要 80GiB (82500MB)

## 安裝時
- 管理者密碼(幾乎全部的密碼都)必須是 Skills@2025 (以免搞混)
- 提供的ISO已是中文版，如果有其他語言，遲早重灌
- 更改伺服器名!! 這是必須的
- IE 解除安全性
- 光碟機移除代號
- 格式化D槽 (必須要指定D槽)
- 更改網路孔的名稱並資訊
	1. 192.168.1.254  255.255.255.0 為 LAN (必須是第一選項)
	2. 140.118.1.1 255.255.255.0 為 WAN (必須是第二選項)
- DNS 設定為 localhost(127.0.0.1)
- AD 網域為 tpcu.edu (統一先這樣，可以改，例：yuanhau.com, sivs.edu)
- AD 密碼同管理者密碼
- 打開AD管理，創立使用者群組 (ITGroup, RDGroup, FeGroup)
- 大量創立使用者
- AD Cert 設定時要選 Certification Authority Web Enrollment(第4個) 沒有 Policy 和第一個選項
- AD Cert 照下
	1. 要求要憑證授權單位和憑證授權單位網頁註冊
	2. 在腳色服務，全選
	3. 企業CA
	4. 根CA
	5. SHA256
- 遠端存取 (NAT)
	1. 按路由 (會自動開 DirectAccess 與 VPN (RAS))
	2. !!!重要: 必須要選 僅部屬VPN!!!
	3. 自訂並選NAT
	4. 網路設定
		-  LAN -> 私人
		- WAN -> 公用 (必須啟用NAT)
	5. 開連接孔
		1. ssh -> 2224 -> 192.168.1.110
	6. 反向對應 (主要區域)
		- 192.168.1
		- 140.118.1
	7. 加等一下要加的虛擬機並主機 (PTR)
		1. linux-01 -> 192.168.1.110
		2. www -> 192.168.1.254
	8. 主機原本的DNS加PTR
- IIS
	1. 伺服器憑證在主頁裡 (如果找不到)
	2. 要求憑證 (除了網域和地區之外全填不相關的東西）
	3. http://localhost/certsrv 要求憑證
	4. 完成憑證要求
	5. 停用HTTP/2!!
- IE 主頁
- DHCP
	1. F192 -> 192.168.1.100 ~ 200 -> 255.255.255.0
		- KEEP  100~110
		- KEEP  254
- DFS
	- Main Host
		1. Public
		2. IT
		3. RD
- 顯示 P 硬碟，樓下有英文教學
- 登入自動打開IE
