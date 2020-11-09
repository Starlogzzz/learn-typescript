// ts中的类型检测是基于结构来进行检测的
// class Dog { // 创建一个狗类
//   run: boolean;
//   eat: string;
// }
// class Cat { // 创建一个猫类， 2. 给Cat自己单独添加一个方法miao
//   run: boolean;
//   eat: string;
//   miao() {
//     console.log("喵")
//   }
// }
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.miao = function () {
        console.log("喵");
    };
    return Cat;
}());
function fn5(arg) {
    arg.miao();
}
var dog1 = new Dog();
// fn5(dog1) // 现在Dog的实例就无法传入了
