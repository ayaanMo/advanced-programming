{
	// 数据绑定与可观察对象
	const userList = [];
	class User {
		constructor(name) {
			this.name_ = name;
		}
	}
	const proxy = new Proxy(User, {
		construct() {
			const newUser = Reflect.construct(...arguments);
			userList.push(newUser);
			return newUser;
		},
	});
	new proxy('John');
	new proxy('Jacob');
	new proxy('James');
	console.log(userList);
}
{
	console.log('-------');
	const userList = [];
	function emit(newValue) {
		console.log(newValue);
	}
	const proxy = new Proxy(userList, {
		set(target, property, value, receiver) {
			const result = Reflect.set(...arguments);
			if (result) {
				emit(Reflect.get(target, property, receiver));
			}
			return result;
		},
	});
	proxy.push('James');
	proxy.push('Jacob');
}
