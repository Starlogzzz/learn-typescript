// 直接指定sex为两种值之一
function fn(name: string, sex: "man" | "woman") {

}

fn("Starlog", "man");
fn("Minra", "woman");
// fn("QJJ", "i dont konw") // 报错