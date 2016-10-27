require('babel-runtime/core-js/promise')['default'] = require('bluebird');

import '../index.html';
import '../styles/app.scss';

import Game from './class/Game.js';

window.onload = new Game();
