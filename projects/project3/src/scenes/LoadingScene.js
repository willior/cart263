class LoadingScene extends Phaser.Scene {
  constructor() {
    super({key: 'LoadingScene'});
  }

  init (data) {
    // stores data
    // displays loading message
    this.level_data = data.level_data;
    let loading_message = this.add.text(460, 400,  "LOADING...", {font: "20px LCD", fill: "#ffffff"});
  }

  preload() {
    // loading music files; all happens at the start of the game
    this.load.audio('musicHome','assets/audio/holophone_days.mp3');
    this.load.audio('music1','assets/audio/single.mp3');
    this.load.audio('music1B','assets/audio/alonetime.mp3');
    this.load.audio('music2','assets/audio/garden.mp3');
    this.load.audio('music3','assets/audio/oncoming.mp3');
    this.load.audio('music4','assets/audio/victim_of_the_summer_sun.mp3');
    this.load.audio('music5','assets/audio/completely_dead_inside.mp3');
    this.load.audio('music6','assets/audio/pollution.mp3');
    this.load.audio('music7','assets/audio/all_in_your_mind.mp3');
    // loads assets (spritesheets, map files, etc.) for the appropriate level
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

    // user input JSON files store what the keys do
    // for example, user input changes during the title screens and dialog boxes
    // during which an arrrow key closes them and does not move the player
    for (let user_input_key in this.level_data.user_input) {
      let user_input_path = this.level_data.user_input[user_input_key];
      this.load.json(user_input_key, user_input_path);
    }
  }
  // creates the data to be built by the appropriate scene
  // title screens have their own scenes
  // world is built starting from the JSON level screen
  create(data) {
    this.scene.start(data.scene, {level_data: this.level_data});
  }
}

export default LoadingScene;
