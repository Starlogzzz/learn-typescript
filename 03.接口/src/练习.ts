interface func {
  (attr: string, val: number): number;
}
let css: (el: Element, attrs: Array<string>, callback: func) => void = function(el, attrs , callback) {
  <HTMLDivElement>el
}

let div = document.querySelector("div");
css(div, ["width", "height"], (attr, val) => {
  if(attr === "width") {
    return val * 2;
  }
  if(attr === "height") {
    return val / 2;
  }
})