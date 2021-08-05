function getCookieAll() {
    var obj = {};
    var str = document.cookie;
    //以; 分割成数组
    var str1 = str.split('; ')
    str1.forEach(function(item) {
            //从数组里面分割出来key和value,装到对象里面去
            //解码
            // var key = decodeURIComponent(item.split('=')[0]);
            // var value = decodeURIComponent(item.split('=')[1]);
            var key = item.split('=')[0];
            var value = item.split('=')[1];

            obj[key] = value;
        })
        //返回对象
    return obj;

}

function getCookieName(name) {
    //拿到所有数据
    var obj = getCookieAll();
    //返回相应对象
    return obj[name];
}
//name=value; expires=失效时间; path=xxx; domain=xx; secure
function setCookie(name, value, expires, path, domain, secure) {
    //如果是中文会进行编码,不是中文不会进行编码,这里W为了避免用户传入中文进来.
    // var str = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    var str = `${name}=${value}`

    if (typeof expires === 'number') {
        //用户设置时间
        var date = new Date();
        date.setDate(date.getDate() + expires);
        str += `; expires=${date}`;
    }

    if (path) {
        str += `; path=${path}`;
    }

    if (domain) {
        str += `; domain=${domain}`;
    }

    if (secure) {
        str += `; secure=${secure}`;
    }

    document.cookie = str;
}

function removeCookie(name) {
    setCookie(name, '', -1);
}