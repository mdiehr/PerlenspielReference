<?php

class Section {
	private $title;
	private $text;
	private $path;

	public function Section($title, $text) {
		$this->path = './examples';
		$this->title = $title;
		$this->text = $text;
	}

	public function getHtml()
	{
		global $EXAMPLE_PATH;
		$html = '';
		
		if($this->title !== null) {
			$html .= '<h2>'.$this->title.'</h2>';
		}
		$html .= '<p>'.implode('</p><p>', $this->text).'</p>';

		return $html;
	}
}

?>