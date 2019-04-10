import 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'player', 1);
    this.scene = scene;

    //enable Physics
    this.scene.physics.world.enable(this);

    // adding Player
    this.scene.add.existing(this);
  }

  update(cursors) {
    this.setVelocity(0);
    // player inputs for movement
    if (cursors.up.isDown) {
      this.setVelocityY(-100);
    }
    else if (cursors.down.isDown){
      this.setVelocityY(100);
    }
    if (cursors.left.isDown){
      this.setVelocityX(-100);
    }
    else if (cursors.right.isDown){
      this.setVelocityX(100);
    }
  }

}
