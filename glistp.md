請輸入欲查詢姓名：
			<input type="text" id="name" value="" placeholder="王小明" size="15" autofocus>
			<button id="list" value="查詢" src="/plist.js">
	
	
	
	
	
<script type="text/javascript">
    document.getElementById('list').onclick = function(){

   var name = parseInt(document.getElementById('name').value);

  document.getElementById('name').textContent = name;
}
</script>
