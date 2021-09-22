{
	// 所有捕获器都可以访问相应的参数，基于这些参数可以重建被捕获方法的原始行为。
	const target = {
		foo: 'bar',
	};
	const handler = {
		get(trapTarget, property, receiver) {
			console.log(trapTarget);
			console.log(property);
			console.log(receiver);
		},
	};
	let proxy = new Proxy(target, handler);
	console.log(proxy.foo);
}
{
	// 所有捕获器都可以基于自己的参数重建原始操作，开发者并不需要手动重建原始行为，而是可以通过调用全局Reflect(反射API)对象上（封装了原始行为）的同名方法来轻松重建
	const target = {
		foo: 'bar',
	};
	const handler = {
		get() {
			return Reflect.get(...arguments);
		},
	};
	let proxy = new Proxy(target, handler);
	console.log(proxy.foo);
}
{
	const target = {
		foo: 'bar',
	};
	const handler = {
		get(trapTarget, property, receiver) {
			let decoration = '';
			if (property === 'foo') {
				decoration = '!!!';
			}
			return Reflect.get(...arguments) + decoration;
		},
	};
	let proxy = new Proxy(target, handler);
	console.log(proxy.foo);
}
