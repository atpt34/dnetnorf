module('Arrays');

test('Array literal syntax and indexing', function() {
  var favouriteThings = ['cellar door', 42, true]; // note that array elements do not have to be of the same type
  equal('cellar door', favouriteThings[0], 'What is in the first position of the array?');
  equal(42, favouriteThings[1], 'What is in the second position of the array?');
  equal(true, favouriteThings[2], 'What is in the third position of the array?');
});

test('Array type', function() {
  equal('object', typeof [], 'What is the type of an array?');
});

test('length', function() {
  var collection = ['a', 'b', 'c'];
  equal(3, collection.length, 'What is the length of the collection array?');
});

test('splice', function() {
  var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var workingWeek = daysOfWeek.splice(0, 5);
  deepEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].slice(0, 5), workingWeek, 'What is the value of workingWeek?');
  deepEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].slice(5), daysOfWeek, 'What is the value of daysOfWeek?');
});

test('Stack methods', function() {
  var stack = [];
  stack.push('first');
  stack.push('second');

  equal('second', stack.pop(), 'What will be the first value popped off the stack?');
  equal('first', stack.pop(), 'What will be the second value popped off the stack?');
});

test('Queue methods', function() {
  var queue = [];
  queue.push('first');
  queue.push('second');
  queue.unshift('third');

  equal('third', queue.shift(), 'What will be shifted out first?');
  equal('first', queue.shift(), 'What will be shifted out second?');
});
