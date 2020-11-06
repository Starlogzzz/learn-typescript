function fn5(img, src) {
    // img.src // 报错，默认识别img为Element，但src属性并不是Element公有的
    // (<HTMLImageElement>img).src // 添加断言，方式一
    img.src; // 添加断言，方式二
}
var img = document.querySelector("img");
