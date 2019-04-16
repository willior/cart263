import NPC from '../NPC';

class Note extends NPC {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);
    if (!this.scene.anims.anims.has('animationNote')) {
      console.log(this.name);
      this.scene.anims.create({
        key: 'animationNote',
        frames: this.scene.anims.generateFrameNumbers(this.texture.key, {frames: [0, 1, 2, 3, 4, 5, 6, 7]}),
        frameRate: 8,
        repeat: -1
      });
    }
  }
  update() {
    if (this.body) {
      this.anims.play('animationNote', true);
    }
  }
}

export default Note;
