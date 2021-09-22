{
	// 在使用默认参数的时候，arguments对象的值不反映参数的默认值，只反映传给函数的参数。
	function foo(name = 'James', age = 18) {
		console.log(arguments);
		console.log(`name:${name},age:${age}`);
	}
	foo();
	foo('Lucy', 19);
}
{
	let romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
	let ordinality = 0;
	function getNumerals() {
		return romanNumerals[ordinality++];
	}
	function makeKing(name = 'Henry', numerals = getNumerals()) {
		return `Kin ${name} ${numerals}`;
	}
	console.log(makeKing());
	console.log(makeKing());
	console.log(makeKing('Louis', 'XVI'));
}
