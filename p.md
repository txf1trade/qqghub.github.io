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
 
</script>
</head>
<body>

請輸入姓名：
<input type="text" id="name" placeholder="王小明" size="15" autofocus/>
<input type="button" name="list" value="查詢" onclick="result();">
  <br>  <br> 
請輸入時間格式：
<input id="text" id="UTCtime" value="2021-02-07T06:00:26.321Z" placeholder="2021-02-07T06:00:26.321Z" size="20" autofocus/>
<input type="button" value="轉換" onclick="timezone();">
<p id="tzok"></p>
 
 <br> <br>

<font size="1"><span id="result"></span></font><br>


<script src="./ft.js"></script>
</body>
</html>
