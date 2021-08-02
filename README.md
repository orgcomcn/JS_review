### day1基础

#### JavaScript三部分

 * ECMAScript （欧洲计算机制造协会，定义语法规范）
 * BOM (browser object model 浏览器对象模型)
 * DOM (document object model 文档对象模型)

#### JavaScript数据类型

 * Number/String/Boolean/NULL/undefined/Object
 * 值类型
    * Number 
    * String (他的值是不可改变的，而当将一个已经存在的字符串赋予新值的时候，实际上在次过程中分配了一个新字符串,原有的字符串将被GC回收)
    * boolean
    * undefined
    * null(至于存在那里，这取决于解释器的具体实现)
    
 * 引用类型
    * Object(Array,Function,Date .....)
 * ES6新增
    * Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值.

####  页面的渲染过程

* 打开页面,页面标签和css进行解析

* 在解析过程中如果遇见js,则暂停html的渲染

* js执行完后,才会去渲染html页面,执行时间过长会导致页面阻塞

* 因为js是单线程的,所以我们一般把js写在底部,这也是解决页面阻塞的办法之一.

  ```javascript
  async(异步)和defer(延迟)的区别是什么?
  	首先他们两都是为了解决页面的阻塞问题.
  	async是等页面渲染完成后,立即执行.哪个js先加载,就会去执行哪个js,不保证js的执行顺序.
  	defer是等页面渲染完成后,按顺序执行js.
    都只支持外部脚本
  
  	JavaScipt脚本阻塞问题。当前最稳妥的办法还是把Script标签放在body的底部，没有兼容性问题。不会因此产生白屏问题，没有执行顺序问题。
  ```

#### 碎片知识点

 * alert(); 会造成页面阻塞 不建议使用

 * 选择首选项->键盘快捷方式->搜索comment  修改块注释快捷键 ctrl+shift+/

 * 开启鼠标滚轮缩放 设置->搜索Mouse Wheel Zoom->开启

 * 搜狗输入法设置 中文时使用英文标点 提高开发效率

 * Ctrl+B 开关左边的导航栏

 * mynam 能组成多少个不同的字母? 1x2x3x4x5 = 120

 * 如何解决 0.1+0.2 不等于0.3

   > 因为在js中,计算0.1和0.2,计算机只认识二进制,先会把他们转换成二进制相加再将其转换为10进制,转换为2进制的过程会有无限循环,所以导致转换为10进制后不准确.
   >
   > 解决办法是(0.1 * 10 +  0.2 * 10) / 10

 * 进制转换过了一遍

### day2运算符与逻辑分支

#### 进制手动转换以及方法转换

 * 手动进制转换

    * 回顾了二进制,八进制,十进制,十六进制之间的手动转换.
      	* 二进制转八进制
      	* 二进制转十六进制
      	* 二进制转十进制
      	* 十进制转二进制
      	* 十进制转八进制
      	* 十进制转二进制
      	* ....等等一系列

 * JS方法进行进制转换

    * parseInt(String,radix);

       * 把string 转成 radix 进制, string要和radix进制对应,否则会是NaN  radix:2-36

         ```javascript
         parseInt("001101",2); //把二进制转换成10进制
         ```

    * toString(radix)

       * 把string(十进制)转换成目标进制 radix:2-36

         ```javascript
         var num = 123;
         num.toString(16); //10进制转换成16进制
         ```

#### 运算符

 *	算数运算符
 *	拼接运算符
 *	逻辑运算符
 *	关系运算符
 *	赋值运算符
 *	一元运算符(自增和自减)
 *	三木运算符
 *	位移运算符

>​	运算符里涉及到隐式类型转换,需要多做题目,才能掌握,在day01_js基础/typeof.md有很多类似这样的题目,没事多去刷一下,自然而然就会掌握.这里实际上比较复杂.其次就是运算符里面day02_运算符与逻辑分支/运算符.html 里面的题目还需要看一下,有的做错了,需要日后在回顾.

#### 碎片知识点

 * ASCII码 128个   0-9对应0-48   a-z对应97-122   A-Z对应65-90

 * console.log( "10" < "9") true 用"10"的"1" ascii 码和 "9"比较

 * var i = 12;  var sum = i++ + ++i + ++i * 2 + i-- + i--;   i是多少?

 * var res = (1 == 1 ? false : true); 在三木运算符写反的情况下1也不等于1

 * ```javascript
    // 这里我理解错, 我以为是取0-5
   // 实际上执行顺序 本来是0-4,每完事之后加1
   // 所以取值范围被控制在了1-5 这样操作后不可能为0
   parseInt(Math.random() * 10) % 5 + 1;
   
   //取0-100; 为什么*101因为  如果写100,它会取0-99.9999....
   parseInt(parseInt(Math.random() * 101))
   ```

 * switch() 括号里面做的运算是 === 恒等于 , 以前不知道.

 * 基本数据类型:Number String Boolean null undefined object Symbol

 * typeof能返回的值:Number String Boolean undefined object function

 * null和undefined是派生关系,null派生了undefined

### day3循环语句

* for循环做了20多个题目,有难有易,以下代码是对for循环的拓展,以前没考虑过这样的问题,记录一下

  ```javascript
  //默认以逗号后面的那个为准
  for (var i = 0, j = 0; i < 5, j < 10; i++, j++) {
      console.log(i * j); //0 1 4 9 16 25 36 49 61 81
  }
  
  for (i = 0, j = 0; i < 10, j < 6; i++, j++) {
      k = i + j;
  }
  console.log(k); // 10
  
  for (i = 0, j = 0; i < 6, j < 10; i++, j++) {
      k = i + j;
  }
  console.log(k); // 18
  
   // break 终止指定循环,地球都毁灭了,那么中国肯定也没了. aaa毁灭,bbb自然而言就没了.
  aaa: for (var i = 0; i < 10; i++) {
      console.log("i" + i)
      bbb: for (var j = 0; j < 10; j++) {
          console.log("j" + j)
          break aaa;
      }
  }
  ```


#### 碎片知识点

​	没什么好说的,关于循环,直接做题,看10遍不如自己动手敲一遍.

### day4函数

 * 直接撸题目,把功能都用函数封装起来,没有很多细节,主要是多写代码,掌握好函数的灵活运用.


#### 碎片知识点

* 代码写完后,尽量优化代码
  	* 函数如果没有返回值,默认为undefined
* arguments是伪数组
  	* 伪数组没有pop,push等方法
  	* 伪数组的 **proto**是**Object**  真数组的**proto**是**Arrar**
  	* document.write()一般用于页面 onload 的时候。如果页面已经 onload 完了，也就是页面加载完成了，再调用docume.write()的话，那么，整个 HTML 页面将被覆盖我们尽量少用

### day5数组

#### 构造函数

​	Array是JavaScript的原生对象,同时也是一个构造函数,我们可以用它来生成新的数组.

``` java
// 无参数时返回一个新的数组
new Array(); //[]

// 单个正整数参数,表示返回数组的长度
new Aarray(2); // [empty * 2]

// 多参数时,所有参数都是返回的新数组的成员
new Array(1,2); //[1,2]
new Array('1','2'); // ['1','2']
```

​	实际开发中我们不建议使用Array来生成数组,因为不同的参数会导致不一致的行为.直接使用数组字面量是一个更好的办法.

``` javascript
var arr = [1,2];
```

#### 静态方法

​	Array.isArray()返回一个布尔值,表示参数是否为数组,它可以弥补typeof的不足.

```javascript
var arr = [1,2,3];
typeof (arr); //object

Array.isArray(arr); // true
```

#### 数组去重

```javascript
//案例1
var arr = [1, 3, 3, 2, 5, 5, 61, 2, 1];
var ret = [];

for (var i = 0; i < arr.length; i++) {
    if (ret.indexOf(arr.[i]) == -1) {
    	ret.push(arr[i]);
    }
}
console.log(ret);


//案例2
var arr = [1, 3, 5, 6, 6, 9, 8, 8, 7];
var temp = [1, 6, 8];

for ( var i = 0; i < arr.length; i++) {
    for (var j = 0; j < temp.length; j++ ) {
        if( arr[i] == temp[j] ){
            arr.splice(i,1);
            i--; //这里要想清楚为什么要i--
        }
    }
}

```

#### 实例方法

##### valueOf(),toString()

​	valueOf方法是一个所有对象都拥有的方法,表示对该对象求值,不同对象的valueOf方法不尽一致.它的作用是返回原始值

​	toString(),也是对象的通用方法(不包括null和undefined),数组的toString()方法返回数组的字符串形式.

```javascript
var arr = [1,2,3]

arr.valueOf(); // [1,2,3]
arr.toString(); "1,2,3"
document.write(new Date().valueOf());  //拿到时间戳
```

##### push(),pop()

