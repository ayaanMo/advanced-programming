{
	// 对象解构
	let person = { name: 'James', age: 18 };
	let { name, age } = person;
	console.log(name);
	console.log(age);
}
{
	let person = { name: 'James', age: 18 };
	function printPerson01(foo, { name, age }, bar) {
		console.log(arguments);
		console.log(`${name}_${age}`);
	}
	function printPerson02(foo, { name: personName, age: personAge }, bar) {
		console.log(arguments);
		console.log(`${personName}_${personAge}`);
	}
	printPerson01('hello', person, 'world');
	printPerson02('hello', person, 'world');
}
