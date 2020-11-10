class Person3 {
  constructor(
      readonly id: number, // 只读 子类可以访问，但是一旦确定不能修改
      public name: string,  // 公有 
      protected sex: string, // 保护 只能在类的内部或子类中才能访问
      private _age: number // 私有 外部无法访问和修改
    ) {

  }

  method() {
    this.sex = "girl"; // 内部可以修改 protected
    this._age = 73; // 内部可以修改 private
  }

  set age(age: number) { // 内部有类似于defineProperty的方法，set和get设置和获取private属性，自己就是一个函数
    if(age >= 50) {
      this._age = 0;
    }
  }
  
  get age() {
    return this._age;
  }
}

class Plice extends Person3 {
  method2() {
    this.sex = "little girl";
    // this.age; // 只能在父类中访问和修改
  }
}

let pricident = new Person3(1, "trump", "man", 72);
// pricident.id = 2; // 无法修改只读
pricident.name = "little trump"; // 可以修改
// pricident.sex; // 只能在类的内部或子类中才能访问
// pricident._age; // 外部无法访问和修改

pricident.age = 51;
pricident.age;
console.log(pricident.age)

