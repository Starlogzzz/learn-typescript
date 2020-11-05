// let obj: object = {}; // 不推荐使用
// let arr: Array<number> = [1,23,3];

// let obj: { name:string, age:number } = { // 字面量标注，不常用
//   name : "dsm",
//   age: 31
// }

// interface Person {
//   name: string,
//   age: number
// }
// let obj: Person = { // 使用接口，推荐使用
//   name: "dsm",
//   age: 31
// }

// class Person {
//   constructor(public name: string, public age: number) {
 
//   }
// }
// let obj: Person = { // 类与构造函数，不是很推荐
//   name: "dsm",
//   age: 31
// }

// let lettleString: string;
// lettleString = "10";
// lettleString = new String(10); // 报错，String涵盖string，而string不涵盖String。

// let bigString: String;
// bigString = "10";
// bigString = new String(10); // 没问题