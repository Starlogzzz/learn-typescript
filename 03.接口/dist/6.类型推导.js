var str = "wuhuqifei"; // 自动推导类型为string
var num = 100; // 自动推导类型为number
function fn4(a) {
    if (a === void 0) { a = 1; }
    return "100"; // 返回值推导为string
}
