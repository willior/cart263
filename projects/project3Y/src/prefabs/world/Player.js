import Prefab from '../Prefab';

class Player extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.walking_speed = +properties.walking_speed;

    this.body.collideWorldBounds = true;

    this.scene.physics.add.collider(this, this.scene.layers.blocked);

    this.body.velocity.x = -this.walking_speed;

    this.move_left = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    this.move_right = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    this.move_up = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.move_down = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

  }

  update() {
    
  }
}

export default Player;
