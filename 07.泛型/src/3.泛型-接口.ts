interface MyResponseData<T> {
  code: number;
  message?: string;
  data: T
}

// 用户接口
interface MyResponseUserData {
  id: number;
  username: string;
  email: string;
}
// 文章接口
interface MyResponseArticleData {
  id: number;
  title: string;
  author: MyResponseUserData
}
var fetch;
async function getData<U>(url: string) {
  let response = await fetch(url);
  let data: Promise<MyResponseData<U>> = await response.json();
  return data;
}

async function net(){
  let userData = await getData<MyResponseUserData>("/user");

  let articleData = await getData<MyResponseArticleData>("/article");
}