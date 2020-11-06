// 交叉类型也可以称为合并类型，可以把多种类型合并到一起成为一种新的类型，并且的关系
interface item1 {
  name: string
}
interface item2 {
  age: number
}

// 指定target为es5时不能使用assign等es6方法，需要在lib中引入对应的库来扩展
let obj: item1 & item2 = Object.assign({}, {name: "dsm"}, {age: 31});
// 自动编译成es5，无需lib
let arr = [...[1,2,3]];
// target为es5时，需要lib中添加es6
Promise.resolve();

obj.name;
obj.age;
