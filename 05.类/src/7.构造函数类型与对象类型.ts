class Person5 {
  static type: number;

  constructor( // 每一个类的类型就是这个构造函数的类型
    public name: string,
    public age: number,
  ) {

  }
}

interface TypeObj { // 定义一个供对象类型使用的接口
  name: string,
  age: number
}
interface TypeConstructor { // 定义一个供构造函数类型使用的接口
  new (name: string, age: number): Person5;
  type: number;
}

let child: TypeObj = new Person5("bzzb", 1); // child是Person5创建出来的对象，它的类型天生就是Person5

function fn1(arg: Person5) { // 传出参数为对象类型
  arg.age; // 实例拿属性
}

function fn2(arg: typeof Person5) { // 相当于Person5的构造函数类型
  new arg("starlog", 21)  
}
