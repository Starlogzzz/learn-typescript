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
var Person3 = /** @class */ (function () {
    function Person3(id, // 只读 子类可以访问，但是一旦确定不能修改
    name, // 公有 
    sex, // 保护 只能在类的内部或子类中才能访问
    _age // 私有 外部无法访问和修改
    ) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this._age = _age;
    }
    Person3.prototype.method = function () {
        this.sex = "girl"; // 内部可以修改 protected
        this._age = 73; // 内部可以修改 private
    };
    Object.defineProperty(Person3.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age >= 50) {
                this._age = 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person3;
}());
var Plice = /** @class */ (function (_super) {
    __extends(Plice, _super);
    function Plice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Plice.prototype.method2 = function () {
        this.sex = "little girl";
        // this.age; // 只能在父类中访问和修改
    };
    return Plice;
}(Person3));
var pricident = new Person3(1, "trump", "man", 72);
// pricident.id = 2; // 无法修改只读
pricident.name = "little trump"; // 可以修改
// pricident.sex; // 只能在类的内部或子类中才能访问
// pricident._age; // 外部无法访问和修改
pricident.age = 51;
pricident.age;
console.log(pricident.age);
