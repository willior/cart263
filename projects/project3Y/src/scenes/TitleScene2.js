import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class TitleScene2 extends JSONLevelScene {
  constructor() {
    super('TitleScene2');

    this.prefab_classes = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor
    }
  }

  // update() {
  //   if (this.input.activePointer.isDown) {
  //     this.start_game();
  //   }
  // }

  start_game() {
    this.scene.start('BootScene', {scene: 'screen2'});
  }
}

export default TitleScene2;
