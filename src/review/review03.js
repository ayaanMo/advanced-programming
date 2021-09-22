{
	Object.mycreate = function (proto, properties) {
		function F() {}
		F.prototype = proto;
		if (properties) {
			Object.defineProperties(F, properties);
		}
		return new F();
	};
	function newMethod(func, ...args) {
		let obj = Object.mycreate(func.prototype);
		let result = func.apply(obj, args);
		return result instanceof Object ? result : obj;
	}
	function Foo(name, age) {
		this.name = name;
		this.age = age;
	}
	let f = newMethod(Foo, 'James', 18);
	console.log(f.name);
	console.log(f.age);
}
