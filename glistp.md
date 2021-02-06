<!DOCTYPE html>
<html>
<body>
	<form id="previewform" onsubmit="location.href='/?'+this.file.value;return false">
		<p>
			請輸入欲查詢姓名：
			<input type="num" id="name" value="" placeholder="王小明" size="60" autofocus>
			<input type="submit" value="查詢" onclick="showHint(num.value);">
	</form>
	<script src="/htmlpreview.js"></script>
</body>
</html>


請輸入欲查詢姓名：<input placeholder="王小明" id="name" />
<input type="submit" value="查詢" onclick="showHint(num.value);">
