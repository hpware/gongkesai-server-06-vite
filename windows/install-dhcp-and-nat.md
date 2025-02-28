# 設定 NAT 與 安裝 DHCP
## 影片教學
<video width="560" height="315" controls>
  <source src="/videos/ap-5.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 步驟
1. 按管理

![](images/click_management.png)

2. 按新增角色與功能

![](images/select_ad_option.jpg)

3. 下一步，下一步，下一步

![](images/click_next_1.jpg)

![](images/click_next_2.jpg)

![](images/click_next_3.jpg)

4. 選擇安裝 **DHCP** 和 **NAT**

![](images/select_ad_cert_option.jpg)

5. 下一步，下一步

6. 在這裡 按 路由

![](images/jisjdfos-3.png)

7. 下一步，安裝

8. 按上面的通知，並按 **完成DHCP設定**

![](images/select_dhcp_nat_dhcp.png)

9. 下一步，下一步，認可


 
--------DHCP裝完了---------

10. 按上面的通知，並按 **開啟「開始啟用精靈」**

![](images/select_dhcp_nat_nat.png) 

11. 選擇只部署VPN

![](images/select_nat_only_deploy_vpn.png)

12. 在本機的選項上選擇第一個選項 **設定**

![](images/select_nat_host_image.png)

![](images/select_nat_setup_options.png)

13. 在初始畫面按下一步，並在下一頁按自訂

![](images/select_nat_custom_settings.png)

14. 選擇 NAT 並按下一步

![](images/select_nat_custom_menu_only_nat.png)

15. 完成，並啟動服務

16. 點進去本機，並選擇 IPv4 

17. 選擇 NAT， 設立防火牆 

18. 設定
  - LAN
      - 用私人介面
  - WAN
      - 用公共網路，並啟用NAT(防火牆)


-----------設定完了-----------

之後我需要設定ssh連接埠時，我們會回來到同一個程式，並更改連接埠設定。