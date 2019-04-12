class BootScene extends Phaser.Scene {
  constructor() {
    super({key: 'BootScene'});
    this.maps = {
      title: {key: 'TitleScene', path: 'assets/maps/title_screen.json'}
    };
  }
  preload() {
    for (let map_name in this.maps) {
      let map = this.maps[map_name];
      this.load.json(map_name, map.path);
    }
  }

  create(data) {
    let map_data = this.cache.json.get(data.scene);

    // loading scene expects map data, which comes from the .json file
    this.scene.start('LoadingScene', {map_data: map_data});
  }
}

export default BootScene;
