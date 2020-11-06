function fn6(a:number, b: "chooseA" | "chooseB" = "chooseA") { // 第二个参数只能选择chooseA或者chooseB，默认选择chooseA

}

fn6(10, "chooseA")
fn6(10, "chooseB")
fn6(10);
// fn6(10, "chooseC") // 报错