import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

// the last title card before the game truly begins

class TitleScene3 extends JSONLevelScene {
  constructor() {
    super('TitleScene3');

    this.prefab_classes = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor
    }
  }

  // user input starts the game in act1
  start_game() {
    this.scene.start('BootScene', {scene: 'act1'});
  }
}

export default TitleScene3;
