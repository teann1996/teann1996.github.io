// 对象的声明及使用

var person = {
	name: 'Mr. right',
	gender: 'male',
	age: 20,
	sing:function() {
		console.log('正在唱歌')；
	}
}

console.log(person.name);
//person.sing();
//for (var i in person) {
	// console.log(i + ":" + person[i]);
	//}

	
	for (var i in console) {
		console.log (i + ":" + console[i]);
	}
	consle.clear();

	console.log(typeof person);

	//布尔类型

	console.log(typeof false);
	console.log(typeof 'false');

	//数字类型
	console.log(typeof 100);

//字符串类型
console.log(typeof person.name);


//定义数组
var sites = ['baidu.com', 'sohu.com', 'sina.com.cn', '163.com'];

console.log(sites[0]);

console.log(typeof sites);
