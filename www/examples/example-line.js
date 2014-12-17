// PS.line
// Generate coordinates for lines. You can use these coordinates for drawing things or to plan out movement for objects in your program.
// The function returns an array of coordinates, excluding the starting location, but including the ending location.
// The return value for <code>PS.line(0, 0, 3, 3)</code> would be <code>[[1, 1], [2, 2], [3, 3]]</code>
(function() {
var PSoptions = {namespace:"example-line", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
// Draws a line given the start and end location
function drawLine(x1, y1, x2, y2, color) {
	var coords = PS.line(x1, y1, x2, y2);
	// PS.line does not include the start location
	PS.color(x1, y1, color);
	for (var i = 0; i < coords.length; ++i) {
		var coord = coords[i];
		PS.color(coord[0], coord[1], color);
	}
}

PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 7, 7 );
	PS.statusText("PS.line");
	// Draw three lines
	drawLine(0, 4, 4, 0, PS.COLOR_GREEN);
	drawLine(4, 0, 6, 6, PS.COLOR_RED);
	drawLine(6, 6, 1, 4, PS.COLOR_BLUE);
};
//#EDITOR-END
// Start the engine!
PS.start();
})();
