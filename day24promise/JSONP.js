const $ = (function() {

    const getParams = (o) => {
        let arr = [];
        for (let key in o) {
            arr.push(key + "=" + o[key]);
        }
        return arr.join("&");
    }


    const JSONP = (settings = {}) => {
        //随机生成函数名
        // 如果带了指定的函数名,就用指定的函数名
        let fnName = "Jquery_" + parseInt(Math.random() * 10000);
        fnName = settings.jsonpCallback ? settings.jsonpCallback : fnName;
        //把函数名挂在到window上,并赋予函数
        window[fnName] = settings.success;
        console.log(fnName);
        //拼接请求的路径
        let newUrl = settings.url + "?" + getParams(settings.data) + "&" + settings.jsonp + "=" + fnName;
        //动态创建script,并配置src属性
        let oScript = document.createElement("script");
        oScript.src = newUrl;
        //把script标签追加到body中
        document.body.appendChild(oScript);
        //加载完成后删除script标签
        oScript.onload = function() {
            this.remove();
        }
    }

    return { JSONP }

})();