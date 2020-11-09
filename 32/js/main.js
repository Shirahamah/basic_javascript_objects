'use strict'

{
    class Post {
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount} likes`)
        }

        like() {
            this.likeCount++;
            this.show();
        }
    }
    const posts = [
        new Post('JavaScriptの勉強中･･･'),
        new Post('プログラミング楽しい！'),
    ];

    posts[0].like();
    // posts[0].likeCount++;  // 直接プロパティにアクセスする方法は推奨されていない
    // posts[0].likeCount++;  // likeCountの名前変更、機能の拡張の際に修正部分が面倒になる
    // posts[0].likeCount++;　
    // posts[0].likeCount++;
    // posts[0].likeCount++;  

    // posts[0].show();
    // posts[1].show();
}