{
	let now = new Date();
	console.log(now);
	let dateParse = Date.parse(now, 'YYYY-MM-DD:mm:ss');
	console.log(dateParse);
}
{
	let now = new Date();
	console.log(now.toLocaleDateString(), 'toLocaleDateString');
	console.log(now.toString(), 'toString');
	console.log(now.valueOf(), 'valueOf');
}
{
	let pattern = /@/g;
	let email = '464958073@qq.com';
	let matches = pattern.exec(email);
	console.log(matches);
	let text = 'cat,bat,sat,fat';
	let pattern1 = /.at/y;
	let matches1 = pattern1.exec(text);
	console.log(matches1);
	console.log(pattern1.toLocaleString());
	console.log(pattern1.toString());
	console.log(pattern1.valueOf());
}
{
	let sum = 0.1 + 0.2;
	console.log(sum);
	console.log(sum.toFixed(2));
	let num = 88;
	console.log(num.toPrecision(1));
	console.log(num.toPrecision(2));
	console.log(num.toPrecision(3));
	console.log(num.toPrecision(4));
	console.log(num.toPrecision(5));
	console.log(num.toPrecision(6));
}
{
	let str = 'abc';

	for (let index = 0; index < str.length; index++) {
		console.log(str.charAt(index));
		console.log(str.charCodeAt(index));
	}
	let stringValue = 'hello ';
	let result = stringValue.concat('world!');
	console.log(result);
	console.log(result.substring(2, 3));
	console.log(result.substr(2, 3));
	console.log(result.slice(2, 3));
	console.log(result.split(' '));
	console.log(result.substring(-2, -1));
	console.log(result.substr(2, -1));
	console.log(result.slice(-2, -1));
	let pattern = /at/g;
	let str1 = 'cat fat sat bat';
	console.log(str1.search(pattern));
	let str2 = '${ddsdad}ajdajsdljalskdj${dasdasd}${sdasdasd}';
	let str3 = str2.replace(/\$\{.+?\}/g, () => {
		return '替换';
	});
	console.log(str3);
	let str4 = str2.replace(/\$\{.+?\}/g, (chart) => {
		console.log(chart, '---');
		return '替换';
	});
	console.log(str4);
}
{
	console.log('-------Math------');
	let maxArr = [3, 45, 2, 3, 34, 55];
	let max = Math.max(...maxArr);
	console.log(max);
	console.log('------Math舍入方法-------');
	let float1 = 24.4;
	let float2 = 24.7;
	console.log(Math.ceil(float1)); //25
	console.log(Math.ceil(float2)); //25
	console.log(Math.round(float1)); //24
	console.log(Math.round(float2)); //25
	console.log(Math.floor(float1)); //24
	console.log(Math.floor(float2)); //24
	console.log(Math.fround(float1));
	console.log(Math.fround(float2));
	console.log('------Math随机数-------');
	console.log(Math.random());
	console.log('-----随机10以内的数字------');
	console.log(Math.floor(Math.random() * 11 + 0));
}