​	push()方法用于在数组的末端添加一个或多个元素,并返回添加元素后数组的长度.该方法会改变原来的数组.

```javascript
var arr = [1,2,3,4];
arr.push(5);     //  返回值5,[1,2,3,4,5]
arr.push(6,7,8); //  返回值8,[1,2,3,4,5,6,7,8]
```

​	pop()方法用于删除数组的最后一个元素,并返回该元素,该方法会改变原来的数组.

```javascript
var arr = [1,2,3,4];
arr.pop();    //返回值3,[1,2,3]

//注意:
[].pop(); //不会报错,返回undefined
```

##### shift(),unshift()   

​	shift()方法用于删除数组的第一个元素,并返回该元素,该方法会改变原来的数组  shift()+pop()队列

```javascript
var arr = [1,2,3,4];
arr.shift(); //   返回值1,[2,3,4]

//用来清空数组
var item;
var list = [1,2,3,4];
while(item = list.shift()){
    console.log(item);
}
//上面代码通过list.shift()方法每次取出一个元素，从而遍历数组。它的前提是数组元素不能是0或任何布尔值等于false的元素，因此这样的遍历不是很可靠。
```

​	unshift()方法用于在数组的第一个位置添加元素,并返回添加元素后数组的长度,该方法会改变原来的数组

```javascript
var arr = [1,2,3,4];

arr.unshift(-3,-2,-1,0); //返回值8 [-3,-2,-1,0,1,2,3,4]
```

##### join()

​	join()方法以制定参数作为分割符,将所有数组成员连接为一个字符串返回,如果不提供参数,默认以逗号分割,该方法不会改变原数组

``` javascript
var arr[1,2,3,4];

arr.join(); // "1,2,3,4"
arr.join("-"); // "1-2-3-4"
arr.join(" "); // "1 2 3 4"

//如果数组成员是null或undefined或空位,会被转换成空字符串
var arr = [1,'',null,2,undefined];
arr.join() // "1,,,2,"
arr.join("-") // "1---2-"
```

##### concat()

​	concat()方法用于多个数组的合并,它将组成一个新的数组,将自身数组添加到原数组的后面,然后返回一个新数组,该方法不会改变原数组,

我们可以用来拷贝数组(浅拷贝)

```javascript
var str = "123";
var str1 = str.concat("456"); // 123456

```

##### reverse()

​	reverse()方法用于颠倒排列数组元素,返回改变后的数组,该方法会改变原数组

```javascript
var str = [1,2,3,4];
str.reverse();  // [4,3,2,1];
```

##### slice()

​	slice()用于提取目标数组的一部分,返回一个新数组,该方法不会改变原数组

```javascript
var str = [1,2,3,4];

var str1 = str.slice(0); 		//[1,2,3,4];
var str = str.slice(1,3);		//[2,3]
var str1 = str.slice(0,2); 		//[1,2]
//slice(start,end); 不包含end 
//slice() 不写参数可以返回原数组的拷贝

```

##### splice()

​	splice()方法用于删除原数组的一部分成员,并可以在删除的位置添加新的数组成员,返回值是被删除是元素,该方法会改变原数组

``` javascript
//arr.splice(start, count, addElement1, addElement2, ...);

var str = [0,1,2,3,4,5,6,7];
str.splice(4,4); //从下标4开始,删除4个元素,参数1代表删除的起始位置,参数2代表删除的个数  [0,1,2,3] 返回值是被删除的元素[4,5,6,7]

var str = [1,2,3,5,6,7];
str.splice(3,0,4,4.1,4.2); //下标3,删除0个,插入三个元素 返回值[] 因为没有删除,  [1,2,3,4,4.1,4.2,5,6,7]
```

##### sort()

​	sort()方法对数组成员进行排序，默认是按照字典顺序排序。排序后，原数组将被改变。

```javascript
//sort只能排0-10的数字,超过就会有问题,因为内部是ascii码的比较.

//解决方法就是自定义排序规则
//升序
var str = [1,2,3,4,5,6];
str.sort( function(a,b){
    return a - b;
});
//降序
var str = [1,2,3,4,5,6];
str.sort( function(a,b){
    return b - a;
});
```

##### map()

​	map()方法将数组所有的成员依次传入参数,然后把每一次的执行结果组成一个新数组返回.

```javascript
var str = [1,2,3,4];

var str1 = str.map(function(n){
    return n * 2;
})
// str1 : 2 4 6 8


var obj = [
    {age:11,name:'11'},
    {age:22,name:'22'},
    {age:33,name:'33'}
];
//elem当前数组中第几个成员,index索引,arr数组本身(this)
var obj1 = obj.map(function(elem,index,arr){
    console.log(elem,index,arr);
    return elem.age;
})
//obj1 = [11,22,33];


//如果你想要一个新的数组 用map方法
//如果你想要一个新的结果 用reduce方法
//如果你想要过滤一个结果 请使用filter方法
```

##### forEach()

​	forEach()方法和map()方法很相似,也是对数组的所有成员依次执行参数.诞生forEach方法没有返回值,只用来操作数据.

```html
var str = [1,2,3,4];
str.forEach(function(n){
	console.log(n);
});
// 1 2 3 4


var obj = [
	{age:123,name:'1'},
	{age:456,name:'2'},
	{age:789,name:'3'}
];

obj.forEach(function(elem,index,arr){
	console.log(elem.age);
})
//123 456 789
```

##### reduct()和reductRight()

​	reduct方法和reduceRight方法依次处理数组的每个成员，最终累计为一个值。它们的差别是，reduce是从左到右处理（从第一个成员到最后一个成员），reduceRight则是从右到左（从最后一个成员到第一个成员），其他完全一样。

```javascript
[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//最后结果：15
```

##### filter()

​	filter()方法用于过滤数组成员，满足条件的成员组成一个新数组返回。

```java
var obj = [
    {age:11,name:'11'},
    {age:22,name:'22'},
    {age:33,name:'33'}
];
	
var obj1 = obj.map(function(elem,index,arr){
    return elem.age;
}).filter(function(elem){
    return (elem % 2 == 0)
});
// 22
```

##### some(),every()

​	这两个方法类似“断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。

​	some()方法一个成立,直接返回true

​	every()方法全部成立才返回true,否则是false;

```javascript
//有一个 >3  flag = true
var arr = [1, 2, 3, 4, 5];
var flag = arr.some( function(elem){
    return elem > 3;
})

//要求全部大于3  flag = false
var arr = [1, 2, 3, 4, 5];
var flag = arr.every( function(elem){
    return elem > 3;
})
```

##### indexOf(),lastIndexOf()

​	indexOf()方法返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1,indexOf()可以有两个参数,第二个参数代表开始的位置.

​	lastIndexOf()方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。lastIndexOf()可以有两个参数,第二个参数代表开始的位置.

```javascript
var arr = [1,2,3,4,5];

//返回下标4
var flag = arr.indexOf(5);

//从下标1开始找,数值2,返回下标1
var flag = arr.indexOf(2,1);

//返回下标4
var flag = arr.lastIndexOf(5);

//从倒数第一个开始找,返回下标4
var flag = arr.lastIndexOf(5,-1);


//注意，这两个方法不能用来搜索NaN的位置，即它们无法确定数组成员是否包含NaN。
[NaN].indexOf(NaN) // -1
[NaN].lastIndexOf(NaN) // -1
```

##### 链式使用

```javascript
//我们的目标是：获取属性为 isForceUser: true 的用户总值，读者可以先自行思考一下，用于巩固前面所学知识，我们可以如下处理。
var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];
```

#### 碎片知识点

* 改变原数组的：

  1、shift:将一个元素删除并且返回删除元素，删除第一项

  2、unshift:在原数组的最前端依次添加，并且返回新数组的长度

  3、posh：在原数组的最后依次添加项，并返回新数组的长度

  4、pop：将一个元素移除并返回移除的项，最后一项

  5、reverse：反转数组的顺序

  6、sort：对数组进行依次排序

  7、splice：三个参数。第一个代表开始的下标，第二个代表 要删除的个数，第三个代表要替换的东西    返回被删除的数组

* 不改变原数组的：

  1、concat:拼接，连接多个数组

  2、slice:提取，返回被提取的字符

  3：join：将数组中所有元素以参数作为分隔符放入一个字符

  4、map,filter,some,ever等不改变原数组

### day6字符串

#### 字符串的定义

​	ECMAScript中的字符串是不可变的; 也就是说，字符串一旦创建，它们的值就不能改变.

```javascript
//以下三种方式都可以定义一个字符串
var str = "hello world";
var str = String("hello world");
var str = new String("hello world");
```

#### new String()和String()的区别

```javascript
var str1 = new String("test");
var str2 = String("test");

console.log(typeof str1) // object
console.log(typeof str2) // string

// new String()是作为构造函数来使用的,它返回的是一个string对象.
// String()它只会把里面的内容转换成string,并返回转换后的值.
```

