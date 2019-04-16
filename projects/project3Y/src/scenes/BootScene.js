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
      },
      screen3B: {
        key: 'WorldScene',
        path: 'assets/levels/map3B.json'
      },
      screen4: {
        key: 'WorldScene',
        path: 'assets/levels/map4.json'
      },
      screen4b: {
        key: 'WorldScene',
        path: 'assets/levels/map4b.json'
      },
      screen5: {
        key: 'WorldScene',
        path: 'assets/levels/map5.json'
      },
      screen5b: {
        key: 'WorldScene',
        path: 'assets/levels/map5b.json'
      },
      screen6: {
        key: 'WorldScene',
        path: 'assets/levels/map6.json'
      },
      screen6b: {
        key: 'WorldScene',
        path: 'assets/levels/map6b.json'
      },
      screen7: {
        key: 'WorldScene',
        path: 'assets/levels/map7.json'
      },
      screen7b: {
        key: 'WorldScene',
        path: 'assets/levels/map7b.json'
      },
      screen8: {
        key: 'WorldScene',
        path: 'assets/levels/map8.json'
      },
      screen8b: {
        key: 'WorldScene',
        path: 'assets/levels/map8b.json'
      },
    }
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
