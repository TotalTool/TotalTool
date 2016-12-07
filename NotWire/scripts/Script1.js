// JavaScript source code

$("#yellow").click(function () {
    $(".serviceIntro h1").css("color", "#ffb81c");
    $(".services-nav a.active").css("color", "#ffb81c");
    $(".service-nav a:before").css("background", "#ffb81c");
    $(".serviceMain h3").css("color", "#ffb81c");
    $(".serviceMain .col-lg-2 i").css("color", "#ffb81c");
    $(".serviceMain h5").css("color", "#ffb81c");
    $(".locationMain .feature-body h3").css("color", "#ffb81c");
    $(".locationMain").css("border-top", "1px solid #ffb81c");
    $(".locationIntro h1").css("color", "#ffb81c");
    $(".aboutIntro h1").css("color", "#ffb81c");
    $(".promoIntro h1").css("color", "#ffb81c");
    $(".promotionMain .featured").css("color", "#ffb81c");
    $(".promotionMain .ribbon").css("border", "42px solid #FFF");
    $(".promotionMain .ribbon").css("border-top", "0 solid");
    $(".promotionMain .ribbon").css("border-bottom", "35px solid rgba(0,0,0,0)");
    $(".promotionMain .boxTitle .title").css("color", "#ffb81c");
    $(".promotionMain .info").css("color", "#ffb81c");
    $(".promotionMain .triangle i").css("color", "#FFF");
    $(".contactMain .firstName span").css("background-color", "#ffb81c");
    $(".contactMain .lastName span").css("background-color", "#ffb81c");
    $(".contactMain .subject span").css("background-color", "#ffb81c");
    $(".contactMain .firstName span").css("color", "#FFF");
    $(".contactMain .lastName span").css("color", "#FFF");
    $(".contactMain .subject span").css("color", "#FFF");
    $(".contactMain .firstName span").css("border-bottom-color", "#ffb81c");
    $(".contactMain .firstName span").css("border-top-color", "#ffb81c");
    $(".contactMain .firstName span").css("border-left-color", "#ffb81c");
    $(".contactMain .lastName span").css("border-bottom-color", "#ffb81c");
    $(".contactMain .lastName span").css("border-top-color", "#ffb81c");
    $(".contactMain .lastName span").css("border-left-color", "#ffb81c");
    $(".contactMain .subject span").css("border-bottom-color", "#ffb81c");
    $(".contactMain .subject span").css("border-top-color", "#ffb81c");
    $(".contactMain .subject span").css("border-left-color", "#ffb81c");
    $(".contactMain .submit button").css("background-color", "#ffb81c");
    $(".contactMain .submit button").css("color", "#FFF");
    $(".contactMain .submit button").css("border-color", "#ffb81c");
    $(".about_home h4").css("color", "#ffb81c");
    $(".about_home h5").css("color", "#ffb81c");
    $(".services_home h4").css("color", "#ffb81c");
    $(".feature-group h3").css("color", "#ffb81c");
});

$("#smooth").click(function () {
    $(".sideWrapper").css("border-radius", "8px");
    $(".wrapper").css("border-radius", "9px");
});

$("#toTop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 500);
});

$("#hombre").click(function () {
    $(".serviceMain").css("background-color", "linear-gradient(to bottom, #0c1c8c 5%, #1b256f 100%)");
    $(".serviceMain").css("background", "linear-gradient(to bottom, #333 5%, #777 100%)");
});

$(".navListItem a").hover(function () {
    if (!$(this).siblings().hasClass("active")) {
        $(this).siblings(".underline").css("background-color", "rgba(255,184,28,0.6)");
    }
},
    function () {
       if (!$(this).siblings().hasClass("active")) {
            $(this).siblings(".underline").css("background-color", "rgba(12, 28, 140, 1)");
       }
    });



function init(elem, options) {
    elem.addClass('countdownHolder');

    // Creating the markup inside the container
    $.each(['Days', 'Hours', 'Minutes', 'Seconds'], function (i) {
        $('<span class="count' + this + '">').html(
            '<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>'
        ).appendTo(elem);

        if (this != "Seconds") {
            elem.append('<span class="countDiv countDiv' + i + '"></span>');
        }
    });

}

// Creates an animated transition between the two numbers
function switchDigit(position, number) {

    var digit = position.find('.digit')

    if (digit.is(':animated')) {
        return false;
    }

    if (position.data('digit') == number) {
        // We are already showing this number
        return false;
    }

    position.data('digit', number);

    var replacement = $('<div>', {
        'class': 'digit',
        css: {
            top: '-2.1em',
            opacity: 0
        },
        html: number
    });

    // The .static class is added when the animation
    // completes. This makes it run smoother.

    digit
        .before(replacement)
        .removeClass('static')
        .animate({ top: '2.5em', opacity: 0 }, 'fast', function () {
            digit.remove();
        })

    replacement
        .delay(100)
        .animate({ top: 0, opacity: 1 }, 'fast', function () {
            replacement.addClass('static');
        });
}

(function ($) {

    // Number of seconds in every time division
    var days = 24 * 60 * 60,
		hours = 60 * 60,
		minutes = 60;

    // Creating the plugin
    $.fn.countdown = function (prop) {

        var options = $.extend({
            callback: function () { },
            timestamp: 0
        }, prop);

        var left, d, h, m, s, positions;

        // Initialize the plugin
        init(this, options);

        positions = this.find('.position');

        (function tick() {

            // Time left
            left = Math.floor((options.timestamp - (new Date())) / 1000);

            if (left < 0) {
                left = 0;
            }

            // Number of days left
            d = Math.floor(left / days);
            updateDuo(0, 1, d);
            left -= d * days;

            // Number of hours left
            h = Math.floor(left / hours);
            updateDuo(2, 3, h);
            left -= h * hours;

            // Number of minutes left
            m = Math.floor(left / minutes);
            updateDuo(4, 5, m);
            left -= m * minutes;

            // Number of seconds left
            s = left;
            updateDuo(6, 7, s);

            // Calling an optional user supplied callback
            options.callback(d, h, m, s);

            // Scheduling another call of this function in 1s
            setTimeout(tick, 1000);
        })();

        // This function updates two digit positions at once
        function updateDuo(minor, major, value) {
            switchDigit(positions.eq(minor), Math.floor(value / 10) % 10);
            switchDigit(positions.eq(major), value % 10);
        }

        return this;
    };

    /* The two helper functions go here */
})(jQuery);



$(function () {

    var note = $('#note'),
		ts = new Date(2012, 0, 1),
		newYear = true;

    if ((new Date()) > ts) {
        // The new year is here! Count towards something else.
        // Notice the *1000 at the end - time must be in milliseconds
        ts = (new Date()).getTime() + 10 * 24 * 60 * 60 * 1000;
        newYear = false;
    }

    $('#countdown').countdown({
        timestamp: ts,
        callback: function (days, hours, minutes, seconds) {

            var message = "";

            message += days + " day" + (days == 1 ? '' : 's') + ", ";
            message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
            message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
            message += seconds + " second" + (seconds == 1 ? '' : 's') + " <br />";

            if (newYear) {
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }

            note.html(message);
        }
    });

});