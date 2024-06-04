/** 문제 1번 **/
let personTest = {
  name: "손흥민",
  sayHi: function testFun() {
    console.log(`안녕 나는 ${this.name}`);
  },
};
personTest.sayHi();

/** 문제 2번 **/
let testDocument = {
  data: [1, 2, 3, 4, 5],
};

testDocument.allPlus = function () {
  let plus = 0;
  this.data.forEach(function (num) {
    plus = plus + num;
  });
  console.log(plus);
};

testDocument.allPlus();

/** 문제 3번 **/
document.getElementById("btn").addEventListener("click", function () {
  setTimeout(() => {
    console.log(this.innerHTML);
  }, 1000);
});
