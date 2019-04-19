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
import Sleep from '../prefabs/world/NPCs/Sleep';
import Stare from '../prefabs/world/NPCs/Stare';
import House1 from '../prefabs/world/NPCs/House1';
import House4 from '../prefabs/world/NPCs/House4';
import Sign from '../prefabs/world/NPCs/Sign';
import Water from '../prefabs/world/NPCs/Water';

import Item from '../prefabs/world/Item';
import Hourglass from '../prefabs/world/Items/Hourglass';
import Specs from '../prefabs/world/Items/Specs';
import Tome from '../prefabs/world/Items/Tome';
import Pipe from '../prefabs/world/Items/Pipe';
import Flute from '../prefabs/world/Items/Flute';
import Cap from '../prefabs/world/Items/Cap';

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
      sign: Sign.prototype.constructor,
      books: Books.prototype.constructor,
      note: Note.prototype.constructor,
      sleep: Sleep.prototype.constructor,
      stare: Stare.prototype.constructor,
      house1: House1.prototype.constructor,
      house4: House4.prototype.constructor,
      water: Water.prototype.constructor,

      item: Item.prototype.constructor,
      hourglass: Hourglass.prototype.constructor,
      specs: Specs.prototype.constructor,
      tome: Tome.prototype.constructor,
      pipe: Pipe.prototype.constructor,
      flute: Flute.prototype.constructor,
      cap: Cap.prototype.constructor,

    }
    // creating object const to hold message box text style
    // this.TEXT_STYLE = {font: "12px LCD", fill: "#FFFFFF"};

    this.capGot = false;
    this.fluteGot = false;
    this.houseglassGot = false;
    this.pipeGot = false;
    this.specsGot = false;
    this.tomeGot = false;

  }

  preload() {
    for (let npc_message_name in this.level_data.npc_messages) {
      this.load.text(npc_message_name, this.level_data.npc_messages[npc_message_name]);
    }
    // plugins
    this.load.scenePlugin({
        key: 'AnimatedTiles',
        url: 'node_modules/phaser-animated-tiles/dist/AnimatedTiles.js',
        sceneKey: 'tileAnimate'
    });
    this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/plugins/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI'
    });
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

    // event listeners for item collection
    this.events.on('collectCap', () => {this.capGot = true;});
    this.events.on('collectFlute', () => {this.fluteGot = true;});
    this.events.on('collectHourglass', () => {this.hourglassGot = true;});
    this.events.on('collectPipe', () => {this.pipeGot = true;});
    this.events.on('collectSpecs', () => {this.specsGot = true;});
    this.events.on('collectTome', () => {this.tomeGot = true;});
  }

  create_object (object) {
    // skips object creation if collected
    if ((object.name === 'cap')&&(this.capGot)) {return;}
    if ((object.name === 'flute')&&(this.fluteGot)) {return;}
    if ((object.name === 'hourglass')&&(this.hourglassGot)) {return;}
    if ((object.name === 'pipe')&&(this.pipeGot)) {return;}
    if ((object.name === 'specs')&&(this.specsGot)) {return;}
    if ((object.name === 'tome') && (this.tomeGot)) {return;}

    let position = {x: object.x + (object.width / 2), y: object.y + (object.height / 2)};
    if (this.prefab_classes.hasOwnProperty(object.type)) {
      let prefab = new this.prefab_classes[object.type](this, object.name, position, object.properties);
    }
  }
  end_talk() {
    this.current_message_box.destroy();
    this.user_input.set_input(this.user_inputs.world_user_input);
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
}

export default WorldScene;
