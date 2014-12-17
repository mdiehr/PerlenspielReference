// PS.input
// This event fires when input from another device is received.
(function() {
var PSoptions = {namespace:"event-input", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
var GRID_W = 24;
var GRID_H = 9;
var scrollHeight = 3;
var cloudColor = PS.COLOR_WHITE;
var skyColor = 0x99AADD;

PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( GRID_W, GRID_H );
	PS.statusText("PS.input - Use the mouse wheel over the grid.");
	// Turn off borders
	PS.border(PS.ALL, PS.ALL, 0);

	// Set background color
	PS.gridColor(skyColor);
	PS.color(PS.ALL, PS.ALL, skyColor);

	// Rounded beads
	PS.radius(PS.ALL, PS.ALL, 20);

	// Clouds
	PS.color(PS.ALL, scrollHeight, cloudColor);
};

// PS.input ( sensors, options )
// Called when an input device event (other than mouse/touch/keyboard) is detected
// It doesn't have to do anything
// [sensors] = an object with sensor information; see documentation for details
PS.input = function( sensors, options ) {
	"use strict";
	// check for scroll wheel
	var device = sensors.wheel;
	if (device) {
		// You can uncomment this to view debugging information
		//PS.debug( "sensors.wheel = " + device + "\n" );
		if (device === PS.WHEEL_BACKWARD)
			scrollDown();
		else if (device === PS.WHEEL_FORWARD)
			scrollUp();
	}
};

function scrollUp() {
	// Go up if there is room
	if (scrollHeight > 0)
		scrollHeight -= 1;
	// Draw the clouds
	PS.color(PS.ALL, PS.ALL, skyColor);
	PS.color(PS.ALL, scrollHeight, cloudColor);}

function scrollDown() {
	// Go down if there is room
	if (scrollHeight < GRID_H - 1)
		scrollHeight += 1;
	// Draw the clouds
	PS.color(PS.ALL, PS.ALL, skyColor);
	PS.color(PS.ALL, scrollHeight, cloudColor);
}

//#EDITOR-END
// Start the engine!
PS.start();
})();
