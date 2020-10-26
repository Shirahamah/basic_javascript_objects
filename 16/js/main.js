'use strict'

{
    // データ型
    let x = 1;
    let y = x;
    x = 5;
    console.log(x); // 5
    console.log(y); // 1

    // 配列の場合はaに割り当てられた値ではなく、aの値がどこに格納されているのかという情報だけが作られ、
    // そこにbという名前がつくという仕組みになっている
    
    // 配列
    let a = [1, 2];
    let b = a;
    a[0] = 5;
    console.log(a); // [5, 2]
    console.log(b); // [1, 2]?

    let c = [1, 2];
    let d = [...c]; // スプレット構文を使うことでcの値そのものが代入される
    c[0] = 5;
    console.log(c); // [5, 2]
    console.log(d); // [1, 2]
}