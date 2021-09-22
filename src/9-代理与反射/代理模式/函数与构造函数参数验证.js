{
	// 函数与构造函数参数验证
	function median(...nums) {
		return nums.sort()[Math.floor(nums.length / 2)];
	}
	const proxy = new Proxy(median, {
		apply(target, thisArg, argumentsList) {
			for (const arg of argumentsList) {
				if (typeof arg !== 'number') {
					throw 'Non-number argument provided';
				}
			}
			return Reflect.apply(...arguments);
		},
	});
	console.log(proxy(4, 7, 1));
	try {
		console.log(proxy(4, '7', 1));
	} catch (error) {
		console.log(error);
	}
}
{
	class User {
		constructor(id) {
			this.id_ = id;
		}
	}
	const proxy = new Proxy(User, {
		construct(target, argumentsList, newTarget) {
			if (argumentsList[0] === undefined) {
				throw 'User cannot be instantiated without id';
			} else {
				return Reflect.construct(...arguments);
			}
		},
	});
	let user = new proxy(1);
	console.log(user);
}
