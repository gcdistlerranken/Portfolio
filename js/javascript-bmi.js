 var minHeight = 12;
 var maxHeight = 96;
 var minWeight = 1;
 var maxWeight = 777;
 var maxUnder = 18.5;
 var maxOptimal = 25.0;
 var maxOver = 30.0;

 var $ = function (id) {
     return document.getElementById(id);
 }

 var processEntries = function () {
     var height = parseFloat($("height").value);
     var weight = parseFloat($("weight").value);

     var validInput = true;

     if (isNaN(height)) {
         $("height").nextElementSibling.firstChild.nodeValue = "Numeric Input Required!";
         validInput = false;

         setTimeout(function () {
             $("height").nextElementSibling.firstChild.nodeValue = "*";
         }, 3000);
     } else if (height < minHeight || height > maxHeight) {
         $("height").nextElementSibling.firstChild.nodeValue = "Height input out-of-range";
         validInput = false;

         setTimeout(function () {
             $("height").nextElementSibling.firstChild.nodeValue = "*";
         }, 3000);
     }

     if (isNaN(weight)) {
         $("weight").nextElementSibling.firstChild.nodeValue = "Numeric Input Required!";
         validInput = false;

         setTimeout(function () {
             $("weight").nextElementSibling.firstChild.nodeValue = "*";
         }, 3000);
     } else if (weight < minWeight || weight > maxWeight) {
         $("weight").nextElementSibling.firstChild.nodeValue = "Weight input out-of-range";
         validInput = false;

         setTimeout(function () {
             $("weight").nextElementSibling.firstChild.nodeValue = "*";
         }, 3000);
     }

     if (validInput) {
         calculateBMI(height, weight);
     }
 };

 var calculateBMI = function (h, w) {
     var bmi = ((w / Math.pow(h, 2)) * 703).toFixed(2);
     $("bmi").value = bmi;
     calculateBMIStatus(bmi);
 };

 var calculateBMIStatus = function (bmi) {
     var s = "";

     if (bmi < maxUnder) {
         s = "Underweight";
     } else if (bmi < maxOptimal) {
         s = "Optimal Weight";
     } else if (bmi < maxOver) {
         s = "Over Weight";
     } else {
         s = "Obese";
     }

     $("bmiStatus").value = s;
 };

 var resetTheForm = function () {
     $("height").value = "";
     $("weight").value = "";
     $("bmi").value = "";
     $("bmiStatus").value = "";

     $("height").nextElementSibling.firstChild.nodeValue = "*";
     $("weight").nextElementSibling.firstChild.nodeValue = "*";

     $("height").focus();
 };

 var resetTheButtons = function () {
     $("height").value = "";
     $("weight").value = "";
 };

 window.onload = function () {
     $("calculate").onclick = processEntries;
     $("reset").onclick = resetTheForm;
     $("height").focus();

     $("height").ondblclick = resetTheButtons;
     $("weight").ondblclick = resetTheButtons;
 };
