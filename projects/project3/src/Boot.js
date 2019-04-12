import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {
    console.log("preloading");
    this.maps = {
      1: 'map1',
      2: 'map2',
      3: 'map3'
    };

    // loading tilemap
    this.load.tilemapTiledJSON('map1', 'assets/maps/map1.json');
    this.load.tilemapTiledJSON('map2', 'assets/maps/map2.json');
    this.load.tilemapTiledJSON('map3', 'assets/maps/map3.json');

    // loading spritesheet
    this.load.spritesheet('masterTileset', 'assets/images/masterTileset.png', { frameWidth: 16, frameHeight: 16});
    // load player avatar
    this.load.spritesheet('player', 'assets/images/player.png', { frameWidth: 16, frameHeight: 16});
    // load exit marker
    this.load.spritesheet('exitBack', 'assets/images/exit.png', { frameWidth: 16, frameHeight: 16});
    this.load.spritesheet('exitNext', 'assets/images/exit.png', { frameWidth: 16, frameHeight: 16});
  }

  create (data) {
    console.log("creating title screen");
    this.scene.start('TitleScene', { map: 1, newGame: true, maps: this.maps });
  }
};
