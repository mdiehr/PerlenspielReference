// PS.exitGrid
// This event fires whenever the mouse moves completely off of the grid.
(function() {
var PSoptions = {namespace:"event-exitGrid", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
var isInGrid = false;

PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 3, 1 );
	PS.gridColor(0x336699);
	PS.border(PS.ALL, PS.ALL, 0);
	outGrid();
};

PS.enter = function( x, y, data, options ) {
	"use strict";
	inGrid();
};

// PS.exitGrid ( options )
// Called when the mouse cursor/touch exits the grid perimeter
// It doesn't have to do anything
PS.exitGrid = function( options ) {
	"use strict";
	outGrid();
};

// Called by PS.enter when entering any bead
function inGrid() {
	isInGrid = true;
	PS.statusText("PS.exitGrid - Inside");
	PS.color(PS.ALL, PS.ALL, PS.COLOR_BLACK);
	PS.glyphColor(PS.ALL, PS.ALL, PS.COLOR_GREEN);
	PS.glyph(0, 0, "I");
	PS.glyph(1, 0, "N");
	PS.glyph(2, 0, "!");
}

// Called by PS.exitGrid when leaving the grid
function outGrid() {
	isInGrid = false;
	PS.statusText("PS.exitGrid - Outside");
	PS.color(PS.ALL, PS.ALL, PS.COLOR_CYAN);
	PS.glyphColor(PS.ALL, PS.ALL, PS.COLOR_BLACK);
	PS.glyph(0, 0, "O");
	PS.glyph(1, 0, "U");
	PS.glyph(2, 0, "T");
}
//#EDITOR-END
// Start the engine!
PS.start();
})();
