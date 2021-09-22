{
	// 函数名就是指向函数的指针，它们跟其他包含对象指针的变量有相同的行为，这意味着一个函数可以有多个名称
	function sum(num1, num2) {
		return num1 + num2;
	}
	console.log(sum(10, 10));
	let anotherSum = sum;
	console.log(anotherSum(10, 10));
	sum = null;
	try {
		console.log(sum(10, 10));
	} catch (error) {
		console.log(error);
	}
	console.log(anotherSum(10, 10));
}
{
	// 读取函数名 ECMAScript6的所有函数对象都会暴露一个只读的name属性
	function foo() {}
	let bar = function () {};
	let baz = () => {};
	console.log(foo.name);
	console.log(bar.name);
	console.log(baz.name);
	console.log((() => {}).name === '');
	console.log(new Function().name);
}
{
	function foo() {}
	let dog = {
		name_: 'alice',
		get name() {
			return this.name_;
		},
		set name(newName) {
			this.name_ = newName;
		},
	};
	console.log(foo.bind(null).name);
	let property = Object.getOwnPropertyDescriptor(dog, 'name');
	console.log(property);
}
