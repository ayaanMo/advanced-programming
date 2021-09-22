{
	// ECMAScript 新增了检测函数是否使用new关键字调用的new.target属性
	// 如果函数是正常调用的，则new.target的值是undefined；如果是使用new关键字调用，则new.target将引用被调用的构造函数
	function King() {
		console.log(new.target);
		if (!new.target) {
			throw 'King must be instantiated using "new"';
		}
		console.log('King instantiated using "new"');
	}
	try {
		new King();
		King();
	} catch (error) {
		console.log(error);
	}
}
