enum HTTP_CODE {
  OK = 200,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED
}

HTTP_CODE.OK; // 200
// HTTP_CODE.OK = 0; // error
HTTP_CODE["OK"]; // 200



enum PATH_FIND {
  ASSETS = "./src/assets",
  COMPONENTS = "./src/compoents",
  // COMMON // 不可以直接像数字一样直接定义，字符串枚举需要赋值
  INDEX = 0,
  INDEX_NUM // 上一个值是数字可以定义但不赋值，默认值为上一值+1
}

PATH_FIND.INDEX_NUM
