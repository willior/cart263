import 'phaser';

export default class BootScene extends Phaser.Scene {
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
    this.scene.start('Game');
  }
};
