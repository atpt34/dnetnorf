
module('About Asserts');

// Following functions are specific to qunit, test framework used in this task

test('ok', function() {
  ok(true === true, 'What will satisfy the ok assertion?');
});

test('not ok', function() {
  ok(!true === false, 'What is a false value?');  
  ok(false === false, 'What is a false value?');
});

test('equal', function() {
  equal(2, 1 + 1, 'What will satisfy the equal assertion?');
});

test('deepEqual', function() {
  // deepEqual compares objects and arrays
  deepEqual(new Array(1, 2, 3), [1, 2, 3], 'What will satisfy the deepEqual assertion?');
  deepEqual({a: 1, b: { c: 3}}, {a: 1, b: { c: 3}}, 'What will satisfy the deepEqual assertion?');
});
