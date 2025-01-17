# SMB 大量創立使用者
## 程式碼
```bash
user=""
pwd=""
for item in $(seq -f "%02g" 1 1 50)
do
	echo -ne "$pwd\n$pwd\n" | smbpasswd -a -s $u$i
done
```
## 解釋
1. 變數定義
```bash
user=""
pwd=""
```
user=""：定義變數 user，用於儲存使用者名稱的前綴部分 (目前為空)。

pwd=""：定義變數 pwd，用於儲存設定的密碼 (目前為空，需要替換為實際的密碼)。
2. 迴圈產生使用者名稱
```bash
for item in $(seq -f "%02g" 1 1 50)
```
for item in $(seq -f "%02g" 1 1 50)：使用 seq 產生一個從 1 到 50 的數列，並將其格式化為兩位數 (01, 02, ..., 50)。

item 代表當前迴圈的數字，用於生成使用者名稱的後綴。
3. 創建 SMB 使用者
```bash
echo -ne "$pwd\n$pwd\n" | smbpasswd -a -s $u$i
echo -ne "$pwd\n$pwd\n"：
```

使用 echo 將密碼輸出兩次，分別對應 smbpasswd 指令需要的密碼輸入和確認輸入。

-n：禁止自動換行。

-e：啟用特殊字符（如 \n 表示換行）。

| smbpasswd -a -s $u$i：

smbpasswd：用於設定或修改 Samba 使用者的密碼。

-a：新增使用者到 Samba 的使用者資料庫。

-s：以非互動模式接收密碼輸入。

$u$i：將變數 user 的前綴與當前序號 (如 01, 02) 組合，生成 SMB 使用者名稱。

## 範例

假設我們需要創建名稱為 smbuser01 到 smbuser50 的 SMB 使用者，並設置密碼為 Password123：

```bash
user="smbuser"
pwd="Password123"

for item in $(seq -f "%02g" 1 50)
do
    echo -ne "$pwd\n$pwd\n" | smbpasswd -a -s $user$item
done
```
## 運作過程
生成使用者名稱：smbuser01, smbuser02, ..., smbuser50。

為每個使用者執行 smbpasswd 命令，並設定密碼為 Password123。

密碼會透過管道 (|) 傳入 smbpasswd，實現非互動式的密碼設定。
