
module('Boolean logic');

test('Boolean literals', function() {
	var bool = "boolean";
  equal(bool , typeof true, 'What is the type of true?');
  equal(bool, typeof false, 'What is the type of false?');
});

test('Negation operator', function() {
  equal(false, !true, 'What happens when true is negated?');
  equal(true, !false, 'What happens when false is negated?');
});

test('Conjunction operator', function() {
  equal(false, false && false, 'What is the result of this expression?');
  equal(false, false && true, 'What is the result of this expression?');
  equal(true, true && true, 'What is the result of this expression?');
});

test('Disjunction operator', function() {
  equal(false, false || false, 'What is the result of this expression?');
  equal(true, false || true, 'What is the result of this expression?');
  equal(true, true || true, 'What is the result of this expression?');
});

test('Converting a value to boolean', function() {
  var convertedBoolean = Boolean('string');
  var conversionShortcut = !!'string;'

  var bool = "boolean";
  equal(bool, typeof convertedBoolean, 'What is the type of convertedBoolean?');
  equal(true, convertedBoolean === conversionShortcut, 'Are the results of different conversion methods equal?');
});

test('Truthiness and falseness', function() {
  equal(false, Boolean(0), 'Is 0 truthy?');
  equal(true, Boolean(42), 'Are positive numbers truthy?');
  equal(true, Boolean(-42), 'Are negative numbers truthy?');

  equal(false, Boolean(''), 'Is an empty string truthy?');
  equal(true, Boolean('string'), 'Is non-empty string truthy?');

  equal(false, Boolean(null), 'Is null truthy?');
  equal(false, Boolean(undefined), 'Is undefined truthy?');

  equal(true, Boolean([]), 'Is array truthy?');
  equal(true, Boolean({}), 'Is object truthy?');
});
