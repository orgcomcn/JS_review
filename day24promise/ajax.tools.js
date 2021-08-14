const $ = (function() {
    const getParams = (o) => {
        let arr = [];
        for (let key in o) {
            arr.push(key + "=" + o[key]);
        }
        return arr.join("&");
    }

    function ajax(settings = {}) {
        return new Promise((resolve, reject) => {
            settings = Object.assign({
                async: true,
                type: 'get',
                processData: true
            }, settings);
            settings.data = settings.processData ? getParams(settings.data) : settings.data;

            let xhr = new XMLHttpRequest();
            xhr.open(settings.type, settings.url + "?" + settings.data, settings.async);
            xhr.send(null);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    //这里是为了 支持多种写法
                    if (settings.success) {
                        settings.success(xhr.response);
                    }
                    resolve(xhr.response);
                }
            }
        })
    }

    return { ajax }

})();