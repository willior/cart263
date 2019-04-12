class TitleScene extends Phaser.Scene {
  constructor() {
    super({key: 'TitleScene'});
  }
  init (data) {
    this.map_data = data.map_data;
  }

  create() {
    this.sprites = {};
  }
}

export default TitleScene;
