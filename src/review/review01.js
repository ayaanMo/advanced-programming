{
	console.log('---------substring---------');
	// 包前不包后 原本字符串不会被改变
	let str = '1234567890987654321';
	let str1 = str.substring(0);
	console.log(str1); //1234567890987654321
	let str2 = str.substring(0, 5);
	console.log(str2); //12345
	let str3 = str.substring(0, -2);
	console.log(str3 === ''); //true
	// 负值会被转换成0
	let str4 = str.substring(-1);
	console.log(str4); //1234567890987654321
	let str5 = str.substring(5, -1);
	console.log(str5); //12345
	console.log('---------substring---------');
}
{
	console.log('---------substr---------');
	let str = '1234567890987654321';
	// 从哪个下标开始，截取几位
	let str1 = str.substr(3, 5);
	console.log(str1); //45678
	let str2 = str.substr(3, -1);
	console.log(str2 === '');
	let str3 = str.substr(-1, 2);
	console.log(str3);
	console.log('---------substr---------');
}
{
	console.log('---------slice---------');
	let str = '1234567890987654321';
	let str1 = str.slice(0, 5);
	console.log(str1); //12345
	let str2 = str.slice(0, -2);
	console.log(str2); //为负值的时候总长度减去负值 12345678909876543
	console.log('---------slice---------');
}
{
	console.log('-------Math-------');
	console.log(Math.floor(1.4), '向下取舍');
	console.log(Math.ceil(1.4), '向上取舍');
	console.log(Math.round(1.4), '四舍五入');
	console.log(Math.round(1.5), '四舍五入');
	console.log(Math.fround(1.57), '精度');
	console.log(Math.random(), '随机数');
	console.log(Math.floor(Math.random() * 10 + 1));
	console.log('-------Math-------');
}
{
	console.log('Array.from和Array.of');
	const arrayLikeObject = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	console.log(Array.from(arrayLikeObject)); //[1,2,3,4]
	let eleForArr = Array.of('1', '2', '1', { a: 1 });
	console.log(eleForArr); //[ '1', '2', '1', { a: 1 } ]
	console.log(Array.isArray(eleForArr));
	console.log('Array.from和Array.of');
}
{
	let eleForArr = Array.of('1', '2', '1', { a: 1 });
	console.log('keys(),values(),entries()');
	for (let item of eleForArr.keys()) {
		console.log(item);
	}
	for (let item of eleForArr.values()) {
		console.log(item);
	}
	for (let item of eleForArr.entries()) {
		console.log(item);
	}
	console.log('keys(),values(),entries()');
}
{
	let arr1 = ['a', 'b', 'c', 'd', 'e'];
	arr1.fill('zhy', 2, 3);
	console.log(arr1); //['a', 'b', 'zhy', 'd', 'e']
	let arr2 = ['a', 'b', 'c', 'd', 'e'];
	arr2.copyWithin(3, 1, 2);
	console.log(arr2); //['a', 'b', 'c', 'b', 'e']
}
{
	console.log('------Array------');
	console.log('数组后进先出push和pop');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr.push(0);
	console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9,0]
	arr.pop();
	console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
	console.log('------Array------');
}
{
	console.log('------Array------');
	console.log('数组先进先出unshift和shift');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr.unshift(0);
	console.log(arr); //[0,1, 2, 3, 4, 5, 6, 7, 8, 9]
	arr.shift();
	console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
}
{
	console.log('------Array------');
	console.log('数组先进后出');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr.unshift(0);
	console.log(arr); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	arr.pop();
	console.log(arr); //[0, 1, 2, 3, 4, 5, 6, 7, 8]
}
{
	console.log('------Array------');
	console.log('Array---sort');
	let arr = [99, 100, 2, 3, 6, 77, 55, 32, -3, 0];
	arr.sort((item1, item2) => {
		if (item1 > item2) {
			return 1;
		}
		if (item1 < item2) {
			return -1;
		}
		return 0;
	});
	console.log(
		'return 0 代表位置不变；\n return 1 代表第二个参数放在第一个参数前面；\n return -1 代表第一个参数应该放在第二个参数前面',
	);
	console.log(arr);
}
{
	console.log('------Array------');
	console.log('Array---slice');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(arr.slice(3, 7)); //[3, 4, 5, 6, 7]
}
{
	console.log('------Array-----');
	console.log('Array----splice');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log('删除');
	console.log('从下标start开始  删除多少个');
	arr.splice(2, 3);
	console.log(arr); //[1, 2, 6, 7, 8, 9]
	console.log('插入');
	let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr1.splice(1, 0, 10, 11, 12, 13);
	console.log(arr1); //[1,10,11,12,13,2,3,4,5,6,7,8,9]
	arr1.splice(1, 0, [20, 21, 22]);
	console.log(arr1); //[ 1, [ 20, 21, 22 ], 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9 ]
	console.log('替换');
	let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr2.splice(1, 3, 10, 11, 12, 13);
	console.log(arr2); //[1, 10, 11, 12, 13, 5, 6, 7, 8, 9]
}
{
	console.log('indexOf(),lastIndexOf(),includes()');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(arr.indexOf(10)); //-1
	console.log(arr.lastIndexOf(7)); //6
	console.log(arr.includes(10)); //false
	console.log(arr.includes(1)); //true
}
{
	console.log('find和findIndex断言函数');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let find = arr.find((element, index, arr) => {
		return element === 10;
	});
	let findIndex = arr.findIndex((element, index, arr) => {
		return element === 10;
	});
	console.log('find断言函数找到返回元素没找到返回undefined');
	console.log(find); //undefined
	console.log('findIndex断言函数找到返回下标没找到返回-1');
	console.log(findIndex); //-1
}
{
	console.log('every--filter--forEach--map--some');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log('every判断每一项都满足某个条件则就会返回true');
	let every = arr.every((item, index, array) => {
		return item > 5;
	});
	console.log(every); //false
	console.log('filter找出每一项满足判断条件的');
	let filter = arr.filter((item, index, array) => {
		return item > 6;
	});
	console.log(filter); //[7,8,9]
	console.log('forEach用于循环遍历数组');
	arr.forEach((item, index, array) => {
		console.log(item);
	});
	console.log('map');
	let map = arr.map((item, index, arr) => {
		return item * 10;
	});
	console.log(map); //[10, 20, 30, 40, 50, 60, 70, 80, 90]
	console.log('some用于判断只要数组里面有一项满足则就会返回true');
	let some = arr.some((item, index, arr) => {
		return item > 8;
	});
	console.log(some); //true
	let some1 = arr.some((item, index, arr) => {
		return item > 10;
	});
	console.log(some1); //false
}
{
	console.log('-------reduce------');
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let sum = arr.reduce((preValue, currentValue, index, arr) => {
		return preValue + currentValue;
	}, 0);
	console.log(sum);
}
{
	console.log('map get set has delete forEach clear');
	let map = new Map([
		[4, 'd'],
		[5, 'e'],
		[6, 'f'],
	]);
	map.set(1, 'a');
	map.set(2, 'b');
	map.set(3, 'c');
	console.log(map.size, 'map.size'); //6
	console.log(map.get(1)); //a
	console.log(map.has(7)); //false
	console.log(map.delete(4)); //true
	map.forEach((item, index) => {
		console.log(item); //e,f,a,b,c
	});
	map.clear();
	console.log(map.size, 'map.size'); //0
	console.log('map api:get set has delete forEach clear');
}
{
	console.log('set add clear delete forEach has size');
	let set = new Set();
	set.add('a');
	set.add('b');
	set.add('c');
	console.log(set.delete('c'));
	console.log(set.has('a'));
	console.log(set.size);
	console.log(set);
}
