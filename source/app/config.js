/**
 * @namespace Config
 *
 * @property {array} manifest - array for preloaded files
 *
 * @property {object} canvas - default canvas settings
 * @property {string} canvas.id - canvas DOM ID
 * @property {number} canvas.width - canvas width
 * @property {number} canvas.height - canvas height
 *
 * @property {object} stage - default stage settings
 * @property {number} stage.fps - stage framerate
 * 
 * @property {object} map - default map settings
 * @property {number} map.w - map width
 * @property {number} map.h - map height
 * 
 * @property {object} snake - default snake settings
 * @property {number} snake.length - snake length
 * @property {array} snake.startingPosition - [x, y]
 */
let config = module.exports = {
	manifest: [
		// example jpg
		// random images from imgur 
		// temporary
		{src:'https://pbs.twimg.com/media/Chypg9aUUAAP55z.jpg', id:'example'},
		{src:'http://i.imgur.com/YJMkGJd.jpg', id:'example2'},
		{src:'http://i.imgur.com/1o2G8Jr.png', id:'asadsad'},
		{src:'http://i.imgur.com/vrU6Kmu.jpg', id:''},
		{src:'http://i.imgur.com/sCs7jph.jpg', id:''},
		{src:'http://i.imgur.com/5Y6CeqS.png', id:''},
		{src:'http://i.imgur.com/AFhLA5r.jpg', id:''},
		{src:'http://i.imgur.com/v0ZcTsT.png', id:''},
		{src:'http://i.imgur.com/7QPflaB.jpg', id:''}
	],
	canvas: {
		id: 'main',
		width: 1920,
		height: 1080
	},
	stage: {
		fps: 1
	},
	map: {
		w: 100,
		h: 100
	},
	snake: {
		length: 10,
		startingPosition: [0, 50]
	}
};