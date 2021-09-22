{
	// 工厂模式
	function createPerson(name, age, job) {
		let obj = new Object();
		obj.name = name;
		obj.age = age;
		obj.job = job;
		obj.sayName = function () {
			console.log(this.name);
		};
		return obj;
	}
	let person01 = createPerson('James', 18, 'teacher');
	let person02 = createPerson('Alice', 18, 'student');
	console.log(person01);
	console.log(person02);
}
