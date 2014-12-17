<?php include 'page.php'; ?>
<?php
	$page = 'index';
	if(isset($_GET[$PAGE_PROPERTY]))
		$page = $_GET[$PAGE_PROPERTY];
	displayPage("Perlenspiel Reference", getExamples($page));
?>