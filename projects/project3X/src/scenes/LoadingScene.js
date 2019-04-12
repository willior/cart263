class LoadingScene extends Phaser.Scene {
  constructor() {
    super({key: 'LoadingScene'});

  }

init (data) {
  this.map_data = data.map_data;
  let loading_message = this.add.text(320,240, "LOADING", {font: "48px Courier", fill: "#ffffff"});
}

  preload() {
    let assets = this.map_data.assets;
    for (let asset_key in assets) {
      let asset = assets[asset_key];
      this.load.image(asset_key, asset.source);
    }
  }

  create() {
    console.log("starting title scene");
  }
}

export default LoadingScene;
