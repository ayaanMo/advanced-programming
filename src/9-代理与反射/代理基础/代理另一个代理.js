{
	const target = {
		foo: 'bar',
	};
	const firstProxy = new Proxy(target, {
		get() {
			console.log('firstProxy');
			return Reflect.get(...arguments);
		},
	});
	const secondProxy = new Proxy(firstProxy, {
		get() {
			console.log('secondProxy');
			return Reflect.get(...arguments);
		},
	});
	console.log(secondProxy.foo);
}
