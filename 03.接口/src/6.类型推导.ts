let str = "wuhuqifei" // 自动推导类型为string
let num = 100; // 自动推导类型为number

// str = 10; // 报错
// num = "?" // 报错

function fn4(a = 1) { // 函数参数推到为number
  return "100"  // 返回值推导为string
}