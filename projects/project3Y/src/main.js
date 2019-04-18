import TitleScene from './scenes/TitleScene';
import FieldScene from './scenes/FieldScene';
import BootScene from './scenes/BootScene';
import LoadingScene from './scenes/LoadingScene';

let titleScene = new TitleScene();
let fieldScene = new FieldScene();
let bootScene = new BootScene();
let loadingScene = new LoadingScene();

let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 360
};

let game = new Phaser.Game(config);

game.scene.add('TitleScene', titleScene);
game.scene.add('FieldScene', fieldScene);
game.scene.add('BootScene', bootScene);
game.scene.add('LoadingScene', loadingScene);
game.scene.start('BootScene', {scene: 'title'});
