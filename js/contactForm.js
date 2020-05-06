var isValid = true;
var regexpattern = "";
var string = "";

$(document).ready(function () {

    $("#validate").click(function () {
        var ssn = $("#ssn").val();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var state = $("#state").val();
        var zip = $("#zip").val();
        var phone = $("#phone").val();

        validateSSN(ssn);
        validateFirstName(fname);
        validateLastName(lname);
        validateAddress(address);
        validateCity(city);
        validateState(state);
        validateZip(zip);
        validatePhone(phone);
        validateGender();
        validateAge();
        validateReason();

        $("#entries").html("The current values are:\n <br>" + string);
    });

    function validateSSN(s) {
        if (s == "") {
            $("#ssn_error").html("SSN Required.");
            isValid = false;
        } else {
            regexpattern = /^\d{3}-\d{2}-\d{4}$/;

            if (!s.match(regexpattern)) {
                $("#ssn_error").html("SSN Must Be In nnn-nn-nnnn Format.");
                isValid = false;
            } else {
                $("#ssn_error").html("*");
                string += "Social Security Number:  " + s + "\n <br>";
                isValid = true;
            }
        }
    }


    function validateFirstName(f) {
        if (f.trim() == "") {
            $("#fname_error").html("First Name Required.");
            isValid = false;
        } else {
            regexpattern = /^([A-Za-z]){1,25}$/;

            if (!f.match(regexpattern)) {
                $("#fname_error").html("First Name Must Be Alpha Only.");
                isValid = false;
            } else {
                $("#fname_error").html("*");
                string += "First Name: " + f + "\n <br>";
                isValid = true;
            }
        }
    }

    function validateLastName(l) {
        if (l.trim() == "") {
            $("#lname_error").html("Last Name Required.");
            isValid = false;
        } else {
            regexpattern = /^([A-Za-z][A-Za-z'-01]+){1,25}$/;

            if (!l.match(regexpattern)) {
                $("#lname_error").html("Last Name Must Start With Alpha. Can include 0 or 1, ' and/or -.");
                isValid = false;
            } else {
                $("#lname_error").html("*");
                string += "Last Name: " + l + "\n <br>";
                isValid = true;
            }
        }
    }

    function validateAddress(a) {
        if (a.trim() == "") {
            $("#address_error").html("Address Required");
            isValid = false;
        } else {
            if (a.trim().length > 75) {
                $("#address_error").html("75 chars max.");
                isValid = false;
            } else {
                $("#address_error").html("*");
                string += "Address: " + a + "\n <br>";
                isValid = true;
            }
        }
    }

    function validateCity(c) {
        if (c.trim() == "") {
            $("#city_error").html("City Required");
            isValid = false;
        } else {
            if (c.trim().length > 25) {
                $("#city_error").html("25 chars max.");
                isValid = false;
            } else {
                $("#city_error").html("");
                string += "City: " + c + "\n <br>";
                isValid = true;
            }
        }
    }

    function validateState(s) {
        if ((s == "Please Select Your State:") || (s == "")) {
            $("#state_error").html("State Selection Required.");
            isValid = false;
        } else {
            $("#state_error").html("*");
            string += "State: " + s + "\n <br>";
            isValid = true;
        }
    }


    function validateZip(z) {
        if (z.trim() == "") {
            $("#zip_error").html("Zip Code Required.");
            isValid = false;
        } else {
            regexpattern = /^\d{5}([\-]\d{4})?$/;

            if (!z.match(regexpattern)) {
                $("#zip_error").html("Zip Code nnnnn or nnnnn-nnnn only.");
                isValid = false;
            } else {
                $("#zip_error").html("*");
                string += "Zip Code: " + z + "\n <br>";
                isValid = true;
            }
        }
    }

    function validatePhone(p) {
        if (p.trim() == "") {
            $("#phone_error").html("Phone Number Required.");
            isValid = false;
        } else {
            regexpattern = /^\d{3}-\d{3}-\d{4}$/;

            if (!p.match(regexpattern)) {
                isValid = false;
                $("#phone_error").html("# must be in nnn-nnn-nnnn format.");
            } else {
                $("#phone_error").html("*");
                string += "Phone Number:  " + p + "\n <br>";
                isValid = true;
            }
        }
    }


    function validateGender() {
        if (!$("input[name='gender']:checked").length) {
            $("#gender_error").html("Gender Selection Required.");
            isValid = false;
        } else {
            var g = $("input[name='gender']:checked").val();
            $("#gender_error").html("*");
            string += "Gender:  " + g + "\n <br>";
            isValid = true;
        }
    }

    function validateAge() {
        if (!$("input[name='age']:checked").length) {
            $("#age_error").html("Age Selection Required.");
            isValid = false;
        } else {
            var a = $("input[name='age']:checked").val();
            $("#age_error").html("*");
            string += "Age:  " + a + "\n <br>";
            isValid = true;
        }
    }

    function validateReason() {
        var inputElems = document.getElementsByTagName("input");
        var count = 0;
        var choices = "";

        for (var i = 0; i < inputElems.length; ++i) {
            if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
                $("#reason_error").html("*");
                //			alert ("The value of inputElems[i].value is " + inputElems[i].value)
                choices += inputElems[i].value + " ";
                ++count;
            }
        }

        if (count == 0) {
            $("#reason_error").html("Reason Selection Required.");
            isValid = false;
        } else {
            string += "Reason:  " + choices + "\n <br>";
        }
    }

    $("#clear").click(function () {
        $("#ssn").html("");
        $("#ssn_error").html("*");
        $("#fname").html("");
        $("#fname_error").html("*");
        $("#lname").html("");
        $("#lname_error").html("*");
        $("#address").html("");
        $("#address_error").html("*");
        $("#city").html("");
        $("#city_error").html("*");
        $("#state").html("");
        $("#state_error").html("*");
        $("#zip").html("");
        $("#zip_error").html("*");
        $("#phone").html("");
        $("#phone_error").html("*");
        $('.gen').prop('checked', false);
        $("#gender_error").html("*");
        $('.age').prop('checked', false);
        $("#age_error").html("*");
        $(".reason").prop('checked', false);
        $("#reason_error").html("*");

        $("#entries").html("");

        $("#ssn").focus();

    })

});
