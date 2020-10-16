'use strict'

{
    // データ型
    let x = 1;
    let y = x;
    x = 5;
    console.log(x); // 5
    console.log(y); // 1

    // 配列
    let a = [1, 2];
    let b = a;
    a[0] = 5;
    console.log(a); // [5, 2]
    console.log(b); // [1, 2]?
}