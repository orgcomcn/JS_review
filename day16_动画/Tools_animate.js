class Tools {
    //静态方法
    static getStyle(o, attr) {
        return o.currentStyle ? o.currentStyle[attr] : window.getComputedStyle(o, null)[attr];
    }

    static animate(oEle, attr, target) {
        //1.清除上一次的定时器
        clearInterval(oEle.timer);
        //2.开启新的定时器
        oEle.timer = setInterval(() => {
            //3.在定时器里,得到当前位置,目标值,步长.
            let current = parseInt(Tools.getStyle(oEle, attr));
            let steps = (target - current) / 10;
            //4.新的位置=当前位置+步长
            oEle.style[attr] = current + steps + 'px';

            //5.清除定时器
            if (current == target) {
                clearInterval(oEle.timer);
            }
        }, 50);



    }

}