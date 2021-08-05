//模拟jQuery的cookie
const $ = (function() {
    //获取所有的cookie
    function getCookieAll() {
        var strCookie = document.cookie;
        var obj = {};
        strCookie.split('; ').forEach(function(item) {
            var key = item.split('=')[0];
            var value = item.split('=')[1];
            obj[key] = value;
        })
        return obj;
    }
    //参数名字是 name ,value 和一个对象{path,expires,domain,secure}
    function setCookie(name, value, obj) {
        var cookie = "";
        if (name) {
            cookie += `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        }
        //如果不是对象,那么只设置前面的
        if (typeof obj !== 'object') {
            document.cookie = cookie;
            return;
        }
        if (typeof obj.expires === 'number') {
            var date = new Date();
            date.setDate(date.getDate() + obj.expires);
            cookie += `; expires=${date}`;
        }
        if (obj.path) {
            cookie += `; path=${obj.path}`;
        }
        if (obj.domain) {
            cookie += `; domain=${obj.domain}`;
        }
        if (obj.secure) {
            cookie += `; secure=${obj.secure}`;
        }
        document.cookie = `${decodeURIComponent(cookie)}`;
    }

    //设置cookie
    function cookie() {
        //获取所有的cookie,获取指定cookie,设置cookie
        if (arguments.length === 0) {
            return getCookieAll();
        } else if (arguments.length === 1) {
            var strName = arguments[0];
            return getCookieAll()[strName];
        } else {
            setCookie(arguments[0], arguments[1], arguments[2]);
        }
    }

    //删除cooke
    function removeCookie(name) {
        setCookie(name, ' ', { expires: -1 });
    }

    return {
        cookie,
        removeCookie
    }

}());