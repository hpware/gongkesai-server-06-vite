# NTP 服務
在 bash 裡寫
```bash
firewall-cmd --add-service=ntp
firewall-cmd --runtime-to-permanent
systemctl enable chronyd
vi /etc/chrony.conf
```
### 刪除 
```conf
pool 2.fedora.pool.ntp.org iburst
```
### 增加
```bash
allow {{ ip }}/24
rtcsync
manual
local stratum 10
```
在bash裡繼續寫
```bash
systemctl start chronyd
systemctl restart chronyd
```
## 改時間
```bash
timedatectl set-time "{{ date }}"
chronyc makestep
```
