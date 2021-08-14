const $ = (() => {

    const getParams = (o) => {
        let str = "";
        for (let key in o) {
            str += key + "=" + o[key] + "&";
        }
        return str;
    }

    const JSONP = (settings = {}) => {
        return new Promise((resolve, reject) => {
            //随机生成一个函数名
            let fnName = "Jquery_" + parseInt(Math.random() * 10000);
            //把函数赋值给window
            window[fnName] = settings.success == undefined ?
                resolve : settings.success;
            // https://www.baidu.com/
            let newSrc = settings.url + "?" + getParams(settings.data) + settings.jsonp + "=" + fnName;

            //创建一个script
            let oScript = document.createElement("script");
            oScript.src = newSrc;
            document.body.appendChild(oScript);

            oScript.onload = function() {
                this.remove();
            }
        })
    }


    return { JSONP }
})();