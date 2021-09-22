{
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let result = arr.reduce((pre, current, index, array) => {
		return pre + current;
	}, 0);
	console.log(result);
	let result1 = arr.reduce((pre, current, index, array) => {
		return pre + current;
	});
	console.log(result1);
}
{
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let result = arr.reduceRight((pre, current) => {
		return pre + current;
	});
	console.log(result);
}
