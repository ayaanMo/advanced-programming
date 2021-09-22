{
	console.log('--------Array-----');
	console.log(Array.from('math'));
	const arrayLikeObject = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	console.log(Array.from(arrayLikeObject));
	const arrayLikeObject1 = { a: 123, b: 456, length: 2 };
	console.log(Array.from(arrayLikeObject1));
}
{
	let arr1 = [];
	console.log(Array.isArray(arr1));
}
{
	const arr = ['apple', 'orange', 'banana'];
	console.log(Array.from(arr.keys()));
	console.log(Array.from(arr.values()));
	console.log(Array.from(arr.entries()));
}
{
	console.log('---------fill()---------');
	const arr = [0, 0, 0, 0, 0, 0];
	arr.fill(5, 3, 5);
	console.log(arr);
	const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr1.copyWithin(1, 5, 7);
	console.log(arr1);
	console.log('---------copywithin---------');
}
{
	let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(arr.toString());
	console.log(arr.valueOf());
}
{
	// 栈方法
	console.log('------栈方法------');
	let arr1 = [0, 1, 2, 3];
	arr1.push(4);
	arr1.pop();
	console.log(arr1);
	let arr2 = [0, 1, 2, 3];
	console.log('------队列方法------');
	arr2.push(4);
	arr2.shift();
	console.log(arr2);
	console.log('----反方向队列----');
	let arr3 = [0, 1, 2, 3];
	arr3.unshift(-1);
	arr3.pop();
	console.log(arr3);
}
{
	// 排序方法
	console.log('--------排序方法---------');
	let arr = [1, 2, 3, 22, 3, 0, 99, 122, 344, 221];
	console.log(arr.reverse());
	let values = [1, 2, 3, 22, 3, 0, 99, 122, 344, 221];
	values.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
	console.log(values);
}
{
	console.log('--------冒泡排序---------');
	let arr = [1, 2, 3, 22, 3, 0, 99, 122, 344, 221];
	function bubbleSort(a) {
		// 比较次数
		for (let i = 0; i < arr.length - 1; i++) {
			// 每循环一次 次数减少一次
			for (let j = 0; j < arr.length - i - 1; j++) {
				if (a[j] > a[j + 1]) {
					let result = a[j + 1];
					a[j + 1] = a[j];
					a[j] = result;
				}
			}
		}
	}
	console.time('bubbleSort');
	bubbleSort(arr);
	console.log(arr);
	console.timeEnd('bubbleSort');
}
{
	console.log('--------Array.sort排序---------');
	let arr = [1, 2, 3, 22, 3, 0, 99, 122, 344, 221];
	function compare(value1, value2) {
		if (value1 > value2) {
			return 1;
		} else if (value1 < value2) {
			return -1;
		} else {
			return 0;
		}
	}
	console.time('compare');
	arr.sort(compare);
	console.log(arr);
	console.timeEnd('compare');
}
{
	console.log('--------Array.sort排序---------');
	let arr = [1, 2, 3, 22, 3, 0, 99, 122, 344, 221];
	console.time('compare1');
	arr.sort((value1, value2) => {
		if (value1 > value2) {
			return 1;
		} else if (value1 < value2) {
			return -1;
		} else {
			return 0;
		}
	});
	console.log(arr);
	console.timeEnd('compare1');
}
{
	console.log('------concat------');
	let arr1 = [0, 1, 2, 3];
	let arr2 = [4, 5];
	let arr3 = arr1.concat(arr2);
	console.log(arr1);
	console.log(arr2);
	console.log(arr3);
	console.log('------slice------');
	let arr4 = ['a', 'b', 'c', 'd', 'e', 'f'];
	let arr5 = arr4.slice(1, 2);
	let arr6 = arr4.slice(-1, -2);
	let arr7 = arr4.slice(-1, 6);
	let arr8 = arr4.slice(-10);
	let arr9 = arr4.slice(7);
	let arr10 = arr4.slice(-1);
	console.log(arr4);
	console.log(arr5);
	console.log(arr6);
	console.log(arr7);
	console.log(arr8);
	console.log(arr9);
	console.log(arr10);
}
{
	console.log('------splice------');
	let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
	console.log(arr1.splice(0, 3));
	console.log(arr1);
	let arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
	console.log(arr2.splice(0, 0, 'x', 'y', 'z'));
	console.log(arr2);
	let arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
	console.log(arr3.splice(0, 3, 'x', 'y', 'z'));
	console.log(arr3);
}
{
	console.log('------indexOf、lastIndexOf、includes------');
	let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'e', 'd', 'c', 'b', 'a'];
	console.log(arr.includes('b'));
	console.log(arr.indexOf('a'));
	console.log(arr.indexOf('a', 6));
	console.log(arr.lastIndexOf('a'));
	console.log(arr.lastIndexOf('a', 6));
}
{
	let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'e', 'd', 'c', 'b', 'a'];
	console.log(
		arr.find((element) => {
			return element === 'z';
		}),
	);
	console.log(
		arr.findIndex((element) => {
			return element === 'z';
		}),
	);
}
