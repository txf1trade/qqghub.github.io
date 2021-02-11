
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
			// console.log(result);  
                        
                        var obj = JSON.parse(result,datanls);//解析json字串為json物件形式
                               // console.log(JSON.stringify(obj[1].data[3]));              
                        var html = '<table border=1 width=100%>';//
			var temp;
                        for (var i = 0; i < obj.length; i ++ ) {//
                                html  += '<tr>';// 						
                                for(j=0;j<obj[i].data.length;j++)
                                { 
                                  if(i!='0'&& j ==11){
                                         var temp = obj[i].data[j];
                                         obj[i].data[j]=temp.substr(11,5);
                                     }else  if(i!='0'&&j ==12){
                                         var temp = obj[i].data[j];
                                         obj[i].data[j]=temp.substr(11,5);
                                     }else if(i!='0'&&j ==21){
                                         var temp = obj[i].data[j];
                                         obj[i].data[j]=temp.substr(11,5);
                                     }else if(i!='0'&&j ==22){
                                         var temp = obj[i].data[j];
                                         obj[i].data[j]=temp.substr(11,5);
                                     }
                                            html+= '<td>'+obj[i].data[j]+'</td>';
                                 /*  debug console.log("i:"+i+" j:"+j+"   >"+obj[i].data[j]);
					console.log(html); 
				    */
                                }
                                html  += '</tr>';            
                        }
                        html+="</table>";
                        
                        document.getElementById("result").innerHTML=html;
                        if(obj.length==1) //只有一筆代表查不到資料
                                console.log('查無資料');
                  }

          }
    //
    var url="https://script.google.com/macros/s/AKfycbxKdgKYxP1tKtNB00737sHkHn89MTnyagyDb8bTKL1UhRqa_oNK_yXj/exec"; //行止表
        xmlhttp.open("get",url+"?name="+encodeURIComponent(name.value),true);
        xmlhttp.send();
}

var datanls = function (key, value) {
    var a;
    if (typeof value === 'string') {
        var re =/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/;
		a = re.exec(value);
		if (a) {
            console.log(Date.UTC(+a[1], +a[2]-1, +a[3], +a[4], +a[5], +a[6]));
            return new Date(Date.UTC(+a[1], +a[2]-1, +a[3], +a[4], +a[5], +a[6])).format("yyyy-MM-dd HH:mm:ss");
        }
        
    }
    //console.log(value);
    return value;
}; //true	
	
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
