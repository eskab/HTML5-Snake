import { Ticker } from 'EaselJS';

import config from '../config';
import utils from '../modules/utils.js';

import Game from './Game.js';

import { LEFT, RIGHT, UP, DOWN } from '../constants/Direction.js';

/** Map class */
export default class Snake {

  /**
   * Calling init function
   */
  constructor() {
    this.width = config.canvas.width / config.map.w;
    this.height = config.canvas.height / config.map.h;

    this.direction = LEFT;   
    this.moving = [-1, 0];
    this.position = config.snake.position;
    this.snake = []; 
  }

  /**
   * Creating snake
   */
  init() {
    this.ctr = utils.drawCtr();
    Game.STAGE.addChild(this.ctr);

    this.setKeys();
    this.initSnake();
    this.draw();
  }

  /**
   * Creating snake's body array
   */
  initSnake() {
    for (let i = 0; i < config.snake.length; i++) {
      this.snake.push(this.position[i]);
    }    
  }

  /**
   * Drawing snake depends on it's coordinates
   */
  draw() {
    this.ctr.removeAllChildren();

    for (let i = 0; i < config.snake.length; i++) {
      const shape = utils.drawShp(this.snake[i][0] * this.width, this.snake[i][1] * this.height, this.width, this.height, '#ff0000');
      this.ctr.addChild(shape);
    }
  }

  /**
   * Set keys for events
   */
  setKeys() {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
          this.direction = LEFT;
          this.moving = [-1, 0];
          break;
        case 38:
          this.direction = UP;
          this.moving = [0, -1];
          break;
        case 39:
          this.direction = RIGHT;
          this.moving = [1, 0];
          break;
        case 40:
          this.direction = DOWN;
          this.moving = [0, 1];
          break;                   
      }
    });
  }

  /**
   * Move snake in loop
   */
  move() {
    this.position[0] = 0;
  }

}