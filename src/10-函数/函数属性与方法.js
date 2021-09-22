{
	// 函数属性与方法
	// 每个函数都有两个属性：length和prototype
	// 函数还有两个方法apply()和call()
	// apply()方法接受了两个参数：函数内this的值和一个参数数组。第二个参数可以是Array的实例，但也可以是arguments对象
	function sum(num1, num2) {
		console.log(this);
		return num1 + num2;
	}
	function callSum1(num1, num2) {
		return sum.apply(this, arguments);
	}
	function callSum2(num1, num2) {
		return sum.apply(this, [num1, num2]);
	}
	console.log(callSum1(10, 10));
	console.log(callSum2(20, 20));
}
{
	// call()方法接受两个参数：函数内this的值和一个参数列表，第二个参数是以逗号隔开的
	function sum(num1, num2) {
		return num1 + num2;
	}
	function callSum(num1, num2) {
		return sum.call(this, num1, num2);
	}
	console.log(callSum(10, 10));
}
{
	// bind()方法会创建一个新的函数实例，其this值会被绑定到传给bind的对象
	let o = {
		color: 'blue',
	};
	function sayColor() {
		console.log(this.color);
	}
	let objectSayColor = sayColor.bind(o);
	objectSayColor();
}
