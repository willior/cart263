import 'phaser';
import Player from './Player';
import ExitNext from './ExitNext';
import ExitBack from './ExitBack';

export default class GameScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  init (data) {
    console.log(data);
    this._MAP = data.map;
    this._MAPS = data.maps;
    this._NEWGAME = data.newGame;
    this._PLAYERRETURN = data.playerReturn;
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
    // instantiating exits
    this.createExitNext();
    this.createExitBack();

    // add collisions
    this.addCollisions();

    // camera update:
    //
    // i might not use this at all as i intend on making each map in 16x16 blocks, classic zelda dungeon style.
    // however, i may change that if i can have it contribute to the mood of the game i am trying to achieve.
    this.cameras.main.startFollow(this.player);
  }

  update() {
    this.player.update(this.cursors);
  }

  addCollisions() {
    this.physics.add.collider(this.player, this.blockedLayer);
    this.physics.add.overlap(this.player, this.exitNext, this.nextMap.bind(this));
    this.physics.add.overlap(this.player, this.exitBack, this.previousMap.bind(this));
  }

  createPlayer() {
    // creating Player
    // since i am using babel to compile, => is ES6 shorthand for an anonymous function and binding this to it. normally it would be something like:
    // function (obj) {}.bind(this);
    // this allows me to target the x & y values of the object in particular that i had set when i made my tilemap in Tiled.
    if (this._NEWGAME) {
      this.map.findObject('playerStart', (obj) => {
        this.player = new Player(this, obj.x, obj.y);
        this.newGame = false;
      });
    }
    else if (this._PLAYERRETURN) {
      this.map.findObject('playerBack', (obj) => {
        this.player = new Player(this, obj.x, obj.y);
      });
    }

    else if (!this._PLAYERRETURN) {
      this.map.findObject('playerStart', (obj) => {
        this.player = new Player(this, obj.x, obj.y);
      });
    }
  }

  createExitNext() {
    this.map.findObject('exitNext', (obj) => {
      if (obj.type === 'exitNext'){
        this.exitNext = new ExitNext(this, obj.x, obj.y);
      }
    });
  }

  createExitBack() {
    this.map.findObject('exitBack', (obj) => {
      if (obj.type === 'exitBack'){
        this.exitBack = new ExitBack(this, obj.x, obj.y);
      }
    })
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
    this.map = this.make.tilemap({ key: this._MAPS[this._MAP] });
    // add tileset images
    this.tiles = this.map.addTilesetImage('masterTileset');
    // creating layers

    this.backgroundLayer = this.map.createStaticLayer('background1', this.tiles, 0, 0);
    this.backgroundLayer = this.map.createStaticLayer('grass', this.tiles, 0, 0);
    this.blockedLayer = this.map.createStaticLayer('blocked1', this.tiles, 0, 0);
    this.blockedLayer.setCollisionByExclusion([-1]);
  }

  nextMap() {

    this.map.findObject('exitNext', (obj) => {

      if (this._MAP === 1) {
        if (obj.type === 'exitNext'){
          this.scene.restart({ map: 2, playerReturn: false, maps: this._MAPS, });
        }
      }
      else if (this._MAP === 2) {
        if (obj.type === 'exitNext'){
          this.scene.restart({ map: 3, playerReturn: false, maps: this._MAPS });
        }
      }
    });
  }

  previousMap() {
    this.map.findObject('exitBack', (obj) => {
      if (this._MAP === 2) {
        if (obj.type === 'exitBack'){
          this.scene.restart({ map: 1, playerReturn: true, maps: this._MAPS });
        }
      }
      else if (this._MAP === 3) {
        if (obj.type === 'exitBack'){
          this.scene.restart({ map: 2, playerReturn: true, maps: this._MAPS });
        }
      }
    });
  }
}
