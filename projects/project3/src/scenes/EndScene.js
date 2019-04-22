import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class EndScene extends JSONLevelScene {
  constructor() {
    super('EndScene');

    this.prefab_classes = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor
    }
  }

  create() {

    console.log("ending game.");

    // let treeStyle = { fontFamily: 'Commodore', fontSize: '38px', fill: '#aadddd', wordWrap: true, align: 'left' };
    //
    // let textStart = this.add.text(this.game.canvas.width/2,100,'');
    //
    // var textStart = new Text(this,player.x,player.y+20,'hi', treeStyle);
    // console.log(textStart);
    //
    // this.add.text(this,100,100,'hi');
    //
    // this.textHolder = "";
    //
    // let index = 0;
    // let interval = setInterval(() => {
    //   textStart.textHolder += textHolder.charAt(index);
    //   index++;
    //   if (index === textHolder.length) {
    //     clearInterval(interval);
    //   }
    // },50);

  }

  start_game() {
    console.log('hi');

    // this.scene.start('BootScene', {scene: 'act1'});
  }
}

export default EndScene;
