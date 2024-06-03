let testObj = {
  names: ["김", "이", "박"],
  testFun: function () {
    testObj.names.forEach(() => {
      console.log(this);
    });
  },
};
testObj.testFun();
