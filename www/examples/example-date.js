// PS.date and PS.elapsed
// PS.date returns an object representing the current date & time.
// PS.elapsed returns the number of ms that have elapsed since the engine was initialized.
(function() {
var PSoptions = {namespace:"example-date", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
// The GAME object holds all game-specific data and functions

var GAME = {
	// Constants
	WIDTH : 31,
	HEIGHT : 31,
	CENTER : {x:15, y:15},
	BGCOLOR : 0xEEEEEE,
	// Variables
	hands : []
};

PS.init = function( system, options ) {
	"use strict";

	PS.gridSize( GAME.WIDTH, GAME.HEIGHT );
	PS.border(PS.ALL, PS.ALL, 0);

	GAME.hands.push(new Hand('seconds', 60, 15, PS.COLOR_BLACK));
	GAME.hands.push(new Hand('minutes', 60, 15, PS.COLOR_BLUE));
	GAME.hands.push(new Hand('hours', 12, 8, PS.COLOR_GREEN));

	// Update 60 times per second
	PS.timerStart(1, tick);

	// Run tick once so that the board doesn't wait too long to update
	tick();
};

function tick() {
	"use strict";
	var d = PS.date();
	var dateString = ""+d.year+" "+d.dayName+", "+d.monthName+" "+d.date+", "+d.hours+":"+d.minutes+":"+d.seconds;
	PS.statusText(dateString);

	// Clear board
	PS.color(PS.ALL, PS.ALL, GAME.BGCOLOR);

	// ms for time elapsed
	drawText(GAME.CENTER.x - 3, GAME.CENTER.y-1, PS.elapsed().toString() + "ms");

	// Draw clock hands
	for (var i = 0, imax = GAME.hands.length; i < imax; ++i) {
		GAME.hands[i].update(d);
	}
}

// Draws a line given the start and end location
function drawLine(x1, y1, x2, y2, color) {
	"use strict";
	var coords = PS.line(x1, y1, x2, y2);
	// PS.line does not include the start location
	PS.color(x1, y1, color);
	for (var i = 0; i < coords.length; ++i) {
		var coord = coords[i];
		PS.color(coord[0], coord[1], color);
	}
}

function drawText(x, y, text) {
	for (var i = 0, imax = text.length; i < imax; ++i) {
		PS.glyph(x+i, y, text[i]);
	}
}

// Hand object for the clock
function Hand(property, propertyMax, length, color) {
	"use strict";

	this.angle = 0;
	this.length = length;
	this.color = color;
	this.property = property;
	this.propertyMax = propertyMax;

	this.update = function(date) {
		var x, y, value;
		value = (date[this.property] % this.propertyMax) / this.propertyMax;
		this.angle = -(value * 2 * Math.PI);
		// Note: Flip the coordinates over the line where y==x
		y = -Math.round(this.length * Math.cos(this.angle));
		x = -Math.round(this.length * Math.sin(this.angle));
		drawLine(GAME.CENTER.x, GAME.CENTER.y,
			GAME.CENTER.x + x, GAME.CENTER.y + y,
			this.color);
	};
}
//#EDITOR-END
// Start the engine!
PS.start();
})();
