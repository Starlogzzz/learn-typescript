abstract class ReactComponent2<T1, T2> { 
  constructor(
    public state: T1, 
    public props: T2, 
  ) {
    this.props = props;
    this.state = state;
  }

  abstract render(): string 
}

interface ReactState {
  num: number
}
interface ReactProps {
  val: string
}

interface MessageLog { // 定义一个接口用来指定类中的logMessage函数
  logMessage(): string;
}

class MyComponent2 extends ReactComponent2<ReactState, ReactProps> implements MessageLog { // 类可以使用多个接口，用逗号分隔，同时类是单继承的
  constructor(
    state: ReactState,
    props: ReactProps
  ) {
    super(state, props);

    this.state = { 
      num: 20
    }
  }

  render() { 
    this.props.val;
    this.state.num;
    return "<MyComponent />"
  }
  logMessage() { // 类中必须实现logMessage函数
    return `输出${this.props}, ${this.state}`
  }
}

let mycom2 = new MyComponent2({ num: 10 }, { val: "20" })
mycom.render();

function getInfo(target: MyComponent2) {
  target.logMessage();
}

getInfo(mycom2)

