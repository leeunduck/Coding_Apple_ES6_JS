/** constructor 함수 만들기 **/
function Machine(personName, personAge) {
  this.name = personName;
  this.age = personAge;
  this.sayHi = function () {
    console.log(`안녕 나는 ${this.name}이야`);
  };
}

let student1 = new Machine("Kim", 20);
let student2 = new Machine("Park", 21);
let student3 = new Machine("Lee", 22);

student1.sayHi();

console.log(student1);
console.log(student2);
console.log(student3);

/** __proto__ **/
function Parent() {
  this.name = "Kim";
}
var a = new Parent();

a.__proto__.name = "Park";
console.log(a.name);

/** 3번 문제 **/
function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.sayHi = function () {
  // arrow function 금지
  console.log("안녕 나는 " + this.name + "이야");
};
let student4 = new Student("Kim", 20);

student4.sayHi(); //왜 이 코드가 제대로 안나오죠?

Student.prototype.sayHi = () => {
  console.log(this);
};

/** 4번 문제 **/
Array.prototype.remove3 = function () {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === 3) {
      this.splice(i, 1);
    }
  }
};

var arr = [1, 2, 3, 4];
arr.remove3();

console.log(arr); //[1,2,4]
