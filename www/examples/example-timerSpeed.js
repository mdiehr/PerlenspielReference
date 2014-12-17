// Timer Speed
// You can adjust the speed of a timer by stopping and restarting it.
(function() {
var PSoptions = {namespace:"example-timerSpeed", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
// Remember the width of the grid
var width = 4;
// The position of the red dot
var x = 0;
// Timer speed
var timerSpeed = 15;
// Timer ID
var timerID;
// Colors
var bgColor = 0x336699;
var fgColor = PS.COLOR_WHITE;

PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( width, 2 );
	PS.statusText("Timer Speed");
	PS.statusColor(fgColor);
	PS.border(PS.ALL, PS.ALL, 0);
	PS.radius(PS.ALL, PS.ALL, 10);
	PS.gridColor(bgColor);

	// Buttons to increase and decrease the speed
	PS.glyph(0, 1, "^");
	PS.exec(0, 1, function(){changeTimerSpeed(timerSpeed - 1); });
	PS.glyph(1, 1, "v");
	PS.exec(1, 1, function(){changeTimerSpeed(timerSpeed + 1); });

	// Start timer
	timerID = PS.timerStart(timerSpeed, update);

	// Draw once so it's never not on the screen
	draw();
};

function changeTimerSpeed(newSpeed) {
	timerSpeed = Math.max(1, newSpeed);
	PS.timerStop(timerID);
	timerID = PS.timerStart(timerSpeed, update);
}

function draw() {
	PS.color(PS.ALL, PS.ALL, bgColor);
	PS.color(x, 0, fgColor);
}

function update() {
	x = (x + 1) % width;
	draw();
}

//#EDITOR-END
// Start the engine!
PS.start();
})();
