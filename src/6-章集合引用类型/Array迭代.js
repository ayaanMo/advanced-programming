{
	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	// every() 只要全部执行函数结果返回为true则整个函数结果为true
	let everyBol1 = arr.every((item, index, array) => item > 3);
	console.log(everyBol1);
	let everyBol2 = arr.every((item, index, array) => item >= 1);
	console.log(everyBol2);
	// some() 只要有一个为true则整个函数结果返回为true
	let someBol1 = arr.some((item, index, array) => item > 3);
	console.log(someBol1);
	let someBol2 = arr.some((item, index, array) => item >= 1);
	console.log(someBol2);
	// fifler() 执行函数返回满足条件的元素，组成一个新数组
	let fiflerArr1 = arr.filter((item, index, array) => item > 5);
	console.log(fiflerArr1);
	let fiflerArr2 = arr.filter((item, index, array) => item < 0);
	console.log(fiflerArr2);
	// map()
	let mapArr1 = arr.map((item, index, array) => item * 2);
	console.log(mapArr1);
	let mapArr2 = arr.map((item, index, array) => item + 1);
	console.log(mapArr2);
	//forEach()
	let forEachArr1 = arr.forEach((item, index, array) => {
		console.log(item);
	});
}
