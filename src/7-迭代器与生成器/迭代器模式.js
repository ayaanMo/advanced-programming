{
	let arr = [1, 2, 3];
	let set = new Set(['a', 'b', 'c']);
	console.log(arr[Symbol.iterator]());
	let arrIter = arr[Symbol.iterator]();
	console.log(arrIter.next());
	console.log(arrIter.next());
	console.log(arrIter.next());
	console.log(arrIter.next());
	let setIter = set[Symbol.iterator]();
	console.log(setIter.next());
	console.log(setIter.next());
	console.log(setIter.next());
	console.log(setIter.next());
	let map = new Map([
		['1', 'a'],
		['2', 'b'],
		['3', 'c'],
	]);
	let mapIter = map[Symbol.iterator]();
	console.log(mapIter.next());
	console.log(mapIter.next());
	console.log(mapIter.next());
	console.log(mapIter.next());
	let arr1 = ['bar', 'foo', 'boo'];
	let arrIter1 = arr1[Symbol.iterator]();
	console.log(arrIter1.next());
	arr1.splice(1, 0, 'ccc');
	console.log(arrIter1.next());
	console.log(arrIter1.next());
	console.log(arrIter1.next());
}
{
	console.log('-----自定义迭代器-------');
	class Counter {
		constructor(limit) {
			this.limit = limit;
		}
		[Symbol.iterator]() {
			let count = 1;
			let limit = this.limit;
			return {
				next() {
					if (count <= limit) {
						return { done: false, value: count++ };
					} else {
						return { done: true, value: undefined };
					}
				},
				return() {
					console.log('return 函数');
					return { done: true };
				},
			};
		}
	}
	let count1 = new Counter(5);
	console.log(count1[Symbol.iterator]);
	let count1Iter = count1[Symbol.iterator]();
	console.log(count1Iter.next());
	console.log(count1Iter.next());
	console.log(count1Iter.next());
	console.log(count1Iter.next());
	console.log(count1Iter.next());
	console.log(count1Iter.next());
	let count2Iter = count1[Symbol.iterator]();
	console.log(count2Iter.next());
	console.log(count2Iter.next());
	console.log(count2Iter.next());
	console.log(count2Iter.next());
	console.log(count2Iter.next());
	console.log(count2Iter.next());
	for (let i of count1) {
		if (i > 3) {
			break;
		}
		console.log(i);
	}
	for (let i of count1) {
		console.log(i);
	}
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
	console.log('-----生成器的提前终止------');
	function* generator() {
		try {
			yield 1;
		} catch (error) {}
	}
	let g1 = generator();
	console.log(g1.next());
	console.log(g1.return());
	console.log(g1.next());
}
