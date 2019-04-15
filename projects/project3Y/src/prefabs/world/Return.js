import Prefab from '../Prefab';

class Return extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);
    this.previous_level = properties.previous_level;
    this.body.immovable = true;
    this.scene.physics.add.collider(this, this.scene.groups.players, this.enter, null, this);
  }
  enter() {
    this.scene.scene.start('BootScene', {
      scene: this.previous_level
    });
  }
}

export default Return;
