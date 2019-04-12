import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super({key: 'BootScene'});
    this.maps = {
    title: {
      key: "TitleScreen",
      path: "assets/maps/title_screen.json"
    }
  };
}

preload () {
      for (let map_name in this.maps) {
        let map = this.maps[map_name];
        this.load.json(map_name, map.path);
      }


      // 1: 'map1',
      // 2: 'map2',
      // 3: 'map3'
    

    // loading tilemap
    // this.load.tilemapTiledJSON('map1', 'assets/maps/map1.json');
    // this.load.tilemapTiledJSON('map2', 'assets/maps/map2.json');
    // this.load.tilemapTiledJSON('map3', 'assets/maps/map3.json');

    // loading spritesheet
    this.load.spritesheet('masterTileset', 'assets/images/masterTileset.png', { frameWidth: 16, frameHeight: 16});
    // load player avatar
    this.load.spritesheet('player', 'assets/images/player.png', { frameWidth: 16, frameHeight: 16});
    // load exit marker
    this.load.spritesheet('exitBack', 'assets/images/exit.png', { frameWidth: 16, frameHeight: 16});
    this.load.spritesheet('exitNext', 'assets/images/exit.png', { frameWidth: 16, frameHeight: 16});
  }

  create () {
    let map_data = this.cache.json.get('title');
    console.log(tilemapTiledJSON_data);



    // this.scene.start('Game', { map: 1, newGame: true, maps: this.maps });
  }
};
