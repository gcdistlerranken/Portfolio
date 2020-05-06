var isValid = true;
var regexpattern = "";
var string = "";

var $ = function (id) {
    return document.getElementById(id);
}

var validateForm = function () {
    var ssn = $("ssn").value;
    var fname = $("fname").value;
    var lname = $("lname").value;
    var address = $("address").value;
    var city = $("city").value;
    var state = $("state").value;
    var zip = $("zip").value;
    var phone = $("phone").value;
    var gender;
    var age;
    var reason;

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

    $("entries").innerHTML = ("The current values are:\n <br>" + string);
};

function validateSSN(s) {
    if (s == "") {
        $("ssn_error").firstChild.nodeValue =
            "SSN Required.";
        isValid = false;
    } else {
        regexpattern = /^\d{3}-\d{2}-\d{4}$/;

        if (!s.match(regexpattern)) {
            $("ssn_error").firstChild.nodeValue =
                "SSN Must Be In nnn-nn-nnnn Format.";
            isValid = false;
        } else {
            $("ssn_error").firstChild.nodeValue = "";
            string += "Social Security Number:  " + s + "\n <br>";
        }
    }
}


function validateFirstName(f) {
    if (f.trim() == "") {
        $("fname_error").firstChild.nodeValue =
            "First Name Required.";
        isValid = false;
    } else {
        regexpattern = /^([A-Za-z]){1,25}$/;

        if (!f.match(regexpattern)) {
            $("fname_error").firstChild.nodeValue =
                "First Name Must Be Alpha Only.";
            isValid = false;
        } else {
            $("fname_error").firstChild.nodeValue = "";
            string += "First Name: " + f + "\n <br>";
        }
    }
}

function validateLastName(l) {
    if (l.trim() == "") {
        $("lname_error").firstChild.nodeValue =
            "Last Name Required.";
        isValid = false;
    } else {
        regexpattern = /^([A-Za-z][A-Za-z'-01]+){1,25}$/;

        if (!l.match(regexpattern)) {
            $("lname_error").firstChild.nodeValue =
                "Last Name Must Start With Alpha. Can include 0 or 1, ' and/or -.";
            isValid = false;
        } else {
            $("lname_error").firstChild.nodeValue = "";
            string += "Last Name: " + l + "\n <br>";
        }
    }
}

function validateAddress(a) {
    if (a.trim() == "") {
        $("address_error").firstChild.nodeValue =
            "Address Required";
        isValid = false;
    } else {
        $("address_error").firstChild.nodeValue = "";
        string += "Address: " + a + "\n <br>";
    }
}

function validateCity(c) {
    if (c.trim() == "") {
        $("city_error").firstChild.nodeValue =
            "City Required";
        isValid = false;
    } else {
        $("city_error").firstChild.nodeValue = "";
        string += "City: " + c + "\n <br>";
    }
}

function validateState(s) {
    if ((s == "Please Select Your State:") || (s == "")) {
        $("state_error").firstChild.nodeValue =
            "State Selection Required.";
        isValid = false;
    } else {
        $("state_error").firstChild.nodeValue = "";
        string += "State: " + s + "\n <br>";
    }
}


function validateZip(z) {
    if (z.trim() == "") {
        $("zip_error").firstChild.nodeValue =
            "Zip Code Required.";
        isValid = false;
    } else {
        regexpattern = /^\d{5}([\-]\d{4})?$/;

        if (!z.match(regexpattern)) {
            $("zip_error").firstChild.nodeValue =
                "Zip Code nnnnn or nnnnn-nnnn only.";
            isValid = false;
        } else {
            $("zip_error").firstChild.nodeValue = "";
            string += "Zip Code: " + z + "\n <br>";
        }
    }
}

function validatePhone(c) {
    if (c.trim() == "") {
        $("phone_error").firstChild.nodeValue =
            "Phone Number Required.";
        isValid = false;
    } else {
        regexpattern = /^\d{3}-\d{3}-\d{4}$/;

        if (!c.match(regexpattern)) {
            isValid = false;
            $("phone_error").firstChild.nodeValue =
                "# must be in nnn-nnn-nnnn format.";
        } else {
            $("phone_error").firstChild.nodeValue = "";
            string += "Phone Number:  " + c + "\n <br>";
        }
    }
}


function validateGender() {
    var els = document.getElementsByClassName("gen");
    var count = 0;

    //	alert("The value of els in the validateGender() function is: " + els.length)
    for (var i = 0; i < els.length; ++i) {
        if (els[i].checked) {
            ++count;
            break;
        }
    }

    //	alert("Count = " + count);
    if (count === 0) {
        $("gender_error").firstChild.nodeValue = "Gender Selection Required.";
        isValid = false;
    } else {
        var s = document.querySelector('input[name = "gender"]:checked').value;
        //		alert ("The checked one is: " + s);
        $("gender_error").firstChild.nodeValue = "";
        string += "Gender:  " +
            s.charAt(0).toUpperCase() + s.slice(1) + "\n <br>";
    }
}

function validateAge() {
    var els = document.getElementsByClassName('age');
    var count = 0;

    //	alert("The value of els in the validateEducation() function is: " + els.length)
    for (var i = 0; i < els.length; ++i) {
        if (els[i].checked) {
            ++count;
            break;
        }
    }

    //	alert("Count = " + count);
    if (count === 0) {
        $("age_error").firstChild.nodeValue = "Age Selection Required.";
        isValid = false;
    } else {
        var e = document.querySelector('input[name = "age"]:checked').value;
        //		alert ("The checked one is: " + e);
        $("age_error").firstChild.nodeValue = "";
        string += "Age:  " +
            e.charAt(0).toUpperCase() + e.slice(1) + "\n <br>";
    }
}

function validateReason() {
    var inputElems = document.getElementsByTagName("input");
    var count = 0;
    var choices = "";

    for (var i = 0; i < inputElems.length; ++i) {
        if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
            $("reason_error").firstChild.nodeValue = "";
            //			alert ("The value of inputElems[i].value is " + inputElems[i].value)
            choices += inputElems[i].value + " ";
            ++count;
        }
    }

    if (count == 0) {
        $("reason_error").firstChild.nodeValue =
            "Reason Selection Required.";
        isValid = false;
    } else {
        string += "Reason:  " + choices + "\n <br>";
    }
}

var clearEntries = function () {
    $("ssn").value = "";
    $("ssn_error").firstChild.nodeValue = "*";
    $("fname").value = "";
    $("fname_error").firstChild.nodeValue = "*";
    $("lname").value = "";
    $("lname_error").firstChild.nodeValue = "*";
    $("address").value = "";
    $("address_error").firstChild.nodeValue = "*";
    $("city").value = "";
    $("city_error").firstChild.nodeValue = "*";
    $("state").value = "";
    $("state_error").firstChild.nodeValue = "*";
    $("zip").value = "";
    $("zip_error").firstChild.nodeValue = "*";
    $("phone").value = "";
    $("phone_error").firstChild.nodeValue = "*";
    document.getElementsByClassName("gen").value = "";
    $("gender_error").firstChild.nodeValue = "*";
    document.getElementsByClassName("age").value = "";
    $("age_error").firstChild.nodeValue = "*";
    document.getElementsByTagName("input").value = "";
    $("reason_error").firstChild.nodeValue = "*";

    $("ssn").focus();
}

window.onload = function () {
    $("validate").onclick = validateForm;
    $("clear").onclick = clearEntries;
    $("ssn").focus();
};
