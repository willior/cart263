import Prefab from '../Prefab';
import MessageBox from '../HUD/MessageBox';
// similar to NPC
// all item behaviour is handled here
// the .js files in the Items folder are for animations only
class Item extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.message = this.scene.cache.text.get(properties.message);

    this.body.immovable = true;

    this.scene.physics.add.collider(this, this.scene.groups.players,
    this.collect, null, this);
  }

  collect(item, player) {
    console.log(this.name + " collected; stops player, creates message box, removes input listeners for 1s");
    this.MESSAGE_BOX_POSITION = {x: (player.x-280), y: (player.y+20)};
    player.stop();
    this.scene.current_message_box = new MessageBox(this.scene, this.name + '_message_box', this.MESSAGE_BOX_POSITION, {texture: 'message_box_image', group: 'hud', message: this.message});

    // emits an event for item collection if the name matches the item
    if (this.name === 'cap') {this.scene.events.emit('collectCap');}
    if (this.name === 'flute') {this.scene.events.emit('collectFlute');}
    if (this.name === 'hourglass') {this.scene.events.emit('collectHourglass');}
    if (this.name === 'pipe') {this.scene.events.emit('collectPipe');}
    if (this.name === 'specs') {this.scene.events.emit('collectSpecs');}
    if (this.name === 'tome') {this.scene.events.emit('collectTome');}
    if (this.name === 'ankh') {this.scene.events.emit('collectAnkh');}
    if (this.name === 'wheel') {this.scene.events.emit('collectWheel');}
    if (this.name === 'scope') {this.scene.events.emit('collectScope');}
    if (this.name === 'synth') {this.scene.events.emit('collectSynth');}
    if (this.name === 'astrolabe') {this.scene.events.emit('collectAstrolabe');}

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
    this.destroy();
  }
}

export default Item;