#### 实例方法

##### charAt()

​	charAt() 方法返回字符串中指定下标的字符串：

```javascript
var str = "HELLO WORLD";
str.charAt(0);   //返回H

//另外一种方法
var str = "HELLO WORLD";
str[0];                   // 返回 H
//它让字符串看起来像是数组（其实并不是）
//如果找不到字符，[ ] 返回 undefined，而 charAt() 返回空字符串。
//它是只读的。str[0] = "A" 不会产生错误（但也不会工作！）
```

##### charCodeAt()

​	charCodeAt() 方法返回字符串中指定索引的字符 unicode 编码：

```javascript
var str = "HELLO WORLD";
str.charCodeAt(0);         // 返回 72	
```

##### String.fromCharCode()

​	将 Unicode 编码转为一个字符

```javascript
var n = String.fromCharCode(65);
```

##### search()

​	search() 方法搜索特定值的字符串,并返回匹配的位置,它支持正则表达式.如果没找到返回-1

```javascript
var str = "The full name of China is the People's Republic of China.";
var pos = str.search("China");

//和indexOf的区别()
//search() 方法无法设置第二个开始位置参数。
//indexOf() 方法无法设置更强大的搜索值（正则表达式）。
```

##### match()

​	match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。没有找到的话会返回null.

```javascript
var str="Hello world!"
str.match("world")  // world
str.match("World")  //null
str.match("worlld")  //null
str.match("world!") //world!
```

##### indexOf()

​	方法返回字符串中指定文本首次出现的索引（下标）,它可以有两个参数,指定从哪个位置开始查找.如果没找到返回-1

``` javascript
var str = "The full name of China is the People's Republic of China.";
var pos = str.indexOf("China");
var pos = str.indexOf("China",3); //当有两个参数的时候代表从下标3开始查找.有时候如果明确了前面没有我们要找的,可以指定下标提高效率.
//打印下标17
```

##### lastIndexOf()

​	lastIndexOf() 方法返回指定文本在字符串中最后一次出现的索引,如果没找到返回-1.

```javascript
var str = "The full name of China is the People's Republic of China.";
var pos = str.lastIndexOf("China");
//打印下标57
```

##### split()

​	可以通过 split() 将字符串转换为数组

```javascript
var str = "a,b,c,d,e";   // 字符串
var arr = str.split(","); //转换为数组
```

##### replace()

​	replace() 方法用另一个值替换在字符串中指定的值

```javascript
var str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3School"); //Please visit W3School!
```

##### slice()

​	slice() 提取字符串的某个部分并在新字符串中返回被提取的部分。该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。

```javascript
var str = "Apple, Banana, Mango";
var res = str.slice(7,13);  //包含start,不包含end.
// Banana
```

##### substr()

​	substr() 类似于 slice(),不同之处在于第二个参数规定被提取部分的长度

```javascript
var str = "Apple, Banana, Mango";
var res = str.substr(7,6); // 第一个参数是下标,第二个参数是长度

//结果是Banana
```

##### substring()

​	substring() 类似于 slice()。不同之处在于 substring() 无法接受负的索引。

```javascript
var str = "Apple, Banana, Mango";
var res = str.substring(7,13); //包含start,不包含end.
// Banana
```

##### concat()

​	concat() 连接两个或多个字符串

```javascript
var text1 = "Hello";
var text2 = "World";

var text3 = text1.concat(",",text2); // concat 多个参数用逗号隔开.
```

##### toUpperCase()

​	通过 toUpperCase() 把字符串转换为大写

```javascript
var text1 = "Hello World!";       // 字符串
var text2 = text1.toUpperCase();  // text2 是被转换为大写的 text1
```

##### toLowerCase()

​	通过 toLowerCase() 把字符串转换为小写

```javascript
var text1 = "Hello World!";       // 字符串
var text2 = text1.toUpperCase();  // text2 是被转换为小写的 text1
```

##### trim()

​	trim() 方法删除字符串两端的空白符：

```javascript
var str = "       Hello World!        ";
alert(str.trim());  // Hello World! 
```

支持正则的有 search  replace match split

#### 碎片知识点

* 这一个章节需要多做练习,数组和字符串的方法很灵活,很重要,实际开发用的好的话可以减少很多不必要的麻烦.

### day7日期/对象/定时器

#### 日期

>    格林威治时间 1970年1月1日0时0分0秒 到目前时间
>
> ​    秒级时间戳： 10位数字
>
> ​    毫秒级时间戳：13位数字
>
> ​	微秒秒级时间戳：16位数字

##### 创建date的几种方式

```javascript
var date = new Date();

var date = new Date("2021/12/18");

//年月日时分秒毫秒 用这种方式月份要-1
var date = new Date(2020, 11, 18, 13, 20, 50) 
// 2020年12月18日下午13点20分5秒
```

##### 获取时间戳

```javascript
var time1 = Date.parse(new Date()); //精确到秒
var time2 = new Date().getTime(); //精确到毫秒
var time3 = new Date().valueOf(); //精确到毫秒
var time4 = Date.now(); //精确到毫秒，实际上是new Date().getTime()
```

##### 其他的一些方法

```javasc
console.log(date.getYear()); //从1900到现在的年数 是一个bug 我们基本不用
console.log(date.getFullYear()); //获取年
console.log(date.getMonth() + 1); //月份是0-11,我们日常使用要+1
console.log(date.getDay()); //获取星期几
console.log(date.getDate()); 获取 日
console.log(date.getHours()); //获取时
console.log(date.getMinutes()); //获取分
console.log(date.getSeconds()); //获取秒
console.log(date.getMilliseconds()); //获取毫秒 0-1000
```

##### 你在这个时间上活了多少天?

```javascript
var oldDate = new Date("1999 / 03 / 30");  //获取出生年月日的时间戳
var curDate = new Date();  //获取当前时间戳
var currentTime = curDate - oldDate; //当前时间戳减去 出生年月日的时间戳
console.log(parseInt(currentTime / 1000 / 60 / 60 / 24)); //转换成天数
```

##### 当前时间距离某年还有多少天?

```javascript
var startDate = new Date().getTime();  //获取当前时间时间戳
var endDate = new Date("2021-11-11 00:00:00").getTime();//获取指定日期的时间戳
var ret = endDate - startDate;  //知道他们差值的时间戳 然后进行转换

var ms = parseInt(ret % 1000); // milliseconds
var ss = parseInt(ret / 1000 % 60); // seconds
var mm = parseInt(ret / 1000 / 60 % 60); //Minutes
var hh = parseInt(ret / 1000 / 60 / 60 % 24); //hours
var dd = parseInt(ret / 1000 / 60 / 60 / 24); //day

var str = `距离2021年11月11日${dd}天${hh}时${mm}分${ss}秒${ms}毫秒`;
console.log(str);
```

##### 你是星期几出生?

```javascript
//这里我们可以利用 Date的set方法
var date = new Date();  //创建Date对象
date.setFullYear(1999); //设置指定年月日
date.setMonth(2); //1月  月份这里要注意 要-1
date.setDate(30); 
console.log(date.toLocaleString());
console.log(date.getDay())  //获取星期几
//简单粗暴的方法
var date = new Date("1999-03-30"); 
date.getDay(); 
```

##### moment时间插件

对于这个插件了解的还不够多,在以后有需求的时候,再来了解.

首先看如果不需要插件,手动转换日期,很麻烦

```javascript
        //YYYY-MM-DD HH:mm:ss:ms
        var date = new Date(); //

        //获取年月日时分秒毫秒
        var year = date.getFullYear(); //获取当前年
        var month = date.getMonth() + 1; //月份要+1
        var day = date.getDate(); //获取日

        var hours = date.getHours(); //Hours
        var minutes = date.getMinutes(); //Minutes
        var seconds = date.getSeconds(); //Seconds
        var milliseconds = date.getMilliseconds(); //Milliseconds
		//补0操作
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        milliseconds = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds

        var str = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
        console.log(str);
```

使用moment插件

```javascript
<script src="http://cdn.staticfile.org/moment.js/2.24.0/moment.js"></script>
var str = moment().format("YYYY-MM-DD HH:mm:ss:SSS");
console.log(str); //格式化

//求10天后的日期
function afferDate(n) {
    var date = new Date();
    date.setDate(date.getDate() + n);
    return moment(date).format("YYYY-MM-DD HH:mm:ss:SSS")
}

console.log(afferDate(10));
```

#### 对象

​	在JavaScript一切皆是对象,如果你不了解你的对象,那么你也就无法深刻的理解JavaScript.

##### 对象的五种创建方式(后续补充)

