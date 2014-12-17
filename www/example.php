<?php

class Example {
	private $script;
	private $title;
	private $text;
	private $path;
	private $className;

	public function Example($script, $className = '') {
		$this->path = './examples';
		$this->script = $script;
		$this->title = 'Unknown';
		$this->text = [];
		$this->className = $className;
		$this->loadFromFile();
	}

	private function loadFromFile() {
		$scriptHandle = false;
		if ($this->script !== null) {
			$scriptPath = ''.($this->path).'/'.($this->script).'.js';
			$scriptHandle = fopen($scriptPath, 'r');
		}

		if ($scriptHandle === false) {
			return;
		}

		// Get script information out of source code
		$line = fgets($scriptHandle);
		$counter = 0;
		// Continue as long as there are comments
		while (strpos($line, '//') === 0) {
			$displayLine = ltrim($line, '/ ');
			if($counter++ === 0)
				$this->title = $displayLine;
			else
				$this->text[] = $displayLine;
			// Next line
			$line = fgets($scriptHandle);
		}
		fclose($scriptHandle);
	}

	public function getHtml()
	{
		global $EXAMPLE_PATH;
		$html = '';
		
		// Get script information out of example object
		if($this->title !== null) {
			$html .= '<h2>'.$this->title.'</h2>';
		}
		$html .= '<p>'.implode('</p><p>', $this->text).'</p>';

		if ($this->script !== null) {
			$classList = "container $this->className";
			$html .= '<div class="'.$classList.'" id="container-'.$this->script.'" name="'.$this->script.'">';
			$html .= '</div>';
		}
		return $html;
	}
}

?>