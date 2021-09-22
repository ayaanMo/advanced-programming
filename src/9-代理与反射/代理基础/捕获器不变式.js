{
	// 捕获器不变式
	// 每个捕获的方法都知道目标对象上下文、捕获函数签名，而捕获处理程序的行为必须遵循“捕获器不变式”
	const target = {};
	Object.defineProperty(target, 'foo', {
		configurable: false,
		writable: false,
		value: 'bar',
	});
	const handler = {
		get() {
			return 'qux';
		},
	};
	const proxy = new Proxy(target, handler);
	console.log(proxy.foo);
}
