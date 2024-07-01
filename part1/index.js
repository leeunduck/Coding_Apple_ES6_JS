/** rest parmeter problem **/
function arrayTest(...parameters) {
  console.log(parameters);
}

let newArray = arrayTest(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(newArray);

/** max problem **/
let numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
console.log(Math.max(...numbers));

/** sort problem **/
function sortTest(word) {
  console.log([...word].sort());
}

sortTest("bear");
