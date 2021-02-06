<!DOCTYPE html>
<html>
<body>
	<form id="previewform" onsubmit="location.href='/?'+this.file.value;return false">
		<p>
			請輸入欲查詢姓名：
			<input type="num" id="name" value="" placeholder="王小明" autofocus>
			<input type="submit" value="查詢" onclick="showHint(name.value);">
	</form>
	<script src="/plist.js"></script>
</body>
</html>
