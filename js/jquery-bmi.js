var minHeight = 12;
var maxHeight = 96;
var minWeight = 1;
var maxWeight = 777;
var maxUnder = 18.5;
var maxOptimal = 25.0;
var maxOver = 30.0;

$(document).ready(function () {

    $("#calculate").click(function (e) {
        var d = $("#height").val();
        if (d == "") {
            $("span#dmsg").html("Numeric Input Required!");
            setTimeout(function () {
                $("span#dmsg").html("*");
            }, 3000);
            e.preventDefault();
        } else if (d != "" && (d < minHeight || d > maxHeight)) {
            $("span#dmsg").html("Height Input Out-of-Range");
            setTimeout(function () {
                $("span#dmsg").html("*");
            }, 3000);
            e.preventDefault();
        } else {
            $("span#dmsg").html("*");
        }

        var s = $("#weight").val();
        if (s == "") {
            $("span#smsg").html("Numeric Input Required!");
            setTimeout(function () {
                $("span#smsg").html("*");
            }, 3000);
            e.preventDefault();
        } else if (s != "" && (s < minWeight || s > maxWeight)) {
            $("span#smsg").html("Weight Input Out-of-Range");
            setTimeout(function () {
                $("span#smsg").html("*");
            }, 3000);
            e.preventDefault();
        } else {
            $("span#smsg").html("*");
        }

        var calculateBMI = ((s / Math.pow(d, 2)) * 703).toFixed(2);

        $("#bmiOutput").val(calculateBMI);
        if (calculateBMI < maxUnder) {
            s = "Underweight";
        } else if (calculateBMI < maxOptimal) {
            s = "Optimal Weight";
        } else if (calculateBMI < maxOver) {
            s = "Over Weight";
        } else if (calculateBMI > maxOver) {
            s = "Obese";
        }
        $("#bmiStatus").val(s);
    });

    $("#reset").click(function () {
        $("#height").val("");
        $("#weight").val("");
        $("#bmiOutput").val("");
        $("#bmiStatus").val("");

        $("span#dmsg").html("*");
        $("span#smsg").html("*");

        $("#height").focus();
    })

});
