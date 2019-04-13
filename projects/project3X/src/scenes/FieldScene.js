import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class FieldScene extends JSONLevelScene {
  constructor() {
    super('FieldScene');
    // prefab classes
    this.prefab_classes = {
      player: Prefab.prototype.constructor
    }
  }
}

export default FieldScene;
