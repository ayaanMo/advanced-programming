{
	let book = {};
	let book1 = { year: 2021 };
	Object.defineProperties(book, {
		year_: {
			value: 2021,
		},
		edition: {
			value: 1,
		},
		year: {
			get: function () {
				return year_;
			},
			set: function (newValue) {
				this.year_ = newValue;
			},
		},
	});
	console.log(Object.getOwnPropertyDescriptor(book, 'year'));
	console.log(book, 'book');
	console.log(book.year_);
	for (let item in book) {
		console.log(item, 'book');
	}
	console.log(Object.getOwnPropertyDescriptor(book1, 'year'));
	console.log(Object.getOwnPropertyDescriptors(book1));
	console.log(Object.getOwnPropertyDescriptors(book));
}
