interface MyObj {
  [key: string]: any
}

function fn7(firstItem: MyObj, ...others:Array<MyObj>) {
  return Object.assign(firstItem, ...others)
}

let newObj = fn7({ num: 1}, { num: 2 }, { num: 3 });
