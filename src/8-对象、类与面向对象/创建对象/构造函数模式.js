{
	// 构造函数模式 ECMAScript中的构造函数是用于创建特定类型对象的
	// 1.没有显示地创建对象
	// 2.属性和方法直接赋值给了this
	// 3.没有return
	function CreatePerson(name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
		this.sayName = function () {
			return `${this.name}_${this.age}_${this.job}`;
		};
	}
	let person01 = new CreatePerson('James', 18, 'teacher');
	let person02 = new CreatePerson('Alice', 18, 'student');
	console.log(person01.sayName());
	console.log(person02.sayName());
	// 使用new操作符 构造函数会执行一下操作
	// 1.内存中创建一个新对象
	// 2.这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性
	// 3.构造函数内部的this被赋值为这个新对象(即this指向新对象)
	// 4.执行构造函数内部的代码(给新对象添加属性)
	// 5.如果构造函数返回非空对象，则返回该对象；否则返回刚创建的新对象
}
{
	console.log('JS中的prototype、__proto__与constructor');
	// https://chen-cong.blog.csdn.net/article/details/81211729 帮你彻底搞懂JS中的prototype、__proto__与constructor
	// https://blog.csdn.net/cc18868876837/article/details/103149502 JavaScript中的new操作符的原理解析
	// 1. __proto__和constructor属性是对象所独有的
	// 2. prototype属性是函数所独有的，由于JS中函数也是一种对象，所以函数也拥有__proto__和constructor属性
	function Foo() {
		this.name = 'James';
		this.age = 18;
	}
	let f1 = new Foo();
	// 1.__proto__是对象所独有的；并且proto属性都是由一个对象指向一个对象，指向他们的原型对象（父类对象）
	// 2.prototype函数所独有的，prototype是从一个函数指向一个对象，函数的原型对象；任何函数在创建的时候，其实会默认同时创建该函数的prototype对象
	// 3.constructor是对象拥有的，constructor是从一个对象指向一个函数，指向该函数的构造函数
}
