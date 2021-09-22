{
	console.log('-----Object.is()------');
	console.log(Object.is(true, 1));
	console.log(Object.is({}, {}));
	console.log(Object.is('2', 2));
	let sourceObj = { a: '1' };
	let targetObj1 = sourceObj;
	let targetObj2 = sourceObj;
	console.log(Object.is(targetObj1, targetObj2));
}
