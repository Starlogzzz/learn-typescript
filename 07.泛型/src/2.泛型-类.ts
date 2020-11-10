class Dog<T1, T2> {
  constructor(
    public name: T1,
    public age: T2
  ) {
    
  }
}

interface MyDogName {
  name: string
}
interface MyDogAge {
  age: number
}

let littledog = new Dog<MyDogName, MyDogAge>({name: "bzzb"}, {age: 1})