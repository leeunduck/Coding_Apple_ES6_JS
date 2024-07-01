/** rest parmeter problem **/
function arrayTest(...parameters) {
  console.log(parameters);
}

let newArray = arrayTest(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(newArray);
