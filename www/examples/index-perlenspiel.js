// Overview
// You can change the code on the left, and then press the "refresh" button in the white box on the right.
// Comments, which are lines of code that begin with //, can be used to leave notes or messages for yourself (or other programmers). I've left a bunch in this example for you!
(function() {
var PSoptions = {namespace:"index-perlenspiel", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2

// PS.init controls what happens when the page loads.
PS.init = function( system, options ) {
	"use strict";
	// change the size of the grid by changing these numbers.
	PS.gridSize( 6, 3 );
	// Write a welcome message or title here.
	PS.statusText("Hello, world!");
	// Write a debug message below the grid
	PS.debug("Move the mouse, click, or press Spacebar.\n");
	// PS.color is used to color individual beads.
	PS.color(0, 0, PS.COLOR_BLUE);
	// You can use hex codes for colors, too.
	PS.color(1, 0, 0x336699);
	PS.color(2, 0, 0x5599AA);
	PS.color(3, 0, 0x77AACC);
	PS.color(4, 0, 0x99CCEE);
	PS.color(5, 0, 0xAAEEFF);
	// You can set an entire row at once.
	PS.color(PS.ALL, 1, PS.COLOR_BLACK);
	PS.color(PS.ALL, 2, 0x004400);
	// Turn off the border of EVERY bead.
	PS.border(PS.ALL, PS.ALL, 0);
};

// PS.touch controls what happens when a bead is clicked.
PS.touch = function( x, y, data, options ) {
	"use strict";
	// Draw an "*" at the location of the click.
	PS.glyph(x, y, "*");
	// Make sure it's yellow.
	PS.glyphColor(x, y, PS.COLOR_YELLOW);
};

// PS.enter controls what happens when you mouse over a bead.
PS.enter = function( x, y, data, options ) {
	"use strict";
	// Turn off the border of EVERY bead.
	PS.border(PS.ALL, PS.ALL, 0);
	// Turn on the border for the current bead.
	PS.border(x, y, 4);
	// Make that border green.
	PS.borderColor(x, y, PS.COLOR_GREEN);
};

// PS.keyDown controls what happens when you press a key.
PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";
	// If the spacebar is pressed...
	if (key === 32) {
		// Remove all of the glyphs.
		PS.glyph(PS.ALL, PS.ALL, 0);
	}
};
//#EDITOR-END
// Start the engine!
PS.start();
})();
