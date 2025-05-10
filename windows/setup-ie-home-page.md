# 如何在 Windows Server 2019 設定IE首頁

## 影片教學

<video width="560" height="315" controls>
  <source src="/videos/ap-7.srv-content.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## 步驟
1. 打開 <kbd>Windows</kbd> 並打入 群組原則管理

2. 點開主機，並按下群組原則物件

3. 創立新的物件叫IE，並用右鍵到編輯

4. 點選系統管理範本，再到 Windows 元件，在這裡我們可以在這裡面做搜尋，因為在這裡慢慢找會很費時間與盡力，點選篩選選項

5. 在篩選關鍵字輸入「首頁」，輸入後就選 Windows 元件，點入 Internet Explorer，並選擇 ｢ 停用變更次要首頁設定 ｣

6. 點入後，選擇 ｢已啟用｣ ，並在次要首頁的設定中，輸入 ```https://你的網域``` 例: ```https://www.obyhw.tw``` (沒有輸入 https:// ，他就會預設 http:// ，我們在IIS使設定 https btw)

7. 關閉後，把IE 抓到 Domain Controlers 裡，並把IE 抓到最上面。

8. 設定完後，我們會看到 IE 還沒有更新，要重新開機

9. 重開機後，我們就可以在 IE 上看到我們設定的首頁了。 (注意上面是不是 https:// ，如果是 http:// 請回去 第4部步驟 再設定成 https:// )
