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

    this.message5F = this.scene.cache.text.get(properties.message5F);
    this.message6F = this.scene.cache.text.get(properties.message6F);
    this.message7F = this.scene.cache.text.get(properties.message7F);
    this.message8F = this.scene.cache.text.get(properties.message8F);
    this.message9F = this.scene.cache.text.get(properties.message9F);
    this.message10F = this.scene.cache.text.get(properties.message10F);
    this.message11F = this.scene.cache.text.get(properties.message11F);
    this.message12F = this.scene.cache.text.get(properties.message12F);
    this.message13F = this.scene.cache.text.get(properties.message13F);
    this.message14F = this.scene.cache.text.get(properties.message14F);
    this.message15F = this.scene.cache.text.get(properties.message15F);
    this.message16F = this.scene.cache.text.get(properties.message16F);
    this.message17F = this.scene.cache.text.get(properties.message17F);
    this.message18F = this.scene.cache.text.get(properties.message18F);
    this.message19F = this.scene.cache.text.get(properties.message19F);
    this.message20F = this.scene.cache.text.get(properties.message20F);
    this.message21F = this.scene.cache.text.get(properties.message21F);
    this.message22F = this.scene.cache.text.get(properties.message22F);
    this.message23F = this.scene.cache.text.get(properties.message23F);
    this.message24F = this.scene.cache.text.get(properties.message24F);
    this.message25F = this.scene.cache.text.get(properties.message25F);
    this.message26F = this.scene.cache.text.get(properties.message26F);
    this.message27F = this.scene.cache.text.get(properties.message27F);
    this.message28F = this.scene.cache.text.get(properties.message28F);
    this.message29F = this.scene.cache.text.get(properties.message29F);
    this.message30F = this.scene.cache.text.get(properties.message30F);
    this.message31F = this.scene.cache.text.get(properties.message31F);

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
      this.scene.music.stop();
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message1F});
      this.scene.finalIndex++;
      console.log("playing end music");
      this.scene.endMusic.play();
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
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message5F});
      this.scene.finalIndex++;
    }
    else if ((!this.scene.hourglassGot)) {
      console.log('no hourglass, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 5) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message6F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.specsGot)&&(this.scene.finalIndex == 6)) {
      console.log('got spectacles, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message7F});
      this.scene.finalIndex++;
    }
    else if ((!this.scene.specsGot)) {
      console.log('no specs, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 7) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message8F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.tomeGot)&&(this.scene.finalIndex == 8)) {
      console.log('got tome, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message9F});
      this.scene.finalIndex++;
    }
    else if ((!this.scene.tomeGot)) {
      console.log('no tome, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 9) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message10F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.pipeGot)&&(this.scene.finalIndex == 10)) {
      console.log('got pipe, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message11F});
      this.scene.finalIndex++;
    }
    else if (!this.scene.pipeGot) {
      console.log('no pipe, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 11) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message12F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.ankhGot)&&(this.scene.finalIndex == 12)) {
      console.log('got ankh, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message13F});
      this.scene.finalIndex++;
    }
    else if (!this.scene.ankhGot) {
      console.log('no ankh, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 13) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message14F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.wheelGot)&&(this.scene.finalIndex == 14)) {
      console.log('got wheel, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message15F});
      this.scene.finalIndex++;
    }
    else if (!this.scene.wheelGot) {
      console.log('no wheel, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 15) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message16F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.capGot)&&(this.scene.finalIndex == 16)) {
      console.log('got cap, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message17F});
      this.scene.finalIndex++;
    }
    else if (!this.scene.capGot) {
      console.log('no cap, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 17) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message18F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.fluteGot)&&(this.scene.finalIndex == 18)) {
      console.log('got flute, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message19F});
      this.scene.finalIndex++;
    }
    else if (!this.scene.fluteGot) {
      console.log('no flute, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 19) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message20F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.scopeGot)&&(this.scene.finalIndex == 20)) {
      console.log('got scope, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message21F});
      this.scene.finalIndex++;
    }
    else if (!this.scene.scopeGot) {
      console.log('no scope, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 21) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message22F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.astrolabeGot)&&(this.scene.finalIndex == 22)) {
      console.log('got astrolabe, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message23F});
      this.scene.finalIndex++;
    }
    else if (!this.scene.astrolabeGot) {
      console.log('no astrolabe, returning');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.messageNO});
      this.scene.music.play({loop: true});
    }
    else if (this.scene.finalIndex == 23) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message24F});
      this.scene.finalIndex++;
      this.scene.endMusic.stop();
    }
    else if (this.scene.finalIndex == 24) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message25F});
      this.scene.finalIndex++;

    }
    else if (this.scene.finalIndex == 25) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message26F});
      this.scene.finalIndex++;
    }
    else if (this.scene.finalIndex == 26) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message27F});
      this.scene.finalIndex++;
    }
    else if ((this.scene.synthGot)&&(this.scene.finalIndex == 27)) {
      console.log('got synth, OK');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message28F});
      this.scene.finalIndex++;
    }
    else if (this.scene.finalIndex == 28) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message29F});
      this.scene.finalIndex++;
    }
    else if (this.scene.finalIndex == 29) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message30F});
      this.scene.finalIndex++;
    }
    else if (this.scene.finalIndex == 30) {
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message31F});
      this.scene.finalIndex++;
    }
    else if (this.scene.finalIndex == 31) {
        console.log('ending game.')
        // this.scene.scene.start('BootScene', {scene: 'end'});
        game.scene.start('BootScene', {scene: 'end'});
    }

    // this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message});
    // stops listening for key presses
    this.scene.input.keyboard.removeAllListeners('keydown');
    this.scene.input.keyboard.removeAllListeners('keyup');
    // for one second
    var closeTime = this.scene.time.delayedCall(20, this.closable, [], this);
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
