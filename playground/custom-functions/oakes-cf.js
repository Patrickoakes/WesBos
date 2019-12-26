// Function Definition
/* function calculateBill() {
  // this is function body
  console.log('Running Calculate Bill!!!!');
  const total = 100 * 1.13;
  //  console.log(Math.round(total));
  // BUT DO THIS INSIDE FUNCTION
  return total;
}

// Function CALL or RUN
// USED WITH console.log in FUNCTION calculateBill();

// SCOPE ISSUE/////console.log(total); ERROR
// BUT LOOK IN FUNCTION WITH "RETURN"

// NEED TO CAPTURE RESULT OF FUNCTION IN VARIABLE

const myTotal = calculateBill();
// console.log(myTotal);
// console.log(`Your Total is $${myTotal}`);

console.log(`Your total is $${calculateBill()}`); 

// /////PARAMETERS AND ARGUMENTS/////
// MESSINESS !!!! BUT WORKS
*/

/*let bill = 100;
const taxRate = 0.13;

function calculateBill() {
  // this is function body
  console.log('Running Calculate Bill!!!!');
  const total = bill * 1 + taxRate;
  //  console.log(Math.round(total));
  // BUT DO THIS INSIDE FUNCTION
  return total;
}

// Function CALL or RUN
// USED WITH console.log in FUNCTION calculateBill();

// SCOPE ISSUE/////console.log(total); ERROR
// BUT LOOK IN FUNCTION WITH "RETURN"

// NEED TO CAPTURE RESULT OF FUNCTION IN VARIABLE

const myTotal = calculateBill();
bill = 200;
const myTotal2 = calculateBill();
console.log(myTotal, myTotal2); */

// ///CLEAN UP OR DRY CODE

// PARAMETERS INSTEAD/// PARAMETERS

function calculateBill(billAmount, taxRate) {
  console.log(Math.round(billAmount, Math.round(taxRate)));
  // this is function body
  console.log('Running Calculate Bill!!!!');
  const total = billAmount * (1 + taxRate);
  return total;
}

// Function CALL or RUN
/*let myTotal = calculateBill(100, 0.13);
// /ARGUMENTS ARE IN PARENTHESES HERE BELOW AND ABOVE
 const myTotal2 = calculateBill(200, 0.13);
 console.log(Math.round(myTotal), Math.round(myTotal2)); */


const oakesTotal = 500;
const oakesTaxRate = 0.3;
let myTotal = calculateBill(oakesTotal, oakesTaxRate);
//
//function sayHiTo() {
//  return `Hello ${firstName}`;
//}
//
//const greeting 
