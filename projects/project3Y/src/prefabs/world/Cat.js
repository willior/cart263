import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';

class Cat extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.message = this.scene.cache.text.get(properties.message);

    this.body.immovable = true;

    this.MESSAGE_BOX_POSITION = {x: 0, y: 360};

    this.scene.physics.add.collider(this, this.scene.groups.players, this.talk, null, this);

    if (!this.scene.anims.anims.has('cat_tail')) {
      this.scene.anims.create({
        key: 'cat_tail',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
        frameRate: 8,
        repeat: -1
      });
    }
  }

  talk(cat, player) {
    player.stop();
    this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message});
  }

  update() {
    if (this.body) {
      this.anims.play('cat_tail', true);
    }
  }
}

export default Cat;
