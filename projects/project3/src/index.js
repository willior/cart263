import Phaser from "phaser";
import config from './config';
import GameScene from './Game';
import BootScene from './Boot';
// import UIPlugin from './ui/ui-plugin.js'

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();

window.addEventListener('resize', (event) => {
  game.scale.resize(window.innerWidth, window.innerHeight);
});
