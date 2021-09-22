{
	// 扩展参数
	let values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	function countArguments() {
		console.log(arguments.length);
	}
	countArguments(...values);
	countArguments.apply(null, values);
}
{
	function getProduct(a, b, c = 1) {
		return a * b * c;
	}
	let getSum = (a, b, c = 0) => {
		return a + b + c;
	};
	console.log(getProduct(...[1, 2]));
	console.log(getProduct(...[1, 2, 3]));
	console.log(getProduct(...[1, 2, 3, 4]));
	console.log(getSum(...[0, 1]));
	console.log(getSum(...[0, 1, 2]));
	console.log(getSum(...[0, 1, 2, 3]));
}