```javascript
//方式一:字面量创建对象
var obj = {
    name:'Tom',
    age:12,
    setName:function (name){
        this.name=name;
    }
};

//方式二:Object构造函数模式
var person1 = new Object();
person1.name = '张三';
person1.age = 18;
person1.say = function(food) {
    console.log(`我叫${this.name}我今年${this.age}岁,我爱吃${food}`);
}
person1.say('面条');
person1.say('鸡蛋');

//方式三:构造函数创建
// 构造函数和普通函数有什么区别?
// 本质上其实没区别,在命名规则上,构造函数首字母要大写,普通函数小驼峰
//	在函数调用时，
//		构造函数内部会创建一个实例，调用普通函数时则不会创建新的对象。
//		构造函数内部的this指向是新创建的person实例，而普通函数内部的this指向调用函数的对象（如果没有对象调用，默认为window）
// 	返回值方面
//		对于构造函数而言，如果返回值是基本数据类型，那么返回值就是this指向的实例；如果是复杂数据类型，那么返回值为对象（不知道这句话对不对）
// 在ES6中,我们添加了class用来分构造函数和普通函数
// ES6中的class 只能通过new来创建. 而在ES6之前,我们的函数和构造函数基本上没区别.
function Person(name, age, hobby, salay) {
            this.name = name;
            this.age = age;
            this.hobby = hobby;
            this.salay = salay;
            this.say = function() {
                console.log(` 我叫${this.name}我今年${this.age}岁我喜欢${this.hobby}我的期望薪资是${this.salay}`);
            }
        }
var person = new Person('张三', '18', '吃喝玩乐', '3000');
person.say();




//方式四:工厂模式：通过工厂函数动态创建对象并返回。（缺点:不能确定对象的具体类型）
//方式五:构造函数+原型的组合模式
```

#### 定时器

##### 定时器常用写法

```javascript
//定时器有两种比较常用的写法
//第一种方法 这种需求有时候会用到
function time() {
    console.log("gogo");
}
var timer = setInterval(time, 1000); //这里的函数名不能加()


//第二种方法是最常用的
var timer = setInterval(function() {
    console.log("123");
}, 1000);

var timer = setInterval(function(n, m) {
    console.log(n * m * 5);
}, 1000, 5) //第三个参数是给 回调函数做初始值用的
```

##### setInterval()

方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。

```javascript
//setInterval 重复执行
//第一个参数 函数体
//第二个参数 延迟时间(毫秒)
//第三个参数 给第一个函数体实参
//该setInterval()会返回序列号,序列号从1开始
//clearInterval() 清除定时器,需要输入定时器的序列号
var timer = setInterval(function() {
    console.log("123")
}, 1000)
```

##### setTimeout()

方法用于在指定的毫秒数后调用函数或计算表达式。

```javascript
//setTimeout 只会执行一次
//第一个参数 函数体
//第二个参数 延迟时间(毫秒)
//第三个参数 给第一个函数体实参
//该setTimeout()会返回序列号,序列号从1开始
//clearTimeout() 清除定时器,需要输入定时器的序列号
var timer = setTimeout(function() {
    console.log("123")
}, 1000)
```

> 值得注意的是clearTimeout也可以清除setInterval定时器,它们之间可以混用,有没有坏处暂时不知道

#### 碎片知识点

* 让定时器不重复

  ```javascript
  var flag = false;
  btn1.onclick = function() {
      if (flag) {
          clearInterval(timer);
          timer = null;
      }       
      timer = setInterval(function() {flag = true; //防止重复开启定时器}, 10);
  ```

* 定时器实现进度条

* 定时器/延时器实现广告关闭

* 活动日期倒计时

* 这一章节其实有很多习题要做,刚开始第一次会写,但是隔几天可能会忘记,需要反复做,特别是一些容易忘记的东西.记得反复看.

### day8BOM+DOM

BOM 是Browser Object Model的缩写，简称浏览器对象模型, 提供了独立于内容而与浏览器窗口进行交互的对象，用于访问浏览器的功能。BOM由一系列相关的对象构成，并且每个对象都提供了一些方法与属性. 我们可以通过这些属性和方法去对浏览器进行操作.

#### BOM

window对象是BOM的核心, window对象表示浏览器窗口的一个对象, 每个浏览器窗口都有一个window对象与之对应. 

	* document
	* history
	* location
	* screen
	* navigator
	* frames(了解即可)

##### window对象的方法

​	alert,confirm,prompt,open,close这些都是常用的一些方法,还一个要了解使用open页面之间如何传值,之前我们使用open可以直接打开网页,现在默认浏览器是禁止的,除非我们产生了人机交互,也就是例如在onclick下调用open打开页面是可以的.

parent.html

```html
<body>
    <input type="text" id="text">
    <button id="openPage">打开子窗口</button>
    <button id="send">传值</button>

    <script>
        var oText = document.getElementById('text');
        var oPage = document.getElementById('openPage');
        var oSend = document.getElementById('send');

        //拿到窗口对象
        var winHandler; //子窗口的句柄
        //打开子窗口,打开后才能相互传值
        oPage.onclick = function() {
            winHandler = window.open("./3.页面传值child.html", "子窗口", "width=300,height=300,left=300,top=300");
        }
        //发送数据
        oSend.onclick = function() {
            var str = oText.value;
            //传值给子窗口
            winHandler.document.getElementById('childText').value = str;
        }
    </script>
</body>
```

child.html

```html
<body>
    <input type="text" id="childText">
    <button id="childBtn">回数据给父窗口</button>

    <script>
        var btn = document.getElementById('childBtn');
        var text = document.getElementById('childText');
        childBtn.onclick = function() {
            window.opener.document.getElementById('text').value = text.value;
            //关闭父窗口
            window.opener.close();
        }
    </script>
</body>
```

##### location对象的方法

location的属性有hash/host/hostname/href/pathname/prot/protocol/search.一定要掌握号这些相关的属性,如下node.js官网截图所示.

![image-20210715190132522](C:\Users\Administrator\Desktop\我在千锋的日子\02第二阶段\01基础部分\day08-DOM+BOM\image-20210715190132522.png)

* location跳转

  ```javascript
  //location = "https://www.baidu.com";
  //location.href = "https://www.baidu.com";
  // location.assign("https://www.baidu.com");
  //跳转后没有历史记录
  //location.replace("https://baidu.com");
  ```

* location刷新

  ```javascript
  //location.reload();
  //location.reload(true); //强制刷新
  
  
  //<meta http-equiv="refresh" content="3" /> 这个标签加载head里面也可以刷新,每隔三秒刷新一次
  ```

* loaction对象方法

  ```javascript
  console.log(location.protocol);  //协议
  console.log(location.host);  //域名和端口
  console.log(location.hostname);//域名
  console.log(location.port) //端口
  console.log(location.pathname);
  console.log(location.search)
  console.log(location.search.split("?")[1]);
  console.log(location.hash);
  console.log(location.href);  //整个链接
  //可以看看文档目录下的 登录练习,一个特别小的案例.
  ```

##### history对象方法

```javascript
history.forward()  //前进
history.back()  //后退
history.go() //-1后退 0刷新 1前进
```

##### navigator对象方法

```javascript
navigator.userAgent;  //一般我们只用这个 用户代理信息, 通过该属性可以获取浏览器及操作系统信息
```

##### screen对象方法(待补充)

#### DOM

DOM就是Document  Object Model(文档对象模型)的缩写，DOM 是 W3C（万维网联盟）的标准。

一般来说，节点至少拥有nodeType/nodeName/nodeValue这三个基本属性。

 * DOM三种节点

   ​	元素节点 nodeType === 1  

   ​	属性节点 nodeType === 2

   ​	文本节点 nodeType === 3

   ​	nodeName 获取的节点的名称, 值是字符串,并且大写

* 兼容问题

```javasc
 //没兼容问题的
 document.getElementById
 document.getElementsByTagName
 //有兼容问题的
 document.getElementsByClassName
 document.getElementsByName
 document.querySelector
 document.querySelectorAll
```

* 封装一个没有兼容性问题的getElementByClassName

```javascript
<div class="box1 box">111111111</div>
<div class="box">1222222222222</div>
<div class="box main">22333333333333333</div>
<div class="box">333344444444444444444</div>
<div class="box footer">5555555555555</div>

<script>
    //封装一个getElementsByClassName 
    function getElementsByClassName(className) {
    var ret = [];
    var oList = document.getElementsByTagName('*');
    for (var i = 0; i < oList.length; i++) {
        var str = oList[i].className.split(" ");
        for (var j = 0; j < str.length; j++) {
            if (className == str[j]) {
                ret.push(oList[i]);
                break;
            }
        }
    }
    return ret;
}
    var ret = getElementsByClassName('box');
    for (var i = 0; i < ret.length; i++) {
        i % 2 == 0 ? ret[i].style.backgroundColor = 'pink' : ret[i].style.backgroundColor = 'red';
    }
</script>
```

##### 属性操作Attribule

