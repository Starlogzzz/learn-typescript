var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
        /**
         * 当我们给构造函数参数设置了访问修饰符：public，那么ts会做如下两件事情
         *  - 给当前类添加同名的成员属性
         *  - 在类的实例化的时候，会把传入的参数值赋值给对应的成员属性
         */
    }
    Person2.prototype.getInf = function (title) {
        console.log("\u4F20\u5165\u53C2\u6570title" + title + "\uFF0C\u83B7\u53D6\u7C7B\u4E2D\u7684\u6210\u5458\u5C5E\u6027" + this.name + "\u548C" + this.age); // 可以通过this来访问当前成员的属性
    };
    Person2.prototype.doOverloaded = function (a, b) {
        console.log(a + "," + b + ",\u7236\u7C7B\u4E2D\u7684doOverloaded");
    };
    return Person2;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(// 定义子类中需要用的参数
    name, age, job) {
        var _this = _super.call(this, name, age) || this;
        _this.job = job;
        _this.name;
        return _this;
    }
    Teacher.prototype.getInf = function (title) {
        console.log("\u6211\u662F\u5B50\u7C7BTeacher\u4E2D\u91CD\u5199\u8FC7\u7684getIngo\u65B9\u6CD5\uFF0C" + title);
    };
    Teacher.prototype.getJob = function (job) {
        console.log("\u6211\u662F\u4E00\u540D" + job + "\u8001\u5E08");
    };
    Teacher.prototype.doOverloaded = function (a, b, c) {
        _super.prototype.doOverloaded.call(this, a, b);
        if (c) {
            console.log("重载的doOverloaded");
        }
    };
    return Teacher;
}(Person2));
var mathTeacher = new Teacher("张三", 40, "math");
mathTeacher.getInf("芜湖");
mathTeacher.getJob("math");
mathTeacher.doOverloaded(10, "20");
mathTeacher.doOverloaded(30, "40", true);
