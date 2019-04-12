import 'phaser';

export default class Item extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, properties) {
    super(scene, x, y, 'item', properties);
    this.scene = scene;

    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

  }
}
