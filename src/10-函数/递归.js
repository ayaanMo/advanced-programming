{
	// 递归函数
	let factorial = function f(num) {
		if (num <= 1) {
			return 1;
		} else {
			return num * f(num - 1);
		}
	};
	let total = factorial(5);
	console.log(total);
}
