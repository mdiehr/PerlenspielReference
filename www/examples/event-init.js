// PS.init
// The entry point for every Perlenspiel program. Use this event to initialize the grid.
(function() {
var PSoptions = {namespace:"event-init", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 5, 1 );
	PS.statusText("PS.init");
	PS.glyph(0, 0, "H");
	PS.glyph(1, 0, "e");
	PS.glyph(2, 0, "l");
	PS.glyph(3, 0, "l");
	PS.glyph(4, 0, "o");
};
//#EDITOR-END
// Start the engine!
PS.start();
})();
