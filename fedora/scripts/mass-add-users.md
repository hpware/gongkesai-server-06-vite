# Fedora 大量創立使用者
## 程式碼
```bash
u=""

for i in $(seq -f "%02g" 1 1 50)

do
	useradd -g {{ group }} -s /bin/bash $u$i
	echo "{{ password }}" | passwd --stdin $u$i
done
```
## 解釋
這段 Bash 腳本的功能是在 Fedora 系統上大量創建使用者帳號，並且為每個帳號設定密碼。以下是腳本的逐步解釋：

```bash
u=""
```
定義一個變數 u，儲存使用者名稱的前綴部分 (目前為空)。
```bash
for i in $(seq -f "%02g" 1 1 50)
for i in $(seq -f "%02g" 1 1 50)：使用 seq 產生一個從 1 到 50 的數列，並以兩位數格式表示 (01, 02, ..., 50)。
```
這裡的 ```-f "%02g"``` 會強制將數字格式化為兩位數。
```bash
useradd -g {{ group }} -s /bin/bash $u$i
useradd 是用於新增使用者的指令。
```

```-g {{ group }}```：將使用者加入指定的群組 ({{ group }} 是變數，應替換成實際的群組名稱)。

```-s /bin/bash```：設定使用者的預設 shell 為 Bash。

$u$i：建立的使用者名稱由變數 u (前綴) 加上數字序號組成，例如 user01、user02。
```bash
echo "{{ password }}" | passwd --stdin $u$i
```
這行用來設定使用者密碼。

```echo "{{ password }}"```：將密碼以純文字格式輸出 (變數應替換為實際密碼)。

```passwd --stdin $u$i：passwd``` 是用來變更密碼的指令，--stdin 表示透過標準輸入接收密碼，而不是互動式輸入。
## 範例
```bash
u="user"
for i in $(seq -f "%02g" 1 50); do
    useradd -g developers -s /bin/bash $u$i
    echo "SecurePassword123" | passwd --stdin $u$i
done
```
創建 user01 到 user50，將其加入 developers 群組並設定密碼為 SecurePassword123。
