{
	console.log('定义多个属性');
	let person = { a_: 1, b: 2 };
	Object.defineProperties(person, {
		a_: {
			value: 3,
		},
		b: {
			value: 4,
		},
		a: {
			get() {
				return this.a_;
			},
			set(newValue) {
				this.a_ = newValue;
			},
		},
	});
	person.a = 5;
	console.log(person.a);
	console.log(person);
}
