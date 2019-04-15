import Prefab from '../Prefab';

class Cat extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.message = this.scene.cache.text.get(properties.message);

    this.body.immovable = true;

    this.scene.physics.add.collider(this, this.scene.groups.players, this.talk, null, this);

    if (!this.scene.anims.anims.has('cat_tail')) {
      this.scene.anims.create({
        key: 'cat_tail',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [0, 1, 2, 3, 4, 5, 6, 6]}),
        frameRate: 8,
        repeat: -1
      });
    }
  }

  talk(cat, player) {
    player.stop();
    console.log(this.message);
  }

  update() {
    if (this.body) {
      this.anims.play('cat_tail', true);
    }
  }
}

export default Cat;
