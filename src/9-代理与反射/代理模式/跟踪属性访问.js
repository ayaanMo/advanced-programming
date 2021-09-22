{
	// 跟踪属性访问
	const user = {
		name: 'Jake',
	};
	const proxy = new Proxy(user, {
		get(target, property, receiver) {
			console.log(`Getting ${property}`);
			return Reflect.get(...arguments);
		},
		set(target, property, value, receiver) {
			console.log(`Setting ${property} =${value}`);
			return Reflect.get(...arguments);
		},
	});
	proxy.name;
	proxy.age = 27;
}
