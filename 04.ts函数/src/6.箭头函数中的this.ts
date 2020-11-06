interface NewMyObj {
  name: string,
  fn: (a: string) => void;
}

let newobj:NewMyObj = {
  name: "测试箭头函数中this",
  fn: function(this: NewMyObj, a) {
    return () => {
      // this // 默认还是any
      this // 指向MyObj
    }
  }
} 