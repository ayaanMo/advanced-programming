{
	let o = { qux: {} };
	console.log(Object.values(o));
	console.log(Object.entries(o));
}
{
	let o = {
		foo: 'bar',
		baz: 1,
		qux: {},
	};
	console.log(Object.values(o), 'values'); //['bar',1,{}]
	console.log(Object.keys(o), 'keys'); //['foo','baz','qux']
	console.log(Object.entries(o), 'entries'); //[['foo','bar'],['baz',1],['qux',{}]]
}
{
	function Person() {}
	Person.prototype = {
		constructor: Person,
		name: 'James',
		age: 29,
		job: 'Software Engineer',
		friends: ['Shelby', 'Court'],
		sayName() {
			console.log(this.name);
		},
	};
	let p1 = new Person();
	let p2 = new Person();
	p1.friends.push('Van');
	console.log(p1.friends, 'p1');
	console.log(p2.friends, 'p2');
}
{
	function Person() {
		this.name = 'James';
		this.friends = [];
	}
	let p1 = new Person();
	let p2 = new Person();
	p1.friends.push('Van');
	console.log(p1.friends, 'p1');
	console.log(p2.friends, 'p2');
}
