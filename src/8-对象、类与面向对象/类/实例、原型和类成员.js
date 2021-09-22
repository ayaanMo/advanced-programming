{
	// 实例成员
	class Person {
		constructor() {
			this.name = new String('Jack');
			this.sayName = () => console.log(this.name);
			this.nicknames = ['Jake', 'J-Dog'];
		}
		locale() {
			console.log('prototype');
		}
	}
	let p = new Person();
	console.log(p);
	console.dir(p);
}
{
	// 访问器
	class Person {
		set name(newName) {
			this.name_ = newName;
		}
		get name() {
			return this.name_;
		}
	}
	let p = new Person();
	p.name = 'Jake';
	console.log(p.name);
}
{
	// 迭代器
	class Person {
		constructor() {
			this.nicknames = ['Jack', 'Jake', 'J-Dog'];
		}
		*[Symbol.iterator]() {
			yield* this.nicknames.entries();
		}
	}
	let p = new Person();
	for (let [idx, nickname] of p) {
		console.log(nickname);
		console.log(idx);
	}
}
