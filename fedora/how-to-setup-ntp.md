# 如何設定 Fedora Linux 38

## 安裝檔

Chrony: https://yhw.tw/GZ7Sr

中華電信 NTPClock: https://yhw.tw/z424a

## 影片教學

<video width="560" height="315" controls>
我還沒做ㄟ
</video>


## 步驟

### 設定

(你必需先完成「[如何設定Fedora](/fedora/how-to-setup-fedora-linux-2.md)」再繼續做)

1. 關閉 ntpd

```bash
systemctl stop ntpd.service
systemctl disable ntpd.service
systemctl mask ntpd.service
```

(後面可以不加 .service)

2. 安裝 Chrony

```bash
rpm -ivh chrony-4.3-3.fc38.x86_64.rpm --force
```

3. 編輯檔案 ```/etc/chrony.conf```

##### 刪除
```conf
pool 2.fedora.pool.ntp.org iburst
```

##### 增加
```bash
allow 192.168.1.0/24
rtcsync
manual
local stratum 10
```

4. 把防火牆增加 ntp 服務
```bash
firewall-cmd --add-service=ntp
firewall-cmd --runtime-to-permanent
```

5. 啟動 Chrony

```bash
systemctl enable chronyd.service
systemctl start chronyd.service
```
(後面可以不加 .service)

6. 把自動更改使時間關掉   

```bash
chronyc manual on
```


6. 設定時間
```bash
chronyc settime 2026-08-20 05:00:05
```
設定的時間 2026 年 8 月 20 日 5 點 0 分 5 秒

### 確認

1. 在 Windows 裡執行 NTPClock.exe

2. 按右鍵，並按設定系統時區

3. 把預設網域/預設IP刪除，並增加IP，使用Fedora Linux 的 IP (192.168.1.110)

4. 按下矯正時間，並會看到和Fedora一樣的時間