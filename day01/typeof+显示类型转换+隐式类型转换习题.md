### typeof+显示类型转换+隐式类型转换习题

 * typeof 能返回的值有

    * Number
    * String
    * Boolean
    * Object
    * Undefined
    * Function
* 习题

#### 第一部分-基础

``` javascript
typeof Object;
typeof Function;
typeof Array;
typeof Number;
typeof String;
typeof undefined;
typeof null;
```

#### 第二部分-基础

```javascript
typeof("123");
typeof(123);
typeof("true");
typeof(true);
typeof([]);
typeof({});
typeof(null);
typeof(undefined);
typeof(function(){});
```

#### 第三部分-隐式类型转换

```javascript
//请说出typeof的值和num的值分别是什么?
var num = "1" + "1";
console.log(typeof(num) + ":" + num);
var num = 1 + "1";
console.log(typeof(num) + ":" + num);
var num = "1" - "1";
console.log(typeof(num) + ":" + num);
var num = 1 - "1";
console.log(typeof(num) + ":" + num);
var num = "1" * "1";
console.log(typeof(num) + ":" + num);
var num = 1 * "1";
console.log(typeof(num) + ":" + num);
var num = "1" / "1";
console.log(typeof(num) + ":" + num);
var num = 1 / "1";
console.log(typeof(num) + ":" + num);
```

#### 第四部分-Number() 

```javascript
//Number() 会想方设法把里面的值转换为Number类型
//num的值是什么?
var num = Number('123');
console.log("num:" + num);
var num = Number('123.3');
console.log("num:" + num);
var num = Number(true);
console.log("num:" + num);
var num = Number(false);
console.log("num:" + num);
var num = Number(null);
console.log("num:" + num);
var num = Number(undefined);
console.log("num:" + num);
var num = Number("a");
console.log("num:" + num);
var num = Number("-123");
console.log("num:" + num);
var num = Number("123abc");
console.log("num:" + num);

```

#### 第五部分-parseInt()

```javascript
//只负责把里面的东西转换成整型,转不了就是NaN.
var num = parseInt(123);
console.log("num:" + num);
var num = parseInt(123.9); 
console.log("num:" + num);
var num = parseInt("123.9");
console.log("num:" + num);
var num = parseInt(true);
console.log("num:" + num);
var num = parseInt(false);
console.log("num:" + num);
var num = parseInt(null);
console.log("num:" + num);
var num = parseInt(undefined);
console.log("num:" + num);
var num = parseInt("123abc");
console.log("num:" + num);
var num = parseInt("_123");
console.log("num:" + num);
var num = parseInt("-123");
console.log("num:" + num);
// parseInt的妙用 取100出来
var num = parseInt("100px"); 
console.log("num:" + num);
```

#### 第六部分-parseInt(string,radix)

```javascript
//parseInt(string,radix) 
//以radix为基底,转换为10进制 radix:2-36
var num = parseInt("10",16);
console.log("num:" + num);
var num = parseInt("b",16);
console.log("num:" + num);
var num = parseInt(11,16);
console.log("num:" + num);
var num = parseInt(3,2);
console.log("num:" + num);
var num = parseInt("3",2);
console.log("num:" + num);
var num = parseInt("01010101",2);
console.log("num:" + num);
```

#### 第七部分-parseFloat()

```javascript
var num = parseFloat("100.2");
console.log("num:" + num);
var num = parseFloat("100.2.1");
console.log("num:" + num);
var num = parseFloat("100.2a");
console.log("num:" + num);
var num = parseFloat("-100.2a")
console.log("num:" + num);
var num = parseFloat("a100.2a");
console.log("num:" + num);
```

#### 第八部分String()

```javascript
var num = String(123.234);
console.log("num:" + num);
var num = String(undefined);
console.log("num:" + num);
var num = String(true);
console.log("num:" + num);
var num = String(boolean);
console.log("num:" + num);
```

#### 第九部分Boolean()

```javascript
//String: 非空字符串为true, 空字符串为false
//Number: 非0数值为true, 0或者NaN为false
//Object: 对象不为null则为true, null为false
//undefined : undefined为false

var num = Boolean("");
console.log("num:" + num);
var num = Boolean(null);
console.log("num:" + num);
var num = Boolean(undefined);
console.log("num:" + num);
var num = Boolean(NaN);
console.log("num:" + num);
var num = Boolean(0);
console.log("num:" + num);
var num = Boolean({});
console.log("num:" + num);
var num = Boolean([]);
console.log("num:" + num);
```

