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
    var url="https://script.google.com/macros/s/AKfycbwdTX-Nao44d9oTGPRvht5TStmen96zq2ivTMJWH8ZkTGGQPooIcVkW-g/exec";
        xmlhttp.open("get",url+"?name="+encodeURIComponent(name.value),true);
        xmlhttp.send();
}
