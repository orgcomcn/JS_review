### typeof+显示类型转换+隐式类型转换习题

 * **typeof** 能返回的值有Number/String/Boolean/Object/undefined/Function/symbol,**typeof**可以用来区分除了 Null类型以外的原始数据类型，
* JS数据类型有 Number/String/Boolean/Object/undefined/null/symbol(ES6新增)

#### 第一部分-基础

``` javascript
typeof Object;      //function
typeof Function;    //function
typeof Array;       //function
typeof Number;      //function
typeof String;      //function
typeof undefined;   //undefined
typeof null;        //object
```

#### 第二部分-基础

```javascript
typeof("123");      //string
typeof(123);        //number
typeof("true");     //string
typeof(true);       //boolean
typeof([]);         //object
typeof({});         //object
typeof(null);       //object
typeof(undefined);  //undefined
typeof(function(){});   //function
```

#### 第三部分-隐式类型转换

```javascript
//请说出typeof的值和num的值分别是什么?
var num = "1" + "1";
console.log(typeof(num) + ":" + num); //string 11
var num = 1 + "1";
console.log(typeof(num) + ":" + num); //string 11
var num = "1" - "1";
console.log(typeof(num) + ":" + num); //number 0
var num = 1 - "1";
console.log(typeof(num) + ":" + num); //number 0
var num = "1" * "1";
console.log(typeof(num) + ":" + num); //number 1
var num = 1 * "1";
console.log(typeof(num) + ":" + num); //number 1
var num = "1" / "1";
console.log(typeof(num) + ":" + num); //number 1
var num = 1 / "1";
console.log(typeof(num) + ":" + num); //number 1
```

#### 第四部分-Number() 

```javascript
//Number() 会想方设法把里面的值转换为Number类型
//num的值是什么?
var num = Number('123');
console.log("num:" + num);  //123
var num = Number('123.3');
console.log("num:" + num);  //123.3
var num = Number(true);
console.log("num:" + num);  //1
var num = Number(false);
console.log("num:" + num);  //0
var num = Number(null);
console.log("num:" + num);  //0
var num = Number(undefined);
console.log("num:" + num);  //NaN
var num = Number("a");
console.log("num:" + num);  //NaN
var num = Number("-123");
console.log("num:" + num);  //-123
var num = Number("123abc");
console.log("num:" + num);  //123

```

#### 第五部分-parseInt()

```javascript
//只负责把里面的东西转换成整型,转不了就是NaN.
var num = parseInt(123);
console.log("num:" + num);  //123
var num = parseInt(123.9); 
console.log("num:" + num);  //123
var num = parseInt("123.9");
console.log("num:" + num); //123
var num = parseInt(true);
console.log("num:" + num);  //NaN
var num = parseInt(false);
console.log("num:" + num);  //NaN
var num = parseInt(null);  
console.log("num:" + num);  //NaN
var num = parseInt(undefined);
console.log("num:" + num);  //NaN
var num = parseInt("123abc");
console.log("num:" + num); //123
var num = parseInt("_123");
console.log("num:" + num); //NaN
var num = parseInt("-123"); 
console.log("num:" + num); //-123
// parseInt的妙用 取100出来
var num = parseInt("100px"); 
console.log("num:" + num);  //100
```

#### 第六部分-parseInt(string,radix)

```javascript
//parseInt(string,radix) 
//以radix为基底,转换为10进制 radix:2-36
var num = parseInt("10",16);
console.log("num:" + num);  // 十进制 16
var num = parseInt("b",16);
console.log("num:" + num); //  十进制 11
var num = parseInt(11,16);
console.log("num:" + num); // 十进制 17
var num = parseInt(3,2);
console.log("num:" + num);  //NaN 二进制里面没有3
var num = parseInt("3",2);
console.log("num:" + num); //NaN  二进制里面没有3
var num = parseInt("01010101",2);
console.log("num:" + num);  // 十进制 85
```

#### 第七部分-parseFloat()

```javascript
var num = parseFloat("100.2");  
console.log("num:" + num);      // 100.2
var num = parseFloat("100.2.1"); 
console.log("num:" + num);      // 100.2
var num = parseFloat("100.2a"); 
console.log("num:" + num);      // 100.2
var num = parseFloat("-100.2a") 
console.log("num:" + num);      // -100.2
var num = parseFloat("a100.2a");
console.log("num:" + num);       // NaN
```

#### 第八部分String()

