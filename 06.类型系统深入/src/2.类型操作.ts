let message = "Hello TS";

let mes = typeof message; // let 用来声明一个**变量**，是真真正正用得到的变量
type typemes = typeof message; // type 声明的是一种类型别名，只在程序检测过程中使用，此处typemes为string类型

let newMes = mes; // let创建的变量可以赋值
let newMes2: typemes = "XXXXX" // type创建的类型别名只能用来赋值类型

// keyof 获取类型所有key的集合
interface MyInterface {
  name: string,
  age: number
}
type keyOf = keyof MyInterface // type keyOf = "name" | "age"

let p1 = {
  name: 'dsm',
  age: 32
}
type Person = typeof p1; // typeof拿到p1的类型Person
function getPersonVal(key: keyof Person) { // keyof拿到Person的key
  return p1[key];
}

// 针对类型进⾏操作的话，内部使⽤的 for…in 对类型进⾏遍历
interface Person2 { // 定义一个接口
  name: string,
  age: number
}
type key = keyof Person2; // 拿到接口的key，设置为一个类型key
type newPerson2 = { // 创建一个新的类型别名，但把Person2的value全部该为string类型
  [k in key]: string; // ..in.. 拿到类型别名key中的类型，设置为string类型。
}