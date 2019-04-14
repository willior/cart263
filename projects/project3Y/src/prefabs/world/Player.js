import Prefab from '../Prefab';

class Player extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.walking_speed = +properties.walking_speed;

    this.body.collideWorldBounds = true;

    this.scene.physics.add.collider(this, this.scene.layers.blocked);

    this.move_left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.move_right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.move_up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.move_down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

  }

  update() {
    if (this.move_left.isDown && this.body.velocity.x <= 0) {
      console.log("moving left");
      this.body.velocity.x = -this.walking_speed;
    }
    else if (this.move_right.isDown && this.body.velocity.x >= 0) {
      console.log("moving right");
      this.body.velocity.x = this.walking_speed;
    }
    else {
      this.body.velocity.x = 0
    }
    if (this.move_up.isDown && this.body.velocity.y <= 0) {
      console.log("moving up");
      this.body.velocity.y = -this.walking_speed;
    }
    else if (this.move_down.isDown && this.body.velocity.y >= 0) {
      console.log("moving down");
      this.body.velocity.y = this.walking_speed;
    }
    else {
      this.body.velocity.y = 0
    }
  }
}

export default Player;
