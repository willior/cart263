import 'phaser';
// import UIPlugin from './ui/ui-plugin.js'

export default {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: window.innerWidth,
  height: window.innerHeight,
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0},
      debug: true
    }
  },
  // plugins: {
  //   scene: [{
  //     key: 'rexUI',
  //     plugin: UIPlugin,
  //     mapping: 'rexUI'
  //   }]
  // }
};
