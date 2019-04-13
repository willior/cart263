import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class TitleScene extends JSONLevelScene {
  constructor() {
    super('TitleScene');
    // prefab classes
    this.prefab_classes = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor
    }
  }

  update() {
    if (this.input.activePointer.isDown) {
      this.start_game();
    }
  }

  start_game() {
    console.log("starting game");
  }

}

export default TitleScene;