```javascript
<img class="img" src="./images/vue.png" alt="">

img.attributes; //查看属性,没有()号 这里要注意
img.setAttribute("src","./images/vue2.png"); //设置属性
img.getAttribute("src"); //获取属性值  这里会获取相对路径 img.src才是绝对路径
img.removeAttribute("class"); //删除class属性
```

> 这里值得注意的是,一般ed结尾的标签,我们都不使用getAttribule...这些标签,因为那些属性是动态的,我们无法动态的获取修改.

```javascript
<input type="checkbox" class="text">
<button class="btn">设置属性</button>
<button class="btn">获取属性</button>

<script>
var text = document.querySelector('.text');
var btns = document.querySelectorAll('.btn');

btns[0].onclick = function() {
    //设置属性
    //text.setAttribute("checked", "checked");   //这种方式无法set动态的
    text.checked = true;  //我们使用标签原生的
}

//如果我们手动点击,那么获取属性就获取不到,所以动态属性我们最好是用.的方式去设置属性
btns[1].onclick = function() {
    //获取属性
    //console.log(text.getAttribute("checked"));  //这种方式无法get动态的
    console.log(text.checked); 
}
</script>
```

##### 父节点parentNode/parentElement

我们要获取当前元素的父节点有两种方式但他们都有各自的特点,总的来说我们使用**parentNode**

```javascript
<button>获取父节点</button>
<button>获取父节点</button>

<div id="box">
    box盒子
<div id="inner">inner盒子</div>
</div>

<script>
    var oBtns = document.querySelectorAll('button');
	var oInner = document.querySelector('#inner');

oBtns[0].onclick = function() {
    //获取当前元素的父节点
    //parentNode  w3c标准  顶级对象是#document
    console.log(oInner.parentNode);
    console.log(oInner.parentNode.parentNode.parentNode.parentNode);
}

oBtns[1].onclick = function() {
    //获取当前元素的父节点
    //ie用的   顶级对象是null
    console.log(oInner.parentElement.parentElement.parentElement.parentElement);
}
</script>
```

##### 兄弟节点nextElementSibling/nextSibling;

我们要获取当前元素的兄弟点有两种方式但他们都有各自的特点,nextSibling会获取文本节点,我们一般使用nextElementSibling,也可以采用**兼容写法**.

```javascript
// 总结 兼容写法 , 如果我们不使用兼容写法,那就使用previousElementSibling
元素.previousElementSibling || 元素.previousSibling;
元素.nextElementSibling || 元素.nextSibling;
```

##### 子节点children/childNodes

虽然childNodes是W3C标准,但是我们一般还是不使用,因为它会获取文本节点,我们在实际开发中还是使用IE标准children,也可以采用**兼容写法**

```javascript
var box = document.getElementById('box');
box.childNodes //会包含文本节点
box.children // 只有元素节点


//firstChild: 用于获取当前元素节点的第一个子节点，相当于children[0]；
//lastChild: 用于获取当前元素节点的最后一个子节点, 相当于children[box.children-1]
//实际开发中我们都会使用下面这种写法
var child3 = ul.children;
child3.children[0]; //取第一个元素节点
child3.children[ul.children.length - 1]; //取最后一个元素节点
```

> children在IE678会把注释当做元素节点,但是无伤大雅,大不了我们不要注释.

##### 创建节点createElement

```javascript
 btn.onclick = function() {
     // 1.创建div
     var oDiv = document.createElement("div");
     // 2.给创建div添加文本 , 也可以使用innerHTML , 省去2,3步
     var oTxt = document.createTextNode("我是文本");
     // 3.往div里面添加文本
     oDiv.appendChild(oTxt);
     // 4.给div添加class
     oDiv.className = "box";
 }
```

##### 追加节点appendChild

appendChild()方法可以将一个新节点添加到某个节点的子节点列表的末尾上。 

```javascript
var box = document.getElementById(‘box’); 
var pNode = document.createElement(‘p’);   //创建一个新元素节点<p> 
box.appendChild(pNode);   //把新元素节点<p>添加box节点的子节点末尾
```

##### 插入节点insertBefore

插入节点我们要注意,插入 父.insertBefore(新,参照位置),插入节点我们也要拿到当前节点的父亲,然后进行插入,参照位置也就是当前节点.

```javascript
//通过父节点调用, 在box之前插入一个新节点p;
//第一个参数为新节点
//父.insertBefore(新,当前节点)
oLi3.parentNode.insertBefore(oDiv, oLi3)
```

##### 替换节点replaceChild

替换节点我们要注意,通过父节点调用

```javascript
//通过父节点调用, 新节点p替换了旧节点div
//第一个参数为新节点, 第二个参数为旧节点
//父.replaceChild(新元素,被替换)
box.parentNode.replaceChild(p, box);
```

##### 删除节点removeChild/remove

删除有两种方式 1.删除的时候找父亲拿刀 2.自己撞墙死

```javascript
//删除的时候找父亲拿刀
li3.parentNode.removeChild(li3);
//自己撞墙死
li3.remove();
```

##### 克隆节点cloneNode

克隆节点分为浅克隆和深克隆

```javascript
//浅克隆   false表示只复制标签
var newBox1 = box.cloneNode(false);
//深克隆 true表示复制标签和内容 
var newBox = box.cloneNode(true);
```

#### 碎片知识点

* 想一想获取第一个节点和最后一个节点使用什么方式children[0]；children[xx.length-1]；

 * 兄弟节点兼容问题

    * 元素.previousElementSibling || 元素.previousSibling;

 * HTML5新标签IE兼容问题

   ```html
   <header></header><footer></footer>这些HTML5新标签如果要在IE678兼容,那么我们有两种方案
   
   一 自己做的话,在script标签中
   1.document.createElement("header"); 创建
   2.header{display:block};
   3.在IE678就兼容了,但是我们一般不自己去做,如果只有一两个标签可以考虑自己做.
   
   
   二 html5shiv
   1.解决ie9以下浏览器对 html5新增标签的不识别，并导致CSS不起作用的问题。
   2.让不支持css3 Media Query的浏览器  包括IE6-IE8等其他浏览器支持查询。
   3.如果标签过多 我们直接在bootcdn下载 html5shiv插件 很简单 直接script引入插件即可
   ```

 * 自己封装一个insertAfter

    * 因为插入节点只有在元素节点前面插入,我们可以封装一个在后面插入的方法

```javascript
 <button id="btn1">插入在li3的后面</button>
    <ul id="box">
        <li>我是第一个 </li>
        <li>我是第二个</li>
        <li id="li3">我是第三个</li>
        <li>我是第四个</li>
        <li>我是第五个</li>
    </ul>

    <script>
        var btn1 = document.querySelector('#btn1');

        function insertAfter(newElement, refElement) {
            var oNext = refElement.nextElementSibling || refElement.nextSibling;
            console.log(oNext);
            refElement.parentNode.insertBefore(newElement, oNext);
        }

        btn1.onclick = function() {
            var oDiv = document.createElement('div');
            oDiv.innerHTML = "<h3>我是动态的文本</h3>";
            //把创建的元素插入在li3的后面
            var oLi3 = document.querySelector('#li3');
            insertAfter(oDiv, oLi3);
        }
    </script>
```

### day09事件

#### 鼠标事件

```javascript
//1.onclick鼠标单击事件
box.onclick = function() {
    console.log('单击事件触发 ---- onclick');
}
//2.ondblclick鼠标双击事件(不常用)
box.ondblclick = function() {
	console.log('双击事件触发 ---- ondblclick');
}
//3.鼠标按下
box.onmousedown = function() {
    console.log('鼠标按下事件触发 ---- onmousedown');
}
//4.鼠标抬起
box.onmouseup = function() {
    console.log('鼠标抬起事件触发 ---- onmouseup');
}
//onmouseover、onmouseout：
//	鼠标经过时自身触发事件，经过其子元素时也触发该事件；（父亲有的东西，儿子也有）
//onmouseenter、onmouseleave：
//	鼠标经过时自身触发事件，经过其子元素时不触发该事件。（父亲的东西就是父亲的，不归儿子所有）
//  他们不能混合使用,只能一对一对的使用
//https://www.jianshu.com/p/7750907f5a79
//5.鼠标进入
box.onmouseover = function() {
    console.log('鼠标进入事件触发 ---- onmousemove');
}
//6.鼠标离开
box.onmouseout = function() {
    console.log('鼠标离开事件触发 ---- onmouseover');
}
//7.鼠标进入
box.onmouseenter = function() {
    console.log('鼠标进入事件触发 ---- onmouseenter');
}
//8.鼠标离开
box.onmouseleave = function() {
    console.log('鼠标离开事件触发 ---- onmouseleave')
}
//9.鼠标移动
box.onmousemove = function() {
    console.log('鼠标移动事件触发 ---- onmousemove');
}
//10.鼠标滚轮
box.onmousewheel = function() {
    console.log('鼠标滚轮事件触发 ---- onmousewheel');
}
```

