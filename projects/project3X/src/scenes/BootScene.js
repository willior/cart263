class BootScene extends Phaser.Scene {
  constructor() {
    super({key: 'BootScene'});
    this.maps = {
      title: {key: 'TitleScene', path: 'assets/levels/title_screen.json'},
      screenOne: {key: 'FieldScene', path: 'assets/levels/screen1.json'}
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

    this.scene.start('LoadingScene', {map_data: map_data, scene: this.maps[data.scene].key});
  }
}

export default BootScene;
