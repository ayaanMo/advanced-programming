{
	// 在标准函数中，this引用的是把函数当成方法调用的上下文对象，这时候通常称其为this值（在网页的全局上下文中调用函数时，this指向window）
	try {
		// window.color = 'red';
		let o = {
			color: 'blue',
		};
		function sayColor() {
			console.log(this.color);
		}
		sayColor();
		o.sayColor = sayColor;
		o.sayColor();
	} catch (error) {
		console.log(error);
	}
}
{
	function King() {
		this.royalName = 'Henry';
		setTimeout(() => {
			console.log(this.royalName);
		}, 1000);
	}
	function Queen() {
		this.queenName = 'Elizabeth';
		setTimeout(function () {
			console.log(this.queenName);
		}, 1000);
	}
	new King();
	new Queen();
}
