var game;
window.onload = function() {
    var gameconfig = {
        type: Phaser.AUTO,
        width: 1136,
        height: 640,
        parent: '',
        backgroundColor: 0xfffdf0,
        scene: [bootGame,SenceA, SenceB]
    }
    game = new Phaser.Game(gameconfig);
    window.focus();
}
