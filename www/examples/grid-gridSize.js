// PS.gridSize
// This function is used to set the size of the grid. You can call it at any time, but it will also erase all of the beads.
// The smallest possible grid is 1x1, and the largest possible grid is 32x32.
// The grid does not need to be square.
(function() {
var PSoptions = {namespace:"grid-gridSize", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
var GRID_W = 6;
var GRID_H = 6;
var MIN_SIZE = 3;
var MAX_SIZE = 32;

function setupGrid() {
	// Make the arrow buttons
	setupArrows();
	// Border color: Green
	PS.borderColor(PS.ALL, PS.ALL, 0x338833);
	// Write a status text
	PS.statusText("The grid is " + GRID_W + "x" + GRID_H);

}

// Create interactive buttons
function setupArrows() {
	PS.glyph(1, 0, "←");
	PS.data (1, 0, "left");
	PS.glyph(2, 0, "→");
	PS.data (2, 0, "right");
	PS.glyph(0, 1, "↑");
	PS.data (0, 1, "up");
	PS.glyph(0, 2, "↓");
	PS.data (0, 2, "down");
}

function resize(w, h) {
	// Ensure that the size makes sense
	if(w >= MIN_SIZE && w <= MAX_SIZE && h >= MIN_SIZE && h <= MAX_SIZE) {
		GRID_W = w;
		GRID_H = h;
		// Set new size
		PS.gridSize(GRID_W, GRID_H);
		// Set up the look of the grid
		setupGrid();

	}
}

PS.init = function( system, options ) {
	"use strict";
	// Use PS.gridSize( x, y ) to set the grid to
	// the initial dimensions you want (32 x 32 maximum)
	// Do this FIRST to avoid problems!
	// Otherwise you will get the default 8x8 grid
	PS.gridSize(GRID_W, GRID_H);
	// Set up the look of the grid
	setupGrid();
};

PS.touch = function( x, y, data, options ) {
	"use strict";
	if (data === "left") {
		resize(GRID_W-1, GRID_H);
	} else if (data === "right") {
		resize(GRID_W+1, GRID_H);
	} else if (data === "up") {
		resize(GRID_W, GRID_H-1);
	} else if (data === "down") {
		resize(GRID_W, GRID_H+1);
	}
};

PS.enter = function( x, y, data, options ) {
	"use strict";
	if (data !== 0) {
		PS.border(x, y, 5);
		PS.borderColor(x, y, PS.COLOR_BLUE);
	}
};

PS.exit = function( x, y, data, options ) {
	"use strict";
	if (data !== 0) {
		PS.border(x, y, 1);
		PS.borderColor(x, y, 0x338833);
	}};

PS.exitGrid = function( options ) {
	"use strict";
};

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";
};

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict";
};

PS.input = function( sensors, options ) {
	"use strict";
};
//#EDITOR-END
// Start the engine!
PS.start();
})();
