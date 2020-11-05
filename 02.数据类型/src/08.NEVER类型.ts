// 当一个函数没有return时使用此类型，比如抛出错误
function fn1(): never {
  throw new Error("报错")
}