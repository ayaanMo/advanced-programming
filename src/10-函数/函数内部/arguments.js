{
	/**
	 * arguments对象是一个类数组对象，包含调用函数时传入的所有参数。
	 * 这个对象只有以function关键字定义函数（相对于使用箭头语法创建函数）时才会有。虽然主要用于包含函数参数，
	 * 但arguments对象其实还有一个callee属性，是一个指向arguments对象所在函数的指针。
	 */
	function factorial(num) {
		if (num <= 1) {
			return 1;
		} else {
			console.log(arguments.callee);
			// return num * factorial(num - 1);
			return num * arguments.callee(num - 1);
		}
	}
	console.log(factorial(5));
}
