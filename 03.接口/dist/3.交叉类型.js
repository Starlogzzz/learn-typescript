// 指定target为es5时不能使用assign等es6方法，需要在lib中引入对应的库来扩展
var obj = Object.assign({}, { name: "dsm" }, { age: 31, name: "??" });
obj.name;
console.log(obj.name);
obj.age;
console.log(obj.age);
// 自动编译成es5，无需lib
var arr = [1, 2, 3];
// target为es5时，需要lib中添加es6
Promise.resolve();
