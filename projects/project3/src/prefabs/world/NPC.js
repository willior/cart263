import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';

class NPC extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);
    this.message = this.scene.cache.text.get(properties.message);

    this.message1 = this.scene.cache.text.get(properties.message1);
    this.message2 = this.scene.cache.text.get(properties.message2);
    this.message3 = this.scene.cache.text.get(properties.message3);
    this.message4 = this.scene.cache.text.get(properties.message4);
    this.message5 = this.scene.cache.text.get(properties.message5);
    this.message6 = this.scene.cache.text.get(properties.message6);
    this.message7 = this.scene.cache.text.get(properties.message7);
    this.message8 = this.scene.cache.text.get(properties.message8);
    this.message9 = this.scene.cache.text.get(properties.message9);
    this.message10 = this.scene.cache.text.get(properties.message10);
    this.message11 = this.scene.cache.text.get(properties.message11);
    this.message12 = this.scene.cache.text.get(properties.message12);
    this.message13 = this.scene.cache.text.get(properties.message13);
    this.message14 = this.scene.cache.text.get(properties.message14);
    this.message15 = this.scene.cache.text.get(properties.message15);
    this.message16 = this.scene.cache.text.get(properties.message16);
    this.message17 = this.scene.cache.text.get(properties.message17);
    this.message18 = this.scene.cache.text.get(properties.message18);
    this.message19 = this.scene.cache.text.get(properties.message19);
    this.message20 = this.scene.cache.text.get(properties.message20);
    this.message21 = this.scene.cache.text.get(properties.message21);
    this.message22 = this.scene.cache.text.get(properties.message22);
    this.message23 = this.scene.cache.text.get(properties.message23);
    this.message24 = this.scene.cache.text.get(properties.message24);

    this.message1B = this.scene.cache.text.get(properties.message1B);
    this.message2B = this.scene.cache.text.get(properties.message2B);
    this.message3B = this.scene.cache.text.get(properties.message3B);
    this.message4B = this.scene.cache.text.get(properties.message4B);
    this.message5B = this.scene.cache.text.get(properties.message5B);
    this.message6B = this.scene.cache.text.get(properties.message6B);
    this.message7B = this.scene.cache.text.get(properties.message7B);
    this.message8B = this.scene.cache.text.get(properties.message8B);
    this.message9B = this.scene.cache.text.get(properties.message9B);
    this.message10B = this.scene.cache.text.get(properties.message10B);
    this.message11B = this.scene.cache.text.get(properties.message11B);
    this.message12B = this.scene.cache.text.get(properties.message12B);
    this.message13B = this.scene.cache.text.get(properties.message13B);
    this.message14B = this.scene.cache.text.get(properties.message14B);
    this.message15B = this.scene.cache.text.get(properties.message15B);
    this.message16B = this.scene.cache.text.get(properties.message16B);
    this.message17B = this.scene.cache.text.get(properties.message17B);
    this.message18B = this.scene.cache.text.get(properties.message18B);
    this.message19B = this.scene.cache.text.get(properties.message19B);
    this.message20B = this.scene.cache.text.get(properties.message20B);
    this.message21B = this.scene.cache.text.get(properties.message21B);
    this.message22B = this.scene.cache.text.get(properties.message22B);
    this.message23B = this.scene.cache.text.get(properties.message23B);
    this.message24B = this.scene.cache.text.get(properties.message24B);

    this.body.immovable = true;

    this.scene.physics.add.collider(this, this.scene.groups.players,
    this.talk, null, this);
  }

  talk(npc, player) {
    player.stop();
    console.log('talking to NPC: ' + npc.name);
    this.MESSAGE_BOX_POSITION = {x: (player.x-280), y: (player.y+20)};
    if (npc.name === 'tree') {
      // i'm sorry
      if (this.scene.treeIndex == 0) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message1});
        this.scene.treeIndex++;
      } else if (this.scene.treeIndex == 1) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message2});
        this.scene.treeIndex++;
      } else if (this.scene.treeIndex == 2) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message3});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 3) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message4});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 4) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message5});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 5) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message6});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 6) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message7});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 7) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message8});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 8) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message9});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 9) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message10});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 10) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message11});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 11) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message12});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 12) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message13});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 13) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message14});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 14) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message15});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 15) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message16});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 16) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message17});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 17) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message18});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 18) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message19});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 19) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message20});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 20) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message21});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 21) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message22});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 22) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message23});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 23) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message24});
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

    if (npc.name === 'treeB') {
      // i'm so sorry
      if (this.scene.treeIndex == 0) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message1B});
        this.scene.treeIndex++;
      } else if (this.scene.treeIndex == 1) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message2B});
        this.scene.treeIndex++;
      } else if (this.scene.treeIndex == 2) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message3B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 3) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message4B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 4) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message5B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 5) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message6B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 6) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message7B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 7) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message8B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 8) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message9B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 9) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message10B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 10) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message11B});
      }
      else if (this.scene.treeIndex == 11) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message12B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 12) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message13B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 13) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message14B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 14) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message15B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 15) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message16B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 16) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message17B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 17) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message18B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 18) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message19B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 19) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message20B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 20) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message21B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 21) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message22B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 22) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message23B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 23) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message24B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 24) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message25B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 25) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message26B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 26) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message27B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 27) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message28B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 28) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message29B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 29) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message30B});
        this.scene.treeIndex++;
      }
      else if (this.scene.treeIndex == 30) {
        this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message31B});
        this.scene.treeIndex++;
      }
    }
    else  if ((npc.name != 'tree')&&(npc.name != 'treeB')){
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
    console.log("talking input applied - can now close message box");
    this.scene.user_input.set_input(this.scene.user_inputs.talking_user_input);
    if (this.name === 'treeB') {this.destroy();}
    // this.rect = Phaser.Geom.Rectangle(player.x+300, player.y+200, player.x+100, player.y+100);
    // this.graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });
    // this.graphics.fillRectShape(rect);
  }
}

export default NPC;
