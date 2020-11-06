function fn6(a, b) {
    if (b === void 0) { b = "chooseA"; }
}
fn6(10, "chooseA");
fn6(10, "chooseB");
fn6(10);
// fn6(10, "chooseC") // 报错
