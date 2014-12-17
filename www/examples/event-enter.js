// PS.enter
// This event fires when the mouse moves into a bead.
(function() {
var PSoptions = {namespace:"event-enter", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 8, 4 );
	PS.statusText("PS.enter - Mouse over the beads.");
	// Dark cyan border
	PS.borderColor(PS.ALL, PS.ALL, 0x00DDDD);
	PS.border(PS.ALL, PS.ALL, 5);
	// Round beads
	PS.radius(PS.ALL, PS.ALL, 50);
};

// PS.enter ( x, y, button, data, options )
// Called when the mouse/touch enters a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
PS.enter = function( x, y, data, options ) {
	"use strict";
	PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );
	// Color the hovered bead cyan
	PS.color(x, y, PS.COLOR_CYAN);
	// Remove all old glyphs
	PS.glyph(PS.ALL, PS.ALL, 0);
	// Put a glyph on the hovered bead
	PS.glyph(x, y, "@");
};
//#EDITOR-END
// Start the engine!
PS.start();
})();
