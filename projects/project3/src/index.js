import Phaser from "phaser";
import config from './config';
import TitleScene from './TitleScene';
import GameScene from './Game';
import BootScene from './Boot';
// import UIPlugin from './ui/ui-plugin.js'

let titleScene = new TitleScene();
let bootScene = new BootScene();

class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('TitleScene', TitleScene);
    this.scene.add('BootScene', BootScene);
    this.scene.add('Game', GameScene);
    this.scene.start('BootScene', {scene:'title'});
  }
}

window.game = new Game();

window.addEventListener('resize', (event) => {
  game.scale.resize(window.innerWidth, window.innerHeight);
});
