{
	let person = new Object();
	person.name = 'abc';
	person.age = 29;
	person.job = 'efg';
	person.sayName = function () {
		console.log(this.name);
	};
	console.log(person.sayName());
	console.log('等同于字面量');
	let person1 = {
		name: 'abc',
		age: 29,
		job: 'efg',
		sayName() {
			console.log(this.name);
		},
	};
	console.log(person1.sayName());
}
{
	console.log('属性分两种：数据属性和访问器属性');
	/**
	 * 数据属性
	 */
	//  1.[[Configurable]] 禁止delete，并且在严格模式下为false的情况下  会报错
	let person = {};
	Object.defineProperty(person, 'name', {
		configurable: false,
	});
	//  2.[[Enumerable]]
	let person1 = { a: 1, b: 2 };
	Object.defineProperty(person1, 'a', {
		enumerable: false,
	});
	for (let item in person1) {
		console.log(item);
	}
	//  3.[[Writable]] 就没有读写更改权限
	//  4.[[Value]] value赋值
}
{
	/**
	 * 访问器属性
	 */
	console.log('访问器属性');
	let person = { a_: 1, b: 2 };
	Object.defineProperty(person, 'a', {
		get() {
			return 'zhy';
		},
		set(newValue) {
			this.a_ = newValue;
		},
	});
	console.log(person.a);
	person.a = 4;
	console.log(person);
}
