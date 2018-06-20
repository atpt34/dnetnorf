
module('Type casting');

test('Converting to Number', function() {
  var convertedNumber = Number('42');
  var conversionShortcut = +'42'; // it is considered bad practice
  var conversionAttempt = Number('10 apples');

  equal(42, convertedNumber, 'What is the result of type casting?');
  equal(true, convertedNumber === conversionShortcut, 'Will conversion results match?');
  equal(true, isNaN(conversionAttempt), 'What happens when you attempt to convert a string that doesn\'t look like integer?');
});

test('parseInt() and parseFloat()', function() {
  var parsedNumber = parseInt('42');
  var parsedFromBeginning = parseInt('10 apples');
  var parsedFromEnd = parseInt('apples 10');
  var parsedFloat = parseFloat('5.2');

  equal(42, parsedNumber, 'What is the result of parsing?');
  equal(10, parsedFromBeginning, 'What is the result of parsing?');
  equal(true, isNaN(parsedFromEnd), 'What is the result of parsing?');
  equal(5.2, parsedFloat, 'What is the result of parsing?');
});

test('How booleans are converted to numbers', function() {
  equal(1, Number(true), 'What is the result of conversion?');
  equal(0, Number(false), 'What is the result of conversion?');
});

test('Converting to String', function() {
  var convertedString = String(42);
  var conversionShortcut = 42 + ''; // considered bad practice

  equal("42", convertedString, 'What is the result of type casting?');
  equal(true, convertedString === conversionShortcut, 'Will conversion results match?');
});

test('String representations', function() {
  equal("true", String(true), 'What is the result of type casting?');
  equal("[object Object]", String({}), 'What is the result of type casting?');

  // This uses .toString() method internally

  equal(true, String(true) == (true).toString(), 'Will conversion results match?');
});
