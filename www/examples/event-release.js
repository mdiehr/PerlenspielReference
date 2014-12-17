// PS.release
// This event fires when the mouse button is released.
(function() {
var PSoptions = {namespace:"event-release", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 5, 1 );
	PS.statusText("PS.release");
	// Draw a word in the beads
	PS.glyph(0, 0, 0x24B8);	// C
	PS.glyph(1, 0, 0x24C1);	// L
	PS.glyph(2, 0, 0x24BE);	// I
	PS.glyph(3, 0, 0x24B8);	// C
	PS.glyph(4, 0, 0x24C0);	// K
	// Border starts out at width 0
	PS.border(PS.ALL, PS.ALL, 0);
};

// PS.release ( x, y, data, options )
// Called when the mouse button is released over a bead, or when a touch is lifted off a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
PS.release = function( x, y, data, options ) {
	"use strict";
	// Print out some debugging information about the mouse location
	PS.debug( "PS.release() @ " + x + ", " + y + "\n" );
	// Make the border there bigger
	var oldBorder = PS.border(x, y);
	PS.border(x, y, (oldBorder.width + 1));
};
//#EDITOR-END
// Start the engine!
PS.start();
})();
