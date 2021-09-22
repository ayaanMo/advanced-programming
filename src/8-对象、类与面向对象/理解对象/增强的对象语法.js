{
	// 属性值简写
	let name = 'James';
	let person = { name };
	console.log(person);
}
{
	// 可计算属性
	let uniqueKey = 0;
	function getUniqueName(name) {
		return `${name}_${uniqueKey++}`;
	}
	let person = {
		[getUniqueName('name')]: 'James',
		[getUniqueName('age')]: 18,
		[getUniqueName('job')]: 'programmer',
	};
	console.log(person);
}
{
	// 简写方法名
	let person = {
		name_: 'James',
		get name() {
			return this.name_;
		},
		set name(newName) {
			this.name_ = newName;
		},
	};
	console.log(person);
	person.name = 'Jones';
	console.log(person.name);
}
