{
	// 使用代理的主要目的是可以定义捕获器（trap）。捕获器就是在处理程序对象中定义的“基本操作的拦截器”；
	// 每个处理程序对象可以包含零个或多个捕获器，每个捕获器都对应一种基本操作，可以直接或间接在代理对象上调用。
	// 每次在代理对象上调用这些基本操作时，代理可以在这些操作传播到目标对象之前先调用捕获器函数，从而拦截并修改相应的行为
	const target = {
		foo: 'bar',
	};
	const handler = {
		get() {
			console.log('get---trap触发');
			return 'handler override--get';
		},
		set() {
			console.log('set---trap触发');
			return 'handler override--set';
		},
	};

	const proxy = new Proxy(target, handler);
	console.log(proxy.foo);
	proxy.foo = 'boo';
	console.log(proxy.foo);
}
