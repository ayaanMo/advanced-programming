{
	// caller这个属性引用的是调用当前行数的函数，或者如果是在全局作用域中调用的则为null，严格模式情况下会报错
	function outer() {
		inner();
	}
	function inner() {
		console.log(inner.caller);
	}
	outer();
}
{
	('use strict');
	function outer() {
		inner();
	}
	function inner() {
		console.log(inner.caller);
	}
	outer();
}
