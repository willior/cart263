import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1024,
  height: 1024,
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0},
      debug: true
    }
  },
  plugins: {
    scene: [
      // {
      //   key: 'rexUI',
      //   plugin: UIPlugin,
      //   mapping: 'rexUI'
      // }
    ]
  }
};
