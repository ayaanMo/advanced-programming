{
	// 收集参数的前面如果还有命名参数，则只会收集其余的参数；如果没有则会得到空数组。因为收集参数的结果可变，所以只能把它作为最后一个参数
	function getSum(...values) {
		return values.reduce((x, y) => x + y, 0);
	}
	console.log(getSum(1, 2, 3, 4, 5));
}
