			<button id="list" value="查詢" src="/plist.js">
	
請輸入欲查詢姓名：
        <input type="text" id="name" value="" placeholder="王小明" size="15" autofocus>
	<input type="button" id="list" value="查詢" onclick="location.href='/'">
	
<script type="text/javascript">
    document.getElementById('list').onclick = function(){

　document.write(document.getElementById('name').textContent);
}
</script>