#### 键盘事件

```javascript
//键盘按下事件 onkeydown
window.onkeydown = function() {
    console.log('键盘被按下了');
}
//键盘抬起事件 onkeyup
window.onkeyup = function() {
    console.log('键盘抬起了')
}
//键盘按下 onkeypress 不识别功能键 例如 ctrl + shift + 箭头等一些功能键(可区分字母大小写)
window.onkeypress = function() {
    console.log('键盘按下了')
}
总结:
	KeyPress主要用来接收字母、数字等ANSI字符,KeyDown 和 KeyUP 事件过程通常可以捕获键盘除了PrScrn所有按键(这里不讨论特殊键盘的特殊键)
	KeyPress 只能捕获单个字符,KeyDown 和KeyUp 可以捕获组合键。
```

#### html事件

```javascript
//1.onload html,css 以及外部资源加载完后才执行
window.onload = function() {
    console.log("onload");
}

//2.DOMContentLoaded 页面结构在加载完成就触发
window.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded");
})

//3.onunload 疯狂刷新的时候,当页面都被卸载 被干掉 的时候就会被触发
window.onunload = function() {
    console.log("触发...卸载")
}

//4.onresize 窗口发生变化就触发
window.onresize = function() {
    console.log("触发...resize")
    var width = document.documentElement.clientWidth;

    if (width >= 0 && width <= 300) {
        document.body.style.backgroundColor = 'pink';
    } else if (width > 300 && width <= 500) {
        document.body.style.backgroundColor = 'red';
    } else {
        document.body.style.backgroundColor = 'black';
    }
}
//让事件立即触发
window.onresize();
```

#### 表单事件

```javascript
button在表里,默认的type是submit.

// 1.onsubmit
document.forms[0].onsubmit = function() {
	//阻止表单提交按钮 submit的提交行为  
	return false;
}

// 2.onreset
document.forms[0]onreset = function() {
    // 阻止表单重置按钮 reset的行为
     return false;
}
```

#### 事件对象

```javascript
//event是谷歌 window.event是IE
//event.button 0代表鼠标左键 1代表鼠标右键 2代表鼠标滚轮wheel
var btns = document.querySelectorAll('.box');

btns[0].onclick = function(event) {
    //解决兼容性问题
    event = event || window.event;
    console.log(event);
}

btns[1].addEventListener('click', function(event) {
    event = event || window.event;
    //tar = event.target || event.srcElement; target的兼容写法
    console.log(event);
});

```

```txt
 // var e=evt||window.event;  事件对象的兼容写法
 // 2.1  button  0:左键 1:滚轮键 2:右键
 // 2.2  altKey  是否按下了alt键
 // 2.3  ctrlKey  是否按下了ctrl键
 // 2.4  shiftKey  是否按下了shift键
 // 2.5  metaKey  是否按下了meta键
 // 2.6  charCode 在 onkeypress下才能使用 有大小写区分
 // 2.7  keyCode  只有大写
 // 2.8  坐标
 //      clientX,clientY 鼠标点击的点,到可视区域的距离
 //      pageX,pageY     鼠标点击的点,到页面的距离
 //      offsetX,offsetY 鼠标点击的点,到当前元素的距离
 //      screenX,screenY 鼠标点击的点,到屏幕的距离
 // 2.9 目标元素
 //      e.target||e.srcElement
 //      e.type  事件的类型
```

```txt

- event就是一个事件对象，写到我们的侦听函数 小括号里面
- 事件对象只有有了事件才会存在 它是系统给我们创建的 不需要传递参数
- 事件对象 是我们事件一系列相关数据的集合
- 事件对象可以自己命名 比如 e evt event 
- 事件对象也有兼容性的问题 ie 678通过 window.event来访问

总结：必须有了事件 才有事件对象，跟事件相关的一系列信息数据的集合都放在这个对象里面
```

![image-20210720210040375](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210720210040375.png)

#### 碎片知识点

* innerText和innerHTML的区别?

  ```txt
  1.innerText不识别HTML标签,非标准.
  2.innerHTML识别HTML标签,是W3C标准
  这两个元素都是可读写的
  ```

* 事件注册的两种方式以及区别

  ```
  var btns = document.querySelectorAll('button');
  //1.传统的方式注册事件 -- 同一个事件只能执行一个事件 后面的会覆盖前面的
  btns[0].onclick = function() {
  	alert('button 1');
  }
  btns[0].onclick = function() {
  	alert('button 2');
  }
  
  
  //2.事件侦听注册事件addEventListeren  -- 同一个事件可以注册多个监听器 不会覆盖
  btns[1].addEventListener('click', function() {
  	alert('addEventListener 1');
  })
  
  btns[1].addEventListener('click', function() {
  	alert('addEventListener 2');
  })
  ```

* 元素创建的三种方式以及效率上的区别

  ```javascript
  		//方式1 -- 这种我们经常不会使用 ， 当文档执行完毕后 它会把页面全部重新绘制(之前的页面没有了)
  		//document.write('<div>123</div>');
  
          //方式2 -- innerHTML
          // -- 字符串拼接法 效率不高
          /*
              var inner = document.querySelector('.inner');
              var d1 = new Date();
              for (var i = 0; i < 1000; i++) {
                  inner.innerHTML += "<div>123</div>"
              }
              var d2 = new Date();
              console.log(d2 - d1);
          */
  
  
          // -- 数组法 效率很快
          /*
              var inner = document.querySelector('.inner');
              var d1 = new Date();
              var arr = [];
              for (var i = 0; i < 1000; i++) {
                  arr.push('<div>123</div>');
              }
              inner.innerHTML = arr.join("");
              var d2 = new Date();
              console.log(d2 - d1);
          */
  
          //方式3 -- document.createElement() -- 效率第二
          var create = document.querySelector('.create');
  
          for (var i = 0; i < 1000; i++) {
              var child = document.createElement('div');
              child.innerHTML = "<div>123</div>";
              create.appendChild(child);
          }
  
  总结
      document.write(); 不使用,当文档执行完毕后他会重新绘制页面
      innerHTML()
          - 如果使用字符串拼接, 效率会很慢
          - 如果使用数组push 然后 join 分割 效率最快, 但是可读性不强
      document.create()
          - 效率第第二,可读性很强,结构清晰
  
      不同浏览器下,只要采用innerHTML数组的方式,那么它就比document.createElement()要快
  ```

* onload 和 DOMContentLoaded的区别

  ```txt
  当 onload 事件触发时，页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了。
  当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。
  ```

* 事件对象常见方法

  ```javascript
  	event.target //返回触发事件的对象
      event.type // 返回事件的类型
      event.preventDefault() //阻止默认事件 比如不让链接跳转
      event.stopPropagation() //阻止冒泡事件
  ```

* target和this的区别?

  target返回触发该事件的对象鼠标点了谁就是谁,this返回绑定事件的对象.  
  
* 事件三要素 事件源 事件类型 事件处理程序

* 内联模式调用的函数不能放到window.onload里面, 否则会找不到该函数.

* 事件委托

  ```txt
  事件委托
  原理 : 利用事件冒泡的机制
  优点 :
  	提高Javascript性能,减少内存消耗
  缺点 :
  	事件委托基于冒泡 , 对于不冒泡的事件不支持
  	层级过多,冒泡过程中,可能会被某层阻止掉
  	把所有事件都用代理就可能会出现事件误判,好比把不应该触发事件的,绑上了事件.
  ```

* 阻止默认行为

  ```txt
  var oA = document.querySelector("a");
  //点击的时候,先触发js的点击事件,在触发它自身跳转的默认行为
  oA.onclick = function (evt) {
  var e = evt || window.event;
  	// e.preventDefault();  写法一 常用
  	// e.returnValue = false;  写法二 IE
  	// return false; //
      
      // 兼容写法
      if (e.preventDefault) {
      	e.preventDefault(); //非ie
      } else {
      	e.returnValue = false;//ie
  	}
  }
  ```

* 右击菜单oncontextmenu

* offset三大家族

  ```
  //坐标点 事件对象 event
  // offsetX,offsetY
  // clientX,clientY
  // pageX,pageY
  // screenX,screenY
  
  //跟dom元素 三大家族
  // offsetParent  返回元素---找带有定位的父元素,爷爷元素,如果父级爷爷们,都没有,那就是body
  // offsetLeft,offsetTop  返回距离---找带有定位的父元素,爷爷元素,如果父级爷爷们,都没有,那就是body
  // offsetWidth,offsetHeight  返回大小---获取自己盒子大小 包含padding + border 
  
  offsetParent 和 parentNode的区别
  parentNode返回的是最近一级的父亲,不管爸爸有没有定位
  offsetParent 哪个爸爸有定位就返回哪个爸爸 全部没有就是body
  ```

