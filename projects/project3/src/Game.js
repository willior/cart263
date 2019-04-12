import 'phaser';
import Player from './Player';
import ExitNext from './ExitNext';
import ExitBack from './ExitBack';
import Stuff from './Stuff';
import Item from './Item';
import Text from './Text';
// import TextScene from './TextBox';
// import UIPlugin from './ui/ui-plugin.js'

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
    this._ARTIFACTS = data.artifacts;
  }

  preload() {

    console.log(game.plugins.scenePlugins);

    // for (let SpriteMessageName in this.level.data.SpriteMessages) {
    //   this.load.text(SpriteMessageName, this.level_data.SpriteMessage[SpriteMessageName]);
    // }

  }

  create () {
    // listen for resize
    this.scale.on('resize', this.resize, this);
    // listen for player input
    this.cursors = this.input.keyboard.createCursorKeys();
    // run tilemap creation
    this.createMap1();
    // run object creation
    this.createStuff();
    this.createItem();

    // if (this._MAP === 1) {
    //   this.item = this.map.createFromObjects('items', 'hourglass', {key: 'hourglass'});
    //   this.stuff = this.map.createFromObjects('stuff', 'books', {key: 'books'});
    //   this.cat = this.map.createFromObjects('cat', 'cat1', {key: 'cat'});
    // }

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
    // walls
    this.physics.add.collider(this.player, this.blockedLayer);
    // stuff
    this.physics.add.collider(this.player, this.stuff, this.getStuff.bind(this));
    // items
    this.physics.add.overlap(this.player, this.item, this.getItem.bind(this));

    // cat

    // exits
    this.physics.add.overlap(this.player, this.exitNext, this.nextMap.bind(this));
    this.physics.add.overlap(this.player, this.exitBack, this.previousMap.bind(this));
  }

  createStuff() {
    this.map.findObject('stuff', (obj) => {
      this.stuff = new Stuff(this, obj.x, obj.y);
    });
  }

  getStuff() {
    if (this._MAP === 1) {
      console.log("a pile of books, including...");
      // this.scene.rexUI.add.textBox({
      //   orientation: 0,
      //   text: "hi"
      // });
      // console.log(this.text);
    }
  }
  createItem() {
    if ((this._MAP === 1) && (!this._ACQUIREDITEM1)) {
      this.map.findObject('items', (obj) => {
        this.item = new Item(this, obj.x, obj.y);
      });
    }
  }

  getItem(player, item) {
    if (this._MAP === 1) {
      this._ACQUIREDITEM1 = true;
      item.disableBody(true,true);
      console.log("acquired ancient hourglass");
    }
  }

  createPlayer() {
    // if it is a new game, start the player next to the bed
    if (this._NEWGAME) {
      this.map.findObject('playerStart', (obj) => {
        this.player = new Player(this, obj.x, obj.y);
        this.newGame = false;
      });
    }
    // if the player is returning from a previous area, spwawn the player where they came form
    else if (this._PLAYERRETURN) {
      this.map.findObject('playerBack', (obj) => {
        this.player = new Player(this, obj.x, obj.y);
      });
    }
    // if the player is not returning, spawn the player where they are going
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
    this.blockedLayer = this.map.createStaticLayer('blocked1', this.tiles, 0, 0);
    this.blockedLayer.setCollisionByExclusion([-1]);
  }

  nextMap() {
    this.map.findObject('exitNext', (obj) => {
      if (this._MAP === 1) {
        if (obj.type === 'exitNext'){
          this.scene.restart({ map: 2, playerReturn: false, maps: this._MAPS, artifacts: this._ARTIFACTS });
        }
      }
      else if (this._MAP === 2) {
        if (obj.type === 'exitNext'){
          this.scene.restart({ map: 3, playerReturn: false, maps: this._MAPS, artifacts: this._ARTIFACTS });
        }
      }
    });
  }

  previousMap() {
    this.map.findObject('exitBack', (obj) => {
      if (this._MAP === 2) {
        if (obj.type === 'exitBack'){
          this.scene.restart({ map: 1, playerReturn: true, maps: this._MAPS, artifacts: this._ARTIFACTS });
        }
      }
      else if (this._MAP === 3) {
        if (obj.type === 'exitBack'){
          this.scene.restart({ map: 2, playerReturn: true, maps: this._MAPS, artifacts: this._ARTIFACTS });
        }
      }
    });
  }
}
