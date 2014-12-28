/*	PS Reloader
	by Mark Diehr - mdiehr@gmail.com
*/

var PerlenspielReloader;

var ModulePSReload = function (my) {
    "use strict";

	my._onInit(function(spec) {
		// Disable auto-starting of instances
		PERLENSPIEL.EnableAutoStart(false);
	});

	my._onStart(function(spec, instance) {
		// console.info('Starting perlenspiel instance ' + spec.namespace);
		PerlenspielReloader.register(spec.namespace, instance);
	});

	window.addEventListener( "load", function() {
        my._onWindowLoad();
    }, false );

    my._onWindowLoad = function() {
    	PerlenspielReloader.attach();
    }

    // Init once
	PerlenspielReloader = PerlenspielReloader || {
		containerClass	: "container",
		prefixEdit		: "editor-",
		postfixOuter	: "-outer",
		sourceFolder	: "./examples/",
		sourceBegin		: "//#EDITOR-BEGIN",
		sourceEnd		: "//#EDITOR-END",
		codePrefix		: '(function() {\nvar PS = PERLENSPIEL.Create({namespace:"#SOURCEID#", requireEvents:false, forceMulti:true});\n',
		codePostfix		: '\nPS.start();\n})();\n',
		examples		: {},
		codemirror		: null,
		attached		: false,

		attach : function() {
			if (this.attached)
				return;
			this.attached = true;
			var elements = document.getElementsByClassName(this.containerClass);
			// Loop in reverse order so that the top instance is the last one to load/highlight
			for (var i = elements.length - 1; i >= 0; --i) {
				var scriptName = elements[i].attributes.name.value;
				this.load(scriptName);
			}
			// Array.prototype.forEach.call(elements, function(element){
			// 	var scriptName = element.attributes.name.value;
			// 	this.load(scriptName)
			// }.bind(this));
		},

		getFilePath : function(sourceId) {
			return (this.sourceFolder + sourceId + ".js");
		},

		register : function(sourceId, PSInstance) {
			if (!this.examples[sourceId])
				this.examples[sourceId] = {};
			this.examples[sourceId].sourceId = sourceId;
			this.examples[sourceId].PSInstance = PSInstance;
		},

		load : function(sourceId) {
			this.loadExample(sourceId);
			this.loadEditor(sourceId);
		},

		loadExample : function(sourceId) {
			// Example container
			var containerId = this.containerClass + '-' + sourceId;
			var container = document.getElementById(containerId);
			// Code editor
			var editorId = this.prefixEdit + sourceId;
			var editorDiv = document.createElement('div');
			editorDiv.className = 'editor';
			editorDiv.id = editorId;
			// Perlenspiel container
			var gameOuter = document.createElement('div');
			gameOuter.id = sourceId;
			// Perlenspiel source
			var gameSrc = document.createElement('script');
			gameSrc.src= this.getFilePath(sourceId);
			gameSrc.type= 'text/javascript';
			// Add to example container
			container.appendChild(editorDiv);
			container.appendChild(gameOuter);
			container.appendChild(gameSrc);
			this.makeReloadButton(sourceId);
		},

		makeReloadButton : function(sourceId) {
			var gameOuter = document.getElementById(sourceId);
			var reloadButton = document.createElement('img');
			reloadButton.src = './img/reload.png';
			reloadButton.className = "reload-button";
			reloadButton.addEventListener("click", this.onReloadClick.bind(this, sourceId));

			gameOuter.appendChild(reloadButton);
		},

		onReloadClick : function(sourceId) {
			var example = this.examples[sourceId];
			var editor = example.editor;
			var docText = editor.getValue();
			this.reloadCode(sourceId, docText)
		},

		loadEditor : function(sourceId) {
			var editorId = this.prefixEdit + sourceId;
			var processTextFunc = this.stripDocument.bind(this);
			var self = this;
			if (!this.examples[sourceId])
				this.examples[sourceId] = {};
			this.examples[sourceId].sourceId = sourceId;
			var example = this.examples[sourceId];
			var me = this;
			function onRequestLoaded() {
				var codeValue = processTextFunc(this.responseText);
				var editorNode = document.getElementById(editorId);
				me.examples[sourceId].editor = CodeMirror(editorNode, {
					value: codeValue,
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
					extraKeys: {"Ctrl-Y": function(cm) { me.onReloadClick(sourceId); },
								"Ctrl-Q": function(cm) { cm.foldCode(cm.getCursor()); }}
				});
			}

			// Load the .js file dynamically ( https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest )
			var oReq = new XMLHttpRequest();
			oReq.onload = onRequestLoaded;
			oReq.open("get", this.getFilePath(sourceId), true);
			oReq.send();
		},

		reloadCode : function(sourceId, code) {
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
		},

		// Reduces a document text to the section between the beginning and ending markers
		stripDocument : function(text) {
			text = text.replace(/\r/g, "");	// Remove \r so that only \n is in the document
			var begin = text.indexOf(this.sourceBegin);
			var end = text.indexOf(this.sourceEnd);
			if (begin !== -1 && end !== -1) {
				return text.slice(begin + this.sourceBegin.length + 1, end - 1);
			}
			return text;
		}
	}
};

// Register with global PERLENSPIEL manager
PERLENSPIEL.RegisterModule(ModulePSReload);
