let a: any;
a = null;
a.b;

let b: number = 10;
b = a;
b.toFixed();

function fn3(a: any): number {
  a.indexOf("a", 1)
  return 1
}