var Person5 = /** @class */ (function () {
    function Person5(// 每一个类的类型就是这个构造函数的类型
    name, age) {
        this.name = name;
        this.age = age;
    }
    return Person5;
}());
var child = new Person5("bzzb", 1); // child是Person5创建出来的对象，它的类型天生就是Person5
function fn1(arg) {
    arg.age; // 实例拿属性
}
function fn2(arg) {
    new arg("starlog", 21);
}
