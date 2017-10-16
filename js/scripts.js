var input = prompt('Type in a sentence:');



var firstChar = function(input) {
  return input.charAt(0);
};

var lastChar = function(input) {
  return input.charAt(input.length-1);
};


var upperC = firstChar(input) + lastChar(input);

alert(upperC.toUpperCase());
