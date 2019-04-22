import Prefab from '../Prefab';

class Door extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);
    this.next_level = properties.next_level;
    this.body.immovable = true;
    this.scene.physics.add.collider(this, this.scene.groups.players, this.enter, null, this);
  }
  enter() {
    console.log("entering " + this.next_level);
    if((this.next_level === 'title3')||(this.next_level === 'act2')||(this.next_level === 'act2b')||(this.next_level === 'act3')||(this.next_level === 'act4')||(this.next_level === 'act4b')||(this.next_level === 'act1b')||(this.next_level === 'screen2B')|(this.next_level === 'act1')){
      console.log('stopping music');
      this.scene.music.stop();
    }
    this.scene.scene.start('BootScene', {
      scene: this.next_level
    });
  }
}

export default Door;
