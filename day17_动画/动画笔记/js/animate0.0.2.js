class Tools {
    //获取CSS非内置样式
    static getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
    };

    //oEle 目标元素
    //json 可以是一个json 对象
    //target 目标值
    static animate(oEle, json) {
        //0.先清除定时器
        clearInterval(oEle.timer);
        oEle.timer = setInterval(() => {
            let flag = true; //假设两个动画都走完了
            for (let obj in json) {
                let target = json[obj];
                //拿到当前值
                let current = parseInt(Tools.getStyle(oEle, obj));
                //缓动步长 = 目标值 - 当前值 / 10
                let steps = (target - current) / 10;
                steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps);
                //新的位置 = 当前位置 + 步长
                oEle.style[obj] = current + steps + 'px';

                //这里的判断 换了一个方式
                if (current != target) {
                    flag = false; //没走完就是false
                }
            }
            if (flag) clearInterval(oEle.timer);
        }, 60)

    }


}