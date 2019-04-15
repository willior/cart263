import Prefab from '../Prefab';

class Door extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);
    this.next_level = properties.next_level;
    this.body.immovable = true;
    this.scene.physics.add.collider(this, this.scene.groups.players);
  }
}

export default Door;
