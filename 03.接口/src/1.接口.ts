// interface Person {
//   name: string;
//   readonly age: number; // 只读属性，定义后无法被修改
//   sex?: string; // sex还有可能是undefined值
//   [key: string]: string | number | undefined; // 要把上面的类型覆盖，不然会报错
//   [key: number]: number // 数字类型必须是字符串类型的子类型或者相同类型
// }

// let people: Person = {
//   name: "dsm",
//   age: 32,
//   sex: "boy",
//   job: "gamer" // 通过接口定义的任意类型添加
// }
// // people.age = 40; // 报错
// people.level = 15; // 通过接口定义的任意类型添加



//接口描述函数
interface MyFunc {
  (a: number, b: number): number
}

// 使用接口MyFunc定义函数addCount
let addCount: MyFunc = function (a: number, b: number): number {
  return a + b;
}

function goAdd(callback: MyFunc) { // 也可以使用接口给回调函数添加类型
  let x = callback(10, 20);
}
goAdd(function(a: number, b: number) {
  return a + b;
})

// 定义一个给回调函数添加类型的接口
interface someEvent {
  (e: MouseEvent): void
}
let div = document.querySelector("div");
function on(el: HTMLElement, eventname: string, callback: someEvent) {
  
}
if(div) {
  on(div, "click", function(e) {
    e.clientX
  })
}

// 接口的合并，两者会合并成一个接口
interface Inter1 {
  item1: number;
  item3: boolean;
  fn(params: string): void; // 和下面那个fn是重载函数
}

interface Inter1 {
  item2: string;
  item3: boolean;
  fn(params: number): void;
}

let item: Inter1 = {
  item1: 10,
  item2: "20",
  item3: true,
  fn: function(item: any): any {
    
  }
}

