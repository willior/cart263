import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class JSONLevelScene extends Phaser.Scene {
  constructor(key){
    super({key: key});
  }

  init (data) {
    this.map_data = data.map_data;
  }

  // creating prefabs
  create() {
    this.groups = {};
    this.map_data.groups.forEach(function (group_name) {
      this.groups[group_name] = this.add.group();
    }, this);

    this.sprites = {};
    for (let sprite_name in this.map_data.sprites) {
      let sprite_data = this.map_data.sprites[sprite_name];
      let sprite = new this.prefab_classes[sprite_data.type](this, sprite_name, sprite_data.position, sprite_data.properties);
      console.log(sprite_data);
    }
  }
}

export default JSONLevelScene;
