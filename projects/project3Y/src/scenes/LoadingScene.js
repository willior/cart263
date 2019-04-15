class LoadingScene extends Phaser.Scene {
  constructor() {
    super({key: 'LoadingScene'});
  }

  init (data) {
    this.level_data = data.level_data;

    let loading_message = this.add.text(520, 400,  "LOADING...", {font: "20px LCD", fill: "#ffffff"});
  }

  preload() {
    let assets = this.level_data.assets;
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
            spacing: asset.spacing,
          });
          break;
        case 'tilemap':
          this.load.tilemapTiledJSON(asset_key, asset.source);
          break;
      }
    }
    // this.load.json(this.level_data.user_input.key, this.level_data.user_input.path);

    for (let user_input_key in this.level_data.user_input) {
      let user_input_path = this.level_data.user_input[user_input_key];
      this.load.json(user_input_key, user_input_path);
    }
  }

  create(data) {
    console.log(data);
    this.scene.start(data.scene, {level_data: this.level_data});
  }
}

export default LoadingScene;
