function testMachine(personName, productPrice) {
  this.name = personName;
  this.price = productPrice;
  this.VAT = function () {
    console.log(this.price * 0.1);
  };
}
let product1 = new testMachine("shirts", 50000);
let product2 = new testMachine("pants", 60000);
// console.log(`상품: ${product1.name} 가격: ${product1.price}`);
// console.log(`상품: ${product2.name} 가격: ${product2.price}`);
product1.VAT();
