
module('Varaibles');

test('Defining a variable', function() {
  var x; // define a variable named x

  equal(undefined, x, 'What is the default value for variable?');
});

test('Assignment operator', function() {
  var x = 5;

  equal(5, x, 'What value will variable x hold?');
});

test('Defining multiple variables', function() {
  var z, y = x = 5;

  equal(5, x, 'What value will variable x hold?');
  equal(5, y, 'What value will variable y hold?');
  equal(undefined, z, 'What value will variable z hold?');
});

test('Reassignment', function() {
  var x = 5;

  // You can freely reassign values to variables
  x = 10;

  equal(10, x, 'What value will variable x hold?');
});

test('Multiple assignment', function() {
  var x = 5, y = 10, z = 20;

  x = y = z = 42;

  equal(42, y, 'What value will variable y hold?');
  equal(true, x == y, 'Are all of the variables equal?');
  equal(true, y == z, 'Are all of the variables equal?');
});
