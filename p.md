<html>
<head>
<meta charset="UTF-8" />
<script type="text/javascript">
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
  document.getElementById("nowt").textContent = d.value;
  
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
</body>
</html>
