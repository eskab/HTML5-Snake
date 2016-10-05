import { Ticker } from 'EaselJS';

import config from '../config';
import utils from '../modules/utils.js';

import Game from './Game.js';

/** Map class */
export default class Snake {

  /**
   * Calling init function
   */
  constructor() {
    this.width = config.canvas.width / config.map.w;
    this.height = config.canvas.height / config.map.h;    
  }

  /**
   * Creating snake
   */
  init() {
    this.ctr = utils.drawCtr();
    Game.STAGE.addChild(this.ctr);

    this.position = [config.snake.position[0], config.snake.position[1]];

    this.draw();
    this.setKeys();

    Ticker.on('tick', this.move.bind(this));
  }

  /**
   * Drawing snake
   */
  draw() {
    if (this.snake) this.ctr.removeChild(this.snake);

    // for (let i = 0; i < config.snake.length; i++) {
      this.snake = utils.drawShp(this.position[0] * this.width, this.height * this.position[1], this.width, this.height, '#ff0000');
      this.ctr.addChild(this.snake);
    // }
  }

  /**
   * Setting event for keys
   */
  setKeys() {
    document.addEventListener('keydown', (e) => {
      var keyCode = e.keyCode ? e.keyCode : e.which;
      switch (keyCode) {
      case 37:
        this.moveLeft();
        break;
      case 65:
        this.moveLeft();
        break;
      case 38:
        this.moveUp();
        break;
      case 87:
        this.moveUp();
        break;
      case 39:
        this.moveRight();
        break;
      case 68:
        this.moveRight();
        break;
      case 40:
        this.moveDown();
        break;
      case 83:
        this.moveDown();
        break;
      }
    }, false);    
  }

  /**
   * Moves snake in loop
   */
  move() {
    switch(this.direction) {
      case 'LEFT':
        this.position = [this.position[0] - 1, this.position[1]];
        break;
      case 'UP':
        this.position = [this.position[0], this.position[1] - 1];
        break;
      case 'RIGHT':
        this.position = [this.position[0] + 1, this.position[1]];
        break;
      case 'DOWN':
        this.position = [this.position[0], this.position[1] + 1];
        break;
      default:
        this.position = [this.position[0] + 1, this.position[1]];
    }

    this.draw();
  }

  /**
   * Snake move left method
   */
  moveLeft() {
    console.log('move left');
    this.direction = 'LEFT';
  }

  /**
   * Snake move up method
   */
  moveUp() {
    console.log('move up');
    this.direction = 'UP';
  }

  /**
   * Snake move right method
   */
  moveRight() {
    console.log('move right');
    this.direction = 'RIGHT';
  }

  /**
   * Snake move down method
   */
  moveDown() {
    console.log('move down');
    this.direction = 'DOWN';
  }   

}