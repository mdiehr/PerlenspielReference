// Lights Out
// A simple game example.
(function() {
var PSoptions = {namespace:"example-lightsOut", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
var game = {w:5, h:5};
var colorLight = PS.COLOR_YELLOW;
var colorDark = PS.COLOR_BLACK;
var colorBG = PS.COLOR_ORANGE;
var won;
var soundClick = "fx_rip";
var soundWin = "fx_powerup8";

// Swaps a bead between the light and dark colors
function swapColor(x, y) {
	if (x >= 0 && x < game.w && y >= 0 && y < game.h) {
		if (PS.color(x, y) === colorLight) {
			PS.color(x, y, colorDark);
		} else {
			PS.color(x, y, colorLight);
		}
	}
}

// Counts how many times a color shows up in the grid
function countColor(color) {
	var count = 0;
	for (var x = 0; x < game.w; ++x)
		for (var y = 0; y < game.h; ++y)
			count += (PS.color(x, y) === color ? 1 : 0);
	return count;
}

PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( game.w, game.h );
	PS.statusText("Lights Out");
	PS.gridColor(colorBG);

	PS.audioLoad(soundWin);
	PS.audioLoad(soundClick);

	won = false;

	// Bead style
	PS.color(PS.ALL, PS.ALL, colorLight);
	PS.border(PS.ALL, PS.ALL, 4);
	PS.borderColor(PS.ALL, PS.ALL, colorBG);
	PS.radius(PS.ALL, PS.ALL, 10);
};

PS.touch = function( x, y, data, options ) {
	"use strict";

	if (won) {
		PS.init();
	} else {
		swapColor(x, y);
		swapColor(x + 1, y);
		swapColor(x - 1, y);
		swapColor(x, y + 1);
		swapColor(x, y - 1);
		// If all the light beads are off, the player won
		if (countColor(colorLight) === 0) {
			won = true;
			PS.statusText("Congrats!");
			PS.audioPlay(soundWin);
		} else {
			PS.audioPlay(soundClick);
		}
	}
};

//#EDITOR-END
// Start the engine!
PS.start();
})();
