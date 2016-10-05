import { Stage, Ticker } from 'EaselJS';

import config from '../config.js';
import utils from '../modules/utils.js';
import Preload from './Preload.js';
import MainMenu from './MainMenu.js';

/** Main class representing game world. */
export default class Game {

	/**
	 * Init the world, create main loader promise.
	 */
	constructor() {
		const initProm = 
			new utils._Promise((resolve, reject) => {
				this.init(resolve);
			})
			.then(() => new Preload())
			.then(() => new MainMenu());
	}

	/**
	 * Create canvas, stage and resize application.
	 * @augments Stage
	 */
	init(resolve) {
		this.canvas = Game.CANVAS = document.getElementById(config.canvas.id);
		this.stage = Game.STAGE = new Stage(this.canvas);

		this.stage.enableMouseOver();

		Ticker.setFPS(config.stage.fps);
		Ticker.on('tick', this.ticker.bind(this));
		
		this.resize();
		window.onresize = this.resize.bind(this);

		resolve();
	}

	/**
	 * Ticker function - updating stage with each tick.
	 */
	ticker() {
		this.stage.update();
	}

	/**
	 * Resize canvas and stage depends on window dimensions.
	 */
	resize() {
		if (!this.canvas) {
			return;
		}
		
		let w = window.innerWidth,
			h = window.innerHeight,
			ow = config.canvas.width,
			oh = config.canvas.height,
			scale = Math.min(w / ow, h /oh);

		utils.setWH(this.canvas, ow * scale, oh * scale, true);		

		if (!this.stage) {
			return;
		}

		utils.scaleXY(this.stage, scale);
		this.stage.update();			
	}

}

/** Object represents canvas. */
Game.CANVAS = {};
/** Object represents stage. */
Game.STAGE = {};
/** Object for preloaded images. */
Game.IMAGES = {};