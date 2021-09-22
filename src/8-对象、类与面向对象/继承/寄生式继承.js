{
	// 寄生式继承 = 寄生构造函数+工厂模式
	console.log('寄生式继承 = 寄生构造函数+工厂模式');
	function object(o) {
		function F() {}
		F.prototype = o;
		return new F();
	}
	function createAnother(original) {
		let clone = object(original);
		clone.sayHi = function () {
			console.log('hi');
		};
		return clone;
	}
	let person = { name: 'James', age: 18 };
	let another = createAnother(person);
	console.log(another);
	console.log(another.sayHi());
}
