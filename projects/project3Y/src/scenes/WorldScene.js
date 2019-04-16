import JSONLevelScene from './JSONLevelScene';

import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

import Player from '../prefabs/world/Player';

import Door from '../prefabs/world/Door';
import Return from '../prefabs/world/Return';

import Cat from '../prefabs/world/Cat';

import NPC from '../prefabs/world/NPC';
import Books from '../prefabs/world/NPCs/Books';
import Note from '../prefabs/world/NPCs/Note';

import Item from '../prefabs/world/Item';
import Hourglass from '../prefabs/world/Items/Hourglass';
import Specs from '../prefabs/world/Items/Specs';

class WorldScene extends JSONLevelScene {
  constructor() {
    super('WorldScene');

    this.prefab_classes = {
      text: TextPrefab.prototype.constructor,
      player: Player.prototype.constructor,
      door: Door.prototype.constructor,
      return: Return.prototype.constructor,
      cat: Cat.prototype.constructor,

      npc: NPC.prototype.constructor,
      books: Books.prototype.constructor,
      note: Note.prototype.constructor,

      item: Item.prototype.constructor,
      hourglass: Hourglass.prototype.constructor,
      specs: Specs.prototype.constructor,

    }
    // creating object const to hold message box text style
    // this.TEXT_STYLE = {font: "12px LCD", fill: "#FFFFFF"};
  }

  preload() {
    for (let npc_message_name in this.level_data.npc_messages) {
      this.load.text(npc_message_name, this.level_data.npc_messages[npc_message_name]);
    }
  }

  create() {

    this.map = this.add.tilemap(this.level_data.map.key);
    let tileset_index = 0;
    this.tilesets = {};
    this.map.tilesets.forEach(function (tileset) {
        let map_tileset = this.map.addTilesetImage(tileset.name, this.level_data.map.tilesets[tileset_index]);
        this.tilesets[this.level_data.map.tilesets[tileset_index]] = map_tileset;
        tileset_index += 1;
    }, this);

    this.layers = {};
    this.map.layers.forEach(function (layer) {
        this.layers[layer.name] = this.map.createStaticLayer(layer.name, this.tilesets[layer.properties.tileset]);
        if (layer.properties.collision) { // collision layer
            this.map.setCollisionByExclusion([-1], true, layer.name);
        }
    }, this);

    super.create();

    this.map.objects.forEach(function (object_layer) {
        object_layer.objects.forEach(this.create_object, this);
    }, this);

  }

  // resize (gameSize, baseSize, displaySize, resolution) {
  //   let width = gameSize.width;
  //   let height = gameSize.height;
  //   if (width === undefined) {
  //     width = this.sys.game.config.width;
  //   }
  //   if (height === undefined) {
  //     height = this.sys.game.config.height;
  //   }
  //   this.cameras.resize(width, height);
  // }

  create_object (object) {
    let position = {x: object.x + (object.width / 2), y: object.y + (object.height / 2)};
    if (this.prefab_classes.hasOwnProperty(object.type)) {
      let prefab = new this.prefab_classes[object.type](this, object.name, position, object.properties);
    }
  }
  end_talk() {
    this.current_message_box.destroy();
    this.user_input.set_input(this.user_inputs.world_user_input);
  }
}

export default WorldScene;
