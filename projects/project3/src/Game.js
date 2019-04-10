import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {
    // loading tilemap
    this.load.tilemapTiledJSON('map1', 'assets/maps/map1.json');
    // loading spritesheet
    this.load.spritesheet('masterTileset', 'assets/images/masterTileset.png', { frameWidth: 16, frameHeight: 16});
  }

  create () {
    // creating tilemap
    this.map = this.make.tilemap({ key: 'map1'});
    // add tileset images
    this.tiles = this.map.addTilesetImage('masterTileset');
    // creating layers ()
    this.backgroundLayer = this.map.createStaticLayer('background1', this.tiles, 0, 0);
  }
};
