class Utils {
    //创建XMLHttpRequest
    static createXHR() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        }
        return new ActiveXObject("Mricosoft.XMLHTTP");
    }

    //处理参数,把对象处理为参数对象
    static getParams(data) {
        let arr = [];
        for (let key in data) {
            arr.push(key + "=" + data[key]);
        }
        return arr.join("&");
    }

    //发送请求
    static get(url, data, callback) {
        let xhr = Utils.createXHR();
        xhr.open('get', url + '?' + Utils.getParams(data));
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.response);
            }
        }
    }
}