// name=value;[expires=date];[path=路径];[domain=域名];[secure]
// name=value: 为你要保存的键值对(必选)  进行编码
// var str = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;


// expires=date: 表示cookie的失效时间, 默认是浏览器关闭时失效(可选)
// path=路径: 访问路径, 默认为当前文件所在目录(可选)
// domain=域名: 访问域名, 限制在该域名下访问(可选)
// secure: 安全设置, 如果设置了则必须使用https协议才可获取cookie(可选)


//设置cookie
function setCookie(name, value, expires, path, domain, secure) {
    //一般我们要注意,name和value 可能会传入中文,我们需要进行一个编码,分号后面有空格
    var str = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    //判断后后面可有可无的参数是不是合法的,这里暂时不做十分严格的判断
    if (typeof expires === 'number') {
        var date = new Date();
        date.setDate(date.getDate() + expires);
        str += `; expires=${date}`
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

    //进行转码,写入cookie
    document.cookie = decodeURIComponent(str);

}

//获取cookie
function getCookie(name) {
    var obj = getAllCookie();
    return obj[name];
}

//删除cookie
function removeCookie(name) {
    setCookie(name, '', -1);
}


//获取全部cookie信息
function getAllCookie() {
    var cookie = document.cookie;
    var obj = {};
    var arr = cookie.split('; ');
    arr.forEach(function(item) {
        var key = item.split('=')[0];
        var value = item.split('=')[1];
        obj[key] = value
    })
    return obj;
}