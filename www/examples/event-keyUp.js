// PS.keyUp
// This event fires once when a key on the keyboard is released.
(function() {
var PSoptions = {namespace:"event-keyUp", requireEvents:false, forceMulti:true};
var PS = PERLENSPIEL.Create(PSoptions);
//#EDITOR-BEGIN
// game.js for Perlenspiel 3.2
var heldKeys = [];

PS.init = function( system, options ) {
	"use strict";
	PS.gridSize( 2, 1 );
	PS.statusText("PS.keyUp - Hold and release keys.");
	PS.glyph(0, 0, "☞");
	PS.glyph(1, 0, "⌨");
	PS.border(PS.ALL, PS.ALL, 8);
	PS.color(PS.ALL, PS.ALL, 0xABABAB);
	PS.borderColor(PS.ALL, PS.ALL, 0xDDAAAA);
};

// PS.keyUp ( key, shift, ctrl, options )
// Called when a key on the keyboard is released
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F12
// [shift] = true if shift key is held down, false otherwise
// [ctrl] = true if control key is held down, false otherwise
PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict";
	// Remove from list of held keys
	heldKeys[key] = false;
	displayHeldKeys();
};

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";
	// Add to list of held keys
	heldKeys[key] = true;
	displayHeldKeys();
};

// Prints a list of keys that are held down
function displayHeldKeys() {
	PS.debugClear();
	
	// Count how many keys are held down
	var count = 0;

	PS.debug("Held keys:");

	// Loop through the keys that are held down
	for (var key in heldKeys) {
		if (heldKeys[key] === true) {
			count++;
			PS.debug(" " + key);
		}
	}

	if (count === 0) {
		PS.borderColor(PS.ALL, PS.ALL, 0xDDAAAA);
	} else {
		PS.borderColor(PS.ALL, PS.ALL, 0xAADDAA);
	}
}
//#EDITOR-END
// Start the engine!
PS.start();
})();
