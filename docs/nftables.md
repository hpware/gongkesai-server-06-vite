# 設定 NFTables
## 關閉 Firewall-cmd
```bash
systemctl stop firewalld
systemctl disable firewalld
systemctl mask --now firewalld
```

## 初始設定
```bash
iptables-nft -F
iptables-nft -X
iptables-nft -Z
iptables-nft -nL
iptables-nft -P INPUT DROP
iptables-nft -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```
### 設定開啟的端口
```bash
iptables-nft -A INPUT -p tcp --dport 443 -j ACCEPT
iptables-nft -A INPUT -p tcp --dport 2224 -j ACCEPT
iptables-nft -A INPUT -p tcp --dport 137 -j ACCEPT
iptables-nft -A INPUT -p tcp --dport 138 -j ACCEPT
iptables-nft -A INPUT -p tcp --dport 139 -j ACCEPT
iptables-nft -A INPUT -p tcp --dport 445 -j ACCEPT
touch /etc/nftables/{{ name }}.nft
nft list ruleset | cat >> /etc/nftables/{{ name }}.nft
nano /etc/nftables/nftables.conf
```

有打開 443, 2224, 137, 138, 139, 445 的端口

最後三行是創立nft檔並複製 ruleset 到新創的檔案裡，並用nano打開主要的檔案(```/etc/nftables/nftables.conf```)來包含我們新創的ruleset檔案
```conf
include "/etc/nftables/{{ name }}.conf"
```
