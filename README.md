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











三步走:map提取--reduce处理--filter过滤

push和pop就是栈,push和shift就是队列

什么是伪数组

1，具有length属性

2，能够使用数组遍历方法遍历它们

3，不具有数组的push,pop等方法



如何判断数据是不是真数组：

数据 instanceof Array

Object.prototype.toString.call( 数据 ) === '[object Array]'
