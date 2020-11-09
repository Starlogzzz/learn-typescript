// ts中的类型检测是基于结构来进行检测的
// class Dog { // 创建一个狗类
//   run: boolean;
//   eat: string;
// }
// class Cat { // 创建一个猫类， 2. 给Cat自己单独添加一个方法miao
//   run: boolean;
//   eat: string;
//   miao() {
//     console.log("喵")
//   }
// }

// function fn5(arg: Cat) { // 定义函数fn5，参数接收一只猫类的实例
//   arg.eat
// }
// let dog1 = new Dog();
// fn5(dog1) // 这里传入一个Dog的实例也不会报错，因为上面的Dog和Cat结构完全相同(即使Cat类中后来添加了一个方法miao，但对于传入的
// dog实例，dog有的属性cat都有，所以也不会报错)，所以直接判定符合条件

// 使用接口继承
interface catMethod { 
  miao(): void
}
class Dog { // 创建一个猫类
  run: boolean;
  eat: string;
}
class Cat implements catMethod{ // 创建一个狗类
  run: boolean;
  eat: string;
  miao() {
    console.log("喵")
  }
}

function fn5(arg: catMethod) { // 定义函数fn5，只要传入参数会miao就满足条件
  arg.miao()
}
let dog1 = new Dog();
// fn5(dog1) // 现在Dog的实例就无法传入了




