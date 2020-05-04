function submition() { 
    alert("See your Akanname now????");

//*Declairing Variables*// 
var day = document.getElementById("day").value;
  var dd = parseInt(day);
  var month = document.getElementById("month").value;
  var mm = parseInt(month);
  var year = document.getElementById("year").value;
  var yy = parseInt(year.toString().slice(2, 4));
  //  var cc=(yy-1)/100+1;
  var cc = Math.ceil(year / 100)
  /* the formula */
  var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var days= [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  if (document.getElementById("gender").checked) {
    var gender = 'male';
  }
  else {
    var gender = 'female';
  }
  if (dd <= 0 || dd > 31) {
    alert("invalid date");
  }
  else if (mm <= 0 || mm > 12) {
    alert("invalid month");
  }
  else if (mm == 2 && dd > 29) {
    alert("invalid day of month")
  }
else if (Math.floor(result) == 0 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on" + days[0] + "your Akan Name is " + maleNames[0]);
  }
  else if (Math.floor(result) == 1 || Math.floor(result) == -1 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on" + days[1] + "your Akan Name is " + maleNames[1]);
  }
  else if (Math.floor(result) == 2 || Math.floor(result) == -2 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on" + days[2] +"your Akan Name is " + maleNames[2]);
  }
  else if (Math.floor(result) == 3 || Math.floor(result) == -3 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on" + days[3] +"your Akan Name is " + maleNames[3]);
  }
  else if (Math.floor(result) == 4 || Math.floor(result) == -4 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on" + days[4] +"your Akan Name is " + maleNames[4]);
  }
  else if (Math.floor(result) == 5 || Math.floor(result) == -5 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on" + days[5] + "your Akan Name is " + maleNames[5]);
    }
  else if (Math.floor(result) == 6 || Math.floor(result) == -6 && gender === 'male') {
    document.getElementById("final").innerHTML = ("You were born on"+days[6] + "your Akan Name is " + maleNames[6]);
  }
  else if (Math.floor(result) == 0 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on" + days[0] + "your Akan Name is " + maleNames[0]);
  }
  else if (Math.floor(result) == 1 || Math.floor(result) == -1 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on" + days[0] + "your Akan Name is " + maleNames[0]);
  }
  else if (Math.floor(result) == 2 || Math.floor(result) == -2 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on" + days[2] + "your Akan Name is " + maleNames[2]);
  }
  else if (Math.floor(result) == 3 || Math.floor(result) == -3 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on" + days[3] + "your Akan Name is " + maleNames[3]);
  }
  else if (Math.floor(result) == 4 || Math.floor(result) == -4 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on" + days[4] + "your Akan Name is " + maleNames[4]);
  }
  else if (Math.floor(result) == 5 || Math.floor(result) == -5 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on" + days[5] + "your Akan Name is " + maleNames[5]);
  }
  else if (Math.floor(result) == 6 || Math.floor(result) == -6 && gender === 'female') {
    document.getElementById("final").innerHTML = ("You were born on" + days[6] + "your Akan Name is " + maleNames[6]);
  }
  else {
    alert("please input all data");
  }
}