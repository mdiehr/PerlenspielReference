// PS.touch
// Capture clicks and touches in the grid.
// The variables x and y are filled out automatically with the coordinates of the click.
(function() {
var PSoptions = {namespace:"event-touch", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 3, 1 );
	PS.statusText("PS.touch - Click on the beads.");
	PS.glyph(PS.ALL, PS.ALL, "?");
	PS.borderColor(PS.ALL, PS.ALL, PS.COLOR_WHITE);
};

PS.touch = function( x, y, data, options ) {
	"use strict";
	if (PS.color(x, y) === PS.COLOR_RED) {
		PS.color(x, y, PS.COLOR_GREEN);
		PS.glyph(x, y, "☑")	;
	} else {
		PS.color(x, y, PS.COLOR_RED);
		PS.glyph(x, y, "☒")	;
	}
};
//#EDITOR-END
// Start the engine!
PS.start();
})();
