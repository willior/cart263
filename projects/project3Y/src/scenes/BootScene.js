class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene'
    });
    this.levels = {
      title: {key: 'TitleScene', path: 'assets/levels/title_screen.json'},
      screenOne: {key: 'WorldScene', path: 'assets/levels/map1.json'}
    };
  }
  preload() {
    for (let level_name in this.levels) {
      let level = this.levels[level_name];
      this.load.json(level_name, level.path);
    }
  }

  create(data) {
    console.log("starting game");
    let level_data = this.cache.json.get(data.scene);
    this.scene.start('LoadingScene', {level_data: level_data, scene: this.levels[data.scene].key});
  }
}

export default BootScene;
