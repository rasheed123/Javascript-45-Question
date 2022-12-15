// Question No 11
const friendsName = ["Ali", "Sohail","Zubair","Rasheed"];

let firstFriend = friendsName[0];
let secondFriend = friendsName[1];
let thirdFriend = friendsName[2];
let fourthFriend = friendsName[3];

console.log( "First Name " + firstFriend);
console.log( "2nd Name " + secondFriend);
console.log( "3rd Name " + thirdFriend);
console.log( "Fourth Name " + fourthFriend);

 /**
  * Question No 12
  */
 // Array friendsName Continue from question 11
let arrayLength = friendsName.length;
for( i = 0; i < arrayLength; i++ )
{
    console.log("Hello! " + friendsName[i]);
}
/**
 *  Question  No 13
 */
let bikeName = ["Royal Enfield Bullet","Bajaj Pulsar 150","Kawasaki Ninja"];
let myMessage1 = "I would like" + bikeName[0] + " for hiking";
let myMessage2 = "I would like "+bikeName[1]+ " for long drive";
// print message first 
console.log(myMessage1);
// print 2nd Message
console.log(myMessage2);

/**
 *  Question No 14
 */
let guestList = ["Shah Jee", "Zubar", "Abrar"];
// Display Guest Name one by one with Message
for (let i = 0; i < guestList.length; i++) {
    const guestMessage = guestList[i] + " we cordially invite you to join us for dinner....";
    console.log(guestMessage + "\n");
}

/**
 *  Question No 15
 */
// We Remove the third guest from list abs insert new name Rasheed
    let newGuestList = guestList.splice(1,1, "Rasheed");
    // Display Guest Name one by one with Message
for (let i = 0; i < guestList.length; i++) {
    const guestMessage = guestList[i] + " we cordially invite you to join us for dinner....";
    console.log(guestMessage + "\n");
}
