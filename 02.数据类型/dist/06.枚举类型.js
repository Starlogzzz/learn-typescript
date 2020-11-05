var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
    HTTP_CODE[HTTP_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_CODE[HTTP_CODE["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
})(HTTP_CODE || (HTTP_CODE = {}));
HTTP_CODE.OK; // 200
// HTTP_CODE.OK = 0; // error
HTTP_CODE["OK"]; // 200
var PATH_FIND;
(function (PATH_FIND) {
    PATH_FIND["ASSETS"] = "./src/assets";
    PATH_FIND["COMPONENTS"] = "./src/compoents";
    // COMMON // 不可以直接像数字一样直接定义，字符串枚举需要赋值
    PATH_FIND[PATH_FIND["INDEX"] = 0] = "INDEX";
    PATH_FIND[PATH_FIND["INDEX_NUM"] = 1] = "INDEX_NUM"; // 上一个值是数字可以定义但不赋值，默认值为上一值+1
})(PATH_FIND || (PATH_FIND = {}));
PATH_FIND.INDEX_NUM;
