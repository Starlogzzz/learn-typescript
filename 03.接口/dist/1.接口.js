// interface Person {
//   name: string;
//   readonly age: number; // 只读属性，定义后无法被修改
//   sex?: string; // sex还有可能是undefined值
//   [key: string]: string | number | undefined; // 要把上面的类型覆盖，不然会报错
//   [key: number]: number // 数字类型必须是字符串类型的子类型或者相同类型
// }
// 使用接口MyFunc定义函数addCount
var addCount = function (a, b) {
    return a + b;
};
function goAdd(callback) {
    var x = callback(10, 20);
}
goAdd(function (a, b) {
    return a + b;
});
var div = document.querySelector("div");
function on(el, eventname, callback) {
}
if (div) {
    on(div, "click", function (e) {
        e.clientX;
    });
}
var item = {
    item1: 10,
    item2: "20",
    item3: true,
    fn: function (item) {
    }
};
