import Phaser from "phaser";
import config from './config';
import GameScene from './Game';
import BootScene from './Boot';

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
  console.log(window.innerWidth);
  window.game.resuze(window.innerWidth, window.innerHeight);
});
