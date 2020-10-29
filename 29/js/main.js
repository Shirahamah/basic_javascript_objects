'use strict'

{
    const posts = [
        {
            text: 'JavaScriptの勉強中･･･',
            likeCount: 0,
            // show: function () {
            //     console.log(`${this.text} - ${this.likeCount}いいね`)
            // }

            // 関数をプロパティの値にした場合、その関数をメソッドと呼ぶ
            show() {
                console.log(`${this.text} - ${this.likeCount}いいね`)
            }  
        },
        {
            text: 'プログラミング楽しい！',
            likeCount: 0,
            show() {
            console.log(`${this.text} - ${this.likeCount}いいね`)
            }  
        },
    ];

    function show(post) {
        console.log(`${post.text} - ${post.likeCount}いいね`);
    }

    show(posts[0]);
    posts[0].show();
    posts[1].show();
}