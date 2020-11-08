class Person2 {
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

  doOverloaded(a: number, b: string) {
    console.log(`${a},${b},父类中的doOverloaded`)
  }
}

class Teacher extends Person2 {
  constructor( // 定义子类中需要用的参数
    name: string,
    age: number,
    public job: string
  ) {
    super(name, age); // 调用父类构造函数
    this.name;
  }
  getInf(title: string) { // 重写父类中方法
    console.log(`我是子类Teacher中重写过的getIngo方法，${title}`)
  }
  getJob(job: string) { // 子类中的方法
    console.log(`我是一名${job}老师`)
  }

  
  doOverloaded(a: number, b: string): void;
  doOverloaded(a: number, b: string, c: boolean): void;
  doOverloaded(a: number, b: string, c? :boolean) {
    super.doOverloaded(a, b);
    if(c) {
      console.log("重载的doOverloaded")
    }
  }
}

let mathTeacher = new Teacher("张三", 40, "math");
mathTeacher.getInf("芜湖")
mathTeacher.getJob("math");

mathTeacher.doOverloaded(10, "20");
mathTeacher.doOverloaded(30, "40", true);