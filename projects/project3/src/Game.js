import 'phaser';
import Player from './Player';

export default class GameScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {

  }

  create () {
    // listen for resize
    this.scale.on('resize', this.resize, this);
    // run tilemap creation
    this.createMap1();
    // creating Player
    this.player = new Player(this, 30, 30);
  }

  resize (gameSize, baseSize, displaySize, resolution) {
    let width = gameSize.width;
    let height = gameSize.height;
    if (width === undefined) {
      width = this.sys.game.config.width;
    }
    if (height === undefined) {
      height = this.sys.game.config.height;
    }
    this.cameras.resize(width, height);
  }

  createMap1 () {
    // creating tilemap
    this.map = this.make.tilemap({ key: 'map1'});
    // add tileset images
    this.tiles = this.map.addTilesetImage('masterTileset');
    // creating layers ()
    this.backgroundLayer = this.map.createStaticLayer('background1', this.tiles, 0, 0);
    this.blockedLayer = this.map.createStaticLayer('blocked1', this.tiles, 0, 0);

  }
};
