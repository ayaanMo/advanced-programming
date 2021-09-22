{
	// get()捕获器会在获取属性值的操作中被调用；对应的反射API方法为Reflext.get()
	const target = {
		foo: 'bar',
	};
	const proxy = new Proxy(target, {
		get() {
			console.log('get()');
			return Reflect.get(...arguments);
		},
	});
	console.log(proxy.foo);
}
{
	// set()捕获器会在设置属性值的操作中被调用。对应的反射API方法为Reflect.set()
	// 返回true表示成功；返回false表示失败，严格模式下会抛出TypeError
	const target = {
		foo: 'bar',
	};
	const proxy = new Proxy(target, {
		set(target, property, value, receiver) {
			console.log('set', target, property, value, receiver);
			return Reflect.set(...arguments);
		},
	});
	proxy.foo = 'bar';
	const newtarget = {
		name: 'proxy',
		foo(value) {
			return value;
		},
	};
	const newproxy = new Proxy(newtarget, {
		get(trapTarget, property, receiver) {
			console.log('get', trapTarget, property, receiver);
			return Reflect.get(...arguments);
		},
		set(target, property, value, receiver) {
			console.log('set', target, property, value, receiver);
			return Reflect.set(...arguments);
		},
	});
	proxy.name = 'newProxy';
	console.log(newproxy.foo('boo'));
}
{
	// has()捕获器会在in操作符中被调用。对应的反射API方法为Reflect.has();
	// has()返回值必须返回布尔值，表示属性是否存在。返回非布尔值会被转型为布尔值；
	const target = {
		foo: 'boo',
	};
	const proxy = new Proxy(target, {
		has(target, property) {
			console.log('has()', target, property);
			return Reflect.has(...arguments);
		},
	});
	console.log('foo' in proxy);
	console.log('boo' in proxy);
}
{
	// defineProperty()捕获器会在Object.defineProperty()中被调用。对应的反射API方法为Reflect.defineProperty()
	const target = {};
	const proxy = new Proxy(target, {
		defineProperty(target, property, descriptor) {
			console.log('defineProperty', target, property, descriptor);
			return Reflect.defineProperty(...arguments);
		},
	});
	let flag = Object.defineProperty(proxy, 'foo', { value: 'boo' });
	console.log(flag, 'defineProperty');
}
{
	// getOwnPropertyDescriptor()
	// deleteProperty()
	// ownKeys()
	// getPrototypeOf()
	// setPrototypeOf()
	// isExtensible()
	// preventExtensions()
	// apply()
	// construct()
}
