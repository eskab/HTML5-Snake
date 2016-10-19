import { Ticker } from 'EaselJS';

import config from '../config';
import utils from '../modules/utils';
import { RIGHT, LEFT, UP, DOWN } from '../constans/direction';

import Game from './Game.js';

/** Map class */
export default class Snake {

  /**
   * Calling init function
   */
  constructor() {
    this.width = config.canvas.width / config.map.w;
    this.height = config.canvas.height / config.map.h;

    this.moving = [1, 0];
    this.direction = RIGHT;
    this.startingPos = config.snake.startingPosition;
    this.snake = [];
    this.pause = true;
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
      let color = (i === this.snake.length - 1) ? '#ffffff' : '#ff0000';

      const shape = utils.drawShp(this.snake[i][0] * this.width, this.snake[i][1] * this.height, this.width, this.height, color);
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
          if (this.direction === RIGHT) return;

          this.moving = [-1, 0];
          this.direction = LEFT;
          break;
        case 38:
          if (this.direction === DOWN) return;

          this.moving = [0, -1];
          this.direction = UP;
          break;
        case 39:
          if (this.direction === LEFT) return;          

          this.moving = [1, 0];
          this.direction = RIGHT;
          break;
        case 40:
          if (this.direction === UP) return;

          this.moving = [0, 1];
          this.direction = DOWN;
          break;                 
        case 32:
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
      }
    });
  }

  /**
   * Move snake in loop
   */
  move() {
    if (!this.checkSnakeCollision() && !this.checkMapCollision()) {
      this.snake.push([this.snake[this.snake.length - 1][0] + this.moving[0], this.snake[this.snake.length - 1][1] + this.moving[1]]);
      this.snake.shift();
      
      this.draw();
    } else {
      Ticker.removeAllEventListeners();
    }
  }

  /**
   * Check if snake is not in the same places
   */
  checkSnakeCollision() {
    for (let i = 0; i < this.snake.length; i++) {
      let pos = this.snake[i];

      for (let j = 0; j < this.snake.length; j++) {
        if (this.snake[j][0] === pos[0] && this.snake[j][1] === pos[1] && j !== i) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Check if snake is on the map
   */
  checkMapCollision() {
    const snake = this.snake;
    const x = snake[snake.length - 1][0];
    const y = snake[snake.length - 1][1];

    if (x === 0 || x === 99 || y === 0 || y === 99) {
      return true;
    }

    return false;
  }  

}