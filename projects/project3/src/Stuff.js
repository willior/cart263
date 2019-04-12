import 'phaser';

export default class Stuff extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, properties) {
    super(scene, x, y, 'stuff', properties);
    this.scene = scene;

    //enable Physics
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    // this.message = this.scene.cache.text.get(properties.message)
  }

  talk(stuff, player) {
    player.stop();
    console.log(this.message);
  }
}
