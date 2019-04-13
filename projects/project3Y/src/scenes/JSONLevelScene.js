import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class JSONLevelScene extends Phaser.Scene {
  constructor(key){
    super({key: key});
  }

  init (data) {
    this.level_data = data.level_data;
  }

  create() {
    console.log("creating groups");
    this.groups = {};
    this.level_data.groups.forEach(function (group_name) {
      this.groups[group_name] = this.add.group();
    }, this);
    console.log("groups done");
    this.sprites = {};
    for (let sprite_name in this.level_data.sprites) {
      let sprite_data = this.level_data.sprites[sprite_name];
      let sprite = new this.prefab_classes[sprite_data.type](this, sprite_data.name, sprite_data.position, sprite_data.properties);
      console.log(sprite_data);
      console.log("sprites");
    }
  }
}

export default JSONLevelScene;
