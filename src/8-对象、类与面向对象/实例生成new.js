{
	// 构造器函数
	let Parent = function (name, age) {
		this.name = name;
		this.age = age;
	};
	Parent.prototype.sayName = function () {
		console.log(this.name);
	};
	//自己定义的new方法
	let newMethod = function (Parent, ...rest) {
		// 1.以构造器的prototype属性为原型，创建新对象；
		let child = Object.create(Parent.prototype);
		// 2.将this和调用参数传给构造器执行
		Parent.apply(child, rest);
		// 3.返回第一步的对象
		return child;
	};
	//创建实例，将构造函数Parent与形参作为参数传入
	const child = newMethod(Parent, 'echo', 26);
	child.sayName(); //'echo';

	//最后检验，与使用new的效果相同
	child instanceof Parent; //true
	child.hasOwnProperty('name'); //true
	child.hasOwnProperty('age'); //true
	child.hasOwnProperty('sayName'); //false
}
{
	// 1.创建一个新对象
	// 2.将新对象的prototype指向一个原型对象
	// 3.将原型对象的构造函数的this指向这个新的对象
	// 4.构造函数如果没有return则返回这个新对象
	function Person(name, age) {
		this.name = name;
		this.age = age;
	}
	function newMethod(p, ...args) {
		let obj = Object.create(p.prototype);
		let result = p.apply(obj, args);
		console.log(result);
		return result instanceof Object ? result : obj;
	}
	let p1 = newMethod(Person, 'James', 18);
	console.log(p1.name);
	console.log(p1.age);
}
{
	// 重写new方法
	Object.mycreate = function (proto, propertys) {
		// 1.实例一个构造函数
		function F() {}
		// 2.将构造函数的原型对象指向proto
		F.prototype = proto;
		// 3.将新属性添加到构造函数上面
		if (property) {
			Object.defineProperties(F, propertys);
		}
		return new F();
	};
	function newMethod(func, ...args) {
		// 1.创建一个对象
		let obj = Object.mycreate(func.prototype);
		// 2.将构造函数内部的this指向obj
		let result = func.apply(obj, args);
		// 3.假如返回的是一个对象则返回对象，否则则返回该实例
		return result instanceof Object ? result : obj;
	}
	function Foo(name, age) {
		this.name = name;
		this.age = age;
	}
	let foo = newMethod(Foo, 'James', 18);
	console.log(foo.name);
	console.log(foo.age);
}
