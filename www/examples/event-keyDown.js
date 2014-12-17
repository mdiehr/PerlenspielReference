// PS.keyDown
// Detect keyboard presses.
(function() {
var PSoptions = {namespace:"event-keyDown", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
var x = 3;
var y = 1;
var GRID_W = 7;
var GRID_H = 3;
var BACKGROUND_COLOR = 0xA0A0A0;

PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( GRID_W, GRID_H );
	PS.statusText("PS.keyDown - Press arrow keys.");
	PS.gridColor(0xC0C0C0);
	PS.color(PS.ALL, PS.ALL, BACKGROUND_COLOR);
	// Create inset border along the top and left of the grid
	PS.border(PS.ALL, PS.ALL, 0);
	PS.border(PS.ALL, 0, {top:8});
	PS.border(0, PS.ALL, {left:8});
	drawPlayer();
};

// PS.keyDown ( key, shift, ctrl, options )
// Called when a key on the keyboard is pressed
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F1
// [shift] = true if shift key is held down, else false
// [ctrl] = true if control key is held down, else false
PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";
	// Debug information to show the value of the key being pressed
	PS.debug( "PS.keyDown(): key = " + key + ", shift = " + shift + "\n" );

	// Erase the player before moving
	erasePlayer();

	// Move the player within the bounds of the grid
	if (key === PS.KEY_ARROW_LEFT && x > 0) {
		x--;
	} else if (key === PS.KEY_ARROW_RIGHT && x < GRID_W - 1) {
		x++;
	} else if (key === PS.KEY_ARROW_UP && y > 0) {
		y--;
	} else if (key === PS.KEY_ARROW_DOWN && y < GRID_H - 1) {
		y++;
	}

	// Draw the player at their new location
	drawPlayer();
};

function drawPlayer() {
	PS.color(x, y, PS.COLOR_INDIGO);
	PS.glyph(x, y, "@");
}

function erasePlayer() {
	PS.color(x, y, BACKGROUND_COLOR);
	PS.glyph(x, y, 0);
}
//#EDITOR-END
// Start the engine!
PS.start();
})();
