interface ObjType {
  name: string,
  fn: (a: number) => number
}

let obj: ObjType = {
  name: "dsm",
  fn: function(this:ObjType ,a) {
    // this // 不设置this的类型，此处this为any
    // this // 设置之后指向obj
    return 10;
  }
}