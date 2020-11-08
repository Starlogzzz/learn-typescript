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
var ReactComponent2 = /** @class */ (function () {
    function ReactComponent2(state, props) {
        this.state = state;
        this.props = props;
        this.props = props;
        this.state = state;
    }
    return ReactComponent2;
}());
var MyComponent2 = /** @class */ (function (_super) {
    __extends(MyComponent2, _super);
    function MyComponent2(state, props) {
        var _this = _super.call(this, state, props) || this;
        _this.state = {
            num: 20
        };
        return _this;
    }
    MyComponent2.prototype.render = function () {
        this.props.val;
        this.state.num;
        return "<MyComponent />";
    };
    MyComponent2.prototype.logMessage = function () {
        return "\u8F93\u51FA" + this.props + ", " + this.state;
    };
    return MyComponent2;
}(ReactComponent2));
var mycom2 = new MyComponent2({ num: 10 }, { val: "20" });
mycom.render();
function getInfo(target) {
    target.logMessage();
}
getInfo(mycom2);
