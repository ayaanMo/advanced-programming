{
	// 类构造函数
	// constructor关键字用于在类定义块内部创建类的构造函数；
	// 实例化 使用new调用类的构造函数会执行如下操作
	// 1.在内存中创建一个新对象
	// 2.这个新对象内部的[[Prototype]]指针被赋值为构造函数的prototype属性；
	// 3.构造函数内部的this被赋值为这个新对象（即this指向新对象）
	// 4.执行构造函数内部的代码（给新对象添加属性）
	// 5.如果构造函数返回非空对象，则返回该对象；否则返回刚创建的对象
	class Animal {}
	class Person {
		constructor() {}
	}
	class Vegetable {
		constructor() {
			this.color = 'orange';
		}
	}
	let a = new Animal();
	let p = new Person();
	let v = new Vegetable();
	console.log(v.color);
}
