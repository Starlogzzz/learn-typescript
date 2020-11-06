type callback = (name: string) => number;

let fn2: callback = function(a) {
  return 100;
}

let fn3: (name: string) => number = function(a) {
  return 100;
}