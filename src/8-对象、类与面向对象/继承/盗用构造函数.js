{
	function SuperType() {
		this.colors = ['blue', 'red', 'yellow'];
	}
	function SubType() {
		// 继承SuperType
		SuperType.call(this);
	}
	let instance1 = new SubType();
	instance1.colors.push('black');
	console.log(instance1);
	let instance2 = new SubType();
	console.log(instance2);
}
{
	// 传递参数
	console.log('传递参数');
	function SuperType(colors) {
		this.colors = colors;
	}
	function SubType() {
		// 继承属性
		SuperType.call(this, ['blue', 'red', 'yellow']);
		this.name = 'James';
	}
	let sub = new SubType();
	console.log(sub.colors);
	console.log(sub.name);
}
