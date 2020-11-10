function fn<T>(obj: T, key: keyof T) {
  return obj[key];
}

let obj1 = {
  name: "dsm"
}
fn<typeof obj1>(obj1, "name")