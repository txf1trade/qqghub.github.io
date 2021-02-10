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
