'use strict'

{
    const scores = [10, 3, 9]

    let sum = 0;

    scores.forEach(score => {
        sum += score;
    });

    const avg = sum / scores.length;

    console.log(sum);
    console.log(avg);

    console.log(Math.floor(avg)); // 7
    console.log(Math.ceil(avg)); //小数点以下を切り上げ　8
    console.log(Math.round(avg)); //四捨五入 7
    console.log(avg.toFixed(3)); //指定した桁数に数値を丸めたい場合 7.333

    console.log(Math.random()); //0以上１未満のランダムな数値を生成

}