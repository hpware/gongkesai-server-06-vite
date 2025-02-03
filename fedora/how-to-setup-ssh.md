# 如何在 Fedora 38 設定 SSH

## 影片教學
<!--
<video width="560" height="315" controls>
  <source src="/videos/ap-11.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>-->

## 步驟

(你必需先完成「[如何設定Fedora](/fedora/how-to-setup-fedora-linux-2.md)」再繼續做)

1. cd 到 `/etc/ssh/`

```bash
cd /etc/ssh/
```

2. 編輯 sshd_config，可以用 nano 或 vi(vim)

```sh
nano sshd_config
```

nano 用 ctrl+x, y Enter 退出並儲存，vi(vim)則用 :wq

3. 在 sshd_config 中加入

```conf
Port 2224 
PermitRootLogin no
AllowUsers Fe? Fe10
```
Port 為它的端口，要用試場要求的端口 (2224)

PermitRootLogin 為 root 帳號登入，要用試場要求的設定

AllowUsers 是可以在範圍內的使用者，可以登入，?是 Wildcard，最後的帳號就是最後可以登的使用者

4. 重新啟動 sshd

 ```bash
 systemctl restart sshd.service
 ```