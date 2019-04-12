class TitleScene extends Phaser.Scene {
  constructor() {
    super({key: 'TitleScene'});
  }
  preload() {
    // asset key, asset path
    this.load.image('background_image', 'assets/images/background.png');
  }

  create() {
    // x, y, asset key
    let background = this.add.sprite(0, 0, 'background_image');
    background.setOrigin(0, 0);

    let title_text = this.add.text(100,300, "ancient artifacts");
  }
}

export default TitleScene;