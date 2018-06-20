
module('Control Structures');

test('if', function() {
  var isPositive = false;
  if (2 > 0) {
    isPositive = true;
  }
  equal(true, isPositive,  'What is the value of isPositive?');
});

test('for', function() {
  var counter = 10;
  for (var i = 1; i <= 3; i++) {
    counter = counter + i;
  }
  equal(16, counter, 'What is the value of counter?');
});

test('for in', function() {
  var person = {
    name: 'Amory Blaine',
    age: 102
  };
  var result = '';
  // for in enumerates the property names of an object
  for (var property_name in person) {
      result = result + property_name;
  }
  equal("nameage", result, 'What is the value of result?');
});

test('ternary operator', function() {
  var fruit = true ? 'apple' : 'orange';
  equal('apple', fruit, 'What is the value of fruit?');

  fruit = false ? 'apple' : 'orange';
  equal('orange', fruit, 'Now what is the value of fruit?');
});

test('switch', function() {
  var result = 0;
  switch (2) {
    case 1:
      result = 1;
      break;
    case 1+1:
      result = 2;
      break;
  }
  equal(2, result, 'What is the value of result?');
});

test('switch default case', function() {
  var result = 'Pippin';
  switch ('m') {
    case 'f':
      result = 'Frodo';
      break;
    case 's':
      result = 'Samwise';
      break;
    default:
      result = 'Merry';
      break;
  }
  equal("Merry", result, 'What is the value of result?');
});

test('null coalescing', function() {
  var result = null || 'a value';
  equal('a value', result, 'What is the value of result?');
});
