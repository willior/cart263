import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

// leaving your house
// a game by will graham-simpkins text

class TitleScene2 extends JSONLevelScene {
  constructor() {
    super('TitleScene2');

    this.prefab_classes = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor
    }
  }

  // the second map; outside your house
  start_game() {
    this.scene.start('BootScene', {scene: 'screen2'});
  }
}

export default TitleScene2;
