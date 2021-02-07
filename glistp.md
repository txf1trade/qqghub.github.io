<html>
<head>
<meta charset="UTF-8" />
<script type="text/javascript">
function result()
{
var name = document.getElementById("name");
var xmlhttp;

        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
        else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200)      
                  {
                        var result=xmlhttp.responseText;
                        var obj = JSON.parse(result);//解析json字串為json物件形式
                                                
                        var html = '<table border=1 width=100%>';//
                        
                        for (var i = 0; i < obj.length; i ++ ) {//
                                html  += '<tr>';//
                                for(j=0;j<obj[i].data.length;j++)
                                {                               
                                  html+= '<td>'+obj[i].data[j]+'</td>'; 
                                }
                                html  += '</tr>';            
                        }
                        html+="</table>";
                        
                        document.getElementById("result").innerHTML=html;
                        if(obj.length==1) //只有一筆代表查不到資料
                                alert('查無資料');
                  }

          }
    var url="https://script.google.com/macros/s/AKfycbzewOmGETSXe4HaRF3j3-biE05JbMvmBhEtrH2eaLfdbXjKdxsrrOUu/exec";
        xmlhttp.open("get",url+"?name="+encodeURIComponent(name.value),true);
        xmlhttp.send();
}

function conv()
     {  
         var content = document.getElementById("time");
         document.getElementById("convok").textContent=content.value;
     }

</script>
</head>
<body>

請輸入姓名：
<input type="text" id="name" placeholder="王小明" size="15" autofocus/>
<input type="button" name="list" value="查詢" onclick="result();">

<br>

請輸入時間格式：
<input type="text" id="time" value="2021-02-07T06:00:26.321Z" placeholder="2021-02-07T06:00:26.321Z" size="20" autofocus/>
<input type="button" name="conv" value="轉換" onclick="conv();">
<input type="text" name="convok">

<font size="1"><span id="result"></span></font><br>
</body>
</html>
