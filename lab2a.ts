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

// console.log(days[0]);

// html elements
let pTodayDate = document.getElementById("p--today-date");
let buttonBirthday = document.getElementById("button--birthday");
let pBirthdayMessage =  document.getElementById("p--birthday-message");
let inputDatePicker = document.getElementById("input--date-picker");

// today as a date
let today : Date = new Date();
// console.log(today);

// console.log(today.getMonth());

// using back ticks to remove conflicts between single and double quotes.
// using ${} you can use instead of +.
pTodayDate.innerHTML = `today is ${days[today.getDay()]} ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;

// // // // // // // // // // // // // // // // // // // // // // // // // // // 
// Lab- Part two
// // // // // // // // // // // // // // // // // // // // // // // // // // // 
 buttonBirthday.onclick = function(){
    //  get birthday from tag
     let userBDay : string = inputDatePicker.value;
     let userBdate: Date = new Date(userBDay);
     console.log(userBDay);
     console.log(userBdate);

     pBirthdayMessage.innerHTML = makeDateString(userBdate);

};



function makeDateString(inputDate : Date) : string{
    // if today is user's birthday
    // console.log(inputDate);
    console.log(inputDate.getDate());
    console.log(inputDate.getMonth()); 
    console.log(today.getDate());
    console.log(today.getMonth()); 
    if(
        (inputDate.getDate()+1 === today.getDate())
        &&
        (inputDate.getMonth()=== today.getMonth())
){
       
    return `Happy Birthday!`;
}
    
    // today is not their birthday
    let thisYearsBirthday = new Date();
    thisYearsBirthday.setDate(inputDate.getDate() );
    thisYearsBirthday.setFullYear(today.getFullYear() );
    thisYearsBirthday.setMonth(inputDate.getMonth() );
    return `Your birthday is ${days[thisYearsBirthday.getDay()]} ${months[inputDate.getMonth()]} ${inputDate.getDate()}, ${today.getFullYear()}`
}




