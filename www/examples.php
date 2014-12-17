<?php
include 'example.php';
include 'section.php';

$error = new Section('Oops!', array('There are no examples in this category yet.'));
$desc = new Section(null, array('You can change the code in the editor and then click
on the "Reload" icon to test your modified code.'));

$library = array(
	  'index'	=> array( new Section('Welcome!', array(
		'Perlenspiel is a simple game engine that runs in almost any web browser.
		You can use it to make little simulations, toys, and games that fit into a 32x32 grid.
		Each square is called a "bead", and you have the ability to change their color, border, and text.'
		,'You can read more about Perlenspiel on its <a href="http://perlenspiel.org" target="_blank">home page</a>.'
		))
		, new Example('index-perlenspiel', 'big-editor')
		)
	, 'events'	=> array(
		  $desc
		, new Example('event-init')
		, new Example('event-touch')
		, new Example('event-release')
		, new Example('event-enter')
		, new Example('event-exit')
		, new Example('event-exitGrid')
		, new Example('event-keyDown')
		, new Example('event-keyUp')
		, new Example('event-input')
		)
	, 'grid'=> array(
		  $desc
		, new Example('grid-gridSize')
		)
	, 'beginner'=> array(
		  $desc
		, new Example('example-line')
		, new Example('example-timer')
		)
	, 'advanced'=> array(
		  $desc
		, new Example('example-arrayShuffle')
		, new Example('example-timerSpeed')
		)
	, 'template'	=> array(
		  $desc
		, new Example('template-perlenspiel', 'big-editor')
		)
	, 'games'	=> array(
		  $desc
		, new Example('example-lightsOut', 'big-editor')
		)
	);

function isJSFile($file) {
	return (strpos($file, '.js') >= 1);
}

function scanExamples() {
	$EXAMPLE_PATH = './examples';
	$files = scandir($EXAMPLE_PATH);
	$files = array_filter($files, isJSFile);
	return $files;
}

function getExamples($type) {
	if($type === 'all') {
		$files = scanExamples();
		$examples = [];
		foreach ($files as &$file) {
			$exampleName = rtrim($file, '.js');
			$examples[] = new Example($exampleName);
		}
		return $examples;
	} else {
		global $library;
		return $library[$type];
	}
}

?>