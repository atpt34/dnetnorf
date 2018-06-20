
module('Type coercion');

// Implicit conversion may happen under some circumstances:

test('Adding different types', function() {
  equal("42", '4' + 2, 'What is the result of adding number to string?');
  equal(true, ('4' + 2) === (4 + '2'), 'Does the order of types matter?');

  equal(42, 41 + true, 'What will the result be?');
});

test('Subtracting different types', function() {
  equal(2, '4' - 2, 'What is the result of subtracting number from string?');
  equal(true, ('4' - 2) === (4 - '2'), 'Does the order of types matter?');

  equal(true, isNaN('10 apples' - 10), 'Will the number be parsed correctly?');

  equal(41, 41 - false, 'What will the result be?');
});

test('Comparing different types', function() {
  equal(true, 2 == '2', 'What is the result of comparsion?');
  equal(false, 2 === '2', 'What is the result of strict comparsion?');
});
