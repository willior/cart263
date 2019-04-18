import 'phaser';
import TitleScene from './scenes/TitleScene';
import TitleScene2 from './scenes/TitleScene2';
import TitleScene3 from './scenes/TitleScene3';
import WorldScene from './scenes/WorldScene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';
import JSONLevelScene from './scenes/JSONLevelScene';

let bootScene = new BootScene();
let loadingScene = new LoadingScene();
let titleScene = new TitleScene();
let titleScene2 = new TitleScene2();
let titleScene3 = new TitleScene3();
let worldScene = new WorldScene();

let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 512,
  // scale: {
  //   mode: Phaser.Scale.FIT
  // },
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
game.scene.add('TitleScene3', titleScene3);
game.scene.add('TitleScene2', titleScene2);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.add('TitleScene', titleScene);
game.scene.add('WorldScene', worldScene);
game.scene.start('BootScene', {scene: 'title'});
