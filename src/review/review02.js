{
	let arr = [1, 2, 3];
	let set = new Set(['a', 'b', 'c']);
	console.log(arr[Symbol.iterator]());
	console.log(set[Symbol.iterator]());
	let setIter = set[Symbol.iterator]();
	let arrIter = arr[Symbol.iterator]();
	for (let item of arr) {
		console.log(item);
	}
	for (let item of set) {
		console.log(item);
	}
	console.log(setIter.next());
	console.log(arrIter.next());
}
{
	console.log('-----生成器------');
	function* generator1() {
		yield 2;
		yield* 'xyz';
		console.log('我是generator1');
		yield '你好';
	}
	function* generator2() {
		yield 1;
		yield* generator1();
		console.log('我是generator2');
		yield 3;
	}
	let g2 = generator2();
	console.log(g2.next());
	console.log(g2.next());
	console.log(g2.next());
	console.log(g2.next());
	console.log(g2.next());
	console.log(g2.next());
	console.log(g2.next());
	console.log(g2.next());
}
{
	console.log('---迭代器---');
	function createIterator(items) {
		let i = 0;
		return {
			next: function () {
				let done = i >= items.length;
				let value = !done ? items[i++] : undefined;
				return {
					done: done,
					value: value,
				};
			},
		};
	}
	let createIterator1 = createIterator([1, 2, 3]);
	console.log(createIterator1.next());
	console.log(createIterator1.next());
	console.log(createIterator1.next());
	console.log(createIterator1.next());
	console.log(createIterator1.next());
}
{
	console.log('----生成器----');
	let arr = [5, 7, 9];
	function* createIterator(items) {
		let i = 0;
		while (i < items.length) {
			yield items[i++];
		}
	}
	let iterator = createIterator(arr);
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
	console.log(iterator.next());
}
