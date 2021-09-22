{
	// 属性验证
	const target = {
		onlyNumberGoHere: 0,
	};
	const proxy = new Proxy(target, {
		set(target, property, value) {
			if (typeof value !== 'number') {
				return false;
			} else {
				return Reflect.set(...arguments);
			}
		},
	});
	proxy.onlyNumberGoHere = 3;
	console.log(proxy.onlyNumberGoHere);
	proxy.onlyNumberGoHere = '5';
	console.log(proxy.onlyNumberGoHere);
}
