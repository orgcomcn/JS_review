const $ = (function() {

    const getParams = (o) => {
        let arr = [];
        for (let key in o) {
            arr.push(key + "=" + o[key]);
        }
        return arr.join("&");
    }

    const JSONP = (settings = {}) => {
        //1.先定义函数(函数名随机)  也可以自定义函数名称
        //如果 settings.jsonpCallback 有名称 就用自己的名称
        let fnName = settings.jsonpCallback ? settings.jsonpCallback : "jquery_" + parseInt(Math.random() * 10000);
        //2.给window 添加一个函数
        window[fnName] = settings.success;
        //3.动态创建script标签
        let oScript = document.createElement("script");
        //拿到src 赋值给 script
        let newSrc = settings.url + "?" + getParams(settings.data) + "&" + settings.jsonp + "=" + fnName;
        oScript.src = newSrc;
        document.body.appendChild(oScript);

        //所有带src属性的有都有onload事件
        oScript.onload = function() {
            this.remove();
        }
    }

    return {
        JSONP
    }
})()