import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

// the first scene in the game

class TitleScene extends JSONLevelScene {
  constructor() {
    super('TitleScene');

    this.prefab_classes = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor
    }
  }

  // runs on user input; boots using data for 'screen1', your house
  start_game() {
    this.scene.start('BootScene', {scene: 'screen1'});
  }
}

export default TitleScene;