* offset 和 style的区别

  ```txt
  offset 
  offset可以得到任意样式表的样式值
  offset系列获得的值是没有单位的
  offsetWidth包含padding+border+width
  offsetWdith是只读属性,只能获取不能赋值
  我们想要获取元素大小位置,用offset更加合适
  
  style
  只能得到行间样式的样式值
  style.width获得的值是带有单位的字符串
  style.width不包含padding和border
  style.width是可读属性,可以获取也可以赋值
  我们想要给元素更改值,则需要用style改变
  ```


### day10Cookie

cookie 也叫 HTTPCookie，是客户端与服务器端进行会话使用的一个能够在浏览器本地化存储的技术。

```txt
cookie基于http协议或https
它只能存储字符串格式
存储的大小4k左右
它会随着请求携带到服务器端(特点,特色)
不能直接跨域,需要设置domain
不安全,容易伪造 造成xss攻击 (xss 站点伪造攻击)
并不是真正永久存储,只是把存储有效时间设置很长而已
```

为什么要使用cookie?

```txt
因为 http协议,属于断开式,短链接,无状态
```

格式

```txt
name=value;[expires=date];[path=路径];[domain=域名];[secure]
name=value: 为你要保存的键值对(必选)  进行编码
var str = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
document.cookie = decodeURIComponent(str); 进行转码,写入cookie
 
expires=date: 表示cookie的失效时间, 默认是浏览器关闭时失效(可选)
path=路径: 访问路径, 默认为当前文件所在目录(可选)
domain=域名: 访问域名, 限制在该域名下访问(可选)
secure: 安全设置, 如果设置了则必须使用https协议才可获取cookie(可选)
```

#### 碎片知识点

* cookies,模拟了一个jquery的封装,具体的代码day13正则表达式Jquery封装cookie.js文件
* cookies我们往后不需要自己封装,已经熟练,自己封装了一个,但是应用还不是很熟练.

### day11正则表达式

笔记暂时没整理,在做小例子

* 点菜购物车案例(day13正则表达式点菜购物车,要用http协议启动localStorage)

  ```txt
  大概思路:
  1.我们首先要模拟一组数据,也就是假装有一组后端给我们的数据
  var data = [
      {id: 1,name: "青椒炒肉",price: 18,image: "./images/1.jpg"},
      {id: 1,name: "青椒炒肉",price: 18,image: "./images/1.jpg"},
      ....
  ];
  2.我们要想办法把数据动态渲染到页面,这里直接使用的字符串的拼接模式,字符串的拼接其实有点慢,有可以优化的地方,这例我们暂时不优化,为了方便(参考day9 碎片知识点 元素创建的三种方式以及效率上的区别)
  
  3.因为我们的模拟的数据,所以不担心第一次页面没有数据加载,当用户点击购物车的时候,我们要拿到菜品的id
  然后拿到localStorage里面的数据. 这里采用事件委托,
          var e = event || window.event;
          var target = e.target || e.srcElement;
           //如果你不是class名字为add的a标签,就终止, 这是为了不让点击其他的位置也被委托了.
          if (!(target.nodeName === 'A' && target.className === 'add')) {
              return;
          }
  4.如果你是A标签,并且class名字为add,我就拿到你的id,然后顺着id拿到整条数据
  5.我们拿到数据后,要和本地的localstorage数据进行对比,看看购物车有没有这条数据
  	如果有
  		如果有这条数据,我们就在原有的数据上++, 最后重新写入到localstorage
  	如果没有
  		 添加一个属性,num,代表的是数量有了一个,然后写入到localstorage
  剩下的看代码理解.... 要注意的点就是
  我们拿出来的数据一定要进行
  //这里如果第一次拿数据,没有的话,也会给我们返回一个空数组 ,不会报错 
  //读取数据一定要JSON.parse()
  var locaData = JSON.parse(localStorage.getItem('cart') || '[]');
  //写入数据一定要JSON.stringify()
  localStorage.setItem('cart', JSON.stringify(locaData));
  
  没事在脑子里面多理理思路,其实很简单....但是有点容易忘记细节,总的而言写了三遍.
  ```

* 用户登录案例(day13用户登录,要用http协议启动,数据存储在localStorage)

  ```txt
  看代码,注释写的很全.
  ```

### day12ES6

#### 严格模式

ES6 的模块自动采用严格模式，不管你有没有在模块头部加上`"use strict";`。

严格模式分类

​	全局严格,局部严格

严格模式的好处

​	1.消除代码运行的一些不安全之处，保证代码运行的安全；

​	2.提高编译器效率，增加运行速度；

​	3.消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;

严格模式要注意:背5条

​	1.不允许省略var关键字

​	2.不允许在非函数代码块内声明函数,

​	3.禁止函数使用this关键字指向全局变量

​	4.arguments变量不会同步

​	5.不能使用八进制

​	6.eval作用域,加了严格模式,会有eval作用域

​	7.进制使用delete 删除 window对象的属性

​	8.无法使用with

#### 改变this指向

* bind

  ```javascript
  var obj = { name:'zhangsan'};
  var name = 'lisi';
  function fn(){console.log(this.name)}; //打印lisi
  //函数下的this 默认指向window 我们要改变this的指向
  
  //bind方法返回的仍然是一个函数，因此后面还需要()来进行调用
  fn.bind(obj)();
  
  //假如函数带有参数,bind的参数优先
  function fn(num){console.log(num)};
  //bind参数优先还是函数参数优先? 答案--> bind
  fn.bind(obj,123)(456); //这里会打印123 , 
  ```

#### let/const

##### 	let

  * 只有块级作用域 

    ```javascript
    {
        var a = 10;
        let b = 10;
    }
    console.log(a); // 10;
    console.log(b); //ReferenceError: a is not defined.
    ```

* 不存在变量提升

  ```javascript
  console.log(a); //undefined
  var a;
  
  console.log(b); //ReferenceError: a is not defined.
  let b;
  ```

* 存在暂时性死区(TDZ)

  ```javascript
  var temp = 123;
  if( true ){
      temp = 'abc'; //ReferenceError: a is not defined.
      let temp;
  }
  
  if (true) {
      // TDZ开始
      tmp = 'abc'; 
      console.log(tmp); //ReferenceError: a is not defined.
  
      let tmp; // TDZ结束
      console.log(tmp); // undefined
  
      tmp = 123;
      console.log(tmp); // 123
  }
  //let在声明之前使用,就会报错,因为存在暂时性死区,导致上面的代码会没用.
  ```

  > “暂时性死区”也意味着**typeof**不再是一个百分之百安全的操作。在没有**let**之前,**typeof**是百分百安全的,现在这一点不成立了.
  >
  > ```javascript
  > typeof x; //ReferenceError: a is not defined.
  > let x; 
  > ```

* 不允许重复声明

  > **let**不允许在相同作用域内，重复声明同一个变量。

  ```javascript
  // 报错
  function func() {
    let a = 10;
    var a = 1;
  }
  
  // 报错
  function func() {
    let a = 10;
    let a = 1;
  }
  
  function func(arg) {
    let arg;
  }
  // 报错
  func() 
  
  function func(arg) {
    {
      let arg;
    }
  }
  // 不报错
  func() 
  ```

  

##### const

> **const**声明一个只读的常量。一旦声明，常量的值就不能改变。这意味着const声明必须要立即初始化.

* 只有块级作用域
* 不能允许重复声明

 * const也存在暂时性死区
 * const声明的常量也不会提升

> **const**本质保证的是变量指向的那个地址不会变动,至于它的结构是不是可变的,就不能完全控制的了,因此将一个对象声明成常量必须非常小心.
>
> ``` javascript
> 例1:
> const foo = {};
> foo.age = 123; //不会报错;
> foo.name = "test"; //不会报错
> foo = {}; //报错,这里是在修改指向.
> 例2:
> const arr = [];
> arr.length = 0; //不报错
> arr.push('1'); //不报错
> arr = ['1']; //报错,这是在修改指向.
> 
> ```

##### var/let/const之间的区别,实际开发优先使用哪一个?

* var

  * 没有块级作用域，是弱类型，支持变量提升。
  * 可以重复声明，没有报错和警告
  * ES5中只有全局作用域和函数作用域,大部分人会采用闭包来解决ES5的问题

* let

  * 只有块级作用域 window无法访问
  * 不存在变量提升
  * 存在暂时性死区(TDZ)
  * 不允许重复声明

* const

  * 只有块级作用域 window无法访问
  * 不存在变量提升
  * 存在暂时性死区(TDZ)
  * 不允许重复声明
  * 声明时必须赋值,且后续不允许修改

