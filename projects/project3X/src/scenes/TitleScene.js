class TitleScene extends Phaser.Scene {
  constructor() {
    super({key: 'TitleScene'});
  }
  init (data) {
    this.map_data = data.map_data;
  }

  create() {
    this.groups = {};
    this.map_data.groups.forEach(function (group_name) {
      this.groups[group_name] = this.add.group();
    }, this);

    this.sprites = {};
    for (let sprite_name in this.map_data.sprites) {
      let sprite_data = this.map_data.sprites[sprite_name];
      console.log(sprite_data);
      let sprite = undefined;
      switch(sprite_data.type) {
        case 'sprite':
          sprite = this.add.sprite(sprite_data.position.x, sprite_data.position.y, sprite_data.texture);
          break;
        case 'text':
          sprite = this.add.text(sprite_data.position.x, sprite_data.position.y, sprite_data.text, sprite_data.style);
          break;
      }
      this.sprites[sprite_name] = sprite;
      this.groups[sprite_data.group].add(sprite);
    }
  }
}

export default TitleScene;
