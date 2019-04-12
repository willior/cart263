import 'phaser';

export default class Stuff extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, properties) {
    super(scene, x, y, 'stuff', properties);
    this.scene = scene;
    
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
  }
}
