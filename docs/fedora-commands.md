# Fedora 指令
## 改變主機名稱
```bash
hostnamectl set-hostname {{ hostname }}
```
## 刪除使用者
```bash
userde -r {{ user }}
```
## 增加群組
```bash
groupadd {{ group }}
```
## 增加使用者
```bash
useradd {{ user }}
```

## 使用者資訊
```bash
id {{ user }}
```
# 改 ssh 的端口
```bash
nano /etc/ssh/sshd_config
```
加
```conf
Port {{ port }}
PermitRootLogin no
AllowUsers {{ user (Wildcard add ?) }} {{ user  (last num)}}
```
# 改Samba分享的設定
```bash
rm -rf /etc/samba/smb.conf
nano /etc/samba/smb.conf
```

解釋:

我用 rm -rf 來刪除預設的smb的config檔

在編輯並創立smb的檔案

config:
```conf
[global]
	workgroup = SAMBA
	security = user
	passdb backend = tdbsam
[{{ samba share name }}]
	path={{ path }}
	writeable = yes
	valid users = {{ group }}
```
# 大量增加smb的使用者
```bash
user="username"
pwd="password-here"
for item in $(seq -f "%02g" 1 1 50)
do
	echo -ne "$pwd\n$pwd\n" | smbpasswd -a -s $u$i
done
```

### Restart
```bash
shutdown -r now
