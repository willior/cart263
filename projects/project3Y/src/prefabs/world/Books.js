import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';

class NPC extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.message = this.scene.cache.text.get(properties.message);

    this.body.immovable = true;

    this.scene.physics.add.collider(this, this.scene.groups.players,
    this.talk, null, this);

    if (!this.scene.anims.anims.has('animation')) {
      console.log(this.name);
      this.scene.anims.create({
        key: 'animation',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
        frameRate: 8,
        repeat: -1
      });
    }
  }

  talk(npc, player) {
    this.MESSAGE_BOX_POSITION = {x: (player.x-280), y: (player.y+20)};
    player.stop();
    this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message});
    this.scene.user_input.set_input(this.scene.user_inputs.talking_user_input);
  }
  update() {
    if (this.body) {
      this.anims.play('animation', true);
    }
  }
}

export default NPC;
