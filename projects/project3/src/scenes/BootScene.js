class BootScene extends Phaser.Scene {
  constructor() {
    super({
      key: 'BootScene'
    });
    // levels object object used to change scenes
    // stores level information in JSON files
    // tells the loading scene which JSON file to load
    // all maps or "acts" are built in the WorldScene
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
      act1: {
        key: 'WorldScene',
        path: 'assets/levels/act1level.json'
      },
      act1b: {
        key: 'WorldScene',
        path: 'assets/levels/act1blevel.json'
      },
      act2: {
        key: 'WorldScene',
        path: 'assets/levels/act2level.json'
      },
      act2b: {
        key: 'WorldScene',
        path: 'assets/levels/act2blevel.json'
      },
      act3: {
        key: 'WorldScene',
        path: 'assets/levels/act3level.json'
      },
      act3b: {
        key: 'WorldScene',
        path: 'assets/levels/act3blevel.json'
      },
      act4: {
        key: 'WorldScene',
        path: 'assets/levels/act4level.json'
      },
      act4b: {
        key: 'WorldScene',
        path: 'assets/levels/act4blevel.json'
      },
      end: {
        key: 'EndScene',
        path: 'assets/levels/end_screen.json'
      },
    }
  }

  // iterating through stored levels information
  preload() {
    for (let level_name in this.levels) {
      let level = this.levels[level_name];
      this.load.json(level_name, level.path);
    }
  }
  // creating the appropriate data to be loaded
  create(data) {
    let level_data = this.cache.json.get(data.scene);
    this.scene.start('LoadingScene', {
      level_data: level_data,
      scene: this.levels[data.scene].key
    });
  }
}

export default BootScene;
