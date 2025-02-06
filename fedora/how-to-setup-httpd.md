# 如何在 Fedora 38 設定 HTTPd (Apache2)，設定 https，與網頁。

## 影片教學
<!--
<video width="560" height="315" controls>
  <source src="/videos/ap-11.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>-->

## 步驟

(你必需先完成「[如何設定Fedora](/fedora/how-to-setup-fedora-linux-2.md)」再繼續做)

### Linux 
#### 憑證

1. 先 cd 到 `/etc/pki/tls/certs`

```bash
cd /etc/pki/tls/certs
```

2. 先輸出憑證的金鑰 (.key)

```bash
openssl genrsa -out linux.key
```

3. 在使用我們創造的金鑰來創立憑證要求 (.csr)

```bash
openssl req -new -key linux.key -out linux.csr
```

4. 輸出檔案裡的資料，並複製

```bash
cat linux.csr
```
(不用懷疑，真的是 cat)

也可以用 nano 複製

```bash
nano linux.csr
```

nano 用 ctrl+x, y Enter 退出並儲存

4. 到 `http://主機名稱.網域/certsrv (例: http://host-12.hao.com/certsrv)` 或主機IP `http://192.168.1.254/certsrv`

(要用 Fedora 裡內建的 Firefox，不是 Windows 的 IE，只是重複用圖而已)

![](/windows/images/request_cert_1.png)

5. 按要求憑證，並按進階憑證要求

![](/windows/images/request_advanced_cert.png)

6. 按用 Base-64 編碼的 CMC ... 要求，並在 Base-64-encoded certificated request 輸入欄位中複製你剛剛複製的 Base-64

![](/windows/images/usebase64whatever.png)

7. 憑證範本為網頁伺服器（Web），並按提交

![](/windows/images/copy_from_cert_box_compelete_server.png)

8. 取得 Cert 後，要用 mv 或 cp 來複製檔案

ps: mv 是移動，cp 是複製

```bash
mv /root/Downloads/certnew.cer /etc/pki/tls/certs/linux.cer
```

9. 輸出 pem 檔

```
openssl x509 -inform der -in linux.cer -outform pem -out linux.pem
```

#### 網頁

1. 先 cd 到 httpd 的 config

```sh
cd /etc/httpd/conf.d/
```

2. 創立一個新的檔案

```sh
touch linux.conf 
```

3. 編輯檔案，可以用 nano 或 vi(vim)

```sh
nano linux.conf
```

##### 檔案:

```xml
<VirtualHost *:443>
	ServerName linux.網域 (例: linux.yhwtw.edu.tw)
	DocumentRoot /var/www/linux
	SSLEngine on
	SSLCertificateFile /etc/pki/tls/certs/linux.pem
	SSLCertificateKeyFile /etc/pki/tls/certs/linux.key
  <Directory /var/www/linux>
	  AuthName "Private"
	  AuthType Basic
	  AuthBasicProvider file
	  AuthUserFile "/usr/local/etc/passwd"
	  Require user root
  </Directory>
</VirtualHost>
```

nano 用 ctrl+x, y Enter 退出並儲存，vi(vim)則用 :wq

4. 設定密碼: 

```bash
htpasswd -b -c /usr/local/etc/passwd root Skills@2024
```

我們用 htpasswd 來 寫入檔案 /usr/local/etc/passwd，並設定帳號為 `root` 密碼也設定為 `Skills@2024`

5. 重新啟用服務

```sh
systemctl restart httpd.service
```

如果還沒有啟用服務，或出現錯誤，可以跑

```sh
systemctl enable httpd.service
systemctl start httpd.service
``` 

### old
#### 憑證

1. 用 cd 回到 `/etc/pki/tls/certs`

```bash
cd /etc/pki/tls/certs
```

2. 先輸出憑證的金鑰 (.key)

```bash
openssl genrsa -out old.key
```

3. 在使用我們創造的金鑰來創立憑證要求 (.csr)

```bash
openssl req -new -key old.key -out old.csr
```

4. 輸出檔案裡的資料，並複製

```bash
cat old.csr
```
(不用懷疑，真的是 cat)

也可以用 nano 複製

```bash
nano ols.csr
```

nano 用 ctrl+x, y Enter 退出並儲存

4. 到 `http://主機名稱.網域/certsrv (例: http://host-12.hao.com/certsrv)` 或主機IP `http://192.168.1.254/certsrv`

(要用 Fedora 裡內建的 Fedora，不是 Windows 的 IE，只是重複用圖而已)

![](/windows/images/request_cert_1.png)

5. 按要求憑證，並按進階憑證要求

![](/windows/images/request_advanced_cert.png)

6. 按用 Base-64 編碼的 CMC ... 要求，並在 Base-64-encoded certificated request 輸入欄位中複製你剛剛複製的 Base-64

![](/windows/images/usebase64whatever.png)

7. 憑證範本為網頁伺服器（Web），並按提交

![](/windows/images/copy_from_cert_box_compelete_server.png)

8. 取得 Cert 後，要用 mv 或 cp 來複製檔案

ps: mv 是移動，cp 是複製


```bash
mv /root/Downloads/certnew.cer /etc/pki/tls/certs/old.cer
```

9. 輸出 pem 檔

```
openssl x509 -inform der -in old.cer -outform pem -out old.pem
```

#### 網頁

1. 先 cd 到 httpd 的 config

```sh
cd /etc/httpd/conf.d/
```

2. 創立一個新的檔案

```sh
touch old.conf 
```

3. 編輯檔案，可以用 nano 或 vi(vim)

```sh
nano old.conf
```

##### 檔案:

```xml
<VirtualHost *:443>
	ServerName old.網域 (例: old.yhwtw.edu.tw)
	DocumentRoot /var/www/old
	SSLEngine on
	SSLCertificateFile /etc/pki/tls/certs/old.pem
	SSLCertificateKeyFile /etc/pki/tls/certs/old.key
</VirtualHost>
```

nano 用 ctrl+x, y Enter 退出並儲存，vi(vim)則用 :wq

4. 重新啟用服務

```sh
systemctl restart httpd.service
```

如果還沒有啟用服務，或出現錯誤，可以跑

```sh
systemctl enable httpd.service
systemctl start httpd.service
``` 