import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';

class Final extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.messageNO = this.scene.cache.text.get(properties.messageNO);
    this.message1F = this.scene.cache.text.get(properties.message1F);
    this.message2F = this.scene.cache.text.get(properties.message2F);
    this.message3F = this.scene.cache.text.get(properties.message3F);

    this.message4F = this.scene.cache.text.get(properties.message4F);
    this.message4Y = this.scene.cache.text.get(properties.message4Y);

    this.message5F = this.scene.cache.text.get(properties.message5F);

    this.body.immovable = true;

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

  talk(final, player) {
    console.log("talking to Final Max.");
    console.log(this.scene.finalIndex);
    console.log(this.scene.hourglassGot);
    player.stop();
    this.MESSAGE_BOX_POSITION = {x: (player.x-280), y: (player.y+20)};

    if (this.scene.finalIndex == 0) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message1F});
      this.scene.finalIndex++;
    } else if (this.scene.finalIndex == 1) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message2F});
      this.scene.finalIndex++;
    } else if (this.scene.finalIndex == 2) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message3F});
      this.scene.finalIndex++;
    }
    else if (this.scene.finalIndex == 3) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message4F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.hourglassGot)&&(this.scene.finalIndex == 4)) {
      console.log('got hourglass, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message4Y});
      this.scene.finalIndex++;
    }
    else if ((!this.scene.hourglassGot)) {
      console.log('no hourglass, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
    }

    // if (this.scene.finalIndex == 5) {
    //   this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message5F});
    //   this.scene.finalIndex++;
    //   }

    // this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message});
    // stops listening for key presses
    this.scene.input.keyboard.removeAllListeners('keydown');
    this.scene.input.keyboard.removeAllListeners('keyup');
    // for one second
    var closeTime = this.scene.time.delayedCall(1000, this.closable, [], this);
  }
  closable(){
    // after 1 second, reapplies inputs so the text box can be closed
    console.log("talking input applied - can now close message box");
    this.scene.user_input.set_input(this.scene.user_inputs.talking_user_input);
  }
  update() {
    if (this.body) {
      this.anims.play('cat_tail', true);
    }
  }
}

export default Final;
