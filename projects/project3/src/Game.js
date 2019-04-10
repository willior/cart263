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
    // listen for player input
    this.cursors = this.input.keyboard.createCursorKeys();

    // run tilemap creation
    this.createMap1();
    // run player creation
    this.createPlayer();
    // camera update:
    // i might not use this at all as i intend on making each map in 16x16 blocks, classic zelda dungeon style.
    // however, i may change that if i can have it contribute to the mood of the game i am trying to achieve.
    this.cameras.main.startFollow(this.player);
  }

  update() {
    // player inputs for movement
    if (this.cursors.up.isDown) {
      console.log('up');
    }
    if (this.cursors.down.isDown){
      console.log('down');
    }
    if (this.cursors.left.isDown){
      console.log('left');
    }
    if (this.cursors.right.isDown){
      console.log('right');
    }

  }

  createPlayer() {
    // creating Player
    // since i am using babel to compile, => is ES6 shorthand for an anonymous function and binding this to it. normally it would be something like:
    // function (obj) {}.bind(this);
    // this allows me to target the x & y values of the object in particular that i had set when i made my tilemap in Tiled.
    this.map.findObject('player', (obj) => {
      console.log(obj);
      this.player = new Player(this, obj.x, obj.y);
    });


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