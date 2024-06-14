/** 문제 1번 **/
// 함수();
// function 함수() {
//   console.log(안녕);
//   let 안녕 = "Hello!";
// }

/** 문제 2번 **/
// 함수();
// var 함수 = function () {
//   console.log(안녕);
//   var 안녕 = "Hello!";
// };

/** 문제 3번 **/
// let a = 1;
// var 함수 = function () {
//   a = 2;
// };
// console.log(a);

/** 문제 4번 **/
// let a = 1;
// var b = 2;
// window.a = 3;
// window.b = 4;

// console.log(a + b);

/** 문제 5번 **/
// setTimeout(function () {
//   console.log(1);
// }, 1000);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// setTimeout(function () {
//   console.log(3);
// }, 3000);
// setTimeout(function () {
//   console.log(4);
// }, 4000);
// setTimeout(function () {
//   console.log(5);
// }, 5000);

for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

/** 문제 6번 **/
let buttons = document.querySelectorAll("button");
let modals = document.querySelectorAll("div");

for (let i = 0; i < 3; i++) {
  buttons[i].addEventListener("click", function () {
    modals[i].style.display = "block";
  });
}
