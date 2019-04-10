import 'phaser';

export default class Exit extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'exit', 1);
    this.scene = scene;

    //enable Physics
    this.scene.physics.world.enable(this);
    // adding Player
    this.scene.add.existing(this);
  }
}
