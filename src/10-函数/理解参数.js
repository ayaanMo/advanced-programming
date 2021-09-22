{
	// 理解参数 ECMAScript函数的参数只是为了方便才写出来的，并不是必须写出来，并不是必须写出来
	// 主要因为ECMAScript函数参数在内部表现为一个数组，而且arguments对象是一个类素组对象，但并不是Array的实例
	function sayHi() {
		console.log(`Hello ${arguments[0]} ${arguments[1]}`);
	}
	sayHi('World', 'James');
}
{
	// 箭头函数中的参数
	let bar = () => {
		console.log(arguments[0]);
	};
	try {
		bar();
	} catch (error) {
		console.log(error); //Uncaught ReferenceError:arguments is not defined
	}
	// 虽然箭头函数没有arguments对象，但是包装函数中可以跟箭头函数提供
	function foo() {
		let bar = () => {
			console.log(arguments[0]);
		};
		bar();
	}
	foo(5);
}
