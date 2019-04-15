import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';
import UserInput from '../plugins/UserInput';

class JSONLevelScene extends Phaser.Scene {
  constructor(key){
    super({key: key});
  }

  init (data) {
    this.level_data = data.level_data;
  }

  create() {
    this.groups = {};
    this.level_data.groups.forEach(function (group_name) {
      this.groups[group_name] = this.physics.add.group();
    }, this);

    this.sprites = {};
    for (let sprite_name in this.level_data.sprites) {
      let sprite_data = this.level_data.sprites[sprite_name];
      let sprite = new this.prefab_classes[sprite_data.type](this, sprite_data.name, sprite_data.position, sprite_data.properties);
    }

    this.user_inputs = {};
    for (let user_input_key in this.level_data.user_input) {
      this.user_inputs[user_input_key] = this.cache.json.get(user_input_key);
    }

    this.user_input = new UserInput(this);
    this.user_input_data = this.cache.json.get(this.level_data.initial_user_input);
    this.user_input.set_input(this.user_input_data);
  }

  update() {
    for (let sprite_name in this.sprites) {
      this.sprites[sprite_name].update();
    }
  }
}

export default JSONLevelScene;