* 实际开发中如何选择

  > 首先排除**var**在**let**和**const**之间做选择，建议优先使用**const**，尤其是在全局环境，不应该设置变量，只应设置常量。
  >
  > 一个是**const**可以提醒阅读程序的人，这个变量不应该改变；另一个是**const**比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；最后一个原因是 JavaScript 编译器会对**const**进行优化，所以多使用**const**，有利于提高程序的运行效率，也就是说**let**和**const**的本质区别，其实是编译器内部的处理不同.

#### 新增的String方法

* includes

  和indexOf很类似,只不过includes返回的值是boolean.

  ```javascript
  let str1 = "yangjiang";
  console.log(str1.includes("yan")); //找到返回true 类似于indexOf,但是indexOf返回的是下标
  console.log(str1.includes("y", 1)); //看下标1 是不是y 如果是就返回true 否则false
  console.log(str1.includes("yang", 0)); //从下标0 开始匹配, 看看是不是有yang 如果有就是true 否则 false
  ```

* startsWith

  string.startsWith(s,i)方法参数1为需要查询字符(串),参数2为查询的起始位置,返回布尔值,表示是否字符(串)位于string的头部位置。

  ```javascript
  let str2 = "yangjiang";
  console.log(str2.startsWith('yang')); //true
  console.log(str2.startsWith('yang', 1)); //false,起始位置为1
  ```

* endsWith

  方法用于测 试字符串是否以指定的后缀结束,返回布尔值,表示是否字符串位于string的尾部位置。

  ```javascript
   //返回布尔值,表示是否字符(串)位于string的尾部位置。
  let str3 = "yangjiang";
  console.log(str3.endsWith("jiang")); //true
  ```

* repeat

  重复字符串 返回一个新的字符串

  ```javascript
  //重复10次
  let str4 = "yangjiang";
  console.log(str4.repeat(10));
  ```

* padStart/padEnd

  ```
  在字符前面补全空,或者在字符串后面补全.
  ```

#### 新增的Array方法

* Array.from转数组

  ```javascript
  // 在转换之前,可能该元素是个对象,转换为数组之后就可以使用forEach
  Array.from(btns1).forEach(function(item) {
      item.onclick = function() {
          console.log(item);
      }
  });
  
  //Array.from 它有回调函数,可以对数组里面的内容进行改变
  //先把对象转换为数组
  var obj = {
              0: 1,
              1: 2,
              2: 3,
              length: 3
          };
  //可以对数组里面的内容进行改变
  var obj1 = Array.from(obj, function(item) {
      return item + 1;
  });
  console.log(obj, obj1);//obj1会把obj里面的值全部都+1
  ```

* Array.of创建数组

  ```javascript
  //解决了 Array()的一些问题
  var arr = Array.of(1, 3, 4, 5, 6);
  console.log(arr);
  ```

* Array.find找数组中的对象

  ```javascript
  var arr = [
      {name: '刘德华',age: 17}, 
      {name: '张学友',age: 18}, 
      {name: '周杰伦',age: 19}
  ];
  var name = '周杰伦';
  var obj = arr.find(function(item, index) {
      return item.name == name;
  })
  console.log(obj); //会返回周杰伦这个对象
  ```

* Array.findIndex找数组中对象的下标

  ```javascript
  var arr = [
      {name: '刘德华',age: 17}, 
      {name: '张学友',age: 18}, 
      {name: '周杰伦',age: 19}
  ];
  var name = '张学友';
  var index = arr.findIndex(function(item, index) {
  return item.name == name;
  })
  arr.splice(index, 1); //找到张学友这个下标 然后删除
  console.log(arr); 
  ```

#### 箭头函数

ES6允许使用箭头（=>）定义函数，箭头函数提供了一种更加简洁的函数书写方式，箭头函数多用于匿 名函数的定义；

* 函数创建的三种方式

  ```javascript
  //构造函数 
  var sum3 = new Function('n1', 'n2', 'return n1+n2'); //参数必须带引号
  //函数声明 
  function Fn(x, y) {
      return x + y;
  }
  //函数表达式
  var m = function(x, y) {
      return x + y;
  }
  ```

 *  传统模式和ES6写法区分

```javascript
// 传统写法1:无参数
let fn1 = function(){console.log("test")};
// 简化写法1:无参数
let fn2 = () => console.log("test");

// 传统写法2:一个参数
let fn3 = function(a){return a};
// 简化写法2:一个参数
let fn4 = (a) => a;

// 传统写法3:多个参数
let fn5 = function(a,b,c) {return a + b + c;}
// 简化写法3:多个参数
let fn5 = (a,b,c) => return a + b + c;
```

箭头函数的注意点： 

1. 如果形参只有一个，则小括号可以省略； 
2. 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果；
3. 箭头函数 this 指向声明时所在作用域下 this 的值； 
4. 箭头函数不能作为构造函数实例化；
5. 不能使用 arguments；

特性： 

1. 箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值； 
2. 不能作为构造实例化对象；
3. 不能使用 arguments 变量；

箭头函数的使用场景:

​	1.箭头函数适合与this无关的回调,例如定时器,数组的方法回调.

​	2.箭头函数不适合与this有关的回调,例如事件的回调,对象的方法.

```javascript
//this始终指向函数声明时所在作用域下的this的值.
        var obj = {
            fn1: function() {
                //如果是一个普通函数,this指向obj
                console.log(this);
                //箭头函数在声明时的作用域下,当前this是obj
                //所以箭头函数的this是obj
                let ff = () => {
                    console.log(this);
                }
                ff();

            },
            fn2: () => {
                //如果是箭头函数,this指向window
                console.log(this);
                //箭头函数在声明时的作用域下,当前this是window
                //所以箭头函数的this是window
                let ff = () => {
                    console.log(this);
                }
                ff();
            }
        }
        obj.fn1();
        obj.fn2();
```

```javascript
 		//反推
        let fn = n => m => n * m;

        function fn1(n) {
            return function(m) {
                return n * m
            };
        }
        //反推
        let fn = a => b => c => 5;

        function fn2(a) {
            return function(b) {
                return function(c) {
                    return 5;
                }
            }
        }
```

* 思路拓展 箭头函数如何拿到当前btn

  ```javascript
   var btn = document.querySelector('button');
  
  btn.onclick = function() {
      this.style.backgroundColor = 'red';
      console.log(this); //这里我们可以拿到btn
  }
  
  //思路扩展, 假设我们用箭头函数,就只能使用事件对象,之前没想到
  btn.onclick = (event) => {
      var e = event || window.event;
      var target = e.target || e.srcElement;
  
      console.log(target)
  }
  ```

#### Object新增的方法

 * Object.is()

   ```javascript
   1 == '1'; -- >　1 == Number('1');   // true 会有隐式类型转换
   
   1 === '1';  -->  // false 不会有隐士类型转换,如果不类型不相等直接返回false
   
   //ES6之前
   -0 === +0; // true;
   NaN === NaN; //false 
       
   //ES6新增Object.is,基本和===一致 除了以下这两种情况
   Object.is(-0,+0); //false
   object.is(NaN,NaN); // true;
   ```

 * Object.assign()

   ```javascript
   //假设我们要合并当前对象为另外一个对象,在没有Object.assign之前
           var o1 = {name: '刘德华',sex: "男"};
           var o2 = {age: 60,name: "蔡依林"};
           var o3 = {}
           for (var key in o1) {
               o3[key] = o1[key];
           }
           for (var key in o2) {
               o3[key] = o2[key];
           }
           console.log(o3)
   
   //现在有了Object.assign
   	  var o1 = {name: '刘德华',sex: "男"};
         var o2 = {age: 60,name: "蔡依林"};
         var o3 = {}
         Object.assign(o3,o1,o2);
   	  console.log(o3);
   ```

   

#### 碎片知识点

* indexOf 与 findIndex 区别

  ```txt
  indexOf ：查找值作为第一个参数，采用 === 比较，更多的是用于查找基本类型，如果是对象类型，则是判断是否是同一个对象的引用
  
  findIndex ：比较函数作为第一个参数，多用于非基本类型(例如对象)的数组索引查找，或查找条件很复杂
  ```

### day13 面向对象

面向对象的特性

* 继承
  * 子类拥有父类的属性或方法,提取成一个类
* 封装
  * 将相同的属性或方法,提取成一个类
  * 类:抽象的,模板,不具体.(模型,施工图)
  * 对象,具体,对象是属性的实例
  * 对象的组成(属性+方法)
* 多态
  * 重写 override 子类重写父类的属性或方法
  * 重载 overload javascript中不存在重载

闭包

​	是一种机制,函数嵌套函数,内部函数可以访问外部函数的变量和参数,外部函数的变量和参数不会被垃圾回收机制回收

new操作符做了什么事情

​	1.创建一个空对象

​	2.对象的__proto__指向构造函数的prototype 

​	3.将构造函数的this指向空对象

​	4.将属性和方法挂在到空对象

​	5.隐式return this

