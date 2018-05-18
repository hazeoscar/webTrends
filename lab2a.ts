// enums
enum days{
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}

// you can define enums with arbituary values. 

enum earthPhysics{
    gravity = 9.81,
    c = Math.pow(3.88,8),
    weight = 1
}

console.log(days[0]);

// html elements
let pTodayDate = document.getElementById("p--today-date");

// today as a date
let today : Date = new Date();
console.log(today);

console.log(today.getMonth());

// using back ticks to remove conflicts between single and double quotes.
// using ${} you can use instead of +.
pTodayDate.innerHTML = `today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;