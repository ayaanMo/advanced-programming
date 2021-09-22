{
	// 可撤销代理
	// 有时候可能需要中断代理对象与目标对象之间的联系 撤销函数是Proxy.revocable提供的revoke ==> const {proxy,revoke} = Proxy.revocable(target,handler)
	const target = { foo: 'bar' };
	const handler = {
		get() {
			return 'intercepted';
		},
	};
	const { proxy, revoke } = Proxy.revocable(target, handler);
	console.log(proxy.foo);
	console.log(target.foo);
	revoke();
	console.log(target.foo);
	console.log(proxy.foo);
}
