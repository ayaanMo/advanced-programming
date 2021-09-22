{
    console.log('-----原始值和引用值-----');
    let str = new String('你好');
    str.name = '张三';
    str.age = 18;
    console.log(str);
    console.log(typeof str);
}
{
    // instanceof 与 typeof
    console.log('-----instanceof 与 typeof-----');
    let obj = { a: '1' };
    let arr = [1, 2];
    let func = function a(params) {};
    let num = 1;
    let boo = false;
    let str = 'a';
    let nu = null;
    let un = undefined;
    console.log(typeof obj);
    console.log(typeof arr);
    console.log(typeof func);
    console.log(typeof num);
    console.log(typeof boo);
    console.log(typeof str);
    console.log(typeof nu);
    console.log(typeof un);
    console.log('typeof ------ instanceof');
    console.log(obj instanceof Object);
    console.log(arr instanceof Array);
    console.log(func instanceof Function);
    console.log(num instanceof Number);
    console.log(boo instanceof Boolean);
    console.log(str instanceof String);
}
{
    const obj = Object.freeze({ a: 1 });
    obj.b = 2;
    console.log(obj);
    const obj1 = { a: 1 };
    obj1.b = 2;
    console.log(obj1);
    const func = function () {};
    console.log(func);
}
