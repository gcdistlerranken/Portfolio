$(document).ready(function () {
    $("#validationForm").validate({
        rules: {
            ssn: {
                ssnValidation: true
            },
            fname: {
                firstNameValidation: true,
                maxlength: 25
            },
            lname: {
                lastNameValidation: true,
                maxlength: 25
            },
            address: {
                addressValidation: true,
                maxlength: 75
            },
            city: {
                cityValidation: true,
                maxlength: 25
            },
            state: "required",
            zip: {
                zipCodeValidation: true
            },
            phone: {
                phoneNumberValidation: true
            },
            gender: {
                required: true,
                minlength: 1
            },
            age: {
                required: true,
                minlength: 1
            },
            reason: {
                required: true,
                minlength: 1
            },
        },
        messgaes: {
            ssn: "SSN Required",
            fname: "First Name Required",
            lname: "Last Name Required",
            address: "Address Required",
            city: "City Required",
            state: "State Selection Required",
            zip: "Zip Code Required",
            phone: "Phone Number Required",
            gender: "Gender Selection Required",
            age: "Age Selection Required",
            reason: "Reason Selection Required"
        }

    });
});

//$.validator.addMethod("ssnValidation", function (value, element) {
//    return this.optional(element) || /^\d{3}-\d{2}-\d{4}$/.test(value);
//}, "Must Be In nnn-nn-nnnn Format.");
//
//$.validator.addMethod("firstNameValidation", function (value, element) {
//    return this.optional(element) || /^([A-Za-z]){1,25}$/.test(value);
//}, "Must Be Alpha Only.");
//
//$.validator.addMethod("lastNameValidation", function (value, element) {
//    return this.optional(element) || /^([A-Za-z][A-Za-z'-01]+){1,25}$/.test(value);
//}, "Must Start With Alpha. Can include 0 or 1, ' and/or -.");
//
//$.validator.addMethod("addressValidation", function (value, element) {
//    return this.optional(element) || /^([01][A-Za-z'-01]+){1,75}$/.test(value);
//}, "Please Enter A Valid Address.");
//
//$.validator.addMethod("cityValidation", function (value, element) {
//    return this.optional(element) || /^([A-Za-z]){1,25}$/.test(value);
//}, "Please Enter A Valid City.");
//
//$.validator.addMethod("zipCodeValidation", function (value, element) {
//    return this.optional(element) || /^\d{5}(-\d{4})?$/.test(value);
//}, "Must be formatted nnnnn or nnnnn-nnnn only.");
//
//$.validator.addMethod("phoneNumberValidation", function (phone_number, element) {
//    phone_number = phone_number.replace(/\s+/g, "");
//    return this.optional(element) || phone_number.length > 9 &&
//        phone_number.match(/^\d{3}-\d{3}-\d{4}$/);
//}, "# must be in nnn-nnn-nnnn format.");