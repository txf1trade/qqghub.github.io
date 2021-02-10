<html>
<head>
<meta charset="UTF-8" />
<script type="text/javascript">
  
Date.prototype.format = function(fmt)
{
　　var o = {
　　　　"M+" : this.getMonth()+1, //月份
　　　　"d+" : this.getDate(), //日
　　　　"h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小時
　　　　"H+" : this.getHours(), //小時
　　　　"m+" : this.getMinutes(), //分
　　　　"s+" : this.getSeconds(), //秒
　　　　"q+" : Math.floor((this.getMonth()+3)/3), //季度
　　　　"S" : this.getMilliseconds() //毫秒
　　};
　　if(/(y+)/.test(fmt))
　　　　fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
　　for(var k in o)
　　　　if(new RegExp("("+ k +")").test(fmt))
　　fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
　　return fmt;
}  
  
  function timezone()
     {
      var content = document.getElementById("UTCtime");
      var options = { 
      timeZone: "Asia/Taipei", 
      year: 'numeric', month: 'numeric', day: 'numeric', 
      hour: 'numeric', minute: 'numeric', second: 'numeric' 
      };
         var formatter = new Intl.DateTimeFormat([], options);
         var localTime = formatter.format(new Date(content.value));
         document.getElementById("tzok").textContent=localTime.toString();
     }   
 function gettime(){
  var d = new Date();
  var h=d.getHours();
　var m=d.getMinutes();

  document.getElementById("nowt").innerHTML = h +':'+m; 
  }
 
 
 
</script>
</head>
<body>

請輸入姓名(ok)：
<input type="text" id="name" placeholder="王小明" size="15" autofocus/>
<input type="button" name="list" value="查詢" onclick="result();">
  <br>  <br>  
請輸入時間格式(ok)：
<input id="text" id="UTCtime" value="2021-02-07T06:00:26.321Z" placeholder="2021-02-07T06:00:26.321Z" size="20" autofocus/>
<input type="button" value="轉換" onclick="timezone();">
<p id="tzok"></p>
 <br> <br>

<input type="button" value="取得現在時間" onclick="gettime();">
<p id="nowt"></p>時間(test)：
 
 <br> <br>
 

<font size="1"><span id="result"></span></font><br>

<script src="./ft.js"></script>
<script src="./t.js"></script>
</body>
</html>
