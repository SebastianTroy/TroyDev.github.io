<?php
$PageTitle = "Who am I?";
function customCSSHeader() {
	?>
<!-- include css here, e.g. <link rel="stylesheet" type="text/css" href="css/stylesheet.css"> -->
<?php
}
function customJavascriptHeader() {
	?>
<!-- include css here, e.g. <link rel="stylesheet" type="text/css" href="css/stylesheet.css"> -->
<?php
}

include_once ('common/header.php');

include_once ('who-am-i/who-am-i.html');

include_once ('common/footer.php');
?>