
module('Strings');

test('Literals', function() {
  var singleQuotedString = 'apple';
  var doubleQuotedString = "apple";

  equal(true, singleQuotedString === doubleQuotedString, 'Are the two strings equal?');
});

test('Concatenation', function() {
  var fruit = 'apple';
  var dish = 'pie';

  equal("apple pie", fruit + " " + dish, 'What is the value of fruit + " " + dish?');
});

test('Escape sequence', function() {
  var stringWithAnEscapedCharacter  = '\u0041pple';
  equal('Apple', stringWithAnEscapedCharacter, 'What is the value of stringWithAnEscapedCharacter?');
});

test('String length', function() {
  var fruit = 'apple';
  equal(5, fruit.length, 'What is the value of fruit.length?');
});

test('Slice', function() {
  var dish = 'apple pie';
  equal("apple", dish.slice(0,5), 'What is the value of fruit.slice(0,5)?');
});

test('Characters', function() {
  var fruit = 'apple';

  equal("a", fruit[0], 'What is the value of fruit[0]?');
  equal(true, fruit[0] == fruit.charAt(0), 'Are they equal?');
  equal("string", typeof fruit[0], 'Do single characters have a specific type?');
})
