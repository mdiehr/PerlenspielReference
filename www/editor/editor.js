// CodeMirror Instance
(function() {
	var me = this;
	var editorId = "code";
	var gameId = "perlenspiel-outer";
	var codeURL = "./editor/game.js";
	var editor = null;
	
	function createEditor(codeId, codeValue) {
		var codeTextArea = document.getElementById(codeId);
		return CodeMirror.fromTextArea(codeTextArea, {
			//value: codeValue,
			theme: "monokai",
			mode: "javascript",
			lineNumbers: true,
			matchBrackets: true,
			styleActiveLine: true,
			lineWrapping: true,
			foldGutter: true,
			indentWithTabs: true,
			gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
			lint: { predef: ["PS"] },
			extraKeys:
				{
					"Ctrl-Y": function(cm) { onReloadClick(gameId); },
					"Ctrl-Q": function(cm) { cm.foldCode(cm.getCursor()); }
				}
		});
	}
	
	var makeReloadButton =  function(perlenspielId) {
		var gameOuter = document.getElementById(perlenspielId);
		var reloadButton = document.createElement('img');
		reloadButton.src = './img/reload.png';
		reloadButton.className = "reload-button";
		reloadButton.addEventListener("click", onReloadClick.bind(this, perlenspielId));
		gameOuter.appendChild(reloadButton);
	};

	var onReloadClick = function(sourceId) {
		var docText = editor.getValue();
		reloadCode(sourceId, docText)
	};
	
	var reloadCode = function(sourceId, code) {
		console.log("reloadCode: " + sourceId);
		/*
		this.examples[sourceId].PSInstance.shutdown();
		this.examples[sourceId].PSInstance = null;
		// console.info("Reloading '" + sourceId + ".js'");
		code = this.codePrefix + code + this.codePostfix;
		var re = new RegExp('#SOURCEID#', 'g');
		code = code.replace(re, sourceId);
		// Empty out the perlenspiel container
		var gameId = sourceId + this.postfixOuter;
		var gameOuter = document.getElementById(gameId);
		// Reset outer div to default state
		if(gameOuter) {
			while (gameOuter.firstChild)
				gameOuter.removeChild(gameOuter.firstChild);
			gameOuter.id = sourceId;
		}
		this.makeReloadButton(sourceId);
		// evaluate code - makes it run in the perlenspiel container
		eval(code);
		*/
	};
	
	makeReloadButton(gameId);
	editor = createEditor(editorId);
	
	/*
	function onRequestLoaded() {
		console.log("Code loaded!");
		var codeValue = this.responseText;
		CreateEditor(editorId, codeValue);
	}
	*/
	
	/*
	console.log("Loading code from " + codeURL);
	// Load the .js file dynamically ( https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest )
	var oReq = new XMLHttpRequest();
	oReq.onload = onRequestLoaded;
	oReq.open("get", codeURL, true);
	oReq.send();
	*/
})();
