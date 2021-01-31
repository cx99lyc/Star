new TypeIt("#cxlyc", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("CX && LYC")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("星河滚烫，你是我的人间理想！")
    .pause(3000)
    .go();

new TypeIt('#talkToLYC', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();