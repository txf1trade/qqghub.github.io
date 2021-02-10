<html>
<head>
<meta charset="UTF-8" />
<script type="text/javascript">

var data-anls = function (key, value) {
    var a;
    if (typeof value === 'string') {
        a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
        if (a) {
            return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6])).format("yyyy-MM-dd HH:mm:ss");
        }
    }
    return value;
};
  
function timezone(){
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
     document.getElementById("nowt").innerHTML = h + ':'+ m; 
}

</script>
</head>
<body>

請輸入姓名(ok)：
<input type="text" id="name" placeholder="王小明" size="15" autofocus/>
<input type="button" name="list" value="查詢" onclick="result();"> <!--  all.js -->
  <br>  <br>  
請輸入時間格式(ok)：
<input id="text" id="UTCtime" value="2021-02-07T06:00:26.321Z" placeholder="2021-02-07T06:00:26.321Z" size="20" autofocus/>
<input type="button" value="轉換" onclick="timezone();">
<p id="tzok"></p>
 <br> <br>

時間(ok)：<input type="button" value="取得現在時間" onclick="gettime();">
<p id="nowt"></p>

 <br> <br>


<font size="1"><span id="result"></span></font><br>
<font size="1"><span id="result"></span></font><br>
<script src="./all.js"></script>

</body>
</html>
