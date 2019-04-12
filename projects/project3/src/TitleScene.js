class TitleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'TitleScene'
        });
    }

    init (data) {
      console.log(data);
      this._MAP = data.map;
      this._MAPS = data.maps;
      this._NEWGAME = data.newGame;
      this._PLAYERRETURN = data.playerReturn;
    }

    preload () {
        this.load.image("background_image", "assets/images/player.png");
        this.maps = {
          1: 'map1',
          2: 'map2',
          3: 'map3'
        };
    }

    create () {
        let background = this.add.sprite(0, 0, "background_image");
		background.setOrigin(0, 0);

        let title_text = this.add.text(100, 100, "today seems like a good day to go out and find some ancient artifacts i guess");

        console.log('title screen; starting game');
            this.scene.start('Game', { map: 1, newGame: true, maps: this.maps });
    }
}

export default TitleScene;
