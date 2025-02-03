# 如何設定 Fedora Linux 38

## 安裝檔

Chrony: https://yhw.tw/GZ7Sr

## 影片教學
<!--
<video width="560" height="315" controls>
  <source src="/videos/ap-11.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>-->

## 步驟

1. 關閉 ntpd

```
systemctl stop ntpd.service
systemctl disable ntpd.service
systemctl mask ntpd.service
```

(後面可以不加 .service)

2. 安裝 Chrony

```
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

4. 啟動 Chrony

```
systemctl enable chronyd.service
systemctl start chronyd.service
```
(後面可以不加 .service)

5. 把自動更改使時間關掉   

```
chronyc manual on
```

6. 設定時間

```
chronyc settime 2026-08-20 05:00:05
```

設定 2026 年 8 月 20 日 5 點 0 分 5 秒