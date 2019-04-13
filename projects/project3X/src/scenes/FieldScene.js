// import JSONLevelScene from './JSONLevelScene';
// import Prefab from '../prefabs/Prefab';
// import TextPrefab from '../prefabs/TextPrefab';
//
// class FieldScene extends JSONLevelScene {
//   constructor() {
//     super('FieldScene');
//
//     this.prefab_classes = {
//       player: Prefab.prototype.constructor
//     }
//   }
//
//   // create() {
//   //
//   //   this.screen = this.add.tilemap(this.map_data.screen.key);
//   //   let tileset_index = 0;
//   //   this.tilesets = {};
//   //   this.screen.tilesets.forEach(function (tileset) {
//   //     let screen_tileset = this.screen.addTilesetImage(tileset.name, this.map_data.screen.tilesets[tileset_index]);
//   //     this.tilesets[this.map_data.screen.tilesets[tileset_index]] = screen_tileset;
//   //     tileset_index += 1;
//   //   }, this);
//   //
//   //   this.layers = {};
//   //   this.screen.layers.forEach(function (layer) {
//   //     this.layers[layer.name] = this.screen.createStaticLayer(layer.name, this.tilesets[layer.properties.tileset]);
//   //     if (layer.properties.collision) {
//   //       this.screen.setCollisionByExclusion([-1], true, layer.name);
//   //     }
//   //   }, this);
//   //
//   //   super.create();
//   //   this.screen.objects.forEach(function (object_layer) {
//   //     object_layer.objects.forEach(this.create_object, this);
//   //   }, this);
//   // }
//   //
//   // create_object (object) {
//   //   let position = {x: object.x + (object.width / 2), y: object.y + (object.height / 2)};
//   //   if (this.prefab_classes.hasOwnProperty(object.type)) {
//   //     let prefab = new this.prefab_classes[object.type](this, object.name, position, object.properties);
//   //   }
//   // }
//
// }
//
// export default FieldScene;
