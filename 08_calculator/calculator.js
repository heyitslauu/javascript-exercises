const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
  return x - y
};

const sum = function(arr) {
	let sum = 0;
  for(i = 0 ; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum;
};

const multiply = function(arr) {
  return arr.reduce((a,b) => a * b)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(n) {
	if(n === 0) {return 1};

  let product = 1;
  for(i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
