$(document).ready(function () {
    // Add resize icons to all box headers
    $(".box_heading").append('<img src="common/img/min.png"/>');
    // Minimise the appropriate content at page load
    $(".start_minimised").each(min_max);
    // Make sure all content_boxes are floating the right way
    column_align();
    $(window).on("resize", function () {
        column_align();
    });
    // When the user clicks on the minimise button of a content box, hide the box's content
    $(".box_heading").on("click", min_max);
});

// Toggle the state of a content box
function min_max() {
    // if the content box is currently minimised
    if ($(this).siblings(".content").css("display") == "none") {
        // embiggen, remove rounded corners at bottom of header
        $(this).css("border-bottom-left-radius", 0);
        $(this).css("border-bottom-right-radius", 0);
        // show the content
        $(this)
            .siblings(".content")
            .slideDown({
                duration: 500,
                // Make sure all content_boxes are floating the right way
                step: function () {
                    column_align();
                },
                // change the icon in the header to minimise
                complete: function () {
                    $(this).siblings(".box_heading").find("img").attr("src", "common/img/min.png");
                },
            });
    }
    // if the content box is currently maximised
    else {
        // emsmallen, hide the content
        $(this)
            .siblings(".content")
            .slideUp({
                duration: 500,
                // Make sure all content_boxes are floating the right way
                step: function () {
                    column_align();
                },
                // change the icon in the header to maximise
                complete: function () {
                    $(this).siblings(".box_heading").css("border-bottom-left-radius", "0.3cm");
                    $(this).siblings(".box_heading").css("border-bottom-right-radius", "0.3cm");
                    $(this).siblings(".box_heading").find("img").attr("src", "common/img/max.png");
                },
            });
    }
}

// Prevents gaps between content
function column_align() {
    if ($(window).width() <= 1100) {
        return;
    }
    $(".column").each(function () {
        if ($(this).offset().left < 500) {
            $(this).css("float", "left");
        } else {
            $(this).css("float", "right");
        }
    });
}
