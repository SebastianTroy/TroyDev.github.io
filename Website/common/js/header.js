$(document).ready(function() {
	// Set header to fixed
	$('#header_container').css("position", "fixed");
	// Make sure header and menu buttons correct size
	calculate_header_size();
	// This function will be executed when the user resizes the page.
	$(window).on("resize", function() {
		// Make sure header is correct size
		calculate_header_size();
	});
	// This function will be executed when the user scrolls the page.
	$(window).on("scroll", function() {
		adjust_header();
	});
	// This code checks which tab is active and sets its background colour
	var path = window.location.pathname.split("/").pop();
	switch (path) {
		case "" :
		case "index.php" :
			$('.nav_menu_button.home').css('background-color', '#aaa271');
			break;
		case "about-me.php" :
			$('.nav_menu_button.about').css('background-color', '#aaa271');
			break;
		case "projects.php" :
			$('.nav_menu_button.projects').css('background-color', '#aaa271');
			break;
		case "contact.php" :
			$('.nav_menu_button.contact').css('background-color', '#aaa271');
			break;
	}

	// When a menu button is pressed, highlight it & save its index in a cookie so it can be highlighted on the next page
	$('.nav_menu_button').on("click", function() {
		$('.nav_menu_button').css('background-color', '#C6C0A0');
		$(this).css('background-color', '#AAA271');
		$.cookie('tab', $(this).index(), {
			path : '/'
		});
	});
});

// Calculate size header should be based on screen width
function calculate_header_size() {
	var text_size = Math.min(($(window).width() / 6), 100) + "%";
	$('#header_container').css("font-size", text_size);
	adjust_page_padding();
}

// Make sure padding at top of page matches height of header
function adjust_page_padding() {
	$('#page_container').css("margin-top", function() {
		return $('#header_container').outerHeight();
	});
}

function adjust_header() {
	// Once the user has scrolled down, hide the title of the header
	if ($('.title').css('display') != 'none' && $(window).scrollTop() > 0) {
		$('.title').slideUp({
			duration : 200,
			step : function() {
				adjust_page_padding();
			}
		});
		// If the user has scrolled back to the top, and the page is still
		// taller than the screen
	} else if ($(window).scrollTop() == 0 && $('#master_container').height() > $(window).height()) {
		$('.title').slideDown({
			duration : 200,
			step : function() {
				adjust_page_padding();
			}
		});
	}
}