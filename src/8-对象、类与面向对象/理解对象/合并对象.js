{
	let dest, src, result;
	dest = {};
	src = { id: 'src' };
	result = Object.assign(dest, src);
	console.log(result === dest);
	console.log(dest !== src);
}
{
	let dest, src, result;
	dest = {};
	result = Object.assign(dest, { a: 'foo' }, { b: 'bar' });
	console.log(result === dest);
	console.log(dest !== src);
	console.log(dest);
	console.log(result);
	dest = {
		set a(val) {
			console.log(`Invoked dest setter with param ${val}`);
		},
	};
	src = {
		get a() {
			console.log('Invoked src getter');
			return 'foo';
		},
	};
	Object.assign(dest, src);
	console.log(dest);
}
