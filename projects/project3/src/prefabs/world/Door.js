import Prefab from '../Prefab';
// zone transition object
class Door extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);
    this.next_level = properties.next_level;
    this.body.immovable = true;
    // on collision with the zone, runs the enter function
    this.scene.physics.add.collider(this, this.scene.groups.players, this.enter, null, this);
  }

  enter() {
    console.log("entering " + this.next_level);

    // only stops the music when using certain exits
    if((this.next_level === 'title3')||(this.next_level === 'act2')||(this.next_level === 'act2b')||(this.next_level === 'act3')||(this.next_level === 'act4')||(this.next_level === 'act4b')||(this.next_level === 'act1b')||(this.next_level === 'screen2B')|(this.next_level === 'act1')){
      console.log('stopping music');
      this.scene.music.stop();
    }
    // loads the next level
    this.scene.scene.start('BootScene', {
      scene: this.next_level
    });
  }
}

export default Door;
