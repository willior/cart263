class LoadingScene extends Phaser.Scene {
  constructor() {
    super({key: 'LoadingScene'});
  }

  init (data) {
    this.map_data = data.map_data;

    let loading_message = this.add.text(320, 240,  "LOADING", {font: "48px Courier", fill: "#FF0000"});
    console.log(loading_message);
  }

  preload() {
    let assets = this.map_data.assets;
    for (let asset_key in assets) {
      let asset = assets[asset_key];
      switch (asset.type) {
        case 'image':
          this.load.image(asset_key, asset.source);
          break;
        case 'spritesheet':
          this.load.spritesheet(asset_key, asset.source, {
            frameWidth: asset.frame_width,
            frameHeight: asset.frame_height,
            frames: asset.frames,
            margin: asset.margin,
            spacing: asset.spacing
          });
      }
    }
  }

  create() {
    console.log("starting title scene");
  }
}

export default LoadingScene;
