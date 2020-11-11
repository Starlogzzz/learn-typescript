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
var ReactComponent = /** @class */ (function () {
    function ReactComponent(state, // 给state定义一个类型，方便子类创建时检查
    props) {
        this.state = state;
        this.props = props;
        this.props = props;
    }
    return ReactComponent;
}());
var MyComponent = /** @class */ (function (_super) {
    __extends(MyComponent, _super);
    function MyComponent(state, props) {
        var _this = _super.call(this, state, props) || this;
        _this.state = state;
        return _this;
    }
    MyComponent.prototype.render = function () {
        this.props.val; // 有ReactProps的类型提示
        this.state.num; // 有ReactState的类型提示
        return "<NewComponent />";
    };
    return MyComponent;
}(ReactComponent));
var mycom = new MyComponent({ num: 10 }, { val: "20" });
mycom.render();
