interface ObjType {
  name: string,
  fn: (a: number) => number
}

let obj: ObjType = {
  name: "dsm",
  fn: function(this:ObjType ,a) { // 设置的this不占据参数位置，仅仅是编译过程检测阶段产生作用，第一个参数还是a
    // this // 不设置this的类型，此处this为any
    this.name // 设置之后指向obj
    return 10;
  }
}