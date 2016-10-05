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

    this.map = [];

    for (let i = 0; i < config.map.w; i++) {
      this.map[i] = [];
      for (let j = 0; j < config.map.h; j++) {
        this.map[i][j] = null;
      }
    }

    this.draw();
  }

  /**
   * Drawing map
   */
  draw() {
    console.log('draw');
    const w = config.canvas.width / config.map.w;
    const h = config.canvas.height / config.map.h;

    for (let i = 0; i < config.map.w; i++) {
      for (let j = 0; j < config.map.h; j++) {
        const color = (i % 2 === 0 && j % 2 === 0) ? '#ffffff' : '#ff0000';
        const num = (i === 0) ? 0 : 1;
        const shp = utils.drawShp(i * w + num, j * h + num, w, h, color);
        this.ctr.addChild(shp);
      }
    }
  }

}