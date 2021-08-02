class Utils {
    //获取非行间样式的css样式
    static getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
    };

    //获取滚动不可见区域高度
    static getScroll() {
        return {
            left: window.pageXOffset || document.documentElement.scrollLeft ||
                document.body.scrollLeft || 0,
            top: window.pageYOffset || document.documentElement.scrollTop ||
                document.body.scrollTop || 0
        }
    }

    //oEle 目标元素
    //json 数据
    //callback 回调函数
    static animate(oEle, json, callback) {
        // 0.清空上一次的定时器
        clearInterval(oEle.timer);
        // 1.开启一个新的定时器
        oEle.timer = setInterval(function() {
            //3 如果动画走完了,就依然为true
            let flag = true;
            for (let attr in json) {
                //目标值
                let target = 0;
                //当前值
                let current = 0;
                if (Object.is(attr, "opacity")) {
                    //放大100倍,不带单位.
                    target = json[attr] * 100;
                    current = parseFloat(Utils.getStyle(oEle, attr)) * 100;
                } else {
                    target = parseInt(json[attr]); //获取目标值 width,height,top,left等
                    current = parseInt(Utils.getStyle(oEle, attr)); //获取当前元素的width,height,top,left等
                }

                let steps = (target - current) / 10;

                steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps);
                //新的位置 = 当前位置 + 步长
                //先判断是不是循环到了 opacity 
                if (Object.is(attr, "opacity")) {
                    oEle.style[attr] = (current + steps) / 100;
                } else if (Object.is(attr, "zIndex")) {
                    //这里else if 是因为Object is 不参与动画
                    oEle.style[attr] = target;
                } else {
                    oEle.style[attr] = (current + steps) + 'px';
                }

                //如果动画没走完,就不能清空定时器
                if (target != current) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(oEle.timer);
                //判断第三个参数是否为函数
                if (typeof(callback) == "function") {
                    callback();
                }
            }
        }, 40)
    }

}