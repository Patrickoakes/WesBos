//function doctorize(firstName) {
//return `Dr. ${firstName}`;
//}

//anonymous function below//
//function(firstName) {
//    return `Dr. ${firstName}`;
//    }
//BELOW DOESNT WORK as "DOCTORIZE " because it is a variable function hoisting puts a 
// function at the top
console.log(doctorize('Patrick'));
console.log(doctorize2('Patrick'));


// Function Expression WITHIN VARIABLE
//  const doctorize = function(firstName) {
//       return `Dr. ${firstName}`;
//       };
//Hoisting
//
//    function doctorize2(firstName) {
//    return `Dr. ${firstName}`;
//   }
        
    // start at 8.21 with function expression

    // Function Expression WITHIN VARIABLE
const doctorize = function(firstName) {
    return `Dr. ${firstName}`;
    };