// Array Shuffle
// Arrays allow you to store and organize data.
(function() {
var PSoptions = {namespace:"example-arrayShuffle", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
// Remember the width of the grid
var GRID_W = 4;
var GRID_H = 4;

// Storage for the tiles
var tiles;
var numTilesPerType = 2;

var glyphs		= ["☀", "★", "♠", "☃", "☽", "☠", "♦", "♬"];
var colors		= [	PS.COLOR_RED,
					PS.COLOR_YELLOW,
					0x009900,
					0x336699,
					PS.COLOR_ORANGE,
					PS.COLOR_BLACK,
					PS.COLOR_VIOLET,
					PS.COLOR_INDIGO];
var glyphColors = [	0xFF9999,
					PS.COLOR_RED,
					0x99FF99,
					0x000055,
					PS.COLOR_BLACK,
					PS.COLOR_WHITE,
					PS.COLOR_WHITE,
					PS.COLOR_CYAN];

// Shuffle an array, using the Fisher-Yates Shuffle algorithm
// http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
function shuffle(array) {
	var counter = array.length, temp, index;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

function createTiles(amount, amountPerType) {
	// Empty tile list
	var list = [];

	var tileNumber = 0;
	// Loop through number of tiles
	for (var i = 0; i < amount; i += amountPerType) {
		// Loop through number per type
		for (var n = 0; n < amountPerType; ++n) {
			list.push(tileNumber);
		}
		tileNumber++;
	}
	return list;
}

function distributeTiles(list) {
	// Loop through grid
	for (var x = 0; x < GRID_W; ++x) {
		for (var y = 0; y < GRID_H; ++y) {
			// Draw the tile
			var tile = list.pop();
			PS.color(x, y, colors[tile]);
			PS.glyph(x, y, glyphs[tile]);
			PS.glyphColor(x, y, glyphColors[tile]);
		}
	}
}

function setup() {
	var numTiles = GRID_W * GRID_H;

	tiles = createTiles(numTiles, numTilesPerType);
	shuffle(tiles);
	distributeTiles(tiles);
}

PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( GRID_W, GRID_H );
	PS.statusText("Array Shuffle");

	PS.border(PS.ALL, PS.ALL, 0);
	PS.radius(PS.ALL, PS.ALL, 25);
	PS.scale(PS.ALL, PS.ALL, 95);

	setup();
};

PS.touch = function( x, y, data, options ) {
	"use strict";
	// Restart
	setup();
};
//#EDITOR-END
// Start the engine!
PS.start();
})();
