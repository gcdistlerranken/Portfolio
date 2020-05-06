$(document).ready(function () {
    $("a").click(function () {

        $(this).prev().toggleClass("hide");

        if ($(this).prev().hasClass("hide")) {

            $(this).text("Show more");

        } else {

            $(this).text("Show less");

        }

    });

});
