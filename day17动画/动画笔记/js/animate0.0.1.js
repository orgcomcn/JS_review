class Tools {
    //获取非行间样式的值
    static getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
    };
    //oEle 目标元素
    //attr 方向 (top,left,width,height..)
    //target 方向的值
    static animate(oEle, attr, target) {
        //0.清除定时器

        clearInterval(oEle.timer);
        oEle.timer = setInterval(() => {
            //获取当前位置的值  
            let current = parseInt(Tools.getStyle(oEle, attr));
            //为了做缓动动画
            let steps = (target - current) / 10;
            console.log(steps)
            steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps);
            //新的位置 = 当前位置的值 + 步子
            oEle.style[attr] = current + steps + 'px';

            //如果当前位置的值 等于 目标位置
            // if (oEle.style[arrt] == target) {
            if (current == target) {
                clearInterval(oEle.timer);
                oEle.timer = null;
            }
        }, 40)
    }

}