
module('Types');

test('Main types', function() {
  // There are 5 main types in JavaScript
  // use typeof keyword to get the type of expression

  equal("number", typeof 1, 'What is the type of this expression?');
  equal("string", typeof 'string', 'What is the type of this expression?');
  equal("boolean", typeof true, 'What is the type of this expression?');
  equal("undefined", typeof undefined, 'What is the type of this expression?');
  equal("object", typeof {}, 'What is the type of this expression?');
});
