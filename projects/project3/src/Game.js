import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {
    console.log('game scene preload');
  }

  create () {
    console.log('creating the map');
    this.createMap1();
  }

  createMap1 () {
    // creating tilemap
    this.map = this.make.tilemap({ key: 'map1'});
    // add tileset images
    this.tiles = this.map.addTilesetImage('masterTileset');
    // creating layers ()
    this.backgroundLayer = this.map.createStaticLayer('background1', this.tiles, 0, 0);
    this.blockedLayer = this.map.createStaticLayer('blocked1', this.tiles, 0, 0);
    console.log('map created');
  }
};
