let primeModule = require("../kaprekars.js");
let chai = require('chai');
let should = chai.should();

describe("Kaprekars Constant", function () {

  it("for 3195 # of iterations should be 6", function () {
    let iterations = primeModule.kaprekarsConstant(3195);
    iterations.should.equal(6);
  });

  it("for 5143 # of iterations should be 7", function () {
    let iterations = primeModule.kaprekarsConstant(5143);
    iterations.should.equal(7);
  });

  it("for 23 # of iterations should be 5", function () {
    let iterations = primeModule.kaprekarsConstant(23);
    iterations.should.equal(5);
  });

  it("for 3333 # of iterations should be 'Must have at least 2 different digits'", function () {
    let iterations = primeModule.kaprekarsConstant(3333);
    iterations.should.equal('Must have at least 2 different digits');
  });
});