{
	// map
	let map01 = new Map([
		['bat', '01'],
		['fat', '02'],
	]);
	map01.set('sat', '03');
	console.log(map01.get('sat'));
	console.log(map01);
	console.log(map01.has('fat'));
	console.log(map01.size);
	map01.forEach((value, key, map) => {
		console.log(value);
		console.log(key);
		console.log(map);
		map01.delete(key);
	});
	console.log(map01);
}
{
	let map = new Map([
		['bat', '01'],
		['fat', '02'],
		['sat', '03'],
	]);
	for (let item of map.entries()) {
		console.log(item, 'entries');
	}
	for (let item of map.keys()) {
		console.log(item, 'keys');
	}
	for (let item of map.values()) {
		console.log(item, 'values');
	}
	let map01 = [...map];
	console.log(map01);
}
{
	let weakMap = new WeakMap();
	let weak01 = new String('01');
	let weak02 = new Boolean('02');
	let weak03 = new Number('03');
	weakMap.set(weak01, 'sat');
	weakMap.set(weak02, 'fat');
	weakMap.set(weak03, 'bat');
	console.log(weakMap.get(weak01));
	console.log(weakMap.has(weak02));
	console.log(weakMap.delete(weak03));
}
