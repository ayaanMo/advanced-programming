{
	// 代理是使用Proxy构造函数创建的，这个构造函数接收两个参数：目标对象和处理程序对象。缺少其中任何一个参数都会抛出TypeError
	// 要创建空代理，可以传一个简单的对象字面量作为处理程序对象，从而让所有操作畅通无阻地抵达目标对象
	let target = { a: 1 };
	let handle = {};
	let proxy = new Proxy(target, handle);
	console.log(proxy);
}
