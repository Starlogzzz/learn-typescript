// class Person { 
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        /**
         * 当我们给构造函数参数设置了访问修饰符：public，那么ts会做如下两件事情
         *  - 给当前类添加同名的成员属性
         *  - 在类的实例化的时候，会把传入的参数值赋值给对应的成员属性
         */
    }
    Person.prototype.getInf = function (title) {
        console.log("\u4F20\u5165\u53C2\u6570title" + title + "\uFF0C\u83B7\u53D6\u7C7B\u4E2D\u7684\u6210\u5458\u5C5E\u6027" + this.name + "\u548C" + this.age); // 可以通过this来访问当前成员的属性
    };
    return Person;
}());
var people = new Person("dsm", 31);
console.log(people.name);
console.log(people.age);
people.getInf("芜湖起飞");
