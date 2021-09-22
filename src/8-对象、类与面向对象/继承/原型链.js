// 继承
{
	/**
	 * 每个构造函数都有一个原型对象，原型有一个属性指回构造函数，而实例有一个内部指针指向原型。
	 * 如果原型是另一个类型的实例呢，那就意味着这个原型本身有一个内部指针指向另一个原型，相应的另一个原型也有一个指针指向另外一个构造函数。
	 * 这样实例和原型之间构造了一条原型链
	 */
}
{
	function SuperType() {
		this.property = true;
	}
	SuperType.prototype.getSuperValue = function () {
		return this.property;
	};
	function SubType() {
		this.subProperty = false;
	}
	// 继承SuperType
	SubType.prototype = new SuperType();
	SubType.prototype.getSubValue = function () {
		return this.subProperty;
	};
	let instance = new SubType();
	console.log(instance);
}
{
	// 1.__proto__是对象所独有的；并且proto属性都是由一个对象指向一个对象，指向他们的原型对象（父类对象）
	// 2.prototype函数所独有的，prototype是从一个函数指向一个对象，函数的原型对象；任何函数在创建的时候，其实会默认同时创建该函数的prototype对象
	// 3.constructor是对象拥有的，constructor是从一个对象指向一个函数，指向该函数的构造函数
	// 4.构造函数的prototype指针指向原型对象
	// 5.原型对象的constructor属性指向构造函数
	// 6.实例的constructor属性指向构造函数
	// 7.实例的__proto__属性指向原型对象
	function Foo() {
		this.name = 'James';
	}
	function Boo() {
		this.name = 'Lucy';
	}
	Boo.prototype = new Foo();
	let b1 = new Boo();
	console.log(Boo.prototype, '构造函数的prototype');
	console.log(b1.constructor, '实例的构造函数属性');
	console.log(b1.__proto__, '实例对象的原型对象');
	console.log(b1.__proto__.constructor, '原型对象的指向');
}
