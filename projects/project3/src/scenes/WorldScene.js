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
import Void from '../prefabs/world/NPCs/Void';
import Clementine from '../prefabs/world/NPCs/Clementine';
import Percy from '../prefabs/world/NPCs/Percy';
import Gribs from '../prefabs/world/NPCs/Gribs';
import Jack from '../prefabs/world/NPCs/Jack';
import Tree from '../prefabs/world/NPCs/Tree';
import TreeB from '../prefabs/world/NPCs/TreeB';
import Final from '../prefabs/world/Final';
import Flower from '../prefabs/world/NPCs/Flower';

import Item from '../prefabs/world/Item';
import Hourglass from '../prefabs/world/Items/Hourglass';
import Specs from '../prefabs/world/Items/Specs';
import Tome from '../prefabs/world/Items/Tome';
import Pipe from '../prefabs/world/Items/Pipe';
import Flute from '../prefabs/world/Items/Flute';
import Cap from '../prefabs/world/Items/Cap';
import Ankh from '../prefabs/world/Items/Ankh';
import Wheel from '../prefabs/world/Items/Wheel';
import Synth from '../prefabs/world/Items/Synth';
import Scope from '../prefabs/world/Items/Scope';
import Astrolabe from '../prefabs/world/Items/Astrolabe';

// the World Scene is the big steak of this game

class WorldScene extends JSONLevelScene {
  constructor() {
    super('WorldScene');
    // prefab class assignments for every object in the game (text boxes, world transition zones, NPCs, items, the player, etc.)
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
      void: Void.prototype.constructor,
      clementine: Clementine.prototype.constructor,
      percy: Percy.prototype.constructor,
      gribs: Gribs.prototype.constructor,
      jack: Jack.prototype.constructor,
      tree: Tree.prototype.constructor,
      treeB: TreeB.prototype.constructor,
      final: Final.prototype.constructor,
      flower: Flower.prototype.constructor,

      item: Item.prototype.constructor,
      hourglass: Hourglass.prototype.constructor,
      specs: Specs.prototype.constructor,
      tome: Tome.prototype.constructor,
      pipe: Pipe.prototype.constructor,
      flute: Flute.prototype.constructor,
      cap: Cap.prototype.constructor,
      ankh: Ankh.prototype.constructor,
      wheel: Wheel.prototype.constructor,
      synth: Synth.prototype.constructor,
      scope: Scope.prototype.constructor,
      astrolabe: Astrolabe.prototype.constructor
    }

    // variables for tracking artifact collection
    this.capGot = false;
    this.fluteGot = false;
    this.hourglassGot = false;
    this.pipeGot = false;
    this.specsGot = false;
    this.tomeGot = false;
    this.ankhGot = false;
    this.wheelGot = false;
    this.scopeGot = false;
    this.synthGot = false;
    this.astrolabeGot = false;

