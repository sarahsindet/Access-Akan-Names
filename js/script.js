function submition(){
    alert("See your Akan name??");
}
//*Declairing Variables*//
var day = document.getElementById("day").value;
var DD = parseInt(day);
var month = document.getElementById("month").value;
var MM = parseInt(month);
var year = document.getElementById("year").value;
var YY = parseInt(year.toString().slice(2, 4));
//  var CC=(YY-1)/100+1;
var cc = Math.ceil(year / 100)
/* the formula */
var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;