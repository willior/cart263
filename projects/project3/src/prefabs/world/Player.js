import Prefab from '../Prefab';
// you!
class Player extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);
    // walking speed property is set in the Tiled map JSON file
    this.walking_speed = +properties.walking_speed;
    // can move freely
    this.body.collideWorldBounds = false;
    // except through blocked layers, assigned in the Tiled map JSON file
    this.scene.physics.add.collider(this, this.scene.layers.blocked);
    // movement
    this.moving = {
      left: false,
      right: false,
      up: false,
      down: false
    };
    // creating each animation once
    if (!this.scene.anims.anims.has('walking_down')) {
      this.scene.anims.create({
        key: 'walking_down',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [13, 14, 15, 16, 17, 18]}),
        frameRate: 16,
        repeat: -1
      });
    }
    if (!this.scene.anims.anims.has('walking_up')) {
      this.scene.anims.create({
        key: 'walking_up',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [18, 17, 16, 15, 14, 13]}),
        frameRate: 16,
        repeat: -1
      });
    }
    if (!this.scene.anims.anims.has('walking_right')) {
      this.scene.anims.create({
        key: 'walking_right',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [7, 8, 9, 10, 11, 12]}),
        frameRate: 16,
        repeat: -1
      });
    }
    if (!this.scene.anims.anims.has('walking_left')) {
      this.scene.anims.create({
        key: 'walking_left',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [1, 2, 3, 4, 5, 6]}),
        frameRate: 16,
        repeat: -1
      });
    }
    this.stopped_frames = [0, 0, 0, 1, 7]

    // sets the camera to always follow and center on the player
    var camera1 = this.scene.cameras.main.setZoom(1.5);
    camera1.startFollow(this);

  }

  update() {
    // plays correct animation based on movement direction
    if (this.body) {
      if (this.moving.left && this.body.velocity.x <= 0) {
        this.body.velocity.x = -this.walking_speed;
        if (this.body.velocity.y === 0) {
          this.anims.play('walking_left', true);
        }
      }
      else if (this.moving.right && this.body.velocity.x >= 0) {
        this.body.velocity.x = this.walking_speed;
        if (this.body.velocity.y === 0) {
          this.anims.play('walking_right', true);
        }
      }
      else {
        this.body.velocity.x = 0
      }
      if (this.moving.up && this.body.velocity.y <= 0) {
        this.body.velocity.y = -this.walking_speed;
        if (this.body.velocity.x === 0) {
          this.anims.play('walking_up', true);
        }
      }
      else if (this.moving.down && this.body.velocity.y >= 0) {
        this.body.velocity.y = this.walking_speed;
        if (this.body.velocity.x === 0) {
          this.anims.play('walking_down', true);
        }
      }
      else {
        this.body.velocity.y = 0
      }
      if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
        this.anims.stop();
        this.setFrame(this.stopped_frames[this.body.facing - 10]);
      }
    }
  }
  // retrives from user input which direction is being pressed and whether it's true or not
  change_movement(direction, move) {
    this.moving[direction] = move;
  }

  // stop function called when interacting with NPC for example
  stop () {
    this.moving = {
      left: false,
      right: false,
      up: false,
      down: false
    };
  }
}

export default Player;
