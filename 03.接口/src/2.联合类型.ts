function fn1(ele: Element, key: string, val: string | number) {

}

// tsconfig中配置lib后需添加dom库
let box = document.querySelector("div");
if (box) {
  fn1(box, "color", "red")
}