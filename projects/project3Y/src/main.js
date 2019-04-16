import 'phaser';
import TitleScene from './scenes/TitleScene';
import WorldScene from './scenes/WorldScene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';
import JSONLevelScene from './scenes/JSONLevelScene';

let bootScene = new BootScene();
let loadingScene = new LoadingScene();
let titleScene = new TitleScene();
let worldScene = new WorldScene();

let config = {
  type: Phaser.AUTO,
  // width: window.innerWidth,
  // height: window.innerHeight,

  scale: {
    parent: 'phaser-example',
    width: 1060,
    height: 1060,
  },
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 0}
    }
  }
};

let game = new Phaser.Game(config);
// window.addEventListener('resize', (event) => {
//   window.game.resize(window.innerWidth, window.innerHeight);
// });

game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.add('TitleScene', titleScene);
game.scene.add('WorldScene', worldScene);
game.scene.start('BootScene', {scene: 'title'});
