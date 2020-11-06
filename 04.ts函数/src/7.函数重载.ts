function processDiv(el: HTMLDivElement, attr: "box-sizing", value: "content-box", width: string): void;
function processDiv(el: HTMLDivElement, attr: "box-sizing", value: "border-box",  width: string): void;
function processDiv(el: HTMLDivElement, attr?: any, value?: any): void {
  //
}

let div = document.querySelector("div");
div && processDiv(div, "box-sizing", "content-box", "15px");
div && processDiv(div, "box-sizing", "border-box", "20px");
