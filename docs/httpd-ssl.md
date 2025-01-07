# SSL
```bash
cd /etc/pki/tls/certs
openssl genrsa -out {{ website name }}.key
openssl req -new -key {{ website name }}.key  -out {{ website name }}.csr
mv /root/Downloads/certnew.cer /etc/pki/tls/certs/{{ website name }}.cer
openssl x509 -inform der -in {{ website name }}.cer -outform pem -out {{ website name }}.pem
```
