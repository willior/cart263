import 'phaser';

export default class Stuff extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'stuff');
    this.scene = scene;

    //enable Physics
    this.scene.physics.world.enable(this);
    // adding Player
    this.scene.add.existing(this);
  }
}