    // uncomment this to start with all artifacts
    // this.capGot = true;
    // this.fluteGot = true;
    // this.hourglassGot = true;
    // this.pipeGot = true;
    // this.specsGot = true;
    // this.tomeGot = true;
    // this.ankhGot = true;
    // this.wheelGot = true;
    // this.scopeGot = true;
    // this.synthGot = true;
    // this.astrolabeGot = true;
  }

  preload() {
    // values to keep track of conversations
    this.treeIndex = 0;
    this.finalIndex = 0;
    // iterates through the the NPC messages and loads their text files
    for (let npc_message_name in this.level_data.npc_messages) {
      this.load.text(npc_message_name, this.level_data.npc_messages[npc_message_name]);
    }
    // plugins
    this.load.scenePlugin({
        key: 'AnimatedTiles',
        url: 'node_modules/phaser-animated-tiles/dist/AnimatedTiles.js',
        sceneKey: 'tileAnimate'
    });
  }

  create(){

    // BGM player
    // loos at what tilemap is being used and plays music based on that
    if (this.level_data.map.key === '1_level_tilemap') {
      var music = this.sound.add('musicHome');
      this.music = music;
      music.play({loop: true});
    }
    else if (this.level_data.map.key === 'act1_level_tilemap') {
      var music = this.sound.add('music1');
      this.music = music;
      music.play({loop: true});
    }
    else if  (this.level_data.map.key === '2B_level_tilemap') {
      var music = this.sound.add('musicHome');
      this.music = music;
      music.play({loop: true});
    }
    else if (this.level_data.map.key === 'act1b_level_tilemap') {
      console.log('playing music1B');
      var music = this.sound.add('music1B');
      this.music = music;
      music.play({loop: true});
    }
    else if ((this.level_data.map.key === 'act2_level_tilemap')||(this.level_data.map.key === 'act2b_level_tilemap')) {
      console.log('playing music2');
      var music = this.sound.add('music2');
      this.music = music;
      music.play({loop: true});
    }
    else if (this.level_data.map.key === 'act3_level_tilemap') {
      console.log('playing music3');
      var music = this.sound.add('music3');
      this.music = music;
      music.play({loop: true});
    }
    else if (this.level_data.map.key === 'act4_level_tilemap') {
      console.log('playing music4');
      var music = this.sound.add('music4');
      this.music = music;
      music.play({loop: true});
    }
    else if (this.level_data.map.key === 'act4b_level_tilemap') {
      console.log('playing music5');
      var music = this.sound.add('music5');
      this.music = music;
      music.play({loop: true});

      // assigning variables for the end game music
      var endMusic = this.sound.add('music6');
      this.endMusic = endMusic;
      var creditsMusic = this.sound.add('music7');
      this.creditsMusic = creditsMusic;

    }
    // let mapAnim = this.make.tilemap({key: this.level_data.map.key});
    // creating the maps
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
        this.layers[layer.name] = this.map.createDynamicLayer(layer.name, this.tilesets[layer.properties.tileset]);
        if (layer.properties.collision) { // checking for collision based on layer property set in Tiled
            this.map.setCollisionByExclusion([-1], true, layer.name);
        }
    }, this);

    // could not get tilemap animation to work
    // console.log(mapAnim);
    // this.animatedTiles.init(mapAnim);


    // creates everything
    super.create();
    this.map.objects.forEach(function (object_layer) {
      // object create function
        object_layer.objects.forEach(this.create_object, this);
    }, this);

    // event listeners for item collection
    this.events.on('collectCap', () => {this.capGot = true;});
    this.events.on('collectFlute', () => {this.fluteGot = true;});
    this.events.on('collectHourglass', () => {this.hourglassGot = true;});
    this.events.on('collectPipe', () => {this.pipeGot = true;});
    this.events.on('collectSpecs', () => {this.specsGot = true;});
    this.events.on('collectTome', () => {this.tomeGot = true;});
    this.events.on('collectAnkh', () => {this.ankhGot = true;});
    this.events.on('collectWheel', () => {this.wheelGot = true;});
    this.events.on('collectScope', () => {this.scopeGot = true;});
    this.events.on('collectSynth', () => {this.synthGot = true;});
    this.events.on('collectAstrolabe', () => {this.astrolabeGot = true;});
  }

  create_object (object) {
    // skips object creation if collected
    if ((object.name === 'cap')&&(this.capGot)) {return;}
    if ((object.name === 'flute')&&(this.fluteGot)) {return;}
    if ((object.name === 'hourglass')&&(this.hourglassGot)) {return;}
    if ((object.name === 'pipe')&&(this.pipeGot)) {return;}
    if ((object.name === 'specs')&&(this.specsGot)) {return;}
    if ((object.name === 'tome') && (this.tomeGot)) {return;}
    if ((object.name === 'ankh') && (this.ankhGot)) {return;}
    if ((object.name === 'wheel') && (this.wheelGot)) {return;}
    if ((object.name === 'scope') && (this.scopeGot)) {return;}
    if ((object.name === 'synth') && (this.synthGot)) {return;}
    if ((object.name === 'astrolabe') && (this.astrolabeGot)) {return;}

    // interpreting position values based on those in the  JSON Tiled maps
    let position = {x: object.x + (object.width / 2), y: object.y + (object.height / 2)};
    if (this.prefab_classes.hasOwnProperty(object.type)) {
      // assigning objects to prefabs based on properties (cats, npcs, items, doors, etc.)
      let prefab = new this.prefab_classes[object.type](this, object.name, position, object.properties);
    }
  }
  // function for destroying message box
  // reapplies world scene user input (player movement)
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
