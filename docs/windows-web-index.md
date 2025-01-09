# Windows 2019 網站頁面
## 113
### 程式碼

```html
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<meta charset="UTF-8" />
	</head>
	<body>
		<div class="content">
			<p>學校名稱: ABCD</p>
			<p>科系名稱: 資訊科</p>
			<p>崗位號碼: 06</p>
			<p>選手姓名: 王小名</p>
			<img src="/image.png" width="50%"/>
		</div>
	</body>
	<style>
		html,body {
			text-align:center;
			align-items:center;
			justify-content:center;
			background-color:white;
		}
		div.content {
			color:red;
			font-size:32px;
		}
  img {
    width: auto !important;
    height: auto !important;
    max-width: 70%;
  }
	</style>
</html>
```

### 解釋

```<title>``` 為標題

```<meta charset="UTF-8" />``` 不要碰，碰了IE就不知道要用UTF-8來顯示

```<div class="content">``` 用CSS 的 .content 來改變顏色與文字大小