```javascript
var num = String(123.234);
console.log("num:" + num);      //123.234
var num = String(undefined);
console.log("num:" + num);      //undefined
var num = String(true);
console.log("num:" + num);      //true
var num = String(Boolean);
console.log("num:" + num);      //function Boolean() { [native code] }
var num = String(Number);
console.log("num:" + num);      //function Number() { [native code] }
var num = String(Array);
console.log("num:" + num);      //function Array() { [native code] }
```

#### 第九部分Boolean()

```javascript
//String: 非空字符串为true, 空字符串为false
//Number: 非0数值为true, 0或者NaN为false
//Object: 对象不为null则为true, null为false
//undefined : undefined为false
var num = Boolean("");         
console.log("num:" + num);  //false
var num = Boolean(null);
console.log("num:" + num);      //false
var num = Boolean(undefined);
console.log("num:" + num);  //false
var num = Boolean(NaN);
console.log("num:" + num);  //false
var num = Boolean(0);
console.log("num:" + num);  //false
var num = Boolean({});
console.log("num:" + num); //true
var num = Boolean([]);
console.log("num:" + num); //true
```

#### 第十部分toString()

```javascript
//undefined null 不能使用会报错 原型里面没有 toString属性
var num = "123";
console.log(num.toString());  //123
var num = undefined.toString(); //不能用 报错
var num = null.toString(); //不能用 报错
```

#### 第十一部分toString(radix)

```javascript
//以10进制为基底转换为目标进制  radix:2-36
var num = 123;
//以10进制123为基底转换为16进制
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
isNaN(NaN); //true
isNaN(123); //false
isNaN("123"); //false
isNaN("NaN");   //true  因为 隐式类型转换 后成为了NaN
isNaN("abc");   //true  因为 隐式类型转换 后成为了NaN
isNaN(""); //false   Number("") --> 0 
isNaN(null);    //false  Number(null) --> 0 
isNaN(undefined); //true

// 输入一个数判断是否合法 案例
var num;
do {
    num = prompt('请输入一个数字');
    if (!isNaN(num)) {
        var res = num % 2 == 0 ? "偶数" : "奇数";
        console.log(res);
    }

} while (isNaN(num) || isNaN("")); //如果是不是数字 一直循环
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

var num = null > 0;	  //false   对比大于或小于的时候, null 会尝试转型为number , 转化之后null为0, 
var num = null < 0;   // false 
var num = null == 0;  //false null在设计上，对比等于的时候不尝试转型. 所以null == 0结果为false.

var num = undefined == null; //true

//任何一种情况 NaN 不等于任何东西 
var num = NaN == NaN; //false
var num = NaN === NaN; //false
```

#### 不发生类型转换部分 === / !==

```javascript
// == 和 ===的区别是什么? == 可能会发生类型转换,只会比较值. === 不会发生类型转换,会比较值和类型.
var num = 1 === 1;   //true
var num = 1 === "1"; //false
var num = 1 !== 1;  //false
var num = 1 !== "1"; //true
var num = NaN === NaN; //false
```

#### 特殊的案例

```javascript
//特殊的案例 变量未定义 使用 只有一种情况不会发生报错 就是使用typeof 会返回undefined
console.log(a);//未定义直接输出 会报错
console.log( typeof (a) ); //使用typeof不会报错 会打印undefined 在es6中使用let的话还是会报错
```

#### 作业

```javascript
console.log(typeof(f));  //undefined typeof 任何一个未声明的变量都是undefined
console.log(typeof(undefined));  //undefined
console.log( typeof(Number)); // function
console.log( typeof(String)); // function
console.log(typeof(NaN));  //number
console.log(typeof(null));  //object

var a ="123abc";
console.log(typeof(+a));   //numbcer
console.log(typeof(!!a)); //boolean
console.log(typeof(a+"")); //string
console.log(1 == "1");  //true
console.log(NaN == NaN); //false
console.log(NaN == undefined); //false
console.log(11+"11");  // 1111
console.log(1==="1");  //false
console.log(parseInt("123abc"));	 //123 
var num =123123.3456789;
console.log(num.toFixed(3)); //123123.346
console.log(typeof(typeof(a))); //string



null == undefined //true undefined派生自null
null === undefined  //false
'NaN' == NaN  //false
5 == NaN  //false
NaN == NaN //false
false == 0 //true
true == 1 //true
true == 2 //false
undefined == 0 //false
null == 0  // false   null在设计上，对比等于的时候不尝试转型. 所以null == 0结果为false. > < >= <=都会尝试类型转换
'100' == 100 //true
'100' === 100 //false
```

