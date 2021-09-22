{
	// 普通函数声明
	function ordinary(a, b) {
		return a + b;
	}
	// 函数表达式声明
	let expression = function (a, b) {
		return a + b;
	};
	// 箭头函数
	let arrow = (a, b) => {
		return a + b;
	};
	console.log(ordinary(3, 4));
	console.log(expression(3, 4));
	console.log(arrow(3, 4));
}
{
	/**
	 * 箭头函数也可以不用大括号，使用大括号就说明包含“函数体”，可以在一个函数中包含多条语句，跟常规的函数一样。如果不使用大括号，那么箭头后面就只能有一行代码，
	 * 比如一个赋值操作或者一个表单式，而且，省略大括号会隐式返回这行代码的值
	 */
	let arrow1 = (a, b) => {
		return a + b;
	};
	let arrow2 = (a, b) => a + b;
	console.log(arrow1(4, 5));
	console.log(arrow2(3, 5));
}
{
	/**
	 * 箭头函数不能谁用arguments、super和new.target,也不能用作构造函数，此外箭头函数也没有prototype属性
	 */
}
