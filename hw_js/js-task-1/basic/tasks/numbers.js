
module('Numbers');

test('Math operators', function() {
  var a = 10, b = 2;

  equal(12, (a + b), 'Use + to add numbers');

  equal(8, (a - b), 'Use - to subtract');

  equal(20, (a * b), 'Use * to multiply');

  equal(5, (a / b), 'Use / to divide');

  equal(0, (a % b), 'Use % (modulo) to get remainder of the division');
});

test('Math assignment shortcuts', function() {
  var a = b = 10;

  // Shortcut assignment are more concise
  // They are avalible for every math operator

  a = a + 5;
  b += 5;

  equal(true , a == b, 'Will a and b be equal?');
});

test('Floating-point numbers', function() {
  var a = 5, b = 5.0;

  equal(true, a == b, 'Will a and b be equal?');
  equal(true, (typeof a) == (typeof b), 'Do a and b have same type?');
});

test('Different bases', function() {
  var a = 15, b = 0xF;

  equal(true, a == b, 'Will a and b be equal?');
  equal(true, (typeof a) == (typeof b), 'Do a and b have same type?');
});

test('Division by zero', function() {
  var divisionByZero = 42 / 0;
  var negativeDivisionByZero = -42 / 0;

  equal(Infinity, divisionByZero, 'What happens when you divide by zero?');
  equal(-Infinity, negativeDivisionByZero, 'What if a negative number is divided?');
  equal("number", typeof divisionByZero, 'Is result still considered a number?');
});

test('Failed operations', function() {
  var divisionByString = 42 / 'apple';
  var anotherDivisionByString = 451 / 'farenheit';

  equal(true, isNaN(divisionByString), 'What happens when you attempt to divide by string?');
  equal("number", typeof divisionByString, 'Is result still considered a number?');
  equal(false, divisionByString == anotherDivisionByString, 'Are NaNs equal?');
  equal(false, NaN == NaN, 'Are NaNs equal2?');
  equal(false, NaN === NaN, 'Are NaNs equal3?');
  
});
