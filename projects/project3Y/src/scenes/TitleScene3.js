import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class TitleScene3 extends JSONLevelScene {
  constructor() {
    super('TitleScene3');

    this.prefab_classes = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor
    }
  }

  start_game() {
    this.scene.start('BootScene', {scene: 'act1'});
  }
}

export default TitleScene3;
