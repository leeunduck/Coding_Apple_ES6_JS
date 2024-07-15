function machine() {
  this.name = "Kim";
  this.age = 15;
}

machine.prototype.gender = "남";
let student1 = new machine();
let student2 = new machine();

console.log(student2.gender); //'남'이 출력됩니다
console.log(Array.prototype);