#### 第十部分toString()

```javascript
//undefined null 不能使用会报错 原型里面没有 toString属性
var num = "123";
console.log(num.toString());
var num = undefined.toString(); //不能用 报错
var num = null.toString(); //不能用 报错
```

#### 第十一部分toString(radix)

```javascript
//以10进制为基底转换为目标进制  radix:2-36
var num = 123;
//以10进制123为基底转换为8进制
console.log(num.toString(16));


//题目: 10101010(2进制) ---> 转换为16进制
//思路: 2进制 ---> 10进制 ---> 16进制 
var num = parseInt(10101010,2).toString(16);

//题目: 1a(16进制)  ---> 转换为2进制
// 思路: 16进制 ---> 10进制  ---> 二进制
var num = parseInt("1a",16).toString(2);

// 题目: Number(undefined) 
// 题目: 有哪两个东西不能用toString()?
```

#### 第十二部分isNaN()

```javascript
// isNaN()  判断这个数 是不是NaN --- > 隐式类型转换对应的Number
isNaN(NaN);
isNaN(123);
isNaN("123");
isNaN("NaN");
isNaN("abc");
isNaN(null);
isNaN(undefined);
```

#### 第十三部分++ / -- + / -(一元正/负)

```javascript
var num = "123";
num ++;  //++之前 Number(num)

var num = "abc";
num ++; //++之前 Number(num) -- > NaN

var num = +"abc"; //会转换成Number -- > NaN
var num = -"abc"; //会转换成Number -- > NaN
```

#### 第十四部分+(加号)

```javascript
// + 两边有一个是字符串的话 就会调用String
var num = "a" + 1;  //String
```

#### 第十五部分-*/% 

```javascript
var num = "1" + 1;  //String("1") + String(1); -- > "1" + "1" = 11
var num = "a" * 1; // Number("a") * Number(1); -- > NaN * 1 = NaN
```

#### 第十六部分 > < >= <=

```javascript
var num = 1 > "2";  //Number(1) > Number(2);
var num = "3" > "2"; //字符串和字符串比较的是ascii码
var num = "3" > 1; //Number(3) > Number(1);
```

#### 第十七部分 == !=

```javascript
var num = 1 == "1";  // 也有隐式类型转换 Number(1) == Number(1)
var num = 1 == true; // Number(1) == Number(true)
```

#### 特殊部分

```javascript
var num = false > true;  // false
var num = undefined > 0;  //false
var num = undefined < 0; //false
var num = undefined == 0; //false

var num = null > 0;	  //false 
var num = null < 0;   // false
var num = null == 0;  //false

var num = undefined == null; //true

//任何一种情况 NaN 不等于任何东西 
var num = NaN == NaN; //false
var num = NaN === NaN; //false
```

#### 不发生类型转换部分 === / !==

```javascript
// == 和 ===的区别是什么? == 可能会发生类型转换,只会比较值. === 不会发生类型转换,会比较值和类型.
var num = 1 === 1;
var num = 1 === "1";
var num = 1 !== 1;
var num = 1 !== "1";
var num = NaN === NaN;
```

#### 特殊的案例

```javascript
//特殊的案例 变量未定义 使用 只有一种情况不会发生报错 就是使用typeof 会返回undefined
console.log(a);//未定义直接输出 会报错
console.log( typeof (a) ); //使用typeof不会报错 会打印undefined
```

#### 作业

```javascript
console.log(typeof(f));
console.log(typeof(undefined));
console.log( typeof(Number));
console.log( typeof(String));
console.log(typeof(NaN));  
console.log(typeof(null));  

var a ="123abc";
console.log(typeof(+a));  
console.log(typeof(!!a));
console.log(typeof(a+""));
console.log(1 == "1");
console.log(NaN == NaN);
console.log(NaN == undefined);
console.log(11+"11");
console.log(1==="1");
console.log(parseInt("123abc"));	 
var num =123123.3456789;
console.log(num.toFixed(3));
console.log(typeof(typeof(a)));
```

