'use strict'

{
    const otherScores = [10, 20];
    const scores = [80, 90, 40, 70, ...otherScores];
    console.log(scores);

    function sum(a, b) {
        console.log(a + b);
    }

    sum(...otherScores);

    console.log(sum(10,20));
    // sum(10, 20); と同じ意味になる
}