{
	let set = new Set(['fat', 'bat']);
	set.add('sat');
	console.log(set.has('fat'));
	console.log(set.delete('fat'));
	set.forEach((value1, value2, se) => {
		console.log(value1);
		console.log(value2);
		console.log(se);
	});
	set.clear();
	console.log(set, 'set');
	let obj = { a: 1, b: 2 };
	console.log(Object.entries(obj));
}
{
	let ws = new WeakSet();
}
