import JSONLevelScene from './JSONLevelScene';
import Prefab from '../prefabs/Prefab';
import TextPrefab from '../prefabs/TextPrefab';

class EndScene extends JSONLevelScene {
  constructor() {
    super('EndScene');

    this.prefab_classes = {
      background: Prefab.prototype.constructor,
      text: TextPrefab.prototype.constructor
    }
  }

  create() {
    // adding & playing the music to be used
    var creditsMusic = this.sound.add('music7');
    this.creditsMusic = creditsMusic;
    creditsMusic.play();

    // typewriter text code by Pippin Barr
    let titleStyle = { font: '19.5px LCD', fill: '#ffffff', wordWrap: true, align: 'left' };
    let title = this.add.text(20,20,"",titleStyle);
    let text = "The Ancient Hero and his relatively demanding cat, \nMax, went back home. Thanks to the Ancient Hero, \nthe cat's gig that night went off without a hitch. \nThey even ended up selling a few tapes, which, \nhonestly, is more than they could have asked for. \n\nAlso, somehow, the equilibrium of time itself had \nbeen restored. Turns out that cat knew a thing \nor two about the fabric of existence, \nand how it was being torn apart. Luckily, \nby using the ANCIENT ARTIFACTS, \nexistence itself had been saved. And you picked up \na few knick-knacks and gifts for friends, I see! \nIt's always good to think of others. \n\nWay to go! You did great. And remember:                                                           \n\n\nyou can find meaning in anything and everything.                                                      \n\nYou just have to look.                                      \n\n\nBe seeing you!";
    let index = 0;
    let interval = setInterval(() => {
      title.text += text.charAt(index);
      index++;
      if (index === text.length) {
        clearInterval(interval);
        console.log("thanks for playing!");
      }
    },28);
  }
}

export default EndScene;
