var message = "Hello TS";
var mes = typeof message; // let 用来声明一个**变量**，是真真正正用得到的变量
var newMes = mes; // let创建的变量可以赋值
var newMes2 = "XXXXX"; // type创建的类型别名只能用来赋值类型
var p1 = {
    name: 'dsm',
    age: 32
};
function getPersonVal(key) {
    return p1[key];
}
