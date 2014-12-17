// PS.exit
// This event fires when the mouse moves off of a bead.
(function() {
var PSoptions = {namespace:"event-exit", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 8, 4 );
	PS.border(PS.ALL, PS.ALL, 1);
	PS.borderColor(PS.ALL, PS.ALL, PS.COLOR_RED);
	PS.statusText("PS.exit - Mouse over the beads.");
};

// PS.exit ( x, y, data, options )
// Called when the mouse cursor/touch exits a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
PS.exit = function( x, y, data, options ) {
	"use strict";
	PS.color(x, y, PS.COLOR_YELLOW);
	PS.border(x, y, 0);
};

PS.enter = function( x, y, data, options ) {
	"use strict";
	PS.color(x, y, PS.COLOR_ORANGE);
	PS.border(x, y, 8);
};
//#EDITOR-END
// Start the engine!
PS.start();
})();
