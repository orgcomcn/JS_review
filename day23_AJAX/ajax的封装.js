const $ = (function() {

    //处理参数的问题
    function getParams(obj) {
        let arr = [];
        for (let key in obj) {
            arr.push(key + "=" + obj[key]);
        }
        return arr.join("&");
    }

    //url 请求的地址
    //type 请求的方式  默认get
    //async 同步或异步  默认异步
    //data 向服务器发送的数据
    //dataType 返回数据的格式 默认json
    //success 成功的回调函数
    //beforeSend ajax发送之前的回调函数
    //contentType 默认的请求头信息
    const ajax = (setting = {}) => {
        let settings = Object.assign({
            type: 'get',
            async: true,
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        }, setting);

        //1.创建xhr核心对象
        let xhr = new XMLHttpRequest();

        //1.1这段代码很核心,为了上传图片
        if (settings.data && settings.processData && typeof settings.data !== 'string') {
            //转换为字符串后,覆盖原来的数据
            settings.data = getParams(settings.data);
        }

        //1.2设置发送前的函数
        if (typeof settings.beforeSend === 'function') {
            settings.beforeSend();
        }

        //2.准备参数,准备之前判断是get还是post
        if (settings.type.toLowerCase() === 'get') {
            //get 请求, 参数1:请求类型, 参数2:地址+参数,参数3:同步或异步
            xhr.open(settings.type, settings.url + "?" + settings.data, settings.async);
            xhr.send(null);
        } else if (setting.type.toLowerCase() === 'post') {
            xhr.open(settings.type, settings.url, settings.async);
            //配置表单
            if (settings.contentType) {
                //如果post不是form , 那就是图片 或者是其他的
                xhr.setRequestHeader('Content-Type', settings.contentType);
            }
            xhr.send(settings.data);
        }
        //数据格式
        xhr.responseType = settings.dataType;

        //异步
        if (settings.async) {
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    gerResult();
                }
            }
        } else {
            gerResult();
        }

        //减少代码冗余
        function gerResult() {
            if (xhr.status === 200) {
                if (typeof settings.success === 'function') {
                    settings.success(xhr.response);
                }
            }
        }
    }
    return { ajax };
})()