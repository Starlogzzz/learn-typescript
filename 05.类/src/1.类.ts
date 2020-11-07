// class Person { 
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class Person {
  constructor(public name: string, public age: number) { // 在类中定义成员属性
    /**
     * 当我们给构造函数参数设置了访问修饰符：public，那么ts会做如下两件事情
     *  - 给当前类添加同名的成员属性
     *  - 在类的实例化的时候，会把传入的参数值赋值给对应的成员属性
     */
  }

  getInf(title: string) {
    console.log(`传入参数title${title}，获取类中的成员属性${this.name}和${this.age}`) // 可以通过this来访问当前成员的属性
  }
}

let people = new Person("dsm", 31);
console.log(people.name)
console.log(people.age)
people.getInf("芜湖起飞")