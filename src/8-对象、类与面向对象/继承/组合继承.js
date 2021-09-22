{
	console.log('组合继承');
	function SuperType(name) {
		this.name = name;
		this.colors = ['green', 'blue', 'red'];
	}
	SuperType.prototype.sayName = function () {
		return this.name;
	};
	function SubType(name, age) {
		// 继承属性
		SuperType.call(this, name);
		this.age = age;
	}
	// 继承方法
	SubType.prototype = new SuperType();
	SubType.prototype.sayAge = function () {
		return this.age;
	};
	let sub1 = new SubType('James', 36);
	sub1.colors.push('black');
	console.log(sub1);
	console.log(sub1.sayName());
	console.log(sub1.sayAge());
	console.log(sub1.colors);
	let sub2 = new SubType('Lucy', 30);
	console.log(sub2);
	console.log(sub2.sayName());
	console.log(sub2.sayAge());
	console.log(sub2.colors);
}
