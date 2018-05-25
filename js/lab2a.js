"use strict";
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
// console.log(days[0]);
// html elements
let pTodayDate = document.getElementById("p--today-date");
let buttonBirthday = document.getElementById("button--birthday");
let pBirthdayMessage = document.getElementById("p--birthday-message");
let inputDatePicker = document.getElementById("input--date-picker");
// today as a date
let today = new Date();
// console.log(today);
// console.log(today.getMonth());
// using back ticks to remove conflicts between single and double quotes.
// using ${} you can use instead of +.
pTodayDate.innerHTML = `today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
// // // // // // // // // // // // // // // // // // // // // // // // // // // 
// Lab- Part two
// // // // // // // // // // // // // // // // // // // // // // // // // // // 
buttonBirthday.onclick = function () {
    //  get birthday from tag
    let userBDay = inputDatePicker.value;
    let userBdate = new Date(userBDay);
    console.log(userBDay);
    console.log(userBdate);
    pBirthdayMessage.innerHTML = makeDateString(userBdate);
};
function makeDateString(inputDate) {
    // if today is user's birthday
    // console.log(inputDate);
    console.log(inputDate.getDate());
    console.log(inputDate.getMonth());
    console.log(today.getDate());
    console.log(today.getMonth());
    if ((inputDate.getDate() + 1 === today.getDate())
        &&
            (inputDate.getMonth() === today.getMonth())) {
        return `Happy Birthday!`;
    }
    // today is not their birthday
    let thisYearsBirthday = new Date();
    thisYearsBirthday.setDate(inputDate.getDate());
    thisYearsBirthday.setFullYear(today.getFullYear());
    thisYearsBirthday.setMonth(inputDate.getMonth());
    return `Your birthday is ${days[thisYearsBirthday.getDay()]} ${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${today.getFullYear()}`;
}
