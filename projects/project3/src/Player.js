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

  update() {
    // player inputs for movement
    if (this.cursors.up.isDown) {
      console.log('up');
    }
    if (this.cursors.down.isDown){
      console.log('down');
    }
    if (this.cursors.left.isDown){
      console.log('left');
    }
    if (this.cursors.right.isDown){
      console.log('right');
    }
  }

}
