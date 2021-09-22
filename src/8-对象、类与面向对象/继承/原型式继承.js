{
	// 原型式继承
	function object(o) {
		function F() {}
		F.prototype = o;
		return new F();
	}
	let person = { name: 'James', friends: ['Alice', 'Lucy', 'Ann'] };
	let anotherPerson = object(person);
	anotherPerson.name = 'Greg';
	anotherPerson.friends.push('Rob');
	console.log(anotherPerson);
	let yetAnotherPerson = object(person);
	yetAnotherPerson.name = 'Linda';
	yetAnotherPerson.friends.push('Barbie');
	console.log(yetAnotherPerson);
	console.log(person);
}
{
	console.log('Object.create()');
	let person = { name: 'James', friends: ['Alice', 'Lucy', 'Ann'] };
	let anotherPerson = Object.create(person, { name: { value: 'Albert' } });
	console.log(anotherPerson);
	anotherPerson.friends.push('Rob');
	console.log(person);
}
