import config from '../config';
import utils from '../modules/utils.js';

import Game from './Game.js';

/** Map class */
export default class Map {

  /**
   * Calling init function
   */
  constructor() {}

  /**
   * Creating map space
   */
  init() {
    console.log('init map');
    this.ctr = utils.drawCtr();
    Game.STAGE.addChild(this.ctr);

    // will be needed to check snake's collision
    this.map = [];

    for (let i = 0; i < config.map.w; i++) {
      this.map[i] = [];
      for (let j = 0; j < config.map.h; j++) {
        this.map[i][j] = null;
      }
    }

    Game.SNAKE.init();
  }

}