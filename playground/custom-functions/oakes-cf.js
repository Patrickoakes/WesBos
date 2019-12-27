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

function calculateBill(billAmount, taxRate = .13, tipRate = 0.15) {
 // console.log(billAmount, taxRate);
  // this is function body
  console.log('Running Calculate Bill!!!!');
  const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
  return total;
}

// Function CALL or RUN
/*let myTotal = calculateBill(100, 0.13);
// /ARGUMENTS ARE IN PARENTHESES HERE BELOW AND ABOVE
 const myTotal2 = calculateBill(200, 0.13);
 console.log(Math.round(myTotal), Math.round(myTotal2)); */


const oakesTotal = 500;
const oakesTaxRate = 0.3;
//let myTotal = calculateBill(oakesTotal, oakesTaxRate);

//AGAIN FUNCTION DEFINTION//
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

//const greeting = sayHiTo(`Patrick`);
//console.log(greeting);

//function PARAMETERS are NOT variables they can be reused
function doctorize(name){ 
return `Dr. ${name}`;
}

//function will have default holder
function yell(name = `Silly Goose`) {
return `HEY ${name.toUpperCase()}`;
  }



/*
//PASSING EXPRESSIONS
const kait = 100; 
//const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15); works!!! This is before Kait
const myTotal3 = calculateBill(kait + 50, 0.15);
*/

const myBill4 = calculateBill(100, undefined ,0.2);
console.log(myBill4);