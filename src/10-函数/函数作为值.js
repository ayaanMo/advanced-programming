{
	function createComparisonFunction(propertyName) {
		return function (object1, object2) {
			let value1 = object1[propertyName];
			let value2 = object2[propertyName];
			if (value1 < value2) {
				return -1;
			} else if (value1 > value2) {
				return 1;
			} else {
				return 0;
			}
		};
	}
	let data = [
		{ name: 'Zachary', age: 18 },
		{ name: 'Nicholas', age: 29 },
	];
	// 如果compareFunction 小于0  那么a会被排列到b之前
	// 如果compareFunction 等于0  a和b的位置不会变
	// 如果compareFunction 大于0  那么b会被排列到a之前
	data.sort(createComparisonFunction('name'));
	console.log(data);
}
