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

  /**
   * Check collision of snake and borders
   */
  checkCollision(snake) {
    const x = snake[snake.length - 1][0],
      y = snake[snake.length - 1][1];

    if (x < 0 || x >= config.map.w || y < 0 || y >= config.map.h) {
      return true;
    }

    return false;
  }

  /**
   * Generates random position for food
   */
  generateRandomPos(excludedCoordinates) {
    const w = config.map.w,
      h = config.map.h;
    let free = false;

    while (!free) {
      let x = Math.floor(Math.random() * w),
        y = Math.floor(Math.random() * h);

      if (this.map[x][y] === null) {
        free = true;
        continue;
      }

      for (let i = 0; i < excludedCoordinates.length; i++) {
        if (this.excludedCoordinates[i][0] === x && this.excludedCoordinates[i][1] === y) {
          free = false;
          break;
        }
      }
    }

    return [
      [x][y]
    ];
  }

}
