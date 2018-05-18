// enums
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
var months;
(function (months) {
    months[months["January"] = 0] = "January";
    months[months["February"] = 1] = "February";
    months[months["March"] = 2] = "March";
    months[months["April"] = 3] = "April";
    months[months["May"] = 4] = "May";
    months[months["June"] = 5] = "June";
    months[months["July"] = 6] = "July";
    months[months["August"] = 7] = "August";
    months[months["September"] = 8] = "September";
    months[months["October"] = 9] = "October";
    months[months["November"] = 10] = "November";
    months[months["December"] = 11] = "December";
})(months || (months = {}));
// you can define enums with arbituary values. 
var earthPhysics;
(function (earthPhysics) {
    earthPhysics[earthPhysics["gravity"] = 9.81] = "gravity";
    earthPhysics[earthPhysics["c"] = Math.pow(3.88, 8)] = "c";
    earthPhysics[earthPhysics["weight"] = 1] = "weight";
})(earthPhysics || (earthPhysics = {}));
console.log(days[0]);
// html elements
var pTodayDate = document.getElementById("p--today-date");
// today as a date
var today = new Date();
console.log(today);
console.log(today.getMonth());
// using back ticks to remove conflicts between single and double quotes.
// using ${} you can use instead of +.
pTodayDate.innerHTML = "today is " + days[today.getDay()] + " " + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
