//REGULAR FUNCTION

//function doctorize(firstName) {
//return `Dr. ${firstName}`;
//}

//ANONYMOUS function below//

//function(firstName) {
//    return `Dr. ${firstName}`;
//    }


//BELOW DOESNT WORK as "DOCTORIZE " because it is a variable function hoisting puts a 
// function at the top
// console.log(doctorize('Patrick'));
// console.log(doctorize2('Patrick'));


//FUNCTION EXPRESSION WITHIN VARIABLE

//  const doctorize = function(firstName) {
//       return `Dr. ${firstName}`;
//       };
//Hoisting
//
//    function doctorize2(firstName) {
//    return `Dr. ${firstName}`;
//   }
        ///FUNCTIONS GO STRAIGHT TO TOP OF JAVA,   VARIABLES DO NOT////

//ARROW FUNCTIONS :  NEWER LAST FEW YEARS NO SCOPE//
//ARROW FUNCTION ALWAYS ANONYMOUS MUST USE VARIABLE


//REGULAR FUNCTION

//function inchToCM(inches) {
//    const cm = inches * 2.54;
//    return cm;
//}

//ARROW FUNCTION 
// ONE PARAMETER OR ARGUMENT// NO PARENTHESES NEEDED

const inchToCM = inches =>  inches * 2.54;


/*REGULAR FUNCTION 
funtion add(a, b = 3) {
    const total = a + b;
    return total;
}             */


//ARROW CONVERSION 
//const add = (a, b = 3) => a + b;



//NEW EXAMPLE 
//function makeABaby(first, last) {
//const baby = {
//    name: `${first} ${last}`,
//    age: 0
//}
//return baby;
//}


//ARROW FUNCTION 
//const makeABaby = (first, last) =>  ({name: `${first} ${last}`,age: 0});
    

//IIFE
// Immediately Invoked Function Expression

// Doesn't WOrk below
// function() {
//    console.log(`Running the Anon function`);
//    return `You are cool`;
// }
 
// WORKS BELOW////        WOW  WITH  (); ending
//(function() {
//        console.log(`Running the Anon function`);
//        return `You are cool`;
//   })();


// METHODS METHODS METHODS
// A FUNCTION THAT LIVES INSIDE OF AN OBJECT 

// console =  Object
// log     =  function
//  console.log =  METHOD


const patrick = {
    name: 'Patrick Oakes',

    //METHOD
    sayHi: function(){
        console.log(`Hi Pat`);
        return 'Hey Patrick';
    },

    //SHORT HAND METHOD
yellHi(){
    console.log(`HEY PATRICKKKKKK`);
},

//ARROW FUNCTION
wisperHi:  () => {
    console.log(`hi patrickkkk im a mouse`);
}
}

// CALLBACK FUNCTIONS  
// Click Callback
//const button = document.querySelector(`.clickMe`);
//
//console.log(button);
//
//button.addEventListener(`click`, patrick.yellHi);
     
// CALLBACK FUNCTIONS  
// Click Callback
//    const button = document.querySelector('.clickMe');
//
//   function handleClick() {
//      console.log('Great Clicking!!');
//    }
//
//    button.addEventListener('click',handleClick);



// CALLBACK FUNCTIONS  
// Click Callback
const button = document.querySelector('.clickMe');

   function handleClick() {
      console.log('Great Clicking!!');
    }

    button.addEventListener('click', function(){
        console.log(`Nice Job!!!!`);
});


//times callback
//setTimeout(patrick.yellHi, 1000);


//times callback ANONYMOUS
setTimeout(function(){ 
    console.log(`DONE! Time to eat!`);
}, 1000);