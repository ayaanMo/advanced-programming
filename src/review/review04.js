{
	let obj = {};
	Object.defineProperty(obj, 'name', {
		value: 'James',
		configurable: true,
		writable: true,
		enumerable: true,
	});
	console.log(obj);
	let obj1 = {};
	Object.defineProperties(obj1, {
		name: {
			value: 'James',
			configurable: true,
			writable: true,
			enumerable: true,
		},
	});
	console.log(obj1);
	console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
	console.log(Object.getOwnPropertyDescriptors(obj));
}
{
	let obj01 = { a: '1', b: { c: '3' } };
	let obj02 = Object.assign({}, obj01);
	console.log(obj02);
	obj01.a = '2';
	obj01.b.c = '4';
	console.log(obj01);
	console.log(obj02);
}
{
	console.log(Object.is('1', '2'));
	console.log(Object.is('2', '2'));
	console.log(Object.is(NaN, NaN));
	console.log(Object.is(+0, -0));
	let obj1 = { a: 1 };
	let obj2 = obj1;
	let obj3 = { a: 1 };
	console.log(Object.is(obj1, obj2));
	console.log(Object.is(obj1, obj3));
	console.log(obj1 === obj2);
	console.log(obj1 === obj3);
	console.log(NaN === NaN);
}
{
	// new操作经历了哪些事情
	/**
	 * 1.在内存中创建一个新对象
	 * 2.这个新对象的[[Prototype]]特性被赋值为构造函数的prototype属性 相当于是 函数的prototype = object.proto
	 * 3.构造函数中的this指被赋值为这个新对象
	 * 4.执行构造函数内部代码，假如是为this赋值，相当于是为实例赋值
	 * 5.构造函数返回非空对象，则返回该对象；否则返回这个刚创建的新对象
	 */
	// 函数包含prototype属性；对象具有的特性constructor和__proto__
}
{
	// 原型链模式
	function Foo() {
		this.name = 'James';
	}
	function Boo() {
		this.age = 18;
	}
	Boo.prototype = new Foo();
	let boo = new Boo();
	console.log(boo.name);
	console.log(boo.age);
}
{
	// 盗用构造函数
	function Foo() {
		this.name = 'James';
		this.age = 18;
		this.sayHi = function () {
			return 'hello world';
		};
	}
	function Boo() {
		Foo.call(this);
	}
	let boo = new Boo();
	console.log(boo.name);
	console.log(boo.age);
	console.log(boo.sayHi());
}
{
	// 组合继承
	function Foo() {
		this.name = 'Alice';
		this.age = 18;
	}
	Foo.prototype.sayHi = function () {
		return 'hello world';
	};
	function Boo() {
		Foo.call(this);
	}
	Boo.prototype = new Foo();
	let boo = new Boo();
	console.log(boo.name);
	console.log(boo.age);
	console.log(boo.sayHi());
}
{
	// 原型式继承
	function object(o) {
		function F() {}
		F.prototype = o;
		return new F();
	}
	let person = { name: 'james', age: 18, friends: ['alice', 'lucy'] };
	let another = object(person);
	console.log(another.name);
	console.log(another.age);
	another.friends.push('lily');
	console.log(another.friends);
	// 等同于
	let yetanother = Object.create(person);
	console.log(yetanother.name);
	console.log(yetanother.age);
	yetanother.friends.push('rob');
	console.log(yetanother.friends);
	Object.mycreate = function (proto, properties) {
		function F() {}
		F.prototype = proto;
		if (properties) {
			Object.defineProperties(F, properties);
		}
		return new F();
	};
	let other = Object.mycreate(person);
	console.log(other.name);
	console.log(other.age);
	yetanother.friends.push('mike');
	console.log(other.friends);
}
{
	// 寄生式继承
	function object(o) {
		function F() {}
		F.prototype = o;
		return new F();
	}
	function createObject(o) {
		let newObj = object(o);
		newObj.sayHi = function () {
			return 'hello world';
		};
		return newObj;
	}
	let person = { name: 'james', age: 18 };
	let another = createObject(person);
	console.log(another.name);
	console.log(another.age);
	console.log(another.sayHi());
}
