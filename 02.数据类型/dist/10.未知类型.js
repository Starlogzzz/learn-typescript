// 安全版的any类型
function fn4() {
    return 1;
}
let t;
// let x: number = t; // 报错，不能将unknown赋值给其他属性
// t.a // unknown类型没有任何属性和方法
t = 10;
