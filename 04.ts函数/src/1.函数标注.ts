function fn1(a: number): string {
  return "";
}

let fn2: (a: number) => string = function(a) {
  return "";
}

type useType = (a: number) => string;
let fn3: useType = function(a) {
  return "";
}

interface useInter {
  (a: number): string;
}
let fn4: useInter = function(a) {
  return "";
}