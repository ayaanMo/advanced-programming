{
	function object(o) {
		function F() {}
		F.prototype = o;
		return new F();
	}
	function SuperType(name) {
		this.name = name;
		this.friends = ['a', 'b', 'c'];
	}
	SuperType.prototype.sayName = function () {
		console.log('say hi');
	};
	function inheritProrotype(subType, superType) {
		let prototype = object(superType.prototype);
		prototype.constructor = subType;
		subType.prototype = prototype;
	}
	function SubType(name, age) {
		SuperType.call(this, name);
		this.age = age;
	}
	inheritProrotype(SubType, SuperType);
	SubType.prototype.sayAge = function () {
		console.log(this.age);
	};
	let sub = new SubType('James', 18);
	console.log(sub);
	console.log(sub.sayName());
}
