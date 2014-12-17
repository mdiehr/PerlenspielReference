// PS.timerStart
// Timers allow programs to do things without user input.
// A timer will continue to run until stopped.
(function() {
var PSoptions = {namespace:"example-timer", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
// Remember the width of the grid
var width = 16;
// The position of the red dot
var x = 0;
// Colors
var bgColor = PS.COLOR_BLACK;
var fgColor = PS.COLOR_RED;

PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( width, 1 );
	PS.statusText("Timer");
	PS.statusColor(fgColor);
	PS.border(PS.ALL, PS.ALL, 0);
	PS.radius(PS.ALL, PS.ALL, 50);
	//PS.fade(PS.ALL, PS.ALL, 15, {rgb:0xFF0000});
	PS.gridColor(bgColor);
	PS.timerStart(4, update);
	draw();
};

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
