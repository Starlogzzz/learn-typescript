function fn1(ele, key, val) {
}
// tsconfig中配置lib后需添加dom库
var box = document.querySelector("div");
if (box) {
    fn1(box, "color", "red");
}
