import utils from '../modules/utils.js';

import Game from './Game.js';

/** Map class */
export default class Map {

  /**
   * Calling init function
   */
  constructor() {
    this.init();
  }

  /**
   * Creating map container
   */
  init() {
    this.ctr = utils.drawCtr();
    Game.STAGE.addChild(this.ctr);
  }

  /**
   * Destroy map container
   */
  uninit() {
    Game.STAGE.removeChild(this.ctr);
    this.ctr = null;
  }

}