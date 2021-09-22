{
	// 原型模式
	function Person() {}
	console.log(typeof Person.prototype);
	console.log(Person.prototype);
}
{
	function Person() {
		this.name = 'James';
		this.age = 18;
	}
	Person.prototype.sayName = function () {
		return 'Hello World';
	};
	let p1 = new Person();
	console.log(p1);
	console.log(p1.sayName());
}
{
	function Person() {}
	Person.prototype.name = 'James';
	Person.prototype.age = 18;
	Person.prototype.sayName = function () {
		return 'Hello World';
	};
	let p1 = new Person();
	let p2 = new Person();
	p1.name = 'Jones';
	console.log(p1.name);
	console.log(p1.hasOwnProperty('name'));
	console.log(p2.name);
	console.log(p2.hasOwnProperty('name'));
	delete p1.name;
	console.log(p1.name);
	console.log(p1.hasOwnProperty('name'));
}
{
	function Person() {}
	Person.prototype.name = 'James';
	Person.prototype.age = 29;
	Person.prototype.jon = 'Software Engineer';
	let p1 = new Person();
	if (!p1.hasOwnProperty('name') && 'name' in p1) {
		console.log('该属性是否是一个原型属性');
	}
}
