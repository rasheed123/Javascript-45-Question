//Question No 2
let userName = "Muhammad Rasheed";
console.log("Hello" + userName +", would you like to learn some Javascript today");


// Question nNo 3
let userFullName = "Muhammad Rasheed";
// For Upper Case  
console.log( "Display Upper Case Name: " + userFullName.toUpperCase());
// For Lower Case 
console.log( "Display Upper Case Name: " + userFullName.toLowerCase());
// For Title Case
function changeToTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  let displayTitleCase = changeToTitleCase("Hello Muhammad Rasheed would you like to learn JAVASCRIPT today");
  console.log( displayTitleCase);
  // Question No 4
    console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');
  // Question No 5
  let personName = "Albert Einstein once said, ";
  let personMessage = '"A person who never made a mistake never tried anything new."';
  console.log( personName + personMessage);
