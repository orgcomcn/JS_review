class Utils {
    //单例模式: 静态方法中new实例
    static getInstance() {
        if (Utils.instance == undefined) {
            Utils.instance = new Utils();
        }
        return Utils.instance;
    }
    getStyle(obj, attr) {
        if (obj.currentStyle) { //ie 6 7 8
            return o.currentStyle[attr];
        }
        return window.getComputedStyle(obj, null)[attr]; //谷歌
    }
    animate(oEle, json, callback) {
        //1.清空上一次的定时器
        clearInterval(oEle.timer);
        //2.开启一个新的定时器
        oEle.timer = setInterval(function() {
            //3. 如果动画都走完了,就依然为true
            let flag = true;
            for (let attr in json) {
                //目标值
                let target = 0;
                //当前位置
                let current = 0;
                if (Object.is(attr, "opacity")) {
                    //放大100倍
                    target = json[attr] * 100;
                    current = parseFloat(Utils.getStyle(oEle, attr)) * 100;
                } else {
                    target = parseInt(json[attr]); //left,top,height,width
                    current = parseInt(Utils.getStyle(oEle, attr));
                }
                let steps = (target - current) / 10; //有除法就有可能有小数点
                steps = steps >= 0 ? Math.ceil(steps) : Math.floor(steps);
                //新的位置=当前位置+步长
                if (Object.is(attr, "opacity")) {
                    oEle.style[attr] = (current + steps) / 100; //缩小100倍
                } else if (Object.is(attr, "zIndex")) { //zIndex不参与动画,直接到目标值
                    oEle.style[attr] = target;
                } else {
                    oEle.style[attr] = (current + steps) + 'px';
                }
                //如果动画没走完,就不能清空定时器
                if (target != current) {
                    flag = false;
                }
            }
            //循环完成后,才判断是否要清空定时器
            if (flag) {
                clearInterval(oEle.timer);
                //是否第3个参数为一个函数
                if (typeof(callback) == "function") {
                    callback();
                }
            }
        }, 40);
    }
}