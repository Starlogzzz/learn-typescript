var newobj = {
    name: "测试箭头函数中this",
    fn: function (a) {
        var _this = this;
        return function () {
            // this // 默认还是any
            _this; // 指向MyObj
        };
    }
};
