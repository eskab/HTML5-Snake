import config from '../config.js';
import utils from '../modules/utils.js';

import Game from './Game.js';

/** MainMenu showing game menu */
export default class MainMenu {

	/**
	 * Calling init function
	 */
	constructor() {
		console.log('MainMenu constructed');
		this.init();
	}

	/**
	 * Create mainmenu container
	 */
	init() {
		this.ctr = utils.drawCtr();
		Game.STAGE.addChild(this.ctr);

		this.createMenu();
	}

	/**
	 * Destroy mainmenu container
	 */
	uninit() {
		Game.STAGE.removeChild(this.ctr);
		this.ctr = null;
	}

	/**
	 * Create:
	 * title
	 * menu buttons for choosing options
	 */
	createMenu() {
		this.title = utils.drawText('Snake', '50px Ubuntu Mono');
		this.playButton = utils.drawClickableButton(this.playButtonHandler.bind(this), 0, 100, 500, 100, '#fff', 'Play', '#000', '30px Arial');
		
		this.ctr.addChild(this.title, this.playButton);
		this.ctr.setBounds(null, null, 500, this.title.getBounds().height + this.playButton.getBounds().height);

		utils.centerObjectByDims(this.ctr, config.canvas.width, config.canvas.height);
		utils.centerObjectHorizontal(this.title, this.ctr);
	}

	/**
	 * playButton handler
	 */
	playButtonHandler(e) {
		this.uninit();
		Game.MAP.init();
	}

}