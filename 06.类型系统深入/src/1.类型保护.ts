// 根据判断逻辑的结果，缩⼩类型范围（有点类似断言）

function fn(a: number | string) {
  // a.toFixed() // 报错，因为只有number属性上才有toFixed，而string上没有，而且ts无法判断a是什么类型。
  if(typeof a === "number") { // 指定a为number类型时
    a.toFixed(1) 
  } else { // a为string类型
    a.slice(1,2)
  }
}

function fn2(a: Array<number> | Object) {
  if(a instanceof Array) { // 当a是数组时
    a.push(1)
  } else { // a是对象时
    a.toString();
  }
}

interface item1 {
  name: string,
  age: number
}
interface item2 {
  job: string,
  height: number
}
function fn3(a: item1 | item2) {
  if("name" in a) { // a里有name
    a.age
  } else { // a里有job
    a.job
  }
}

// 自定义类型保护
function typeProduct(data: any): data is Element[]|NodeList { // data is Element[]|NodeList:类型谓词
  return data.forEach !== undefined;
}

function fn4(ele: Element[]|NodeList|Element) {
  if(typeProduct(ele)) {
    ele.forEach((ele: Element) => {
      ele.className = "Elements";
    })
  } else {
    ele.className = "Element"
  }
}