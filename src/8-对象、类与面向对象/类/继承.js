{
	// 类继承
	class Foo {
		constructor() {
			this.foo = 'jack';
		}
	}
	class Boo extends Foo {
		constructor() {
			super();
			this.age = 18;
		}
	}
	let boo = new Boo();
	console.log(boo);
}
{
	// 在静态方法中可以通过super调用父类上定义的静态方法
	class Person {
		static friends() {
			console.log(['james', 'lucy', 'lily']);
		}
		hobby() {
			console.log(['swim', 'football']);
		}
	}
	class Student extends Person {
		constructor() {
			super();
			this.name = 'Jason';
		}
		static friends() {
			super.friends();
		}
	}
	Student.friends();
	let stu = new Student();
	stu.hobby();
}
{
	// super使用过程中需要注意的几点
	// 1、super只能在派生类构造函数和静态方法中使用
	// 2、不能单独引用super关键字
	// 3、调用super()会调用父类的构造函数，并将返回的实例赋值给this
	// 4、super()的行为如同调用构造函数，如果需要给父类构造函数传参，则需要手动传入
	// 5、如果没有定义类构造函数，在实例化派生类时会调用super()，而且会传入所有传给派生类的参数
	// 6、在类构造函数中，不能调用super()之前引用this
	// 7、如果派生类中显示定义了构造函数，则要么必须在其中调用super()，要么必须在其中返回一个对象
}
{
	class Animas {
		constructor() {
			this.animas = ['dog', 'cat', 'mouse', 'tiger'];
		}
		eat(obj) {
			console.log(`${obj.name} eat ${obj.food}`);
		}
	}
	class Tiger extends Animas {}
	let ti = new Tiger();
	console.log(ti.animas);
	console.log(ti.eat({ name: 'lion', food: 'meat' }));
}
{
	// 如果派生类中显示定义了构造函数，则要么必须在其中调用super()，要么必须在其中返回一个对象
	class Zoo {}
	class Animals extends Zoo {
		constructor() {}
	}
	try {
		console.log(new Animals());
	} catch (error) {
		console.log(
			'Must call super constructor in derived class before accessing this or returning from derived constructor',
		);
	}
	class Person {}
	class Chinese extends Person {
		constructor() {
			return {};
		}
	}
	class American extends Person {
		constructor() {
			super();
		}
	}
	console.log(new Chinese());
	console.log(new American());
}
{
	// 抽象基类：可以作为其他派生类的基类，但是本身不能被实例化
	class Zoo {
		constructor() {
			if (new.target === Zoo) {
				throw new Error('Zoo cannot be directly instantiated');
			}
		}
	}
	class Animals extends Zoo {
		constructor() {
			super();
		}
	}
	console.log(new Animals());
	try {
		console.log(new Zoo());
	} catch (error) {
		console.log(error);
	}
}
{
	// 可以检验某个原型方法是否存在
	class Zoo {
		constructor() {
			if (new.target === Zoo) {
				throw new Error('Zoo cannot be directly instantiated');
			}
			if (!this.foo) {
				throw new Error('Zoo class must define foo()');
			}
			console.log('successs');
		}
	}
	class Animals extends Zoo {
		constructor() {
			super();
		}
	}
	class Fish extends Zoo {
		constructor() {
			super();
		}
		foo() {}
	}
	console.log(new Fish());
	try {
		console.log(new Animals());
	} catch (error) {
		console.log(error);
	}
}
