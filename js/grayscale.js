/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500);
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $(this).closest('.collapse').collapse('toggle');
});

$('#timeline-plus').click(function () {
    var timelineDisable = $('.timeline-disable');
    var timelineEnable = $('.timeline-enable');
    if (timelineDisable.length != 0) {
        $(this).text('Voir Moins');
        timelineDisable.each( function () {
            $(this).removeClass("timeline-disable").addClass("timeline-enable");
        });
    } else {
        $(this).text('Voir Plus');
        timelineEnable.each( function () {
            $(this).removeClass("timeline-enable").addClass("timeline-disable");
        });
    }
});