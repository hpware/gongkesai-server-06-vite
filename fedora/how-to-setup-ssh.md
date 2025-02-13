# 如何在 Fedora 38 設定 SSH

<!--## 影片教學
<!--
<video width="560" height="315" controls>
  <source src="/videos/ap-11.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>-->

## 步驟

(你必需先完成「[如何設定Fedora](/fedora/how-to-setup-fedora-linux-2.md)」再繼續做)

### 設定

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

```
Port 2424 
PermitRootLogin no
AllowUsers Fe? Fe10
```

Port 為它的連接埠，要用試場要求的連接埠 (2424)

PermitRoot Login 為 root 帳號登入，要用試場要求的設定 (基本上一定是不允許的，因為 root 是最高等級的使用者，和 Windows 的可以登入的 Administrator 差不多)

AllowUsers 是可以在範圍內的使用者，可以登入，?是 Wildcard，最後的帳號就是最後可以登的使用者
(113 年是 AIOT1~10 所以就是 AIOT? AIOT10)

4. 重新啟動 sshd

 ```bash
 systemctl restart sshd.service
 ```


5. 打開 ssh 的連接埠

(這個步驟可以越過，因為ssh有時候預設用 Firewalld 打開連接埠，但這個只確認的而已)
```bash 
firewall-cmd --add-service-ssh --permanent
```


### 確認



### 打開連接埠
**在 113 年的工科賽，有要把 ssh 公開到網路上 (要在 Windows Server 裡打開連接埠)**
