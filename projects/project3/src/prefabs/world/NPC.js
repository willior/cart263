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
    player.stop();

    if (npc.name = 'tree') {


      // let titleStyle = { fontFamily: 'Commodore', fontSize: '38px', fill: '#aadddd', wordWrap: true, align: 'left' };

      // let textStart = this.add.text(this.game.canvas.width/2,100,'');

      var textStart = this.add.text(100,100,'hi');

      // this.textHolder = "I know what you're thinking.";
      //
      // let index = 0;
      // let interval = setInterval(() => {
      //   textStart.textHolder += textHolder.charAt(index);
      //   index++;
      //   if (index === textHolder.length) {
      //     clearInterval(interval);
      //   }
      // },50);


    }
    else {

      this.MESSAGE_BOX_POSITION = {x: (player.x-280), y: (player.y+20)};
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message});

      // stops listening for key presses
      this.scene.input.keyboard.removeAllListeners('keydown');
      this.scene.input.keyboard.removeAllListeners('keyup');
      // for one second
      var closeTime = this.scene.time.delayedCall(1000, this.closable, [], this);
      console.log('talking to NPC; cannot close textbox for 1 second');
  }


  }
  closable(){
    // after 1 second, reapplies inputs so the text box can be closed
    this.scene.user_input.set_input(this.scene.user_inputs.talking_user_input);
  }
}

export default NPC;
