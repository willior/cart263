import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';


class NPC extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);
    this.message = this.scene.cache.text.get(properties.message);
    this.message1 = this.scene.cache.text.get(properties.message1);
    this.message2 = this.scene.cache.text.get(properties.message2);
    this.message3 = this.scene.cache.text.get(properties.message3);

    this.body.immovable = true;

    this.scene.physics.add.collider(this, this.scene.groups.players,
    this.talk, null, this);

  }

  talk(npc, player) {
    player.stop();
    console.log('talking to NPC');
    this.MESSAGE_BOX_POSITION = {x: (player.x-280), y: (player.y+20)};
    if (npc.name === 'tree') {
      console.log('talking to tree');
      if (this.scene.treeIndex == 0) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message1});
        this.scene.treeIndex++;
        console.log(this.message);
        console.log(this.message2);
      } else if (this.scene.treeIndex == 1) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message2});
        this.scene.treeIndex++;
      } else if (this.scene.treeIndex == 2) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message3});
        this.scene.treeIndex++;
      }

      // let treeStyle = { fontFamily: 'Commodore', fontSize: '38px', fill: '#aadddd', wordWrap: true, align: 'left' };

      // let textStart = this.add.text(this.game.canvas.width/2,100,'');

      // var textStart = new Text(this,player.x,player.y+20,'hi', treeStyle);
      // console.log(textStart);

      // this.add.text(this,100,100,'hi');

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
      console.log('talking to something else');
      this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message});
    }
    // stops listening for key presses
    this.scene.input.keyboard.removeAllListeners('keydown');
    this.scene.input.keyboard.removeAllListeners('keyup');
    // for one second
    var closeTime = this.scene.time.delayedCall(1000, this.closable, [], this);
  }
  closable(){
    // after 1 second, reapplies inputs so the text box can be closed
    this.scene.user_input.set_input(this.scene.user_inputs.talking_user_input);
  }
}

export default NPC;
