# Windows 大量創立使用者
## 影片教學
<video width="560" height="315" controls>
  <source src="/videos/ap-4.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 程式碼
```c
$path="CN=Users, DC=,DC="
$domain=""
$user="AD"
$group="ADGroup"
$password="ADUserpassword"
$count=1..10
foreach($i in $count) {
	$num=$i.ToString('00')
	New-AdUser -Name "$user$num" -SamAccountName "$user$num" -EmailAddress "$user$num@$domain" -Path $path -Enabled $True -PasswordNeverExpires $true -ChangePasswordAtLogon $false -AccountPassword (ConvertTo-SecureString "$password" -AsPlainText -force)
	Add-ADGroupMember -Identity "$group" -Members "$user$num"
}
```
## 解釋
### 變數定義
```c
$path="CN=Users,DC=example,DC=com"
$domain="example.com"
$user="AD"
$group="ADGroup"
$password="ADUserpassword"
$count=1..10
```
$path：Active Directory 的預設 OU (組織單位) 路徑，這裡是 CN=Users,DC=example,DC=com。

$domain：網域名稱，如 example.com。

$user：使用者名稱的前綴。

$group：要加入的 AD 群組名稱。

$password：預設的使用者密碼。

$count：從 1 到 10 的數字序列，用於建立 10 個使用者。
### 迴圈建立使用者
```
foreach($i in $count) {
    $num=$i.ToString('00')
```
使用 foreach 迴圈遍歷 $count，即 1 到 10。

```$i.ToString('00')```：將數字格式化為兩位數，01 至 10。

### 建立 AD 使用者
```c
New-AdUser -Name "$user$num" -SamAccountName "$user$num" -EmailAddress "$user$num@$domain" -Path $path -Enabled $True -PasswordNeverExpires $true -ChangePasswordAtLogon $false -AccountPassword (ConvertTo-SecureString "$password" -AsPlainText -force)
```
New-AdUser：用於在 Active Directory 中建立新使用者。

-Name：使用者的全名 (顯示名稱)。

-SamAccountName：使用者登入名稱 (SAM 帳戶名稱)。

-EmailAddress：設定使用者的電子郵件地址。

-Path：將使用者建立於指定 OU (這裡是 CN=Users)。

-Enabled $True：啟用帳戶。

-PasswordNeverExpires $true：設定密碼永不過期。

-ChangePasswordAtLogon $false：設定使用者首次登入時不強制更改密碼。

-AccountPassword：設定使用者密碼。
```(ConvertTo-SecureString "$password" -AsPlainText -force)```：將密碼轉換為安全字串。
### 加入群組
```c
Add-ADGroupMember -Identity "$group" -Members "$user$num"
```
Add-ADGroupMember：將使用者加入指定的 AD 群組。


-Identity "$group"：指定群組名稱。

-Members "$user$num"：將新建立的使用者加入群組。
## 範例
```c
$path="CN=Users,DC=school,DC=local"
$domain="school.local"
$user="student"
$group="StudentsGroup"
$password="SecureP@ss123"
$count=1..50
foreach($i in $count) {
 $num=$i.ToString('00')
 New-AdUser -Name "$user$num" -SamAccountName "$user$num" -EmailAddress "$user$num@$domain" -Path $path -Enabled $True -PasswordNeverExpires $true -ChangePasswordAtLogon $false -AccountPassword (ConvertTo-SecureString "$password" -AsPlainText -force)
 Add-ADGroupMember -Identity "$group" -Members "$user$num"
}
```
這段程式碼會執行：
建立 50 個名為 student01 至 student50 的 AD 使用者。

使用者的密碼為 SecureP@ss123。

將這些使用者加入 StudentsGroup 群組。

## 注意事項
1. **Active Directory 模組**：
    - 必須在 Windows Server 上安裝 **Active Directory 模組** (`RSAT: Active Directory`)。
    - 可使用 `Import-Module ActiveDirectory` 手動載入模組。
2. **執行權限**：
    - 需要 **系統管理員權限** 才能創建 AD 使用者。
3. **防止重複建立**：
    - 在建立前可使用 `Get-ADUser` 檢查使用者是否已存在。
