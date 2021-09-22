// typeof 操作符
let a = undefined;
let b = false;
let c = 'c';
let d = 1;
let e = {};
let f = function () {};
let g = Symbol('g');
let h = null;
// undefined
console.log(typeof a);
//boolean
console.log(typeof b);
// string
console.log(typeof c);
// number
console.log(typeof d);
// object
console.log(typeof e);
// function
console.log(typeof f);
// symbol
console.log(typeof g);
// object
console.log(typeof h);
let message = undefined;
// true
console.log(message === undefined);
// true
console.log(Boolean(g));
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
// 特别的存在
console.log(0.1 + 0.2);
// false
console.log(NaN === NaN);
// Infinity
console.log(5 / 0);
// NaN
console.log(Number('a123'));
// 12
console.log(Number('012'));
// NaN
console.log(Number('xx0.1'));
console.log(Number('0.1xxx'));
console.log(Number({ a: '1' }.valueOf()));
console.log(Number({}.valueOf().toString()));
console.log(Number({ a: '1' }.valueOf().toString()));
// 字符串换行
console.log('aaaa\ndsdsds');
console.log({ a: '1' }.toString());
console.log(String({ a: '1' }));
let myMultiLineTemplateLiteral = `first line 
second line`;
console.log(myMultiLineTemplateLiteral);
// 标签模板字面量
{
    console.log('模板字面量标签函数');
    function test(strings, ...values) {
        console.log(strings.raw);
        console.log(strings);
        console.log(values);
    }
    let a = 4;
    let b = 5;
    let c = 6;
    let d = 7;
    test`${a}+${b}是否等于${c}+sss${d}ssss`;
    test`${a}+${b}是否等于${c}`;
    test`${a}+${b}=${c}`;
    test`${a}${b}${c}${d}`;
}
{
    let obj = new Object();
}
