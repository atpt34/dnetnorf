
module('null and undefined');

test('types', function() {
  equal("undefined", typeof undefined, 'What is the type of undefined?');
  equal("object", typeof null, 'What is the type of null?');
});

test('comparsion', function() {
  equal(true, null == undefined, 'Is null unstrictly equal to undefined?');
  equal(false, null === undefined, 'Is null unstrictly equal === to undefined?');
});
