# Windows 大量刪除使用者
## 程式碼
```c
$path="CN=Users, DC=ad,DC=com" # 取代 ad 和 com 成 你的AD網域
$domain="ad.com" # AD 網域
$user="AD" # 使用者開頭
$count=1..10 #多少？
foreach($i in $count) {
	$num=$i.ToString('00')
	Remove-AdUser -Identity "$user$num" -Confirm:$false
}
```
## 解釋
### 變數定義
```c
$path="CN=Users,DC=ad,DC=com"
$domain="ad.com"
$user="AD"
$count=1..10
```
$path：Active Directory 使用者的組織單位 (OU) 路徑。你需要根據自己的 AD 網域結構來修改。

$domain：AD 網域名稱 (如 ad.com)。

$user：使用者名稱的前綴 (例如 AD，表示所有使用者的帳號名稱為 AD01, AD02, 等等)。

$count：指定要刪除的使用者範圍，這裡是 1 到 10。
### 迴圈刪除使用者
```c
foreach($i in $count) {
    $num=$i.ToString('00')
    Remove-AdUser -Identity "$user$num" -Confirm:$false
}
```
foreach：用於遍歷 $count 範圍 (1 到 10)，這會執行 10 次刪除操作。

$i.ToString('00')：將數字格式化為兩位數 (01, 02, ..., 10)。

Remove-AdUser：用於刪除指定的 Active Directory 使用者。

-Identity "$user$num"：指定要刪除的使用者名稱，這裡是 AD01, AD02, ..., AD10。

-Confirm:$false：防止在刪除使用者時顯示確認提示，讓操作非互動化。

## 範例
```c
$path="CN=Users,DC=school,DC=local"
$domain="school.local"
$user="student"
$count=1..50
foreach($i in $count) {
    $num=$i.ToString('00')
    Remove-AdUser -Identity "$user$num" -Confirm:$false
}
```
這段程式碼會：
 - 刪除 50 個名為 student01 至 student50 的使用者帳號。
 - 在不顯示確認提示的情況下批量刪除這些使用者。

## 注意事項
1. 刪除操作是不可恢復的:
  - 請確保在執行此腳本前確實需要刪除這些使用者，因為刪除後無法直接恢復。
2. 確認使用者存在：
  - 在刪除之前，你可以檢查使用者是否存在：
```c
if (Get-ADUser -Filter {SamAccountName -eq "$user$num"}) {
    Remove-AdUser -Identity "$user$num" -Confirm:$false
}
```
3. 執行權限：
  - 這些操作需要 系統管理員權限。
