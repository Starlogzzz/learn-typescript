class Person3 {
  constructor(
      readonly id: number, // 只读 子类可以访问，但是一旦确定不能修改
      public name: string,  // 公有 
      protected _sex: string, // 保护 只能在类的内部或子类中才能访问
      private age: number // 私有 外部无法访问和修改
    ) {

  }

  method() {
    this._sex = "girl"; // 内部可以修改 protected
    this.age = 73; // 内部可以修改 private
  }

  set sex(sex: string) { // 内部有类似于defineProperty的方法，set和get设置和获取private属性，自己就是一个函数
    if(sex!== "man") {
      this._sex = sex;
    }
  }
  
  get sex(): string {
    return "不让你看"
  }
}

class Plice extends Person3 {
  method2() {
    this._sex = "little girl";
    // this.age; // 只能在父类中访问和修改
  }
}

let pricident = new Person3(1, "trump", "man", 72);
// pricident.id = 2; // 无法修改只读
pricident.name = "little trump"; // 可以修改
// pricident._sex; // 只能在类的内部或子类中才能访问
// pricident.age; // 外部无法访问和修改

pricident.sex = "woman";
pricident.sex;
console.log(pricident.sex)

