<?php include 'examples.php'; ?>
<?php
	$PAGE_PROPERTY = 'p';	// ?p=games

	function displayPage($pageName, $examples) {
		displayHTMLHeader($pageName);
		displayHeader($pageName);
		displayExamples($examples);
		displayFooter();
		displayHTMLFooter();
	}

	function displayNavigation() {
		global $PAGE_PROPERTY;
		$pages		= array('index', 'events', 'grid', 'beginner', 'advanced', 'template', 'games');
		$pageTitles	= array('Index', 'Events', 'Grid', 'Beginner', 'Advanced', 'Template', 'Games');
		
		echo '<p class="navigation">';
		for ($i = 0; $i < count($pages); $i++) {
			if ($i !== 0) {
				echo ' | ';
				echo '<a href="./?'.$PAGE_PROPERTY.'='.$pages[$i].'">'.$pageTitles[$i].'</a>';
			} else {
				echo '<a href="./">'.$pageTitles[$i].'</a>';
			}
		}
		echo '</p>';
	}

	function displayExamples($examples) {
		if ($examples === null) {
			echo '<p>This category does not exist.</p>';
			return;
		}

		// Print out all examples
		foreach ($examples as &$value) {
			echo $value->getHtml();
		}
		unset($value); // break the reference with the last element
	}

	function displayHeader($pageName) {
		echo '<h1><img class="header-logo" src="./img/ps-logo-med.png">'.$pageName.'</h1>';
		displayNavigation();
	}

	function displayFooter() {
		echo '<div class="floatClear"></div>';
		displayNavigation();
	}
?>

<?php
	function displayHTMLHeader($pageName) {
?>
		<html lang="en">
		<head>
			<title><?php echo "$pageName" ?></title>

			<!-- Perlenspiel HTML -->
			<meta charset="utf-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
			<meta name="description" content="Perlenspiel 3.2" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			<meta name="mobile-web-app-capable" content="yes" />

			<link rel="shortcut icon" href="./ps/img/favicon.png" />
			<link rel="apple-touch-icon" href="./ps/img/apple-touch-icon.png" />
			<link rel="apple-touch-icon-precomposed" href="./ps/img/apple-touch-icon.png" />
			<link rel="stylesheet" type="text/css" href="./ps/css/ps-style.css" />
			
			<script type="text/javascript" src="./ps/aq.min.js"></script>
			<script type="text/javascript" src="./ps/ps.js"></script>
			
			<script type="text/javascript" src="./ps/psReloader.js"></script>

			<!-- CodeMirror -->
			<script type="text/javascript" src="./codemirror/lib/codemirror.js"></script>
			<script type="text/javascript" src="./codemirror/mode/javascript.js"></script>
			<script type="text/javascript" src="./codemirror/addon/lint/lint.js"></script>
			<script type="text/javascript" src="./codemirror/addon/lint/javascript-lint.js"></script>
			<script type="text/javascript" src="./codemirror/addon/selection/active-line.js"></script>
			<script type="text/javascript" src="./codemirror/addon/edit/matchbrackets.js"></script>
			<script type="text/javascript" src="./codemirror/addon/fold/foldcode.js"></script>
			<script type="text/javascript" src="./codemirror/addon/fold/foldgutter.js"></script>
			<script type="text/javascript" src="./codemirror/addon/fold/brace-fold.js"></script>
			<script type="text/javascript" src="./codemirror/addon/fold/comment-fold.js"></script>
			<!-- JS Hint -->
			<script type="text/javascript" src="./lib/jshint.js"></script>

			<link rel="stylesheet" type="text/css" href="./codemirror/lib/codemirror.css" />
			<link rel="stylesheet" type="text/css" href="./codemirror/addon/fold/foldgutter.css" />
			<link rel="stylesheet" type="text/css" href="./codemirror/addon/lint/lint.css" />
			<link rel="stylesheet" type="text/css" href="./codemirror/theme/monokai.css" />
			
			<link rel="stylesheet" type="text/css" href="./css/examples.css">
		</head>
	<body>
<?php
	}
?>

<?php
	function displayHTMLFooter() {
?>
			</body>
		</html>
<?php
	}
?>