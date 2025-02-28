# 如何在 Fedora 38 設定 SSH

## 影片教學

<video width="560" height="315" controls>
我還沒做ㄟ
</video>

## 步驟

(你必需先完成「[如何設定Fedora](/fedora/how-to-setup-fedora-linux-2.md)」再繼續做)

1. 刪除原本的設定

```bash
rm -rf /etc/samba/smb.conf
```
**!! 重要: 這是強制刪除的指令，請不要白癡的跑 `rm -rf /` 這會強制清掉系統，安全的點的就是只有 `rm` !!**

2. 創立新的 config

```bash
touch /etc/samba/smb.conf
```

3. 編輯 smb.conf ，可以用 nano 或 vi(vim)

```sh
nano /etc/samba/smb.conf
```

設定: 

```conf
[global]
	workgroup = SAMBA
	security = user
	passdb backend = tdbsam
[Fedora]
	path=/
	writeable = yes
	valid users = {{ group }}

```


nano 用 ctrl+x, y Enter 退出並儲存，vi(vim)則用 :wq


