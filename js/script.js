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
var CC = Math.ceil(year / 100)
/* the formula */
var process = parseInt ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7; 
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
if (document.getElementById("gender").checked) {
    var gender = 'male';
  }
  else {
    var gender = 'female';
  }
  if (DD <= 0 || DD > 31) {
    alert("invalid date");
  }
  else if (MM <= 0 || MM > 12) {
    alert("invalid month");
  }
  else if (MM == 2 && DD > 29) {
    alert("invalid day of month")
  }