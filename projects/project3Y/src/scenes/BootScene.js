class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene'
    });
    this.levels = {
      title: {
        key: 'TitleScene',
        path: 'assets/levels/title_screen.json'
      },
      title2: {
        key: 'TitleScene2',
        path: 'assets/levels/title_screen2.json'
      },
      title3: {
        key: 'TitleScene3',
        path: 'assets/levels/title_screen3.json'
      },
      screen1: {
        key: 'WorldScene',
        path: 'assets/levels/map1.json'
      },
      screen1B: {
        key: 'WorldScene',
        path: 'assets/levels/map1B.json'
      },
      screen2: {
        key: 'WorldScene',
        path: 'assets/levels/map2.json'
      },
      screen2B: {
        key: 'WorldScene',
        path: 'assets/levels/map2B.json'
      },
      screen3: {
        key: 'WorldScene',
        path: 'assets/levels/map3.json'
      }
    };
  }
  preload() {
    for (let level_name in this.levels) {
      let level = this.levels[level_name];
      this.load.json(level_name, level.path);
    }
  }

  create(data) {
    let level_data = this.cache.json.get(data.scene);
    this.scene.start('LoadingScene', {
      level_data: level_data,
      scene: this.levels[data.scene].key
    });
  }
}

export default BootScene;
