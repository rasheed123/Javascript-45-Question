/**
 * Question No 16 
 */
 let guestList = ["Shah Jee", "Zubar", "Abrar"];
 // add Rasheed at the first Element to array
 guestList.unshift("Rasheed");
 // Add Imran at third position
  guestList.splice(2,0, "Imran");
 // Add New guest at the end.
 let newGuestList = guestList.push("Aizaz");

 // Display Guest Name one by one with Message
for (let i = 0; i < guestList.length; i++) {
 const guestMessage = guestList[i] + " we cordially invite you to join us for dinner....";
 console.log(guestMessage + "\n");
}
/**
 *  Question No 17
 */
let guestList17 = ["Shah Jee", "Zubar", "Abrar", "Imran", "Zahir", "Ahid"];
// Display Guest Name they are not invite for Dinner
for (let i = -2; i < guestList17.length; i++) {
    const guestMessage = guestList17.pop() + " we're sorry you can’t invite them to dinner.";
    console.log(guestMessage + "\n");
    
   }
// Only Two  Guest Name Display they are not invite for Dinner
// they are still invite
   for (let i = 0; i < guestList17.length; i++) {
    const guestMessage = guestList[i] + " we cordially invite you to join us for dinner....";
    console.log(guestMessage + "\n");
   }
   guestList17.length = 0;
   // empty List of Array
   console.log(guestList17);

   /**
    *  Question No 18 
    */

  const desirePlaces = ["The Grand Canyon","Colosseum Rome","Amalfi Italy","Angkor Wat","Pyramids of Giza","Babur Garde"
   ];
   // Print Orignal Array
   console.log(...desirePlaces );
   console.log("\n");
   // Print Array at Alphabetical Sort Order
    let sortPlaces = desirePlaces.sort();
   console.log(...sortPlaces);

   // Print Orignal Array
   console.log(...desirePlaces );
   console.log("\n");
// Print in Reverse Order 
let reversePlaces = desirePlaces.reverse();
console.log(...reversePlaces);
console.log("\n");

/**
 *  Question No 19
 */

// guestList17 = ["Shah Jee", "Zubar", "Abrar", "Imran", "Zahir", "Ahid"]; array from question no 17
guestList19 = ["Shah Jee", "Zubar", "Abrar", "Imran", "Zahir", "Ahid"];
let totalGuest = guestList19.length;
console.log(totalGuest);
let displayMessage = "Total Number of Guest Invite for Dinner are " + totalGuest;
console.log(displayMessage);
 
/**
 *  Question No 20 
 */
let riverOfWorld = ["Argun River", "Chambeshi River", "Rio de la Plata", " Irtysh River"];
for (let i = 0; i < riverOfWorld.length; i++) {
    const listRiver = riverOfWorld[i];
    j = i+1;
    console.log("No " + j +" "+ listRiver);
    
}







