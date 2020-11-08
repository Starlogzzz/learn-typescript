class Person4 {
  static readonly TO_DO_LIST: Array<string> = ["吃饭", "睡觉", "学习"]; // 静态属性，在访问修饰符之前添加static，只能供本类使用

  constructor(
    public id: number,
    public name: string,
    private _age : number
  ) {

  }

  static info(message: string) { // 静态方法,只能供本类使用
    console.log("类Person4的静态方法info" + message);
  }
}

let user = new Person4(1, "dsm", 30);
Person4.TO_DO_LIST
Person4.info("Hello");
