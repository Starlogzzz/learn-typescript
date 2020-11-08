var Person4 = /** @class */ (function () {
    function Person4(id, name, _age) {
        this.id = id;
        this.name = name;
        this._age = _age;
    }
    Person4.info = function (message) {
        console.log("类Person4的静态方法info" + message);
    };
    Person4.TO_DO_LIST = ["吃饭", "睡觉", "学习"]; // 静态属性，在访问修饰符之前添加static，只能供本类使用
    return Person4;
}());
var user = new Person4(1, "dsm", 30);
Person4.TO_DO_LIST;
Person4.info("Hello");
