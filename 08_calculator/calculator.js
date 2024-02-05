const add = function(num1,num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let add = 0;
	array.forEach(element => {
    add += element;
  });
  return add;
};

const multiply = function(array) {
  let prod = 1;
	array.forEach(element => {
    prod *= element;
  });
  return prod;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num1) {
  let fact = 1;

	for(num1 ; num1 > 0 ; num1--){
    fact *= num1;
  }

  return fact;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
