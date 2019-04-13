import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class WorldScene extends JSONLevelScene {
  constructor() {
    super('WorldScene');

    this.prefab_classes = {
      player: Prefab.prototype.constructor
    }
  }

  create() {
    console.log("world scene creation");
    this.map = this.add.tilemap(this.level_data.map.key);
    let tileset_index = 0;
    this.tilesets = {};
    this.map.tilesets.forEach(function (tileset) {
      let map_tileset = this.map.addTilesetImage(tileset.name, this.level_data.map.tilesets[tileset_index]);
      this.tilesets[this.level_data.map.tilesets[tileset_index]] = map_tileset;
      tileset_index += 1;
    }, this);
    console.log("tilesets added");
    this.layers = {};
    this.map.layers.forEach(function (layer) {
      console.log("adding layers");
      this.layers[layer.name] = this.map.createStaticLayer(layer.name, this.tilesets[layer.properties.tileset]);
      console.log("creating layers");
      if (layer.properties.collision) {
        console.log("adding collision");
        this.map.setCollisionByExclusion([-1], true, layer.name);
      }
    }, this);
    console.log("collision added");

    super.create();

    this.map.objects.forEach(function (object_layer) {

      object_layer.objects.forEach(this.create_object, this);
    }, this);
  }

  create_object (object) {
    let position = {x: object.x + (object.width / 2), y: object.y + (object.height / 2)};
    if (this.prefab_classes.hasOwnProperty(object.type)) {
      console.log("creating object");
      let prefab = new this.prefab_classes[object.type](this, object.name, position, object.properties);
      console.log(object);
    }
  }

}

export default WorldScene;
