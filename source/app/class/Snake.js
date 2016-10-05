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

    this.direction = RIGHT;   
    this.moving = [1, 0];
    this.startingPos = config.snake.startingPosition;
    this.snake = []; 
    this.pause = false;
  }

  /**
   * Creating snake
   */
  init() {
    this.ctr = utils.drawCtr();
    Game.STAGE.addChild(this.ctr);

    this.setKeys();
    this.initSnake();
  }

  /**
   * Creating snake's body array
   */
  initSnake() {
    for (let i = 0; i < config.snake.length; i++) {
      this.snake.push([++this.startingPos[0], this.startingPos[1]]);
    }

    this.draw();    
  }

  /**
   * Drawing snake depends on it's coordinates
   */
  draw() {
    this.ctr.removeAllChildren();

    for (let i = 0; i < this.snake.length; i++) {
      // console.log(this.snake[i]);
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
          console.log('moving left');
          break;
        case 38:
          this.direction = UP;
          this.moving = [0, -1];
          console.log('moving up');
          break;
        case 39:
          this.direction = RIGHT;
          this.moving = [1, 0];
          console.log('moving right');
          break;
        case 40:
          this.direction = DOWN;
          this.moving = [0, 1];
          console.log('moving down');
          break;                 
        case 46:
          // temp
          if (!this.pause) {
            Ticker.removeAllEventListeners();
          } else {
            Ticker.on('tick', () => {
              this.move();
              Game.STAGE.update();
            });
          }
          this.pause = !this.pause;
          break;  
        case 32:
          Ticker.on('tick', this.move.bind(this));
          break;
      }
    });
  }

  /**
   * Move snake in loop
   */
  move() {
    this.snake.push([this.snake[this.snake.length - 1][0] + this.moving[0], this.snake[this.snake.length - 1][1] + this.moving[1]]);
    this.snake.shift();
    
    this.draw();
  }

}