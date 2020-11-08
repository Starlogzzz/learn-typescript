abstract class ReactComponent<T1, T2> { // 含有抽象方法的类一定是抽象类
  constructor(
    public state: T1, // 给state定义一个类型，方便子类创建时检查
    public props: T2, // 同上
  ) {
    this.props = props;
    this.state = state;
  }

  abstract render(): string // 标记为抽象方法不能有实现，只定义
}

interface ReactState {
  num: number
}
interface ReactProps {
  val: string
}

class MyComponent extends ReactComponent<ReactState, ReactProps> {
  constructor(
    state: ReactState,
    props: ReactProps
  ) {
    super(state, props);

    this.state = { // 有ReactState的类型提示
      num: 20
    }
  }

  render() { // 抽象类必须实现抽象方法
    this.props.val; // 有ReactProps的类型提示
    this.state.num; // 有ReactState的类型提示
    return "<MyComponent />"
  }
}

let mycom = new MyComponent({ num: 10 }, { val: "20" })
mycom.render();