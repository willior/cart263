import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';

class NPC extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.message = this.scene.cache.text.get(properties.message);

    this.body.immovable = true;

    this.scene.physics.add.collider(this, this.scene.groups.players,
    this.talk, null, this);
  }

  talk(npc, player) {
    this.MESSAGE_BOX_POSITION = {x: (player.x-280), y: (player.y+20)};
    player.stop();
    this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message});
  }
}

export default NPC;
