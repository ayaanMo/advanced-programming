{
	// 隐藏属性
	const hiddenProperties = ['foo', 'bar'];
	const targetObject = {
		foo: 1,
		bar: 2,
		baz: 3,
	};
	const proxy = new Proxy(targetObject, {
		get(target, property) {
			if (hiddenProperties.includes(property)) {
				return undefined;
			} else {
				return Reflect.get(...arguments);
			}
		},
		has(target, property) {
			if (hiddenProperties.includes(property)) {
				return false;
			} else {
				return Reflect.has(...arguments);
			}
		},
	});
	console.log(proxy.foo);
	console.log(proxy.bar);
	console.log(proxy.baz);
	console.log('foo' in proxy);
	console.log('baz' in proxy);
}
